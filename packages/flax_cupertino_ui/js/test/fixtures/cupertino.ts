import { bind, signal } from '@flax/core';
import { Locale } from '@flax/dart/ui';
import { Color } from '@flax/flutter/services';
import { Text, runApp } from '@flax/flutter/widgets';
import {
  CupertinoApp,
  CupertinoButton,
  CupertinoPageScaffold,
  CupertinoNavigationBar,
  CupertinoThemeData,
  GlobalCupertinoLocalizations,
} from '@flax/cupertino-ui';

const opaque = signal(true);
const locale = signal(Locale('en'));
const state = {
  presses: 0,
  setOpaque(value: boolean) {
    opaque.value = value;
  },
  setLanguage(language: string) {
    locale.value = Locale(language);
  },
};
Object.assign(globalThis, { cupertinoPilot: state });

const theme = CupertinoThemeData({
  primaryColor: Color(0xff1565c0),
  scaffoldBackgroundColor: Color(0xffe3f2fd),
});

runApp(
  CupertinoApp({
    debugShowCheckedModeBanner: false,
    locale: bind(() => locale.value),
    supportedLocales: [Locale('en'), Locale('zh')],
    localizationsDelegates: GlobalCupertinoLocalizations.delegates,
    theme,
    home: CupertinoPageScaffold({
      backgroundColor: Color(0xfffafafa),
      resizeToAvoidBottomInset: false,
      navigationBar: bind(() =>
        CupertinoNavigationBar({
          middle: Text(opaque.value ? 'Opaque bar' : 'Translucent bar'),
          backgroundColor: Color(opaque.value ? 0xfffafafa : 0x80fafafa),
          automaticallyImplyLeading: false,
          transitionBetweenRoutes: false,
        }),
      ),
      child: CupertinoButton({
        onPressed: () => state.presses++,
        child: Text('Cupertino ready'),
      }),
    }),
  }),
);
