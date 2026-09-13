import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Navigator,
  NavigatorPopHandler,
  PopScope,
  RouteSettings,
  Text,
  runApp,
  type BuildContext,
  type NavigationData,
  type NavigatorState,
} from '@flax/core/flutter';
import { MaterialPageRoute, TextButton } from '@flax/material-ui';

/** The host decides whether this application gets its own Navigator. */
export function startNavigation(nested: boolean): void {
  const visits = signal(0);
  const result = signal<NavigationData>(null);
  let localNavigator: NavigatorState;

  function details() {
    const count = signal(0);
    const canLeave = signal(true);
    return MaterialPageRoute({
      settings: RouteSettings({
        name: '/js/details',
        arguments: { origin: nested ? 'mini-app' : 'host', values: [1, true] },
      }),
      builder: (context) =>
        PopScope({
          canPop: canLeave.bind,
          child: Column({
            children: [
              Text('JS detail page'),
              Text(bind(() => `Page count: ${count.value}`)),
              TextButton({
                onPressed: () => count.value++,
                child: Text('Increment page'),
              }),
              TextButton({
                onPressed: () => (canLeave.value = !canLeave.value),
                child: Text(bind(() => (canLeave.value ? 'Block back' : 'Allow back'))),
              }),
              TextButton({
                onPressed: () =>
                  Navigator.of(context).pop({
                    count: count.value,
                    selected: ['alpha', 'beta'],
                  }),
                child: Text('Return selection'),
              }),
              TextButton({
                onPressed: () => Navigator.of(context).push(details()),
                child: Text('Open another detail'),
              }),
            ],
          }),
        }),
    });
  }

  async function chooseNative(context: BuildContext) {
    result.value = await Navigator.of(context, { rootNavigator: true }).pushNamed(
      '/native-choice',
      {
        arguments: { source: 'Flax', options: ['alpha', 'beta'] },
      },
    );
  }

  const root = Builder({
    builder: (context) => {
      localNavigator = Navigator.of(context);
      return Column({
        children: [
          Text(nested ? 'Mini-app navigation' : 'Shared host navigation'),
          Text(bind(() => `Visits: ${visits.value}`)),
          Text(bind(() => `Selection: ${JSON.stringify(result.value)}`)),
          TextButton({
            child: Text('Open JS detail'),
            onPressed: async () => {
              visits.value++;
              result.value = await localNavigator.push(details());
            },
          }),
          TextButton({
            child: Text('Choose in Dart'),
            onPressed: () => chooseNative(context),
          }),
          TextButton({
            child: Text('Replace JS entry'),
            onPressed: () => localNavigator.pushReplacement(details()),
          }),
          TextButton({
            child: Text(nested ? 'Exit mini-app' : 'Back to Dart home'),
            onPressed: () => Navigator.of(context, { rootNavigator: true }).pop(),
          }),
        ],
      });
    },
  });

  runApp(
    nested
      ? NavigatorPopHandler({
          onPopWithResult: (value) => localNavigator.maybePop(value),
          child: Navigator({
            initialRoute: '/',
            onGenerateRoute: (settings) =>
              MaterialPageRoute({ settings, builder: () => root }),
          }),
        })
      : root,
  );
}
