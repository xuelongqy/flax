import { bind, signal } from '@flax/core';
import { Text, registerPage } from '@flax/core/flutter';
import { TileBatch } from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const hooks = {
  count: signal(2),
  discard: signal(false),
  revision: signal(0),
  value: signal(0),
  calls: 0,
  mode: 'normal',
  contexts: [] as unknown[],
};
Object.assign(globalThis, { repeated: hooks });
registerPage('repeated', () =>
  TileBatch({
    count: hooks.count.bind,
    discard: hooks.discard.bind,
    render: bind(() => {
      hooks.revision.value;
      const shared = Text(bind(() => `Shared ${hooks.value.value}`));
      return (context, index) => {
        hooks.calls++;
        hooks.contexts.push(context);
        if (hooks.mode === 'null' && index === 1) return null;
        if (index === 1 && hooks.mode === 'throw') throw new Error('Item failed');
        if (index === 1 && hooks.mode === 'promise')
          return Promise.resolve(null) as never;
        if (index === 1 && hooks.mode === 'undefined') return undefined as never;
        if (hooks.mode === 'shared') return shared;
        return Text(bind(() => `Tile ${index}: ${hooks.value.value}`));
      };
    }),
  }),
);
