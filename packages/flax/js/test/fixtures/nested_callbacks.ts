import { signal, bind } from '@flax/core';
import {
  registerPage,
  Builder,
  Column,
  ListView,
  SizedBox,
  Text,
  Directionality,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import {
  NestedBatch,
  CallbackStore,
  ContextBatch,
  RetainedTile,
} from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const state = {
  extent: signal<number | null>(50),
  epoch: signal(0),
  revision: signal(0),
  count: signal(0),
  show: signal(true),
  discard: signal(false),
  repeat: signal(1),
  calls: 0,
  events: 0,
  mode: 'normal',
  input: 'js',
  writeDuringBuild: false,
  contexts: [] as BuildContext[],
  moveContexts: [] as BuildContext[],
};
Object.assign(globalThis, { nested: state });
registerPage('contexts', () =>
  SizedBox({
    height: 200,
    child: ListView.builder({
      itemCount: 20,
      itemExtent: state.extent.bind,
      itemBuilder: (context, index) => {
        if (!state.contexts.includes(context)) state.contexts.push(context);
        return SizedBox({ height: 50, child: Text(`Row ${index}`) });
      },
    }),
  }),
);
registerPage('contextBatch', () =>
  ContextBatch({
    epoch: state.epoch.bind,
    render: (context) => {
      state.contexts.push(context);
      return SizedBox({ height: 1 });
    },
  }),
);
registerPage('contextMove', () =>
  Builder({
    builder: (context) => {
      state.moveContexts.push(context);
      Directionality.of(context);
      return Text('Moved Context');
    },
  }),
);
registerPage('nested', () => {
  const shared = Text(bind(() => `Shared ${state.count.value}`));
  const render = (_context: BuildContext, index: number): Widget | null => {
    state.calls++;
    if (state.writeDuringBuild) {
      state.writeDuringBuild = false;
      state.count.value++;
    }
    if (index === 1) {
      if (state.mode === 'throw') throw new Error('Nested builder failed');
      if (state.mode === 'promise') return Promise.resolve(null) as never;
      if (state.mode === 'undefined') return undefined as never;
      if (state.mode === 'invalid') return {} as never;
      if (state.mode === 'null') return null;
    }
    if (state.mode === 'shared') return shared;
    return RetainedTile({
      key: ValueKey(index),
      label: `nested-${index}`,
      child: Text(
        bind(() => `Nested ${index}: ${state.count.value}`),
        { key: ValueKey(`nested-label-${index}`) },
      ),
    });
  };
  const store = CallbackStore([render, render]);
  Object.assign(globalThis, { callbackStore: store });
  const descriptor = NestedBatch({
    key: ValueKey('batch'),
    builders: bind(() => {
      state.revision.value;
      if (state.input === 'dart') return store.builders;
      if (state.input === 'native') return CallbackStore.nativeBuilders;
      return [render, render];
    }),
    groups: bind(() => {
      state.revision.value;
      const shared = [render];
      return state.input === 'groups'
        ? new Map<string, typeof shared | CallbackStore['builders']>([
            ['a', shared],
            ['b', shared],
            ['native', CallbackStore.nativeBuilders],
          ])
        : {};
    }),
    keyed: bind(() => {
      state.revision.value;
      const map = new Map<unknown, typeof render>();
      if (state.input === 'cycle') map.set(map, render);
      return map;
    }),
    events: bind(() => {
      state.revision.value;
      if (state.mode === 'eventError')
        return [
          async () => {
            throw new Error('Nested event failed');
          },
        ];
      const step = state.events + 1;
      return [
        () => {
          state.events = step;
        },
      ];
    }),
    discard: state.discard.bind,
    repeat: state.repeat.bind,
  });
  return Column({
    children: [
      Text('Static nested sibling', { key: ValueKey('nested-static') }),
      Text(
        bind(() => `Marker ${state.count.value}`),
        { key: ValueKey('nested-marker') },
      ),
      SizedBox({ child: bind(() => (state.show.value ? descriptor : null)) }),
    ],
  });
});
registerPage('sharedNested', () => {
  const child = Text(bind(() => `Shared item ${state.count.value}`));
  const descriptor = NestedBatch({ builders: [() => child], repeat: 2 });
  return Column({ children: [descriptor, descriptor] });
});
