import { bind, signal } from '@flax/core';
import { Builder, Column, Text, ValueKey, runApp } from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

const count = signal(0);
const callback = signal<(() => void) | null>(() => count.value++);
Object.assign(globalThis, { construction: { count, callback } });
const content = Column({
  key: ValueKey('content'),
  children: [
    Text('Static', { key: ValueKey('static') }),
    Text(
      bind(() => `Count: ${count.value}`),
      { key: ValueKey('count') },
    ),
    TextButton({
      key: ValueKey('button'),
      onPressed: callback.bind,
      child: Text('Increment'),
    }),
    Builder({
      key: ValueKey('builder'),
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
