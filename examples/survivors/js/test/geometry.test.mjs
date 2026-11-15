import { strict as assert } from 'node:assert';
import { viewport, backing } from '../src/geometry.ts';
for (const [w, h] of [
  [960, 540],
  [2280, 931],
  [800, 600],
  [800, 1000],
  [6400, 360],
  [640, 3600],
]) {
  const view = viewport(w, h);
  assert.ok(
    view.width > 0 && view.width <= 3200 && view.height > 0 && view.height <= 1800,
  );
  assert.ok(Math.abs(view.width / view.height - w / h) < 1e-9);
  for (const quality of ['balanced', 'detailed']) {
    const size = backing(w, h, 2, quality);
    const budget = quality === 'balanced' ? 960 * 540 : 1920 * 1080;
    assert.ok(
      size.width * size.height <= budget && Math.max(size.width, size.height) <= 1920,
    );
    assert.ok(size.width <= w * 2 && size.height <= h * 2);
    const limit = quality === 'balanced' ? 1 : 2;
    assert.ok(
      size.width <= Math.ceil(view.width * limit) &&
        size.height <= Math.ceil(view.height * limit),
    );
    const xScale = (size.width / view.width) * (w / size.width);
    const yScale = (size.height / view.height) * (h / size.height);
    assert.ok(Math.abs(xScale - yScale) < 1e-9);
  }
}

assert.deepEqual(backing(800, 1000, 2, 'detailed'), { width: 1287, height: 1609 });
assert.deepEqual(backing(829, 338, 2.75, 'balanced'), { width: 1127, height: 459 });
