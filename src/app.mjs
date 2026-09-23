import {
  evaluateCommand,
  evaluateFields,
  recordAttempt,
  summarizeSession,
  buildNextActions,
  emptyStore,
  persistSession,
} from './engine.mjs';
import { questions, quickConfig, DOCS } from './questions.mjs';
import { KUBECTL_VERSION, GLOBAL_OPTIONS, COMMAND_OPTIONS, TOP_LEVEL_COMMANDS, NESTED_COMMANDS } from './kubectl-catalog.mjs';

const STORE_KEY = 'k8s-syntax-v1';
const screen = document.querySelector('#screen');
const statusEl = document.querySelector('#session-status');
const state = { view: 'dashboard', currentQuestionId: null, answered: [], lastResult: null, filter: 'all', catalogQuery: '', catalogCommand: 'all' };

const SOURCES = [
  ['kubectl Quick Reference', DOCS.quick],
  ['Imperative Commands', DOCS.imperative],
  ['kubectl config', DOCS.config],
  ['kubectl explain', DOCS.explain],
  ['JSONPath Support', DOCS.jsonpath],
  ['Imperative Configuration', DOCS.declarative],
];

function esc(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character];
  });
}

function loadStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || '');
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.attempts)) throw new Error('invalid');
    return Object.assign(emptyStore(), parsed);
  } catch {
    return Object.assign(emptyStore(), { currentSessionId: null });
  }
}

let store = loadStore();
if (!('currentSessionId' in store)) store.currentSessionId = null;

function saveStore() {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function activeSessionId() {
  return store.currentSessionId;
}

function activeSession() {
  return store.sessions.find(function (session) { return session.id === activeSessionId(); });
}

function questionById(id) {
  return questions.find(function (question) { return question.id === id; });
}

function pickQuestion() {
  const available = questions.filter(function (question) {
    return (state.filter === 'all' || question.category === state.filter) && !state.answered.includes(question.id);
  });
  const pool = available.length ? available : questions.filter(function (question) {
    return state.filter === 'all' || question.category === state.filter;
  });
  return [...pool].sort(function (a, b) {
    const wrongA = store.attempts.filter(function (attempt) { return attempt.questionId === a.id && !attempt.correct; }).length;
    const wrongB = store.attempts.filter(function (attempt) { return attempt.questionId === b.id && !attempt.correct; }).length;
    return wrongB - wrongA || a.difficulty - b.difficulty;
  })[0] || questions[0];
}

function currentQuestion() {
  return questionById(state.currentQuestionId) || pickQuestion();
}

function sessionSummary() {
  if (activeSessionId()) return summarizeSession(store, activeSessionId());
  return store.reports[store.reports.length - 1] || { totalAttempts: 0, correctAttempts: 0, wrongAttempts: 0, uniqueQuestions: 0, mistakes: [], sessionId: null };
}

function startSession() {
  const id = 'session-' + Date.now();
  store.sessions.push({ id: id, startedAt: new Date().toISOString() });
  store.currentSessionId = id;
  state.answered = [];
  state.currentQuestionId = null;
  state.lastResult = null;
  saveStore();
  state.view = 'drill';
  render();
}

function endSession() {
  if (!activeSessionId()) {
    state.view = 'mistakes';
    render();
    return;
  }
  const summary = summarizeSession(store, activeSessionId());
  store = persistSession(store, summary);
  store.currentSessionId = null;
  state.lastResult = { summary: summary, ended: true };
  saveStore();
  state.view = 'mistakes';
  render();
}

function submitCurrentQuestion() {
  const question = currentQuestion();
  if (!question || !activeSessionId()) return;
  let evaluation;
  let input;
  let wrongFields = [];
  if (question.mode === 'command') {
    input = document.querySelector('#command-answer').value;
    evaluation = evaluateCommand(question, input);
    wrongFields = evaluation.missing.concat(evaluation.wrong.map(function (item) { return item.flag; }));
  } else {
    input = {};
    document.querySelectorAll('[data-field-path]').forEach(function (element) {
      input[element.dataset.fieldPath] = element.value;
    });
    evaluation = evaluateFields(question, input);
    wrongFields = evaluation.wrongFields;
  }
  store = recordAttempt(store, {
    sessionId: activeSessionId(),
    questionId: question.id,
    category: question.category,
    correct: evaluation.correct,
    wrongFields: wrongFields,
    input: input,
  });
  state.lastResult = { questionId: question.id, evaluation: evaluation, input: input };
  saveStore();
  render();
}

function nextQuestion() {
  state.answered = state.answered.concat([currentQuestion().id]);
  state.currentQuestionId = null;
  state.lastResult = null;
  render();
}

function exportReport() {
  const summary = sessionSummary();
  const actions = buildNextActions(summary);
  const lines = [
    '# K8s Syntax — Mistake Report',
    '',
    '- Session: ' + (summary.sessionId || 'latest'),
    '- Attempts: ' + summary.totalAttempts,
    '- Correct: ' + summary.correctAttempts,
    '- Wrong: ' + summary.wrongAttempts,
    '',
    '## Repeated mistakes',
  ];
  if (summary.mistakes.length) {
    summary.mistakes.forEach(function (mistake) {
      lines.push('- ' + mistake.questionId + ' — ' + mistake.field + ' (' + mistake.count + ' lần)');
    });
  } else {
    lines.push('- Không có lỗi được ghi nhận.');
  }
  lines.push('', '## Next-session actions');
  actions.forEach(function (item) { lines.push('- [' + item.priority + '] ' + item.action); });
  const blob = new Blob([lines.join('\\n')], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'k8s-syntax-mistake-report.md';
  anchor.click();
  URL.revokeObjectURL(url);
}

function updateStatus() {
  const session = activeSession();
  if (session) {
    statusEl.textContent = 'Đang luyện · ' + store.attempts.filter(function (attempt) { return attempt.sessionId === session.id; }).length + ' attempts';
    statusEl.classList.add('live');
  } else {
    statusEl.textContent = 'Chưa bắt đầu';
    statusEl.classList.remove('live');
  }
}

function render() {
  updateStatus();
  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.classList.toggle('active', item.dataset.view === state.view);
  });
  if (state.view === 'dashboard') renderDashboard();
  if (state.view === 'drill') renderDrill();
  if (state.view === 'quick-config') renderQuickConfig();
  if (state.view === 'mistakes') renderMistakes();
  if (state.view === 'sources') renderSources();
}

