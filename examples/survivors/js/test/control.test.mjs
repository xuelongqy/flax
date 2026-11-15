import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { Controls, FixedClock } from '../src/control.ts';
import { readProfile } from '../src/profile.ts';
const c = new Controls();
c.key('space', true);
c.key('space', true);
assert.equal(c.consume().pulse, true);
assert.equal(c.consume().pulse, false);
c.key('space', false);
c.key('space', true);
assert.equal(c.consume().pulse, true);
c.key('w', true);
c.pointerDown(3, 10, 10);
c.pointerMove(3, 60, 10);
c.clear();
assert.deepEqual(c.consume(), { x: 0, y: 0, pulse: false });
c.pointerDown(1, 12, 20);
assert.deepEqual(c.joystick, { active: true, x: 0, y: 0, originX: 12, originY: 20 });
c.pointerMove(2, 50, 0);
assert.equal(c.consume().x, 0);
c.pointerMove(1, 62, 20);
assert.equal(c.consume().x, 1);
c.pointerUp(1);
assert.equal(c.consume().x, 0);
const clock = new FixedClock();
let steps = 0;
clock.advance(0, () => steps++);
clock.advance(1000, () => steps++);
assert.equal(steps, 3);
assert.ok(clock.discarded > 0.9);
clock.reset();
clock.advance(5000, () => steps++);
assert.equal(steps, 3);
const bad = readProfile('{"version":1,"music":9,"bestScore":-1}');
assert.equal(bad.profile.music, 0.5);
assert.equal(bad.profile.bestScore, 0);
assert.equal(readProfile('{"version":2,"music":0.1}').writable, false);
assert.equal(readProfile('garbage').writable, true);

for (const hz of [60, 90, 120, 144]) {
  const frameClock = new FixedClock();
  let draws = 0;
  let simulated = 0;
  for (let i = 0; i < hz * 60; i++) {
    const now = 1000 + (i * 1000) / hz;
    frameClock.advance(now, () => simulated++);
    if (frameClock.drawDue(now)) draws++;
  }
  assert.ok(
    draws >= 3600 && draws <= 3601,
    `60-second draw count at ${hz} Hz: ${draws} (at most one boundary draw)`,
  );
  assert.equal(simulated, 3599, `completed simulation steps at ${hz} Hz`);
}
const timing = new FixedClock();
for (let i = 0; i < 3600; i++) {
  let count = 0;
  timing.advance(1000 + (i * 1000) / 60, () => count++);
  assert.equal(count, i === 0 ? 0 : 1, `nominal step at callback ${i}`);
}
const drawClock = new FixedClock();
assert.equal(drawClock.drawDue(1000), true);
assert.equal(drawClock.drawDue(1001), false);
assert.equal(drawClock.drawDue(1030), true);
assert.equal(drawClock.drawDue(1030), false);
assert.equal(drawClock.drawDue(5000), true);
assert.equal(drawClock.drawDue(5000), false);
assert.equal(drawClock.drawDue(5001), false);
drawClock.reset();
assert.equal(drawClock.drawDue(5001), true);
assert.equal(drawClock.drawDue(5001), false);

