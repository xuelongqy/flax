import { bind, signal } from '@flax/core';
import { Column, Text, runApp, type Widget } from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { TextButton } from '@flax/flutter/material';

const children: Widget[] = [Text('Static', { key: ValueKey('loop-static') })];
for (const index of [1, 2, 3]) {
  const count = signal(0);
  children.push(
    TextButton({
      key: ValueKey(`loop-button-${index}`),
      onPressed: () => {
        count.value += index;
      },
      child: Text(`Add ${index}`),
    }),
    Text(
      bind(() => `Counter ${index}: ${count.value}`),
      { key: ValueKey(`loop-label-${index}`) },
    ),
  );
}
runApp(Column({ key: ValueKey('loop-root'), children }));
