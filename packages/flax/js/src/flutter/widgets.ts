import {
  construct,
  mountRoot,
  type Bindable,
  type NavigationData,
  type Widget,
} from '@flax/core/bindings';
import type { ValueKey } from './generated/libraries/foundation/_bindings/flutter_ValueKey.js';

export type {
  Widget,
  DartWidget,
  DartList,
  DartMap,
  DartCopy,
  DartInput,
  ComponentConstructor,
} from '@flax/core/bindings';
export * from './generated/libraries/widgets/index.js';

/** Supply one root to the current embedded Flutter host. */
export function runApp(widget: Widget): void {
  mountRoot(widget);
}

export type { NavigationData, PageLifecycle } from '@flax/core/bindings';
export { registerPage } from '@flax/core/bindings';

/** Mount a registered factory with page-local state and reactive arguments. */
export function PageContent(
  name: string,
  options: { key?: ValueKey | null; arguments?: Bindable<NavigationData> } = {},
): Widget {
  if (typeof name !== 'string' || name.length === 0)
    throw new TypeError('Expected a registered page name');
  return construct(
    'widget',
    'flax:page-content',
    '',
    [
      { name: 'name', required: true, positional: true },
      { name: 'key', required: false, positional: false },
      { name: 'arguments', required: false, positional: false },
    ],
    [name],
    options,
  ) as Widget;
}

export {
  StatelessWidget,
  StatefulWidget,
  State,
  type WidgetOptions,
} from './components.js';
export {
  SingleTickerProviderState,
  TickerProviderState,
  KeepAliveTickerState,
} from './generated/libraries/widgets/components.js';
