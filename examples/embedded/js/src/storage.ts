import type {} from '@flax/local-storage/globals';
import { signal } from '@flax/core';
import { Column, Text, registerPage } from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

registerPage('storage', (_params, lifecycle) => {
  const label = signal(`Stored: ${localStorage.getItem('count') ?? '0'}`);
  const refresh = () => {
    label.value = `Stored: ${localStorage.getItem('count') ?? '0'}`;
  };
  addEventListener('storage', refresh);
  lifecycle.onDispose(() => removeEventListener('storage', refresh));
  return Column({
    children: [
      Text(label.bind),
      TextButton({
        child: Text('Store +1'),
        onPressed: () => {
          localStorage.setItem(
            'count',
            String(Number(localStorage.getItem('count') ?? 0) + 1),
          );
          refresh(); // The modifying session does not receive its own storage event.
        },
      }),
      TextButton({
        child: Text('Clear area'),
        onPressed: () => {
          localStorage.clear();
          refresh();
        },
      }),
    ],
  });
});
