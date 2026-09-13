import { bind, computed, signal } from '@flax/core';
import {
  Builder,
  type BuildContext,
  Column,
  Directionality,
  type Key,
  ListView,
  ScrollController,
  SizedBox,
  Text,
  TextDirection,
  ValueKey,
  type Widget,
  registerPage,
} from '@flax/core/flutter';
import { RefreshIndicator, TextButton } from '@flax/material-ui';
import { RetainedTile } from '../../../.dart_tool/flax/ui/material_repeated_bindings.js';

const hooks = {
  rows: signal<number[]>([]),
  revision: signal(0),
  states: new Map<number, ReturnType<typeof signal<number>>>(),
  factories: 0,
  cleanups: 0,
  builds: 0,
  mode: 'normal',
  keep: false,
  keys: true,
  typeChanged: false,
  readDirection: false,
  writeDuringBuild: false,
  marker: signal(0),
  controller: null as ScrollController | null,
  firstContext: null as BuildContext | null,
  sameContext: true,
  trace: [] as number[],
  refreshCalls: [] as string[],
  refreshCompleted: [] as string[],
  refreshVariant: 'first',
  refreshRevision: signal(0),
  refreshCount: signal(0),
};
Object.assign(globalThis, { lazy: hooks });
registerPage('lazy', (params, lifecycle) => {
  hooks.factories++;
  hooks.rows.value = Array.from(
    { length: (params.value as { count: number }).count },
    (_, i) => i,
  );
  hooks.controller = ScrollController();
  const controller = hooks.controller;
  lifecycle.onDispose(() => {
    hooks.cleanups++;
    controller.dispose();
  });
  const builder = bind(() => {
    const rows = hooks.rows.value;
    hooks.revision.value;
    const shared = Text('Shared description');
    return (context: BuildContext, index: number): Widget | null => {
      hooks.builds++;
      hooks.trace.push(index);
      hooks.firstContext ??= context;
      hooks.sameContext &&= hooks.firstContext === context;
      if (hooks.writeDuringBuild) {
        hooks.writeDuringBuild = false;
        hooks.marker.value++;
      }
      if (index === 1) {
        if (hooks.mode === 'null') return null;
        if (hooks.mode === 'throw') throw new Error('Broken row');
        if (hooks.mode === 'promise') return Promise.resolve(null) as never;
        if (hooks.mode === 'undefined') return undefined as never;
        if (hooks.mode === 'invalid') return { kind: 'invalid' } as never;
      }
      if (hooks.mode === 'shared') return shared;
      const id = rows[index]!;
      let count = hooks.states.get(id);
      if (!count) {
        count = signal(0);
        hooks.states.set(id, count);
      }
      const value = count;
      const key = hooks.keys ? ValueKey(id) : null;
      if (hooks.typeChanged && id === 0) return Text('Changed type', { key });
      const direction =
        hooks.readDirection && Directionality.of(context) === TextDirection.rtl
          ? 'RTL'
          : 'LTR';
      return RetainedTile({
        key,
        label: String(id),
        keep: hooks.keep && id === 0,
        child: Column({
          children: [
            Text(
              bind(() => `Row ${id}: ${value.value} ${direction}`),
              { key: ValueKey(`label-${id}`) },
            ),
            TextButton({
              key: ValueKey(`inc-${id}`),
              onPressed: () => value.value++,
              child: Text(`Increment ${id}`),
            }),
          ],
        }),
      });
    };
  });
  return Column({
    children: [
      Text('Static list sibling', { key: ValueKey('static-list') }),
      Text(
        bind(() => `Marker ${hooks.marker.value}`),
        { key: ValueKey('marker') },
      ),
      Text(
        bind(() => `Refresh ${hooks.refreshCount.value}`),
        {
          key: ValueKey('refresh-count'),
        },
      ),
      SizedBox({
        height: 240,
        width: 400,
        child: RefreshIndicator({
          key: ValueKey('refresh'),
          onRefresh: bind(() => {
            hooks.refreshRevision.value;
            const variant = hooks.refreshVariant;
            return async () => {
              hooks.refreshCalls.push(variant);
              await new Promise<void>((resolve) => setTimeout(resolve, 30));
              hooks.refreshCompleted.push(variant);
              hooks.refreshCount.value++;
            };
          }),
          child: ListView.builder({
            key: ValueKey('list'),
            controller,
            itemExtent: 80,
            itemCount: computed(() => hooks.rows.value.length).bind,
            itemBuilder: builder,
            findChildIndexCallback: bind(() => {
              const indices = new Map(hooks.rows.value.map((id, index) => [id, index]));
              return (key: Key) =>
                indices.get((key as ValueKey).value as number) ?? null;
            }),
          }),
        }),
      }),
    ],
  });
});
// Keep the ordinary builder path in the same bundle for cross-path regressions.
registerPage('context-reader', () =>
  Builder({ builder: (c) => Text(String(c.mounted)) }),
);
