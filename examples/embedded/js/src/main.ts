import { computed, signal } from '@flax/core';
import { Column, Text, ValueKey, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/flutter/material';

import { materialTextButton } from './shared_material';

if (materialTextButton !== TextButton) {
  throw new Error('Host-provided Material module was initialized more than once');
}

const count = signal(0);
const label = computed(() => `Count: ${count.value}`);

runApp(
  Column({
    spacing: 8,
    children: [
      Text('Host modules shared', { key: ValueKey('module-shared') }),
      Text(label.bind, { key: ValueKey('count') }),
      TextButton({
        onPressed: () => count.value++,
        child: Text('Increment JS'),
      }),
    ],
  }),
);
