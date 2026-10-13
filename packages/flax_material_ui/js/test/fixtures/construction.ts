import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { bind, signal } from '@flax/core';
import { Builder, Column, Text, runApp } from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { TextButton } from '@flax/flutter/material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const count = signal(0);
const callback = signal<(() => void) | null>(() => count.value++);
Object.assign(globalThis, { construction: { count, callback } });
const content = Column({
  key: StringKey('content'),
  children: [
    Text('Static', { key: StringKey('static') }),
    Text(
      bind(() => `Count: ${count.value}`),
      { key: StringKey('count') },
    ),
    TextButton({
      key: StringKey('button'),
      onPressed: callback.bind,
      child: Text('Increment'),
    }),
    Builder({
      key: StringKey('builder'),
      builder: () => {
        const local = signal(0);
        return TextButton({
          onPressed: () => local.value++,
          child: Text(bind(() => `Local: ${local.value}`)),
        });
      },
    }),
  ],
});
// A test host mounts the same Dart child Widget and descriptor twice.
runApp({ kind: 'widget', type: 'test:Duplicate', ctor: '', args: { child: content } });
