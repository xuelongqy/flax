import { signal, bind } from '@flax/core';
import {
  Builder,
  Column,
  Text,
  Navigator,
  NavigatorPopHandler,
  PopScope,
  RouteSettings,
  runApp,
  type BuildContext,
  type NavigatorState,
  type NavigationData,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { MaterialPageRoute, TextButton } from '@flax/flutter/material';

const rootCount = signal(0);
const result = signal<NavigationData>(null);
const allowPop = signal(true);
const events: string[] = [];
let navigator: NavigatorState;
let original: BuildContext;
let detailContext: BuildContext;
const hooks = {
  rootCount,
  result,
  allowPop,
  events,
  get navigator() {
    return navigator;
  },
  get original() {
    return original;
  },
  get detailContext() {
    return detailContext;
  },
  rootBuilds: 0,
  detailBuilds: 0,
  throwBuilder: false,
  open: () => navigator.push(route('Detail')),
  replace: () =>
    navigator.pushReplacement(route('Replacement'), { result: { replaced: true } }),
  native: () => navigator.pushNamed('/native', { arguments: { input: ['value', 2] } }),
  pop: (value: NavigationData = { selected: ['a', 3] }) => navigator.pop(value),
  maybePop: () => navigator.maybePop(),
};
Object.assign(globalThis, { navigation: hooks });

function route(name: string, maintainState = true) {
  const count = signal(0);
  return MaterialPageRoute({
    settings: RouteSettings({ name, arguments: { name, values: [true, 2] } }),
    maintainState,
    builder: (context) => {
      if (hooks.throwBuilder) throw Error('route builder failed');
      hooks.detailBuilds++;
      detailContext = context;
      return PopScope({
        canPop: allowPop.bind,
        onPopInvokedWithResult: (didPop) => events.push(`pop:${didPop}`),
        child: Column({
          children: [
            Text(name),
            Text(
              bind(() => `Detail count ${count.value}`),
              { key: ValueKey('detail-count') },
            ),
            TextButton({
              onPressed: () => count.value++,
              child: Text('Detail increment'),
            }),
            TextButton({
              onPressed: () => Navigator.of(context).pop({ selected: ['a', 3] }),
              child: Text('Return result'),
            }),
            TextButton({
              onPressed: () => {
                void Navigator.of(context).push(route('Cover'));
              },
              child: Text('Cover'),
            }),
          ],
        }),
      });
    },
  });
}

const root = Builder({
  builder: (context) => {
    hooks.rootBuilds++;
    original = context;
    navigator = Navigator.of(context);
    return Column({
      children: [
        Text('JS home'),
        Text(bind(() => `Root count ${rootCount.value}`)),
        Text(bind(() => `Result ${JSON.stringify(result.value)}`)),
        TextButton({
          child: Text('Open detail'),
          onPressed: async () => {
            events.push('before');
            result.value = await hooks.open();
            events.push('after');
          },
        }),
        TextButton({
          child: Text('Replace root'),
          onPressed: () => {
            void hooks.replace();
          },
        }),
        TextButton({
          child: Text('Native choice'),
          onPressed: async () => {
            result.value = await hooks.native();
          },
        }),
        TextButton({
          child: Text('Async failure'),
          onPressed: async () => {
            await Promise.resolve();
            throw Error('async event failed');
          },
        }),
        TextButton({
          child: Text('Microtask'),
          onPressed: () => {
            events.push('sync');
            void Promise.resolve().then(() => {
              events.push('microtask');
              rootCount.value++;
            });
          },
        }),
        TextButton({
          child: Text('Disposable content'),
          onPressed: () => {
            void navigator.push(route('Disposable', false));
          },
        }),
      ],
    });
  },
});

const nested = (globalThis as typeof globalThis & { nestedNavigation?: boolean })
  .nestedNavigation;
runApp(
  nested
    ? NavigatorPopHandler({
        onPopWithResult: (value) => {
          void navigator.maybePop(value);
        },
        child: Navigator({
          initialRoute: '/',
          onGenerateRoute: (settings) => {
            events.push(`generate:${settings.name}`);
            return MaterialPageRoute({ settings, builder: () => root });
          },
        }),
      })
    : root,
);
