import { Text, runApp } from '@flax/flutter/widgets';
import {
  CupertinoApp,
  CupertinoButton,
  CupertinoPageScaffold,
  CupertinoThemeData,
} from '@flax/cupertino-ui';

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
