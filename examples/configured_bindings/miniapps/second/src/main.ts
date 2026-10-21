import { signal } from '@flax/core';
import { Column, SingleChildScrollView, Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';
import { TextButton } from '@flax/material-ui';
import type { Money } from '@example/prices/api';
import { currentCart } from '@example/shop/api';

const cart = currentCart();
const unitPrice = cart.unitPrice.cents;
const live = signal('');
const result = signal(`${APP_NAME} ready · calls=0`);
let calls = 0;

function showQuantity(quantity: number) {
  live.value = `${APP_NAME} live quantity=${quantity} total=${quantity * unitPrice}`;
}

// The View session cancels this native subscription when it closes.
cart.quantities.listen(showQuantity, {
  onError: (error) => {
    live.value = `Subscription failed: ${String(error)}`;
  },
});
showQuantity(cart.quantity);

function addItem() {
  const amount: Money = cart.add(1);
  result.value = `${APP_NAME} calls=${++calls} added total=${amount.cents} days=${cart.delivery().days}`;
}

runApp(
  SingleChildScrollView({
    child: Column({
      spacing: 8,
      children: [
        TextButton({ onPressed: addItem, child: Text('Add item') }),
        Text(live.bind, { textDirection: TextDirection.ltr }),
        Text(result.bind, { textDirection: TextDirection.ltr }),
      ],
    }),
  }),
);

declare const APP_NAME: string;
