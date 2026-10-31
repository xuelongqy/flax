import assert from 'node:assert/strict';
import test from 'node:test';
import { frameSummary } from '../src/metrics.ts';
test('FPS uses actual accepted submissions and GPU notifications, including warmup work completed inside the window', () => {
  const result = frameSummary(
    [
      { start: -5, encodedMs: 1, completed: 2 },
      { start: 10, encodedMs: 2, completed: 20 },
      { start: 30, encodedMs: 3, completed: 110 },
    ],
    0,
    100,
    12,
    10,
  );
  assert.equal(result.submittedFps, 20);
  assert.equal(result.completedFps, 20);
  assert.equal(result.callbackFps, 120);
  assert.equal(result.submitted, 2);
  assert.equal(result.encodeMs.p50, 2);
  assert.equal(result.frameGapMs.p95, 20);
  assert.equal(result.completionMs.count, 2);
});
test('idle windows remain idle and invalid durations are rejected', () => {
  assert.equal(frameSummary([], 0, 1000, 0, 0).submittedFps, 0);
  assert.throws(() => frameSummary([], 5, 5, 0, 0), RangeError);
});
