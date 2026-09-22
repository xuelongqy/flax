import { bind, signal, batch } from '@flax/core';
import {
  runApp,
  Text,
  Column,
  SizedBox,
  Row,
  MainAxisSize,
  Padding,
  EdgeInsets,
  Listener,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';

const count = signal(0);
const visible = signal(true);
const items = signal([1, 2, 3]);
const variant = signal(false);
const detailKey = signal('detail');
const keyed = signal(true);
const fail = signal(false);
const callback = signal<(() => void) | null>(() => count.value++);
const padding = signal(4);
let active = 0;
let reads = 0;
const observed = bind(() => {
  reads++;
  return `Detail ${count.value}`;
});
const tracked = Object.freeze({
  ...observed,
  observe(token: number) {
    active++;
    const stop = observed.observe(token);
    return () => {
      active--;
      stop();
    };
  },
});
Object.assign(globalThis, {
  hooks: {
    count,
    visible,
    items,
    variant,
    fail,
    callback,
    padding,
    detailKey,
    keyed,
    get active() {
      return active;
    },
    get reads() {
      return reads;
    },
    batchWrite() {
      batch(() => {
        count.value = 10;
        count.value = 20;
        count.value = 30;
      });
    },
  },
});

runApp(
  Column({
    key: ValueKey('root'),
    mainAxisSize: MainAxisSize.min,
    children: [
      Text(
        bind(() => {
          if (fail.value) throw Error('binding failed');
          return `Count: ${count.value}`;
        }),
        { key: ValueKey('count') },
      ),
      Text('Static', { key: ValueKey('static') }),
      Listener({
        key: ValueKey('button'),
        onPointerDown: bind(() => {
          const current = callback.value;
          return current === null ? null : () => current();
        }),
        child: Text('Increment'),
      }),
      SizedBox({
        key: ValueKey('conditional'),
        child: bind(() =>
          visible.value
            ? variant.value
              ? Row({ key: ValueKey('detail'), children: [Text('Other type')] })
              : Text(tracked, { key: ValueKey(detailKey.value) })
            : null,
        ),
      }),
      Column({
        key: ValueKey('list'),
        mainAxisSize: MainAxisSize.min,
        children: bind(() =>
          items.value.map((id) =>
            Listener({
              key: keyed.value ? ValueKey(id) : null,
              onPointerDown: () => {},
              child: Text(`Item ${id}`),
            }),
          ),
        ),
      }),
      Padding({
        padding: bind(() => EdgeInsets.all(padding.value)),
        child: Text('Padded'),
      }),
    ],
  }),
);