for (const hz of [60, 59]) {
  for (const lateFirst of [false, true]) {
    test(`${hz} Hz drawing preserves callbacks with alternating ${lateFirst ? '4/0' : '0/4'} ms service delay`, () => {
      const clock = new FixedClock();
      let draws = 0;
      for (let i = 0; i < hz * 60; i++) {
        const delay = Boolean(i % 2) !== lateFirst ? 4 : 0;
        const now = 1000 + (i * 1000) / hz + delay;
        if (clock.drawDue(now)) draws++;
        assert.equal(clock.drawDue(now), false, `repeated callback ${i}`);
      }
      assert.equal(draws, hz * 60);
    });
  }
}
test('60 Hz drawing skips genuinely missing callbacks without accumulating catch-up draws', () => {
  const clock = new FixedClock();
  let draws = 0;
  for (let i = 0; i < 3600; i++) {
    if (i % 120 === 119) continue;
    const now = 1000 + (i * 1000) / 60 + (i % 2 ? 0 : 4);
    if (clock.drawDue(now)) draws++;
    assert.equal(clock.drawDue(now), false, `repeated callback ${i}`);
  }
  assert.equal(draws, 3570);
});
assert.equal(readProfile(null, true).profile.quality, 'detailed');
assert.equal(readProfile(null, false).profile.quality, 'balanced');
assert.equal(
  readProfile('{"version":1,"quality":"balanced"}', true).profile.quality,
  'balanced',
);
test('joystick ignores radial drift and reaches full speed within its thumb travel', () => {
  const stick = new Controls();
  stick.pointerDown(1, 20, 30);
  for (const [dx, dy] of [
    [0, 0],
    [3, 0],
    [0, -3],
    [1.8, 2.4],
  ]) {
    assert.equal(stick.pointerMove(1, 20 + dx, 30 + dy), false);
    assert.deepEqual(stick.consume(), { x: 0, y: 0, pulse: false });
  }
  assert.equal(stick.pointerMove(1, 23.000001, 30), true);
  const drift = stick.consume().x;
  assert.ok(drift > 0 && drift < 0.000001);
  assert.equal(stick.pointerMove(1, 32, 30), true);
  assert.ok(Math.abs(stick.consume().x - 0.673469387755102) < 1e-12);
  assert.equal(stick.pointerMove(1, 44, 30), true);
  assert.deepEqual(stick.consume(), { x: 1, y: 0, pulse: false });
  for (let i = 0; i < 120; i++) assert.equal(stick.pointerMove(1, 100 + i, 30), false);
  assert.equal(stick.pointerMove(1, 38, 54), true);
  assert.deepEqual(stick.consume(), { x: 0.6, y: 0.8, pulse: false });
  assert.equal(stick.pointerMove(1, 56, 78), false);
  assert.ok(Math.hypot(stick.joystick.x, stick.joystick.y) <= 1);
  assert.equal(stick.pointerMove(1, 20, 30), true);
  assert.deepEqual(stick.consume(), { x: 0, y: 0, pulse: false });
  assert.equal(stick.pointerMove(1, 20, 30), false);
});

test('joystick keeps one pointer owner and releases input without consuming pulse', () => {
  const stick = new Controls();
  assert.equal(stick.pointerDown(1, 20, 30), true);
  assert.equal(stick.pointerDown(2, 40, 30), false);
  assert.equal(stick.pointerMove(2, 100, 30), false);
  assert.equal(stick.pointerMove(1, 44, 30), true);
  assert.equal(stick.pointerUp(2), false);
  assert.equal(stick.joystick.x, 1);
  stick.skill();
  assert.equal(stick.pointerUp(1), true);
  assert.equal(stick.joystick.active, false);
  assert.deepEqual(stick.consume(), { x: 0, y: 0, pulse: true });
  assert.equal(stick.pointerDown(2, 40, 30), true);
  stick.pointerMove(2, 40, 6);
  stick.key('d', true);
  stick.skill();
  stick.clear();
  assert.equal(stick.held, 0);
  assert.equal(stick.joystick.active, false);
  assert.deepEqual(stick.consume(), { x: 0, y: 0, pulse: false });
  assert.equal(stick.pointerMove(2, 40, 30), false);
  stick.key('w', true);
  stick.key('d', true);
  const diagonal = stick.consume();
  assert.ok(Math.abs(diagonal.x - Math.SQRT1_2) < 1e-12);
  assert.ok(Math.abs(diagonal.y + Math.SQRT1_2) < 1e-12);
});
const oldProfile = readProfile('{"version":1,"bestScore":123,"wins":4,"music":0.2}');
assert.equal(oldProfile.profile.haptics, true);
assert.equal(oldProfile.profile.bestScore, 123);
assert.equal(oldProfile.profile.wins, 4);
assert.equal(readProfile('{"version":1,"haptics":false}').profile.haptics, false);
assert.equal(readProfile('{"version":1,"haptics":"no"}').profile.haptics, true);
assert.equal(readProfile('{"version":2,"haptics":false}').writable, false);
