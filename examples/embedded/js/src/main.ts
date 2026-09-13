import { signal, computed, bind, batch } from '@flax/core';
import {
  Column,
  Text,
  Padding,
  EdgeInsets,
  SizedBox,
  ValueKey,
  MainAxisSize,
  runApp,
  Builder,
  LayoutBuilder,
  Directionality,
  TextDirection,
} from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

const count = signal(0);
const visible = signal(true);
const items = signal([1, 2, 3]);
let nextItem = 4;
const label = computed(() => `Count: ${count.value}`);
const button = (title: string, onPressed: () => void) =>
  TextButton({ onPressed, child: Text(title) });

runApp(
  Builder({
    builder: (context) => {
      const direction = Directionality.of(context);
      return LayoutBuilder({
        builder: (_, constraints) =>
          Padding({
            padding: EdgeInsets.all(16),
            child: Column({
              mainAxisSize: MainAxisSize.min,
              spacing: 8,
              children: [
                Text(
                  direction === TextDirection.rtl ? 'Direction: RTL' : 'Direction: LTR',
                ),
                Text(constraints.maxWidth < 300 ? 'Layout: Compact' : 'Layout: Wide'),
                Text(label.bind, { key: ValueKey('count') }),
                button('Increment', () => count.value++),
                button('Batch +3', () =>
                  batch(() => {
                    count.value++;
                    count.value++;
                    count.value++;
                  }),
                ),
                button('Toggle detail', () => (visible.value = !visible.value)),
                SizedBox({
                  child: bind(() =>
                    visible.value
                      ? Text('Conditional detail', { key: ValueKey('detail') })
                      : null,
                  ),
                }),
                button('Add item', () => (items.value = [...items.value, nextItem++])),
                button('Remove item', () => (items.value = items.value.slice(0, -1))),
                button(
                  'Reverse items',
                  () => (items.value = [...items.value].reverse()),
                ),
                Column({
                  mainAxisSize: MainAxisSize.min,
                  children: bind(() =>
                    items.value.map((id) => Text(`Item ${id}`, { key: ValueKey(id) })),
                  ),
                }),
              ],
            }),
          }),
      });
    },
  }),
);
