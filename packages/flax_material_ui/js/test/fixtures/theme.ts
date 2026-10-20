import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
  asDart,
} from '@flax/core/bindings';
import { DateTime } from '@flax/dart/core';
import { Locale } from '@flax/dart/ui';
import { DateFormat as CupertinoDateFormat } from '@flax/cupertino-ui/dependencies/intl';
import { DateFormat as MaterialDateFormat } from '@flax/material-ui/dependencies/intl';
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
import { CupertinoThemeData, NoDefaultCupertinoThemeData } from '@flax/cupertino-ui';
import {
  Brightness,
  ColorScheme,
  GlobalMaterialLocalizations,
  InputDecoration,
  MaterialApp,
  MaterialLocalizations,
  TextField,
  TextTheme,
  Theme,
  ThemeData,
  ThemeExtension,
} from '@flax/material-ui';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const hooks = {
  providerRoundTrip() {
    const cupertino = CupertinoThemeData({ brightness: Brightness.dark });
    const base = asDart(cupertino, NoDefaultCupertinoThemeData);
    const material = ThemeData({ cupertinoOverrideTheme: cupertino });
    const returned = material.cupertinoOverrideTheme;
    const format = MaterialDateFormat('yyyy-MM-dd', 'en_US');
    const cupertinoFormat = asDart(format, CupertinoDateFormat);
    const date = DateTime(2026, 10, 20);
    return (
      ThemeData.light() instanceof ThemeData &&
      typeof ThemeExtension === 'function' &&
      asDart(base, CupertinoThemeData) === cupertino &&
      returned instanceof NoDefaultCupertinoThemeData &&
      returned.brightness === Brightness.dark &&
      !Object.is(format, cupertinoFormat) &&
      asDart(cupertinoFormat, MaterialDateFormat) === format &&
      format.format(date) === '2026-10-20' &&
      cupertinoFormat.format(date) === '2026-10-20'
    );
  },
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

for (const language of ['en', 'zh']) {
  registerPage(`localized-${language}`, () =>
    MaterialApp({
      locale: Locale(language),
      supportedLocales: [Locale('en'), Locale('zh')],
      localizationsDelegates: GlobalMaterialLocalizations.delegates,
      home: Builder({
        builder: (context) => {
          const text = MaterialLocalizations.of(context);
          return Text(`${text.okButtonLabel} / ${text.cancelButtonLabel}`);
        },
      }),
    }),
  );
}

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
    key: StringKey('local-reader'),
    builder: (context) => {
      hooks.localBuilds++;
      const theme = Theme.of(context);
      return Column({
        children: [
          Text(theme.brightness === Brightness.dark ? 'Local dark' : 'Local light', {
            key: StringKey('local-label'),
            style: theme.textTheme.titleLarge,
          }),
          TextField({
            key: StringKey('theme-input'),
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
    key: StringKey('derived-reader'),
    builder: (context) => {
      hooks.derivedBuilds++;
      const theme = Theme.of(context);
      return Text(
        theme.brightness === Brightness.dark ? 'Derived dark' : 'Derived light',
        { key: StringKey('derived-label'), style: theme.textTheme.titleLarge },
      );
    },
  });
  return Column({
    children: [
      Builder({
        key: StringKey('host-reader'),
        builder: (context) => {
          hooks.hostBuilds++;
          const host = Theme.of(context);
          return Column({
            children: [
              Text(host.brightness === Brightness.dark ? 'Host dark' : 'Host light', {
                key: StringKey('host-label'),
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
        key: StringKey('independent'),
        data: bind(() => hooks.local.value!),
        child: localContent,
      }),
      Text(
        bind(() => `Count ${count.value}`),
        { key: StringKey('theme-count') },
      ),
      Builder({
        key: StringKey('theme-static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static theme sibling');
        },
      }),
    ],
  });
});
