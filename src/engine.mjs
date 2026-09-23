const TOKEN_ALIASES = new Map([
  ['k', 'kubectl'],
  ['po', 'pod'],
  ['deploy', 'deployment'],
  ['svc', 'service'],
  ['ns', 'namespace'],
  ['cm', 'configmap'],
  ['cj', 'cronjob'],
]);

const FLAG_ALIASES = new Map([
  ['-n', '--namespace'],
  ['-o', '--output'],
  ['-l', '--selector'],
  ['-f', '--filename'],
  ['-A', '--all-namespaces'],
]);

export function emptyStore() {
  return { version: 1, attempts: [], sessions: [], reports: [] };
}

export function tokenizeCommand(input = '') {
  const matches = String(input).match(/"[^"]*"|'[^']*'|[^\s]+/g) || [];
  return matches.map((token) => token.replace(/^['"]|['"]$/g, ''));
}

export function normalizeCommand(input = '') {
  return tokenizeCommand(input).map((token) => {
    if (TOKEN_ALIASES.has(token)) return TOKEN_ALIASES.get(token);
    if (FLAG_ALIASES.has(token)) return FLAG_ALIASES.get(token);
    return token;
  });
}

function parseFlags(tokens) {
  const flags = new Map();
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (!token.startsWith('-')) continue;
    const [rawFlag, inlineValue] = token.split('=');
    const flag = FLAG_ALIASES.get(rawFlag) || rawFlag;
    const next = tokens[index + 1];
    const value = inlineValue ?? (next && !next.startsWith('-') ? next : true);
    flags.set(flag, String(value));
  }
  return flags;
}

function canonicalToken(token) {
  return TOKEN_ALIASES.get(token) || FLAG_ALIASES.get(token) || token;
}

export function evaluateCommand(question, input = '') {
  const tokens = normalizeCommand(input);
  const expected = question.expected || {};
  const missing = [];
  const wrong = [];
  for (const required of expected.mustInclude || []) {
    const wanted = canonicalToken(String(required));
    if (!tokens.includes(wanted)) missing.push(required);
  }
  for (const alternatives of expected.anyOf || []) {
    const matched = alternatives.some((alternative) => tokens.includes(canonicalToken(String(alternative))));
    if (!matched) missing.push(alternatives.join(' / '));
  }
  const flags = parseFlags(tokens);
  for (const [rawFlag, expectedValue] of Object.entries(expected.flags || {})) {
    const flag = FLAG_ALIASES.get(rawFlag) || rawFlag;
    const actual = flags.get(flag);
    if (actual === undefined) {
      missing.push(`${rawFlag}=${expectedValue}`);
    } else if (expectedValue !== null && String(actual) !== String(expectedValue)) {
      wrong.push({ flag: rawFlag, expected: String(expectedValue), actual });
    }
  }
  return { correct: missing.length === 0 && wrong.length === 0, normalized: tokens, missing, wrong };
}

function normalizeValue(value) {
  if (Array.isArray(value)) return value.map(normalizeValue);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => [key, normalizeValue(item)]));
  }
  return String(value ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
}

export function evaluateFields(question, values = {}) {
  const fields = (question.fields || []).map((field) => {
    const actual = values[field.path] ?? '';
    const expected = field.expected;
    const correct = JSON.stringify(normalizeValue(actual)) === JSON.stringify(normalizeValue(expected));
    return { path: field.path, actual, expected, correct };
  });
  return {
    correct: fields.every((field) => field.correct),
    fields,
    wrongFields: fields.filter((field) => !field.correct).map((field) => field.path),
  };
}

export function emptyAttemptId(sessionId, createdAt, count) {
  return `${sessionId || 'session'}-${createdAt}-${count}`;
}

export function recordAttempt(store, attempt) {
  const createdAt = attempt.createdAt || new Date().toISOString();
  const id = attempt.id || emptyAttemptId(attempt.sessionId, createdAt, store.attempts.length + 1);
  return { ...store, attempts: [...store.attempts, { ...attempt, id, createdAt }] };
}

export function summarizeSession(store, sessionId) {
  const attempts = store.attempts.filter((attempt) => attempt.sessionId === sessionId);
  const byMistake = new Map();
  for (const attempt of attempts) {
    if (attempt.correct) continue;
    const fields = attempt.wrongFields?.length ? attempt.wrongFields : ['command'];
    for (const field of fields) {
      const key = `${attempt.questionId}:${field}`;
      const previous = byMistake.get(key) || {
        questionId: attempt.questionId,
        category: attempt.category || 'general',
        field,
        count: 0,
        lastInput: attempt.input || '',
      };
      byMistake.set(key, { ...previous, count: previous.count + 1, lastInput: attempt.input || previous.lastInput });
    }
  }
  const mistakes = [...byMistake.values()].sort((a, b) => b.count - a.count || a.field.localeCompare(b.field));
  return {
    sessionId,
    totalAttempts: attempts.length,
    correctAttempts: attempts.filter((attempt) => attempt.correct).length,
    wrongAttempts: attempts.filter((attempt) => !attempt.correct).length,
    uniqueQuestions: new Set(attempts.map((attempt) => attempt.questionId)).size,
    mistakes,
  };
}

export function buildNextActions(summary) {
  if (!summary.mistakes.length) {
    return [{ priority: 'low', action: 'Giữ nhịp: chọn một mixed drill mới và làm lại không nhìn đáp án.' }];
  }
  return summary.mistakes.slice(0, 5).map((mistake) => {
    const lower = mistake.field.toLowerCase();
    let action = `Làm lại câu ${mistake.questionId} 3 lần, lần cuối không nhìn hint.`;
    if (lower.includes('selector') || lower.includes('label')) {
      action = 'Luyện 3 bài selector/label: đối chiếu spec.selector.matchLabels với template.metadata.labels.';
    } else if (lower.includes('template') || lower.includes('jobtemplate')) {
      action = 'Luyện 3 skeleton YAML và tự viết lại đường dẫn template từ trí nhớ.';
    } else if (lower.includes('namespace') || mistake.category === 'quick-config') {
      action = 'Luyện lại kubectl config: current-context, use-context, set-context và namespace.';
    } else if (lower.includes('jsonpath') || mistake.category === 'output') {
      action = 'Luyện 5 câu output: -o name, -o yaml, jsonpath range/end và sort-by.';
    } else if (mistake.category === 'option-catalog') {
      action = 'Gõ lại kubectl command với option này 3 lần: một lần dùng tên dài, một lần dùng alias ngắn nếu có, rồi đổi vị trí flag.';
    } else if (mistake.category === 'imperative') {
      action = 'Gõ lại command từ đề bài, đổi thứ tự flags, rồi sinh YAML bằng dry-run.';
    }
    return { priority: mistake.count >= 2 ? 'high' : 'medium', action, source: mistake };
  });
}

export function persistSession(store, summary) {
  return {
    ...store,
    reports: [...store.reports.filter((report) => report.sessionId !== summary.sessionId), {
      ...summary,
      actions: buildNextActions(summary),
      createdAt: new Date().toISOString(),
    }],
  };
}
