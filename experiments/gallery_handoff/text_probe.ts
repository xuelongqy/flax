import { text } from '@flax/example-core/ui';
import { Color } from '@flax/dart/ui';
import { Column, runApp } from '@flax/flutter/widgets';

runApp(
  Column({ children: [text('Implicit'), text('Explicit', 15, Color(0xff010203))] }),
);