function renderDashboard() {
  const summary = sessionSummary();
  const latest = store.reports[store.reports.length - 1];
  const startText = activeSessionId() ? 'Tiếp tục buổi luyện' : 'Bắt đầu ngay';
  const latestHtml = latest
    ? '<p>' + esc(new Date(latest.createdAt).toLocaleString('vi-VN')) + '</p><p>' + latest.wrongAttempts + ' lỗi cần replay.</p>'
    : '<p class="muted">Chưa có report. Bắt đầu một session để ghi dữ liệu.</p>';
  screen.innerHTML =
    '<div class="page-heading"><div><p class="eyebrow">TODAY&apos;S WORKBENCH</p><h2>K8s syntax practice, không setup cluster</h2><p>Gõ command, điền field, xem giải thích và lưu lỗi cho buổi sau.</p></div><button class="button primary" id="dashboard-start">' + startText + '</button></div>' +
    '<div class="card-grid"><div class="card"><div class="metric">Attempts</div><div class="metric-value">' + summary.totalAttempts + '</div></div><div class="card"><div class="metric">Correct</div><div class="metric-value">' + summary.correctAttempts + '</div></div><div class="card"><div class="metric">Wrong</div><div class="metric-value">' + summary.wrongAttempts + '</div></div><div class="card"><div class="metric">Questions</div><div class="metric-value">' + summary.uniqueQuestions + '</div></div></div>' +
    '<div class="two-col"><section class="card"><h3>Cách luyện</h3><ol class="list"><li>Chọn bài, tự gõ trước khi xem hint.</li><li>Submit để chấm command hoặc từng field YAML.</li><li>Lỗi được giữ lại, không bị ghi đè khi làm lại.</li><li>Kết thúc buổi để nhận actions cho buổi kế tiếp.</li></ol></section><section class="card"><h3>Buổi gần nhất</h3>' + latestHtml + '</section></div>';
  document.querySelector('#dashboard-start').addEventListener('click', function () {
    if (!activeSessionId()) startSession();
    else { state.view = 'drill'; render(); }
  });
}

