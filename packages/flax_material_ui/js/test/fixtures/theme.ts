import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  FocusNode,
  Text,
  TextEditingController,
  TextStyle,
  registerPage,
} from '@flax/flutter/widgets';
import { Color } from '@flax/flutter/services';
import { ValueKey } from '@flax/flutter/foundation';
import {
  Brightness,
  ColorScheme,
  InputDecoration,
  TextField,
  TextTheme,
  Theme,
  ThemeData,
} from '@flax/flutter/material';

const hooks = {
  Color,
  ColorScheme,
  Brightness,
  TextStyle,
  TextTheme,
  Theme,
  ThemeData,
  factories: 0,
  cleanups: 0,
  hostBuilds: 0,
  derivedBuilds: 0,
  localBuilds: 0,
  staticBuilds: 0,
  count: signal(0),
  local: signal<ThemeData | null>(null),
  controller: null as TextEditingController | null,
};
Object.assign(globalThis, { themes: hooks });

registerPage('theme', (_, lifecycle) => {
  hooks.factories++;
  const controller = TextEditingController({ text: 'Initial' });
  const focus = FocusNode();
  const count = signal(0);
  hooks.count = count;
  hooks.controller = controller;
  hooks.local.value = ThemeData({
    colorScheme: ColorScheme.fromSeed({
      seedColor: Color(0xff793ac1),
      brightness: Brightness.dark,
    }),
  });
  lifecycle.onDispose(() => {
    focus.dispose();
    controller.dispose();
    hooks.cleanups++;
  });
  const localContent = Builder({
    key: ValueKey('local-reader'),
    builder: (context) => {
      hooks.localBuilds++;
      const theme = Theme.of(context);
      return Column({
        children: [
          Text(theme.brightness === Brightness.dark ? 'Local dark' : 'Local light', {
            key: ValueKey('local-label'),
            style: theme.textTheme.titleLarge,
          }),
          TextField({
            key: ValueKey('theme-input'),
            controller,
            focusNode: focus,
            style: theme.textTheme.bodyMedium,
            decoration: InputDecoration({
              labelText: 'Themed input',
              fillColor: theme.colorScheme.surface,
              filled: true,
            }),
          }),
        ],
      });
    },
  });
  const derivedContent = Builder({
    key: ValueKey('derived-reader'),
    builder: (context) => {
      hooks.derivedBuilds++;
      const theme = Theme.of(context);
      return Text(
        theme.brightness === Brightness.dark ? 'Derived dark' : 'Derived light',
        { key: ValueKey('derived-label'), style: theme.textTheme.titleLarge },
      );
    },
  });
  return Column({
    children: [
      Builder({
        key: ValueKey('host-reader'),
        builder: (context) => {
          hooks.hostBuilds++;
          const host = Theme.of(context);
          return Column({
            children: [
              Text(host.brightness === Brightness.dark ? 'Host dark' : 'Host light', {
                key: ValueKey('host-label'),
                style: host.textTheme.titleLarge,
              }),
              Theme({
                data: host.copyWith({
                  textTheme: host.textTheme.copyWith({
                    titleLarge: host.textTheme.titleLarge?.copyWith({ fontSize: 30 }),
                  }),
                }),
                child: derivedContent,
              }),
            ],
          });
        },
      }),
      Theme({
        key: ValueKey('independent'),
        data: bind(() => hooks.local.value!),
        child: localContent,
      }),
      Text(
        bind(() => `Count ${count.value}`),
        { key: ValueKey('theme-count') },
      ),
      Builder({
        key: ValueKey('theme-static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static theme sibling');
        },
      }),
    ],
  });
});
