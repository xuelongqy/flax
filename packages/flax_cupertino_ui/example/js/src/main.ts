import { Text, runApp } from '@flax/flutter/widgets';
import {
  CupertinoApp,
  CupertinoButton,
  CupertinoPageScaffold,
  CupertinoThemeData,
} from '@flax/flutter/cupertino';

runApp(
  CupertinoApp({
    debugShowCheckedModeBanner: false,
    theme: CupertinoThemeData(),
    home: CupertinoPageScaffold({
      child: CupertinoButton({
        onPressed: () => {},
        child: Text('Cupertino UI ready'),
      }),
    }),
  }),
);