function renderDrill() {
  if (!activeSessionId()) {
    screen.innerHTML = '<div class="empty"><h2>Chưa có buổi luyện</h2><p>Bấm “Bắt đầu buổi” để bắt đầu lưu attempts.</p><button class="button primary" id="empty-start">Bắt đầu</button></div>';
    document.querySelector('#empty-start').addEventListener('click', startSession);
    return;
  }
  const question = currentQuestion();
  state.currentQuestionId = question.id;
  const last = state.lastResult && state.lastResult.questionId === question.id ? state.lastResult : null;
  const draft = last ? last.input : {};
  const categoryLabels = { all: 'Tất cả', 'quick-config': 'Quick config', imperative: 'Imperative', 'yaml-fields': 'YAML fields', output: 'Output', 'option-catalog': 'Mọi kubectl options' };
  const categoryButtons = ['all', 'quick-config', 'imperative', 'yaml-fields', 'output', 'option-catalog'].map(function (category) {
    return '<button class="button ' + (state.filter === category ? 'active' : '') + '" data-filter="' + category + '">' + categoryLabels[category] + '</button>';
  }).join('');
  let form;
  if (question.mode === 'command') {
    form = '<label class="field-label" for="command-answer">Command của bạn</label><textarea id="command-answer" class="command-input" autofocus placeholder="kubectl ...">' + esc(typeof draft === 'string' ? draft : '') + '</textarea>';
  } else {
    form = '<div class="field-list">' + question.fields.map(function (field) {
      return '<div class="field-row"><div><span class="field-label">' + esc(field.label) + '</span><span class="field-path">' + esc(field.path) + '</span></div><input class="field-input" data-field-path="' + esc(field.path) + '" value="' + esc(draft[field.path] || '') + '" placeholder="Giá trị field"></div>';
    }).join('') + '</div>';
  }
  const tags = question.tags.map(function (tag) { return '<span class="tag">' + esc(tag) + '</span>'; }).join('');
  screen.innerHTML =
    '<div class="page-heading"><div><p class="eyebrow">QUESTION ' + (questions.findIndex(function (item) { return item.id === question.id; }) + 1) + ' / ' + questions.length + '</p><h2>' + (question.mode === 'command' ? 'Command drill' : 'YAML field drill') + '</h2><p>' + esc(question.category) + ' · difficulty ' + question.difficulty + '</p></div><div class="filter-row">' + categoryButtons + '</div></div>' +
    '<section class="card question-card"><div class="question-meta"><span class="mode-pill">' + question.mode + '</span>' + tags + '</div><p class="prompt">' + esc(question.prompt) + '</p>' + form + '<div class="form-actions"><button class="button primary" id="submit-answer">Submit</button><button class="button" id="next-answer">Bỏ qua / bài tiếp</button></div>' + renderResultHtml(question) + '</section>';
  document.querySelectorAll('[data-filter]').forEach(function (button) {
    button.addEventListener('click', function () {
      state.filter = button.dataset.filter;
      state.currentQuestionId = null;
      state.lastResult = null;
      render();
    });
  });
  document.querySelector('#submit-answer').addEventListener('click', submitCurrentQuestion);
  document.querySelector('#next-answer').addEventListener('click', nextQuestion);
}

