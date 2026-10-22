import { signal } from '@flax/core';
import { Column, SingleChildScrollView, Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';
import { TextButton } from '@flax/material-ui';
import { resetCart } from '@flax/app/admin';
import { hostAppName } from '@flax/app/host';

const result = signal('manager ready · calls=0');
let calls = 0;
runApp(
  SingleChildScrollView({
    child: Column({
      spacing: 8,
      children: [
        TextButton({
          onPressed: () => {
            const price = resetCart();
            result.value = `manager calls=${++calls} price=${price.cents}`;
          },
          child: Text('Reset cart'),
        }),
        TextButton({
          onPressed: () => {
            result.value = `manager host=${hostAppName()} calls=${++calls}`;
          },
          child: Text('Host app name'),
        }),
        Text(result.bind, { textDirection: TextDirection.ltr }),
      ],
    }),
  }),
);
