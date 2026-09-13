import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/canvas';
import {
  Column,
  FocusNode,
  HitTestBehavior,
  KeyboardListener,
  Listener,
  MouseRegion,
  Text,
  ValueKey,
  runApp,
} from '@flax/core/flutter';

const canvas = new OffscreenCanvas(40, 20);
const context = canvas.getContext('2d')!;
context.fillStyle = '#ff0000';
context.fillRect(0, 0, 20, 20);

const focus = FocusNode();
const hooks = {
  canvas,
  context,
  focus,
  events: [] as string[],
  keys: [] as string[],
  order: [] as string[],
};
Object.assign(globalThis, { canvasHooks: hooks });

runApp(
  KeyboardListener({
    focusNode: focus,
    autofocus: true,
    onKeyEvent: (event) => {
      hooks.keys.push(`${event.type}:${event.logicalKey.keyLabel}`);
    },
    child: Column({
      children: [
        Listener({
          key: ValueKey('left'),
          behavior: HitTestBehavior.opaque,
          onPointerDown: (event) => {
            hooks.events.push(`down:${event.pointer}`);
          },
          onPointerSignal: (event) => {
            if ('scrollDelta' in event) hooks.events.push('scroll');
          },
          child: MouseRegion({
            onEnter: () => {
              hooks.events.push('enter');
            },
            onExit: () => {
              hooks.events.push('exit');
            },
            child: CanvasView(canvas, {
              key: ValueKey('view-a'),
              width: 40,
              height: 20,
            }),
          }),
        }),
        CanvasView(canvas, { key: ValueKey('view-b'), width: 40, height: 20 }),
        Text('Canvas fixture'),
      ],
    }),
  }),
);
