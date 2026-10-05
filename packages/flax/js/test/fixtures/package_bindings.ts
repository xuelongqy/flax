import {
  constructObject,
  defineObject,
  invokeObject,
  invokeTopLevel,
} from '@flax/core/bindings';
import { registerPage, Text } from '@flax/flutter/widgets';

const a = 'test.a/money#type:Money';
const b = 'test.b/money#type:Money';
const wrong = 'test.b/money#type:Wrong';
for (const [id, fields] of [
  [a, ['amount']],
  [b, ['doubled']],
  ['flax.core/money#type:Money', ['doubled']],
  ['test.d/money#type:Money', []],
  ['test.e/money#type:Money', []],
  [wrong, []],
  ['test.a/money#type:Box', []],
  ['test.b/money#type:Box', []],
] as const) {
  defineObject(
    id,
    [...fields, 'provider'],
    [],
    {
      echo(this: object, value: unknown) {
        return invokeObject(this, id, 'echo', [value]);
      },
      erased(this: object) {
        return invokeObject(this, id, 'erased', []);
      },
      items(this: object) {
        return invokeObject(this, id, 'items', []);
      },
      later(this: object) {
        return invokeObject(this, id, 'later', []);
      },
      callback(this: object) {
        return invokeObject(this, id, 'callback', []);
      },
      stream(this: object) {
        return invokeObject(this, id, 'stream', []);
      },
      addListener(this: object, listener: () => void) {
        return invokeObject(this, id, 'addListener', [listener]);
      },
      removeListener(this: object, listener: () => void) {
        return invokeObject(this, id, 'removeListener', [listener]);
      },
      notify(this: object) {
        return invokeObject(this, id, 'notify', []);
      },
      dispose(this: object) {
        return invokeObject(this, id, 'dispose', []);
      },
    },
    [],
  );
}
Object.assign(globalThis, {
  moneyHooks: {
    erased: () => invokeTopLevel('test.c/functions#function:erased', []),
    typed: () => invokeTopLevel('test.c/functions#function:typed', []),
    createA: () => constructObject('object', a, '', [], [], {}),
    createB: () => constructObject('object', b, '', [], [], {}),
    createWrong: () => constructObject('object', wrong, '', [], [], {}),
    createIntBox: () =>
      constructObject('object', 'test.a/money#type:Box', '', [], [], {}),
    createStringBox: () =>
      constructObject('object', 'test.b/money#type:Box', '', [], [], {}),
  },
});
registerPage('package-bindings', () => Text('package bindings'));