function renderResultHtml(question) {
  const last = state.lastResult;
  if (!last || last.questionId !== question.id) return '';
  const result = last.evaluation;
  const bad = !result.correct;
  let details;
  if (question.mode === 'command') {
    const missing = result.missing.length ? '<li>Thiếu: ' + esc(result.missing.join(', ')) + '</li>' : '';
    const wrong = result.wrong.length ? '<li>Sai value: ' + esc(result.wrong.map(function (item) { return item.flag + ' = ' + item.actual + ', cần ' + item.expected; }).join('; ')) + '</li>' : '';
    details = '<ul>' + (missing || wrong ? missing + wrong : '<li>Command đủ token và flags yêu cầu.</li>') + '</ul>';
  } else {
    details = '<ul>' + result.fields.map(function (field) {
      return '<li>' + (field.correct ? '✓ ' : '✗ ') + esc(field.path) + (field.correct ? '' : ' — cần ' + esc(field.expected)) + '</li>';
    }).join('') + '</ul>';
  }
  return '<div class="result ' + (bad ? 'bad' : 'good') + '"><strong>' + (bad ? 'Chưa đúng — lỗi đã được lưu.' : 'Đúng — có thể làm lại để tăng phản xạ.') + '</strong>' + details + '<div class="explanation"><strong>Vì sao:</strong> ' + esc(question.explanation) + '<br><a href="' + esc(question.source) + '" target="_blank" rel="noreferrer">Mở nguồn chính thống</a></div><div class="form-actions"><button class="button" id="next-after-result">Bài tiếp theo</button></div></div>';
}

function renderQuickConfig() {
  const configRows = quickConfig.map(function (item) {
    return '<div class="config-row"><div><strong>' + esc(item.title) + '</strong><p class="small">' + esc(item.note) + '</p></div><code class="code">' + esc(item.code) + '</code></div>';
  }).join('');
  const commandChoices = ['all'].concat(['global'], TOP_LEVEL_COMMANDS, NESTED_COMMANDS).map(function (command) {
    const label = command === 'all' ? 'Tất cả options' : command === 'global' ? 'Global options' : 'kubectl ' + command;
    return '<option value="' + esc(command) + '"' + (state.catalogCommand === command ? ' selected' : '') + '>' + esc(label) + '</option>';
  }).join('');
  screen.innerHTML = '<div class="page-heading"><div><p class="eyebrow">REFERENCE + DRILL</p><h2>Quick config & toàn bộ options</h2><p>Catalog được sinh từ <code>kubectl ' + esc(KUBECTL_VERSION) + ' --help</code>. Dùng search để tra flag trước khi tự gõ.</p></div></div><div class="two-col"><section class="card"><h3>Quick config</h3>' + configRows + '</section><section class="card"><h3>Catalog coverage</h3><p class="small">' + GLOBAL_OPTIONS.length + ' global options · ' + Object.keys(COMMAND_OPTIONS).length + ' command help entries · có cả alias ngắn/dài và nested command.</p><p class="small">Khi nâng version kubectl, regenerate snapshot để tránh lệch syntax.</p><a href="' + esc(DOCS.quick) + '" target="_blank" rel="noreferrer">Đối chiếu Kubernetes docs</a></section></div><section class="card catalog-card"><div class="catalog-toolbar"><input id="catalog-search" class="field-input" value="' + esc(state.catalogQuery) + '" placeholder="Tìm flag, command hoặc mô tả..."><select id="catalog-command" class="field-input">' + commandChoices + '</select></div><div id="catalog-results">' + renderCatalogResults() + '</div></section>';
  document.querySelector('#catalog-search').addEventListener('input', function (event) {
    state.catalogQuery = event.target.value;
    document.querySelector('#catalog-results').innerHTML = renderCatalogResults();
  });
  document.querySelector('#catalog-command').addEventListener('change', function (event) {
    state.catalogCommand = event.target.value;
    document.querySelector('#catalog-results').innerHTML = renderCatalogResults();
  });
}

