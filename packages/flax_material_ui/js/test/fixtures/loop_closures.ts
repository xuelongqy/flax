import { bind, signal } from '@flax/core';
import { Column, Text, ValueKey, runApp, type Widget } from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

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
