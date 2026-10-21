import { signal } from '@flax/core';
import { Column, SingleChildScrollView, Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';
import { TextButton } from '@flax/material-ui';

const result = signal('forbidden ready · attempts=0');
let attempts = 0;

async function tryReset() {
  const attempt = ++attempts;
  try {
    const { resetCart } = await import('@flax/app/admin');
    const price = resetCart();
    result.value = `Unexpected success (attempt ${attempt}): price=${price.cents}`;
  } catch (error) {
    result.value = `Blocked (attempt ${attempt}): ${String(error)}`;
  }
}

runApp(
  SingleChildScrollView({
    child: Column({
      spacing: 8,
      children: [
        TextButton({
          onPressed: () => {
            void tryReset();
          },
          child: Text('Try internal API'),
        }),
        Text(result.bind, { textDirection: TextDirection.ltr }),
      ],
    }),
  }),
);
