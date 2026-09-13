import { bind, signal } from '@flax/core';
import {
  Column,
  ScrollController,
  SingleChildScrollView,
  SizedBox,
  Text,
  ValueKey,
  registerPage,
} from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

registerPage('scroll', (_, lifecycle) => {
  let controller = ScrollController();
  const selected = signal(controller);
  const offset = signal(0);
  const updateOffset = () => {
    offset.value = controller.offset;
  };
  controller.addListener(updateOffset);
  lifecycle.onDispose(() => controller.dispose());
  lifecycle.onDispose(() => controller.removeListener(updateOffset));

  return Column({
    spacing: 8,
    children: [
      Text(
        bind(() => `Scroll offset: ${offset.value.toFixed(0)}`),
        {
          key: ValueKey('scroll-offset'),
        },
      ),
      TextButton({
        child: Text('Back to top'),
        onPressed: () => controller.jumpTo(0),
      }),
      TextButton({
        child: Text('Replace controller'),
        onPressed: () => {
          const previous = controller;
          const next = ScrollController();
          next.addListener(updateOffset);
          previous.removeListener(updateOffset);
          controller = next;
          selected.value = next;
          offset.value = 0;
          previous.dispose();
        },
      }),
      SizedBox({
        height: 260,
        child: SingleChildScrollView({
          controller: selected.bind,
          primary: false,
          child: Column({
            children: Array.from({ length: 30 }, (_, index) =>
              SizedBox({ height: 36, child: Text(`Scrollable row ${index + 1}`) }),
            ),
          }),
        }),
      }),
      Text('This static text does not rebuild while scrolling.'),
    ],
  });
});
