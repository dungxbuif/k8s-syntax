import test from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateCommand,
  evaluateFields,
  recordAttempt,
  summarizeSession,
  buildNextActions,
  emptyStore,
} from '../src/engine.mjs';

test('accepts k alias and flags in a different order', () => {
  const question = {
    category: 'imperative',
    expected: {
      mustInclude: ['kubectl', 'create', 'deployment', 'api'],
      flags: { '--image': 'nginx:alpine', '--dry-run': 'client', '--output': 'yaml' },
    },
  };
  const result = evaluateCommand(question, 'k create deploy api -o yaml --image=nginx:alpine --dry-run=client');
  assert.equal(result.correct, true);
});

test('reports a missing required flag instead of accepting an incomplete command', () => {
  const question = { expected: { mustInclude: ['kubectl', 'run', 'web'], flags: { '--image': 'nginx' } } };
  const result = evaluateCommand(question, 'kubectl run web');
  assert.equal(result.correct, false);
  assert.deepEqual(result.missing, ['--image=nginx']);
});

test('evaluates YAML fields independently', () => {
  const question = {
    fields: [
      { path: 'spec.selector.matchLabels.app', expected: 'web' },
      { path: 'spec.template.metadata.labels.app', expected: 'web' },
    ],
  };
  const result = evaluateFields(question, {
    'spec.selector.matchLabels.app': 'web',
    'spec.template.metadata.labels.app': 'api',
  });
  assert.equal(result.correct, false);
  assert.equal(result.fields[0].correct, true);
  assert.equal(result.fields[1].correct, false);
});

test('keeps wrong attempts and creates a next-session action', () => {
  let store = emptyStore();
  store = recordAttempt(store, {
    sessionId: 's1', questionId: 'service-selector', correct: false,
    wrongFields: ['spec.selector.app'], category: 'yaml-fields', input: 'api',
  });
  store = recordAttempt(store, {
    sessionId: 's1', questionId: 'service-selector', correct: false,
    wrongFields: ['spec.selector.app'], category: 'yaml-fields', input: 'api',
  });
  const summary = summarizeSession(store, 's1');
  const actions = buildNextActions(summary);
  assert.equal(summary.totalAttempts, 2);
  assert.equal(summary.wrongAttempts, 2);
  assert.match(actions[0].action, /selector/);
});
