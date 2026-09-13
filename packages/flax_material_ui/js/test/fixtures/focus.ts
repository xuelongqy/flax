import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Text,
  SizedBox,
  ValueKey,
  registerPage,
  FocusNode,
  TextEditingController,
  TextEditingValue,
  TextSelection,
  TextRange,
  TextInputFormatter,
  FilteringTextInputFormatter,
  LengthLimitingTextInputFormatter,
  MaxLengthEnforcement,
  RegExp,
  UnfocusDisposition,
} from '@flax/core/flutter';
import { TextField } from '@flax/material-ui';

const hooks = {
  FocusNode,
  TextInputFormatter,
  FilteringTextInputFormatter,
  LengthLimitingTextInputFormatter,
  MaxLengthEnforcement,
  RegExp,
  TextEditingValue,
  TextSelection,
  TextRange,
  UnfocusDisposition,
  nodes: [] as FocusNode[],
  controllers: [] as TextEditingController[],
  selected: signal<FocusNode | null>(null),
  formatters: signal<readonly TextInputFormatter[]>([]),
  sharedFormatter: null as TextInputFormatter | null,
  calls: 0,
  staticBuilds: 0,
  notifications: 0,
  fail: false,
  showFirst: signal(true),
};
Object.assign(globalThis, { focus: hooks });
registerPage('focus', (_, lifecycle) => {
  hooks.nodes = [
    FocusNode({ debugLabel: 'first' }),
    FocusNode({ debugLabel: 'second' }),
  ];
  hooks.controllers = [TextEditingController(), TextEditingController()];
  hooks.selected.value = hooks.nodes[0]!;
  const state = signal('none');
  for (let i = 0; i < hooks.nodes.length; i++) {
    const node = hooks.nodes[i]!;
    const listener = () => {
      hooks.notifications++;
      state.value = `${i}:${node.hasFocus}:${node.hasPrimaryFocus}`;
    };
    node.addListener(listener);
    lifecycle.onDispose(() => node.dispose());
    lifecycle.onDispose(() => node.removeListener(listener));
    lifecycle.onDispose(() => hooks.controllers[i]!.dispose());
  }
  const formatter = TextInputFormatter.withFunction((oldValue, newValue) => {
    hooks.calls++;
    if (hooks.fail) throw Error('format failed');
    // Keep composing text untouched; rejecting an edit is an application decision.
    if (!newValue.composing.isCollapsed) return newValue;
    if (newValue.text.includes('!')) return oldValue;
    return newValue;
  });
  hooks.formatters.value = [formatter];
  hooks.sharedFormatter = formatter;
  return Column({
    children: [
      SizedBox({
        child: bind(() =>
          hooks.showFirst.value
            ? TextField({
                key: ValueKey('first'),
                controller: hooks.controllers[0],
                focusNode: hooks.selected.bind,
                inputFormatters: hooks.formatters.bind,
              })
            : null,
        ),
      }),
      TextField({
        key: ValueKey('second'),
        controller: hooks.controllers[1],
        focusNode: hooks.nodes[1],
        inputFormatters: hooks.formatters.bind,
      }),
      Text(
        bind(() => `Focus ${state.value}`),
        { key: ValueKey('focus-status') },
      ),
      Builder({
        key: ValueKey('focus-static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static focus sibling');
        },
      }),
    ],
  });
});
