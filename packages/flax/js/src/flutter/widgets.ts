import {
  construct,
  mountRoot,
  type Bindable,
  type NavigationData,
  type Widget as _FlaxWidget,
} from '@flax/core/bindings';
import { Widget as _DartWidget } from './generated/libraries/widgets/index.js';
import type { ValueKey } from '@flax/flutter/foundation';

export type {
  DartWidget,
  DartList,
  DartMap,
  DartCopy,
  DartInput,
  ComponentConstructor,
} from '@flax/core/bindings';
export type Widget = _FlaxWidget;
export const Widget = _DartWidget;
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
  DartState,
  type WidgetOptions,
} from './components.js';
export {
  KeepAliveState,
  SingleTickerProviderState,
  TickerProviderState,
  KeepAliveTickerState,
  KeepAliveSingleTickerState,
} from './generated/libraries/widgets/components.js';
