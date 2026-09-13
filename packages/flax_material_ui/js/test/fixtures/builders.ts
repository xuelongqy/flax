import { signal, bind } from '@flax/core';
import { construct } from '@flax/core/bindings';
import {
  Builder,
  LayoutBuilder,
  Directionality,
  TextDirection,
  Column,
  Text,
  SizedBox,
  ValueKey,
  MainAxisSize,
  runApp,
  type BuildContext,
  type Widget,
} from '@flax/core/flutter';
import { TextButton } from '@flax/material-ui';

const count = signal(0);
const visible = signal(true);
const items = signal([1, 2]);
const mode = signal('valid');
let builds = 0;
let layouts = 0;
let active = 0;
let context: BuildContext | undefined;
let latest: BuildContext | undefined;
let constraints: object | undefined;
const contexts: BuildContext[] = [];
const observed = bind(() => `Count ${count.value}`);
const tracked = Object.freeze({
  ...observed,
  observe(token: number) {
    active++;
    const stop = observed.observe(token);
    return () => {
      active--;
      stop();
    };
  },
});
function builder(c: BuildContext): Widget {
  builds++;
  context ??= c;
  latest = c;
  if (!contexts.includes(c)) contexts.push(c);
  if (mode.value === 'write-during-build') count.value++;
  if (mode.value === 'throw') throw new Error('builder failed');
  if (mode.value === 'promise')
    return Promise.resolve(Text('Wrong')) as unknown as Widget;
  if (mode.value === 'duplicate')
    return Column({
      children: [
        Text('A', { key: ValueKey('same') }),
        Text('B', { key: ValueKey('same') }),
      ],
    });
  const direction = Directionality.of(c);
  return Column({
    mainAxisSize: MainAxisSize.min,
    children: [
      ...(scenario === 'probe'
        ? [construct('widget', 'test:Lifecycle', '', [], [], {}) as Widget]
        : []),
      Text(direction === TextDirection.rtl ? 'RTL' : 'LTR'),
      Text(tracked, { key: ValueKey('count') }),
      TextButton({
        child: Text('Read context'),
        onPressed: () => {
          if (!c.mounted) throw new Error('Unexpected retired context');
          count.value += Directionality.of(c) === TextDirection.rtl ? 2 : 1;
        },
      }),
      Column({
        key: ValueKey('items'),
        mainAxisSize: MainAxisSize.min,
        children: bind(() =>
          items.value.map((id) =>
            TextButton({
              key: ValueKey(id),
              child: Text(`Item ${id}`),
              onPressed: () => count.value++,
            }),
          ),
        ),
      }),
    ],
  });
}
const callback = signal(builder);
const layoutCallback = signal(
  (
    c: BuildContext,
    box: { minWidth: number; maxWidth: number; minHeight: number; maxHeight: number },
  ) => {
    layouts++;
    constraints = box;
    if (mode.value === 'layout-throw') throw new Error('layout failed');
    if (mode.value === 'write-during-layout') count.value++;
    return Text(`Width ${box.maxWidth}`, { key: ValueKey('width') });
  },
);
Object.assign(globalThis, {
  hooks: {
    count,
    visible,
    items,
    mode,
    callback,
    layoutCallback,
    builder,
    contexts,
    get builds() {
      return builds;
    },
    get layouts() {
      return layouts;
    },
    get active() {
      return active;
    },
    get context() {
      return context;
    },
    get latest() {
      return latest;
    },
    get constraints() {
      return constraints;
    },
    lookup() {
      return Directionality.of(context!);
    },
    shared: Builder({ builder }),
  },
});
const shared = Builder({ builder });
const scenario = (globalThis as typeof globalThis & { scenario?: string }).scenario;
runApp(
  scenario === 'shared'
    ? Column({
        mainAxisSize: MainAxisSize.min,
        children: [
          shared,
          SizedBox({ child: bind(() => (visible.value ? shared : null)) }),
        ],
      })
    : Column({
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('Static', { key: ValueKey('static') }),
          SizedBox({
            key: ValueKey('conditional'),
            child: bind(() =>
              visible.value
                ? Builder({ key: ValueKey('builder'), builder: callback.bind })
                : null,
            ),
          }),
          LayoutBuilder({ key: ValueKey('layout'), builder: layoutCallback.bind }),
        ],
      }),
);
