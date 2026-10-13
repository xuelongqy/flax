import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { signal, bind, batch } from '@flax/core';
import {
  runApp,
  Text,
  Column,
  SizedBox,
  Row,
  MainAxisSize,
  Padding,
  EdgeInsets,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { TextButton } from '@flax/flutter/material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);
const IntKey = selectDartType(ValueKey, nativeTypes.int);

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
// Instrument the public observer contract without substituting the implementation.
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
const hooks = {
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
};
Object.assign(globalThis, { hooks });
runApp(
  Column({
    key: StringKey('root'),
    mainAxisSize: MainAxisSize.min,
    children: [
      Text(
        bind(() => {
          if (fail.value) throw Error('binding failed');
          return `Count: ${count.value}`;
        }),
        { key: StringKey('count') },
      ),
      Text('Static', { key: StringKey('static') }),
      TextButton({
        key: StringKey('button'),
        onPressed: callback.bind,
        child: Text('Increment'),
      }),
      SizedBox({
        key: StringKey('conditional'),
        child: bind(() =>
          visible.value
            ? variant.value
              ? Row({ key: StringKey('detail'), children: [Text('Other type')] })
              : Text(tracked, { key: StringKey(detailKey.value) })
            : null,
        ),
      }),
      Column({
        key: StringKey('list'),
        mainAxisSize: MainAxisSize.min,
        children: bind(() =>
          items.value.map((id) =>
            TextButton({
              key: keyed.value ? IntKey(id) : null,
              onPressed: () => {},
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
