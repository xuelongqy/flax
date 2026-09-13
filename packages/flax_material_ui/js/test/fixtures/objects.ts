import { signal, bind, type Binding } from '@flax/core';
import {
  Builder,
  Column,
  Text,
  SizedBox,
  SingleChildScrollView,
  ScrollController,
  ValueKey,
  registerPage,
  runApp,
  PageContent,
  type Widget,
} from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

const hooks = {
  mount: () => runApp(PageContent('scroll')),
  factories: 0,
  disposed: 0,
  detached: false,
  staticBuilds: 0,
  controller: ScrollController(),
  replacement: ScrollController(),
  selected: signal<ScrollController | null>(null),
  showSecond: signal(true),
  showPage: signal(true),
  notifications: 0,
  cleanup: [] as number[],
  listener: () => {
    hooks.notifications++;
  },
};
Object.assign(globalThis, { objects: hooks });
const content = () =>
  Column({
    children: Array.from({ length: 30 }, (_, i) =>
      SizedBox({ height: 30, child: Text(`Row ${i}`) }),
    ),
  });
const scroll = (
  controller: ScrollController | null | Binding<ScrollController | null>,
): Widget =>
  SizedBox({
    height: 140,
    child: SingleChildScrollView({ controller, primary: false, child: content() }),
  });
registerPage('scroll', (_, lifecycle) => {
  hooks.factories++;
  const controller = ScrollController();
  hooks.controller = controller;
  hooks.selected.value = controller;
  const offset = signal(0);
  const listener = () => {
    hooks.notifications++;
    offset.value = controller.offset;
  };
  controller.addListener(listener);
  lifecycle.onDispose(() => {
    hooks.detached = !controller.hasClients;
    controller.dispose();
    hooks.disposed++;
  });
  lifecycle.onDispose(() => controller.removeListener(listener));
  return Column({
    children: [
      scroll(hooks.selected.bind),
      Text(
        bind(() => `Offset ${offset.value.toFixed(0)}`),
        { key: ValueKey('offset') },
      ),
      TextButton({ onPressed: () => controller.jumpTo(0), child: Text('Top') }),
      Builder({
        key: ValueKey('static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static sibling');
        },
      }),
    ],
  });
});
registerPage('shared', () =>
  Column({
    children: [
      scroll(hooks.controller),
      SizedBox({
        child: bind(() => (hooks.showSecond.value ? scroll(hooks.controller) : null)),
      }),
    ],
  }),
);
registerPage('holder', () =>
  SizedBox({
    child: bind(() => (hooks.showPage.value ? PageContent('scroll') : null)),
  }),
);
registerPage('failure', (_, lifecycle) => {
  const c = ScrollController();
  hooks.controller = c;
  lifecycle.onDispose(() => {
    c.dispose();
    hooks.cleanup.push(1);
  });
  lifecycle.onDispose(() => {
    hooks.cleanup.push(2);
    throw Error('cleanup failure');
  });
  throw Error('factory failure');
});
registerPage('invalid', (_, lifecycle) => {
  const c = ScrollController();
  hooks.controller = c;
  lifecycle.onDispose(() => {
    c.dispose();
    hooks.disposed++;
  });
  return Promise.resolve(Text('invalid')) as unknown as Widget;
});
registerPage('stale', () => {
  const c = ScrollController();
  const tree = SingleChildScrollView({ controller: c, child: Text('stale') });
  return Builder({
    builder: () => {
      c.dispose();
      return tree;
    },
  });
});

registerPage('cached', () => {
  const c = ScrollController();
  return Column({
    children: [
      Builder({
        builder: () => {
          c.dispose();
          return Text('dispose before sibling mount');
        },
      }),
      SingleChildScrollView({ controller: c, child: Text('cached') }),
    ],
  });
});

// Independent host-extension fixture: these names intentionally differ from Flutter's.
import {
  constructObject,
  defineObject,
  invokeObject,
  enumValue,
} from '@flax/core/bindings';
const gaugeType = 'fixture:Gauge';
defineObject(
  gaugeType,
  ['reading', 'mode', 'self'],
  ['reading', 'mode'],
  {
    move(this: object, amount: number) {
      return invokeObject(this, gaugeType, 'move', [amount]);
    },
    echo(this: object, input: object) {
      return invokeObject(this, gaugeType, 'echo', [input]);
    },
    watch(this: object, observer: () => void) {
      return invokeObject(this, gaugeType, 'watch', [observer]);
    },
    unwatch(this: object, observer: () => void) {
      return invokeObject(this, gaugeType, 'unwatch', [observer]);
    },
    finish(this: object) {
      return invokeObject(this, gaugeType, 'finish', []);
    },
  },
  ['unwatch'],
);
Object.assign(globalThis, {
  Gauge: (options = {}) =>
    constructObject(
      'object',
      gaugeType,
      '',
      [{ name: 'initial', required: false, positional: false }],
      [],
      options,
    ),
  activeMode: enumValue('fixture:Mode', 'active'),
});
