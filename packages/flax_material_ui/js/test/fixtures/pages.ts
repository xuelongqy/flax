import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Navigator,
  PageContent,
  Text,
  registerPage,
  runApp,
  type NavigationData,
  type Page,
  type NavigatorState,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { MaterialPage, MaterialPageRoute, TextButton } from '@flax/flutter/material';

const list = signal<readonly Page[]>([]);
const hooks = {
  list,
  factories: 0,
  builds: 0,
  removed: 0,
  original: true,
  results: [] as unknown[],
  rejectPop: false,
  pageless: false,
  navigator: null as NavigatorState | null,
  make,
  unkeyed: (args: NavigationData) =>
    MaterialPage({ child: PageContent('details', { arguments: args }) }),
};
(globalThis as typeof globalThis & { pages: typeof hooks }).pages = hooks;

registerPage('details', (params) => {
  hooks.factories++;
  const count = signal(0);
  return Builder({
    builder: (context) => {
      hooks.builds++;
      hooks.navigator = Navigator.of(context);
      return Column({
        children: [
          Text(bind(() => `Page ${JSON.stringify(params.value)}`)),
          Text(bind(() => `Local ${count.value}`)),
          Text('Static page sibling'),
          TextButton({ child: Text('Increment page'), onPressed: () => count.value++ }),
          TextButton({
            child: Text('Pop page'),
            onPressed: () => Navigator.of(context).pop({ answer: [42, true] }),
          }),
          TextButton({
            child: Text('Push pageless'),
            onPressed: async () => {
              await Navigator.of(context).push(
                MaterialPageRoute({ builder: () => Text('Pageless') }),
              );
              hooks.pageless = true;
            },
          }),
        ],
      });
    },
  });
});

function make(
  key: string | number,
  args: NavigationData = null,
  maintainState = true,
  revision = 0,
  canPop = true,
) {
  return MaterialPage({
    key: ValueKey(key),
    name: `${key}`,
    arguments: args,
    maintainState,
    canPop,
    child: PageContent('details', { arguments: args }),
    onPopInvoked: (didPop, result) => {
      hooks.results.push([revision, didPop, result]);
      if (hooks.rejectPop) return Promise.reject(new Error('Page callback rejected'));
    },
  });
}
list.value = [make('root', { id: 1 })];
runApp(
  Navigator({
    pages: list.bind,
    onDidRemovePage: (page) => {
      hooks.removed++;
      hooks.original &&= list.value.includes(page);
      list.value = list.value.filter((item) =>
        page.key === null
          ? item !== page
          : (item.key as ValueKey | null)?.value !== (page.key as ValueKey).value,
      );
    },
  }),
);