function renderCatalogResults() {
  const query = state.catalogQuery.trim().toLowerCase();
  const selected = state.catalogCommand;
  const groups = [];
  if (selected === 'all' || selected === 'global') groups.push({ name: 'Global options', options: GLOBAL_OPTIONS, command: 'kubectl' });
  Object.keys(COMMAND_OPTIONS).forEach(function (command) {
    if (selected !== 'all' && selected !== command) return;
    if (!COMMAND_OPTIONS[command].length) return;
    groups.push({ name: 'kubectl ' + command, options: COMMAND_OPTIONS[command], command: 'kubectl ' + command });
  });
  let total = 0;
  const html = groups.map(function (group) {
    const options = group.options.filter(function (item) {
      const haystack = (group.command + ' ' + item.flag + ' ' + item.description).toLowerCase();
      return !query || haystack.includes(query);
    });
    if (!options.length) return '';
    total += options.length;
    return '<section class="catalog-group"><h3>' + esc(group.name) + ' <span class="small">(' + options.length + ')</span></h3>' + options.map(function (item) {
      const names = item.flag.split(',').map(function (name) { return name.trim(); });
      const longName = names.find(function (name) { return name.startsWith('--'); }) || names[0];
      return '<div class="option-row"><div><code>' + esc(item.flag) + '</code><p class="small">' + esc(item.description) + '</p></div><code class="option-example">' + esc(group.command + ' ' + longName.split('=')[0]) + '</code></div>';
    }).join('') + '</section>';
  }).join('');
  return '<p class="small catalog-count">Hiển thị ' + total + ' options' + (query ? ' cho “' + esc(state.catalogQuery) + '”' : '') + '.</p>' + (html || '<div class="empty">Không tìm thấy option phù hợp.</div>');
}

function renderMistakes() {
  const summary = sessionSummary();
  const actions = buildNextActions(summary);
  const mistakes = summary.mistakes && summary.mistakes.length
    ? summary.mistakes.map(function (mistake) {
      return '<div class="question-row"><div><strong>' + esc(mistake.questionId) + '</strong><p class="small">' + esc(mistake.field) + ' · ' + mistake.count + ' lần sai</p></div><span class="tag">' + esc(mistake.category) + '</span></div>';
    }).join('')
    : '<div class="empty">Chưa có lỗi được lưu trong session gần nhất.</div>';
  const actionHtml = actions.map(function (item) { return '<div class="action ' + item.priority + '">' + esc(item.action) + '</div>'; }).join('');
  screen.innerHTML = '<div class="page-heading"><div><p class="eyebrow">END-OF-SESSION REPORT</p><h2>Mistakes & next actions</h2><p>Mỗi lỗi được giữ lại để buổi sau luyện đúng điểm yếu.</p></div><button class="button primary" id="export-report">Export Markdown</button></div><div class="card-grid"><div class="card"><div class="metric">Attempts</div><div class="metric-value">' + summary.totalAttempts + '</div></div><div class="card"><div class="metric">Correct</div><div class="metric-value">' + summary.correctAttempts + '</div></div><div class="card"><div class="metric">Wrong</div><div class="metric-value">' + summary.wrongAttempts + '</div></div><div class="card"><div class="metric">Repeated</div><div class="metric-value">' + summary.mistakes.filter(function (mistake) { return mistake.count > 1; }).length + '</div></div></div><div class="two-col"><section class="card"><h3>Lỗi theo câu/field</h3>' + mistakes + '</section><section class="card"><h3>Actions cho buổi sau</h3>' + actionHtml + '</section></div>';
  document.querySelector('#export-report').addEventListener('click', exportReport);
}

function renderSources() {
  const rows = SOURCES.map(function (source) {
    return '<div class="source-row"><strong>' + esc(source[0]) + '</strong><a href="' + esc(source[1]) + '" target="_blank" rel="noreferrer">Mở tài liệu</a></div>';
  }).join('');
  screen.innerHTML = '<div class="page-heading"><div><p class="eyebrow">OFFICIAL DOCS</p><h2>Nguồn học</h2><p>Question bank lưu source ở từng câu để xem giải thích ngay sau khi submit.</p></div></div><section class="card">' + rows + '</section>';
}

document.querySelector('#nav').addEventListener('click', function (event) {
  const button = event.target.closest('[data-view]');
  if (!button) return;
  state.view = button.dataset.view;
  render();
});
document.querySelector('#start-session').addEventListener('click', startSession);
document.querySelector('#end-session').addEventListener('click', endSession);
screen.addEventListener('click', function (event) {
  if (event.target.id === 'next-after-result') nextQuestion();
});
render();
