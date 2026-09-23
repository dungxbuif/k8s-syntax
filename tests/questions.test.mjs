import test from 'node:test';
import assert from 'node:assert/strict';
import { questions } from '../src/questions.mjs';

test('question bank has unique ids and source-backed questions', () => {
  const ids = questions.map((question) => question.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(questions.length >= 20);
  for (const question of questions) {
    assert.ok(['command', 'fields'].includes(question.mode));
    assert.ok(question.source.startsWith('https://'));
    assert.ok(question.explanation.length > 20);
    if (question.mode === 'command') assert.ok(question.expected);
    if (question.mode === 'fields') assert.ok(question.fields.length > 0);
  }
});
