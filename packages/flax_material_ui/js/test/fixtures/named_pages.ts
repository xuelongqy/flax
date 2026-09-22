import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Text,
  PageContent,
  registerPage,
} from '@flax/flutter/widgets';
import { TextButton } from '@flax/flutter/material';

const hooks = {
  starts: 1,
  factories: 0,
  builds: 0,
  input: signal({ id: 1 }),
  staticBuilds: 0,
};
Object.assign(globalThis, { namedPages: hooks });
registerPage('details', (params) => {
  hooks.factories++;
  const count = signal(0);
  return Builder({
    builder: () => {
      hooks.builds++;
      return Column({
        children: [
          Text(bind(() => `Input ${JSON.stringify(params.value)}`)),
          Text(bind(() => `Count ${count.value}`)),
          TextButton({ onPressed: () => count.value++, child: Text('Increment page') }),
          Text('Static page content'),
        ],
      });
    },
  });
});
registerPage('failure', () => {
  throw Error('page factory failed');
});
// Deliberately exercise a non-TypeScript caller returning an invalid widget.
registerPage('promise', (() => Promise.resolve(Text('invalid'))) as never);

registerPage('holder', () =>
  Column({
    children: [
      PageContent('details', { arguments: hooks.input.bind }),
      Builder({
        builder: () => {
          hooks.staticBuilds++;
          return Text('Holder sibling');
        },
      }),
    ],
  }),
);
