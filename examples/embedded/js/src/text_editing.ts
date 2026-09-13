import { bind, signal } from '@flax/core';
import {
  Column,
  EdgeInsets,
  Padding,
  Text,
  TextEditingController,
  TextEditingValue,
  TextSelection,
  TextRange,
  ValueKey,
  registerPage,
} from '@flax/core/flutter';
import { TextButton, TextField, TextInputAction } from '@flax/material-ui';

registerPage('textEditing', (_, lifecycle) => {
  let controller = TextEditingController();
  const selected = signal(controller);
  const editing = signal(controller.value);
  const submitted = signal('');
  const userChanges = signal(0);
  const update = () => {
    editing.value = controller.value;
  };
  controller.addListener(update);
  lifecycle.onDispose(() => controller.dispose());
  lifecycle.onDispose(() => controller.removeListener(update));
  const multiline = TextEditingController({ text: 'Multiple lines\n中文 🌱' });
  lifecycle.onDispose(() => multiline.dispose());

  return Padding({
    padding: EdgeInsets.all(16),
    child: Column({
      spacing: 8,
      children: [
        TextField({
          key: ValueKey('text-input'),
          controller: selected.bind,
          textInputAction: TextInputAction.done,
          onChanged: () => {
            userChanges.value++;
          },
          onSubmitted: (text) => {
            submitted.value = text;
          },
        }),
        Text(bind(() => `Editing: ${editing.value.text}`)),
        Text(
          bind(() => {
            const value = editing.value;
            return `Selection ${value.selection.baseOffset}:${value.selection.extentOffset} · Composing ${value.composing.start}:${value.composing.end}`;
          }),
        ),
        Text(
          bind(
            () => `User changes: ${userChanges.value} · Submitted: ${submitted.value}`,
          ),
        ),
        TextButton({
          child: Text('Replace editing value'),
          onPressed: () => {
            controller.value = TextEditingValue({
              text: 'Hello 🌱',
              selection: TextSelection.collapsed({ offset: 8 }),
              composing: TextRange.empty,
            });
          },
        }),
        TextButton({ child: Text('Clear input'), onPressed: () => controller.clear() }),
        TextButton({
          child: Text('Replace text controller'),
          onPressed: () => {
            const previous = controller;
            const next = TextEditingController({ text: 'Replacement' });
            previous.removeListener(update);
            controller = next;
            next.addListener(update);
            selected.value = next;
            update();
            previous.dispose();
          },
        }),
        TextField({
          key: ValueKey('multiline-input'),
          controller: multiline,
          minLines: 2,
          maxLines: 3,
          textInputAction: TextInputAction.newline,
        }),
        Text('This static sibling stays unchanged while typing.'),
      ],
    }),
  });
});
