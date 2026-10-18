import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { computed, signal } from '@flax/core';
import { Column, Text, ValueKey, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/material-ui';

import { materialTextButton } from './shared_material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

if (materialTextButton !== TextButton) {
  throw new Error('Host-provided Material module was initialized more than once');
}

const count = signal(0);
const label = computed(() => `Count: ${count.value}`);

runApp(
  Column({
    spacing: 8,
    children: [
      Text('Host modules shared', { key: StringKey('module-shared') }),
      Text(label.bind, { key: StringKey('count') }),
      TextButton({
        onPressed: () => count.value++,
        child: Text('Increment JS'),
      }),
    ],
  }),
);
