import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { signal, bind } from '@flax/core';
import {
  Builder,
  Column,
  Text,
  TextEditingController,
  registerPage,
  runApp,
  PageContent,
  SizedBox,
} from '@flax/flutter/widgets';
import {
  TextEditingValue,
  TextSelection,
  TextRange,
  TextAffinity,
} from '@flax/flutter/services';
import { ValueKey } from '@flax/flutter/foundation';
import { TextField, TextInputAction } from '@flax/flutter/material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const hooks = {
  mount: () => runApp(PageContent('editing')),
  TextEditingController,
  TextEditingValue,
  TextSelection,
  TextRange,
  TextAffinity,
  factories: 0,
  cleanups: 0,
  staticBuilds: 0,
  notifications: 0,
  changes: [] as string[],
  submissions: [] as string[],
  completions: 0,
  failListener: false,
  controller: null as TextEditingController | null,
  selected: signal<TextEditingController | null>(null),
  changed: signal<((text: string) => void) | null>((text) => hooks.changes.push(text)),
  complete: signal<(() => void) | null>(null),
  show: signal(true),
};
Object.assign(globalThis, { editing: hooks });

registerPage('editing', (params, lifecycle) => {
  hooks.factories++;
  const controller = TextEditingController();
  hooks.controller = controller;
  hooks.selected.value = controller;
  const value = signal(controller.value);
  const listener = () => {
    hooks.notifications++;
    value.value = controller.value;
    if (hooks.failListener) throw Error('editing listener failed');
  };
  controller.addListener(listener);
  lifecycle.onDispose(() => {
    controller.dispose();
    hooks.cleanups++;
  });
  lifecycle.onDispose(() => controller.removeListener(listener));
  return Column({
    children: [
      TextField({
        key: StringKey('input'),
        controller: hooks.selected.bind,
        onChanged: hooks.changed.bind,
        onSubmitted: (text) => hooks.submissions.push(text),
        onEditingComplete: hooks.complete.bind,
        maxLines: params.value === 'multiline' ? 3 : 1,
        textInputAction:
          params.value === 'multiline' ? TextInputAction.newline : TextInputAction.done,
      }),
      Text(
        bind(() => `Text: ${value.value.text}`),
        { key: StringKey('editing-text') },
      ),
      Text(
        bind(() => {
          const v = value.value;
          return `Selection ${v.selection.baseOffset}:${v.selection.extentOffset}; composing ${v.composing.start}:${v.composing.end}`;
        }),
        { key: StringKey('editing-state') },
      ),
      Builder({
        key: StringKey('static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static editing sibling');
        },
      }),
    ],
  });
});
registerPage('holder', () =>
  SizedBox({ child: bind(() => (hooks.show.value ? PageContent('editing') : null)) }),
);
registerPage('failure', (_, lifecycle) => {
  const controller = TextEditingController({ text: 'temporary' });
  lifecycle.onDispose(() => {
    controller.dispose();
    hooks.cleanups++;
  });
  throw Error('editing factory failed');
});

registerPage('shared', (_, lifecycle) => {
  const controller = TextEditingController();
  hooks.controller = controller;
  lifecycle.onDispose(() => controller.dispose());
  return Column({
    children: [
      TextField({ key: StringKey('first-input'), controller }),
      SizedBox({
        child: bind(() =>
          hooks.show.value
            ? TextField({ key: StringKey('second-input'), controller })
            : null,
        ),
      }),
    ],
  });
});
