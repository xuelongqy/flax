import { bind, signal } from '@flax/core';
import {
  Column,
  Padding,
  EdgeInsets,
  Text,
  ValueKey,
  registerPage,
  FocusNode,
  TextEditingController,
  TextInputFormatter,
  FilteringTextInputFormatter,
  LengthLimitingTextInputFormatter,
} from '@flax/core/flutter';
import { TextButton, TextField } from '@flax/material-ui';

registerPage('focus', (_, lifecycle) => {
  let first = FocusNode({ debugLabel: 'first input' });
  const second = FocusNode({ debugLabel: 'second input' });
  const selected = signal(first);
  const status = signal('No focus');
  const update = () => {
    status.value = first.hasFocus
      ? 'First input'
      : second.hasFocus
        ? 'Second input'
        : 'No focus';
  };
  first.addListener(update);
  second.addListener(update);
  lifecycle.onDispose(() => first.dispose());
  lifecycle.onDispose(() => second.dispose());
  lifecycle.onDispose(() => first.removeListener(update));
  lifecycle.onDispose(() => second.removeListener(update));
  const controller = TextEditingController();
  lifecycle.onDispose(() => controller.dispose());
  const formatters = signal<TextInputFormatter[]>([
    FilteringTextInputFormatter.digitsOnly,
    LengthLimitingTextInputFormatter(4),
  ]);
  const custom = TextInputFormatter.withFunction((oldValue, newValue) => {
    if (!newValue.composing.isCollapsed) return newValue;
    return newValue.text.includes('!') ? oldValue : newValue;
  });
  const note = signal('Digits only, maximum four characters');
  return Padding({
    padding: EdgeInsets.all(16),
    child: Column({
      spacing: 8,
      children: [
        Text(note.bind),
        TextField({
          key: ValueKey('focus-first'),
          controller,
          focusNode: selected.bind,
          inputFormatters: formatters.bind,
        }),
        TextField({
          key: ValueKey('focus-second'),
          focusNode: second,
          inputFormatters: [custom],
        }),
        Text(bind(() => `Focused: ${status.value}`)),
        TextButton({
          child: Text('Focus first'),
          onPressed: () => first.requestFocus(),
        }),
        TextButton({
          child: Text('Focus second'),
          onPressed: () => second.requestFocus(),
        }),
        TextButton({
          child: Text('Replace focus node'),
          onPressed: () => {
            const previous = first;
            previous.removeListener(update);
            first = FocusNode({ debugLabel: 'replacement input' });
            first.addListener(update);
            selected.value = first;
            previous.dispose();
            update();
          },
        }),
        TextButton({
          child: Text('Use custom formatter'),
          onPressed: () => {
            formatters.value = [custom];
            note.value = 'Custom formatter rejects ! after composition';
          },
        }),
        Text('Static input sibling'),
      ],
    }),
  });
});
