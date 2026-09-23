import test from 'node:test';
import assert from 'node:assert/strict';
import { KUBECTL_VERSION, GLOBAL_OPTIONS, COMMAND_OPTIONS, TOP_LEVEL_COMMANDS } from '../src/kubectl-catalog.mjs';

test('catalog snapshots the complete kubectl v1.36.1 global option set', () => {
  assert.equal(KUBECTL_VERSION, 'v1.36.1');
  assert.equal(GLOBAL_OPTIONS.length, 30);
  assert.ok(GLOBAL_OPTIONS.some((item) => item.flag.startsWith('--kubeconfig')));
  assert.ok(GLOBAL_OPTIONS.some((item) => item.flag.startsWith('-n, --namespace')));
  assert.ok(GLOBAL_OPTIONS.some((item) => item.flag.startsWith('--warnings-as-errors')));
  assert.ok(!GLOBAL_OPTIONS.some((item) => item.flag.includes('/Users/')));
});

test('catalog includes every top-level command and command-specific flags', () => {
  for (const command of TOP_LEVEL_COMMANDS) assert.ok(Object.hasOwn(COMMAND_OPTIONS, command), command);
  assert.ok(COMMAND_OPTIONS.get.some((item) => item.flag.includes('--all-namespaces')));
  assert.ok(COMMAND_OPTIONS.run.some((item) => item.flag.includes('--command')));
  assert.ok(COMMAND_OPTIONS.apply.some((item) => item.flag.includes('--server-side')));
  assert.ok(COMMAND_OPTIONS['config set-context'].some((item) => item.flag.includes('--namespace')));
});
