import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { bind, signal } from '@flax/core';
import { Column, Text, runApp, type Widget } from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { TextButton } from '@flax/flutter/material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const children: Widget[] = [Text('Static', { key: StringKey('loop-static') })];
for (const index of [1, 2, 3]) {
  const count = signal(0);
  children.push(
    TextButton({
      key: StringKey(`loop-button-${index}`),
      onPressed: () => {
        count.value += index;
      },
      child: Text(`Add ${index}`),
    }),
    Text(
      bind(() => `Counter ${index}: ${count.value}`),
      { key: StringKey(`loop-label-${index}`) },
    ),
  );
}
runApp(Column({ key: StringKey('loop-root'), children }));
