import { computed, signal } from '@flax/core';
import {
  Column,
  CrossAxisAlignment,
  SizedBox,
  Text,
  Wrap,
  type Widget,
} from '@flax/flutter/widgets';
import { action, examplePage, section, text } from './ui';

export function createCoreExample(): Widget {
  const count = signal(0);
  const label = computed(() => `Count: ${count.value}`);
  const doubled = computed(() => `Doubled: ${count.value * 2}`);
  const message = signal('Change a value. Only the bound properties update.');

  return examplePage(
    'Core / signals & composition',
    'Small pieces. Real Flutter.',
    'Explore reactive values, computed state, native layout and JavaScript callbacks.',
    [
      section(
        'Signals & computed values',
        'One source of truth, two live views.',
        Column({
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label.bind),
            SizedBox({ height: 8 }),
            Text(doubled.bind),
            SizedBox({ height: 20 }),
            Wrap({
              spacing: 12,
              runSpacing: 12,
              children: [
                action('Increment JS', () => count.value++, 'core-increment'),
                action('Reset counter', () => (count.value = 0), 'core-reset'),
              ],
            }),
          ],
        }),
      ),
      section(
        'Native layout',
        'Rows, spacing and typography are Flutter widgets.',
        Wrap({
          spacing: 20,
          runSpacing: 12,
          children: [
            text('JS', 32, 'green', true),
            text('→', 28, 'muted'),
            text('Flutter', 32, 'green', true),
          ],
        }),
      ),
      section(
        'Callbacks',
        'Use the controls with a pointer or the keyboard.',
        Column({
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(message.bind),
            SizedBox({ height: 18 }),
            action(
              'Try a callback',
              () => (message.value = 'Callback received. The bridge is alive.'),
            ),
          ],
        }),
      ),
    ],
  );
}
