import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateCommand } from '../src/engine.mjs';
import { questions } from '../src/questions.mjs';

test('every catalog option has a syntax drill and accepts short or long aliases', () => {
  const drills = questions.filter((question) => question.category === 'option-catalog');
  assert.ok(drills.length >= 900);
  const namespace = drills.find((question) => question.id.startsWith('option-global-namespace-'));
  assert.ok(namespace);
  assert.equal(evaluateCommand(namespace, 'kubectl -n').correct, true);
  assert.equal(evaluateCommand(namespace, 'kubectl --namespace').correct, true);
});
