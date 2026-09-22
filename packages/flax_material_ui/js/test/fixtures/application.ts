import { signal } from '@flax/core';
import {
  Column,
  Text,
  TextEditingController,
  Navigator,
  StatefulWidget,
  State,
  runApp,
  type BuildContext,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import {
  MaterialApp,
  ThemeMode,
  ThemeData,
  Brightness,
  AppBar,
  Scaffold,
  TextButton,
  TextField,
  MaterialPageRoute,
  Theme,
} from '@flax/flutter/material';
import { Builder } from '@flax/flutter/widgets';
const mode = signal(ThemeMode.system);
const title = signal('Application');
const result = signal('Pending');
const info = {
  initializations: 0,
  builds: 0,
  disposals: 0,
  mode,
  title,
  ThemeMode,
  MaterialApp,
  Text,
};
class Home extends StatefulWidget {
  createState() {
    return new HomeState();
  }
}
class HomeState extends State<Home> {
  editing!: TextEditingController;
  count = 0;
  initState() {
    super.initState();
    info.initializations++;
    this.editing = TextEditingController({ text: 'Initial' });
  }
  dispose() {
    this.editing.dispose();
    info.disposals++;
    super.dispose();
  }
  build(context: BuildContext) {
    info.builds++;
    if (Reflect.get(globalThis, 'failApplicationBuild'))
      throw new Error('first application build');
    return Scaffold({
      appBar: AppBar({ title: Text(title.bind, { key: ValueKey('title') }) }),
      body: Column({
        children: [
          TextField({ controller: this.editing }),
          Text(`Count ${this.count}`),
          TextButton({
            onPressed: () => this.setState(() => this.count++),
            child: Text('Count'),
          }),
          TextButton({
            onPressed: async () => {
              const answer = await Navigator.of(context).push(
                MaterialPageRoute({
                  builder: (ctx) =>
                    Scaffold({
                      appBar: AppBar({ title: Text('Details') }),
                      body: TextButton({
                        onPressed: () => Navigator.of(ctx).pop({ ok: true }),
                        child: Text('Return'),
                      }),
                    }),
                }),
              );
              if (this.mounted) result.value = answer !== null ? 'Received' : 'Empty';
            },
            child: Text('Details'),
          }),
          Text(result.bind),
          Builder({
            builder: (ctx) =>
              Text(Theme.of(ctx).brightness === Brightness.dark ? 'Dark' : 'Light'),
          }),
          Text('Static', { key: ValueKey('static') }),
        ],
      }),
    });
  }
}
Object.assign(globalThis, { application: info });
runApp(
  MaterialApp({
    key: ValueKey('application'),
    home: new Home(),
    theme: ThemeData({ brightness: Brightness.light }),
    darkTheme: ThemeData({ brightness: Brightness.dark }),
    themeMode: mode.bind,
  }),
);
