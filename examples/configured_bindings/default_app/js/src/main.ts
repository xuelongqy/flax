import { signal } from '@flax/core';
import { Column, GestureDetector, Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';
import { addItem, cartQuantity } from '@flax/app/app';

const quantity = signal(`Quantity: ${cartQuantity()}`);
runApp(
  Column({
    children: [
      Text(quantity.bind, { textDirection: TextDirection.ltr }),
      GestureDetector({
        onTap: () => {
          quantity.value = `Quantity: ${addItem()}`;
        },
        child: Text('Add item', { textDirection: TextDirection.ltr }),
      }),
    ],
  }),
);
