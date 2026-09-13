import type {} from '@flax/canvas/globals';
import { bind, signal } from '@flax/core';
import {
  Column,
  FocusNode,
  HitTestBehavior,
  KeyboardListener,
  Listener,
  MouseRegion,
  Row,
  Text,
  ValueKey,
  registerPage,
} from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';
import { CanvasView } from '@flax/canvas';

registerPage('canvas', (_, lifecycle) => {
  const canvas = new OffscreenCanvas(320, 180);
  const context = canvas.getContext('2d')!;
  const paused = signal(false);
  const display = signal(320);
  const status = signal('ready');
  const focus = FocusNode();
  lifecycle.onDispose(() => focus.dispose());
  const ball = { x: 40, y: 90, vx: 120, vy: 80 };
  const keys = { left: false, right: false, up: false, down: false };
  const gradient = context.createLinearGradient(0, 0, 320, 0);
  gradient.addColorStop(0, '#315cba');
  gradient.addColorStop(1, '#21a36c');
  const badge = new Path2D();
  badge.arc(40, 40, 18, 0, Math.PI * 2);
  let last = 0;
  let frame = 0;
  function draw(time: number) {
    frame = requestAnimationFrame(draw);
    if (paused.value) {
      last = time;
      return;
    }
    const dt = last === 0 ? 0 : Math.min(0.05, (time - last) / 1000);
    last = time;
    if (keys.left) ball.vx -= 400 * dt;
    if (keys.right) ball.vx += 400 * dt;
    if (keys.up) ball.vy -= 400 * dt;
    if (keys.down) ball.vy += 400 * dt;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    if (ball.x < 12 || ball.x > canvas.width - 12) ball.vx *= -1;
    if (ball.y < 12 || ball.y > canvas.height - 12) ball.vy *= -1;
    ball.x = Math.min(canvas.width - 12, Math.max(12, ball.x));
    ball.y = Math.min(canvas.height - 12, Math.max(12, ball.y));
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = gradient;
    context.fill(badge);
    context.fillStyle = '#222222';
    context.font = '12px sans-serif';
    context.fillText(status.value, 70, 28);
    context.fillStyle = '#d94b4b';
    context.beginPath();
    context.arc(ball.x, ball.y, 12, 0, Math.PI * 2);
    context.fill();
  }
  frame = requestAnimationFrame(draw);
  lifecycle.onDispose(() => cancelAnimationFrame(frame));
  function toCanvas(dx: number, dy: number) {
    const width = display.value;
    const height = width * (180 / 320);
    return { x: (dx / width) * canvas.width, y: (dy / height) * canvas.height };
  }
  const view = (name: string) =>
    Listener({
      key: ValueKey(name),
      behavior: HitTestBehavior.opaque,
      onPointerDown: (event) => {
        const point = toCanvas(event.localPosition.dx, event.localPosition.dy);
        ball.x = point.x;
        ball.y = point.y;
        status.value = `down ${event.pointer}`;
      },
      onPointerMove: (event) => {
        status.value = `move ${event.localPosition.dx.toFixed(0)},${event.localPosition.dy.toFixed(0)}`;
      },
      onPointerSignal: (event) => {
        if ('scrollDelta' in event)
          ball.vy += (event as { scrollDelta: { dy: number } }).scrollDelta.dy;
      },
      child: MouseRegion({
        onEnter: () => {
          status.value = 'enter';
        },
        onExit: () => {
          status.value = 'exit';
        },
        child: CanvasView(canvas, { width: display.bind }),
      }),
    });
  return KeyboardListener({
    focusNode: focus,
    autofocus: true,
    onKeyEvent: (event) => {
      const down = event.type !== 'keyup';
      const label = event.logicalKey.keyLabel;
      if (label === 'Arrow Left') keys.left = down;
      if (label === 'Arrow Right') keys.right = down;
      if (label === 'Arrow Up') keys.up = down;
      if (label === 'Arrow Down') keys.down = down;
    },
    child: Column({
      children: [
        Text(bind(() => `Canvas · ${status.value}`)),
        Row({ children: [view('left'), view('right')] }),
        Row({
          children: [
            TextButton({
              child: Text(bind(() => (paused.value ? 'Resume' : 'Pause'))),
              onPressed: () => {
                paused.value = !paused.value;
                last = 0;
              },
            }),
            TextButton({
              child: Text('Display 240'),
              onPressed: () => {
                display.value = 240;
              },
            }),
            TextButton({
              child: Text('Reset pixels'),
              onPressed: () => {
                canvas.width = 320;
                canvas.height = 180;
                ball.x = 40;
                ball.y = 90;
                status.value = 'reset';
              },
            }),
          ],
        }),
      ],
    }),
  });
});
