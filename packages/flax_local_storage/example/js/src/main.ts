import type {} from '@flax/local-storage/globals';
import { computed, signal } from '@flax/core';
import { Column, GestureDetector, runApp, Text } from '@flax/flutter/widgets';

const read = () => Number(localStorage.getItem('count') ?? '0');
const count = signal(read());
const label = computed(() => `Stored: ${count.value}`);

addEventListener('storage', (event) => {
  if (event.key === 'count' || event.key === null) count.value = read();
});

const increment = () => {
  const next = read() + 1;
  localStorage.setItem('count', String(next));
  count.value = next;
};

const clear = () => {
  localStorage.clear();
  count.value = 0;
};

runApp(
  Column({
    children: [
      Text(label.bind),
      GestureDetector({ onTap: increment, child: Text('Store +1') }),
      GestureDetector({ onTap: clear, child: Text('Clear area') }),
    ],
  }),
);
