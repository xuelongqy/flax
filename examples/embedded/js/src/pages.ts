import './canvas.js';
import './storage.js';
import './components.js';
import './scaffold.js';
import './lazy_list.js';
import './layout.js';
import './focus.js';
import './scroll.js';
import './text_editing.js';
import './styles.js';
import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Navigator,
  PageContent,
  SizedBox,
  Text,
  ValueKey,
  registerPage,
  type Page,
} from '@flax/core/flutter';
import { MaterialPage, MaterialPageRoute, TextButton } from '@flax/material-ui';

registerPage('orderDetails', (params) => {
  const count = signal(0);
  const order = () => params.value as { orderId: string; filter: string };
  return Column({
    children: [
      Text(bind(() => `Order ${order().orderId} · ${order().filter}`)),
      Text(bind(() => `Order count: ${count.value}`)),
      TextButton({ onPressed: () => count.value++, child: Text('Increment order') }),
      Builder({
        builder: (context) =>
          Column({
            children: [
              TextButton({
                child: Text('Push order overlay'),
                onPressed: async () => {
                  await Navigator.of(context).push(
                    MaterialPageRoute({
                      builder: (overlayContext) =>
                        TextButton({
                          child: Text('Close order overlay'),
                          onPressed: () =>
                            Navigator.of(overlayContext).pop({ accepted: true }),
                        }),
                    }),
                  );
                },
              }),
              TextButton({
                child: Text('Return order'),
                onPressed: () =>
                  Navigator.of(context).maybePop({
                    orderId: order().orderId,
                    count: count.value,
                  }),
              }),
            ],
          }),
      }),
    ],
  });
});

registerPage('pageStack', () => {
  let serial = 0;
  const result = signal('No Page result');
  function page(id: number, filter = 'all') {
    return MaterialPage({
      key: ValueKey(id),
      name: `/orders/${id}`,
      child: PageContent('orderDetails', { arguments: { orderId: `${id}`, filter } }),
      onPopInvoked: (didPop, value) => {
        if (didPop) result.value = `Page result: ${JSON.stringify(value)}`;
      },
    });
  }
  const pages = signal<readonly Page[]>([page(serial)]);
  return Column({
    children: [
      Text('JS declarative Pages'),
      Text(result.bind),
      TextButton({
        child: Text('Add JS Page'),
        onPressed: () => {
          pages.value = [...pages.value, page(++serial)];
        },
      }),
      TextButton({
        child: Text('Update JS Page'),
        onPressed: () => {
          const id = (pages.value[pages.value.length - 1]!.key as ValueKey)
            .value as number;
          pages.value = [...pages.value.slice(0, -1), page(id, 'recent')];
        },
      }),
      TextButton({
        child: Text('Remove JS Page'),
        onPressed: () => {
          if (pages.value.length > 1) pages.value = pages.value.slice(0, -1);
        },
      }),
      SizedBox({
        height: 300,
        child: Navigator({
          pages: pages.bind,
          onDidRemovePage: (removed) => {
            pages.value = pages.value.filter(
              (item) =>
                (item.key as ValueKey).value !== (removed.key as ValueKey).value,
            );
          },
        }),
      }),
    ],
  });
});
