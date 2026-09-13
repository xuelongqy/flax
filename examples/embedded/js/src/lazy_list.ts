import { bind, computed, signal } from '@flax/core';
import {
  Column,
  type Key,
  ListView,
  Row,
  ScrollController,
  SizedBox,
  Text,
  ValueKey,
  registerPage,
} from '@flax/core/flutter';
import { RefreshIndicator, TextButton } from '@flax/material-ui';

registerPage('lazy-list', (_, lifecycle) => {
  const controller = ScrollController();
  lifecycle.onDispose(() => controller.dispose());
  const rows = signal(Array.from({ length: 10000 }, (_, i) => i));
  const refreshes = signal(0);
  // Application data survives item unmounts; only visited rows need a counter.
  const counts = new Map<number, ReturnType<typeof signal<number>>>();
  let nextId = 10000;
  const button = (label: string, action: () => void) =>
    TextButton({ onPressed: action, child: Text(label) });
  return Column({
    children: [
      Text('Only viewport items are built'),
      Text(bind(() => `Items: ${rows.value.length}`)),
      Text(bind(() => `Refreshes: ${refreshes.value}`)),
      Row({
        children: [
          button('Add first', () => {
            rows.value = [nextId++, ...rows.value];
          }),
          button('Remove first', () => {
            rows.value = rows.value.slice(1);
          }),
          button('Swap first two', () => {
            const current = rows.value;
            if (current.length >= 2)
              rows.value = [current[1]!, current[0]!, ...current.slice(2)];
          }),
        ],
      }),
      button('Back to top', () => {
        if (controller.hasClients) controller.jumpTo(0);
      }),
      SizedBox({
        height: 320,
        width: 480,
        child: RefreshIndicator({
          onRefresh: async () => {
            await new Promise<void>((resolve) => setTimeout(resolve, 200));
            refreshes.value++;
          },
          child: ListView.builder({
            controller,
            itemExtent: 64,
            itemCount: computed(() => rows.value.length).bind,
            itemBuilder: bind(() => {
              const current = rows.value;
              return (_, index) => {
                const id = current[index]!;
                let count = counts.get(id);
                if (!count) {
                  count = signal(0);
                  counts.set(id, count);
                }
                const value = count;
                return TextButton({
                  key: ValueKey(id),
                  onPressed: () => value.value++,
                  child: Text(bind(() => `Item ${id}: ${value.value}`)),
                });
              };
            }),
            findChildIndexCallback: bind(() => {
              const indices = new Map(rows.value.map((id, index) => [id, index]));
              return (key: Key) =>
                indices.get((key as ValueKey).value as number) ?? null;
            }),
          }),
        }),
      }),
    ],
  });
});
