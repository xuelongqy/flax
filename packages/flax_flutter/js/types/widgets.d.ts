import { type Bindable, type NavigationData, type Widget as _FlaxWidget } from '@flax/core/bindings';
import { Widget as _DartWidget } from './generated/libraries/widgets/index.js';
import type { ValueKey } from '@flax/flutter/foundation';
export type { DartWidget, DartList, DartMap, DartCopy, DartInput, ComponentConstructor, } from '@flax/core/bindings';
export type Widget = _FlaxWidget;
export declare const Widget: typeof import("./generated/libraries/widgets/_bindings/sdk_widgets_Widget.js")._WidgetFactory & import("@flax/core/bindings").FlaxInstanceType<_DartWidget> & import("@flax/core/bindings").FlaxDartType<_DartWidget, readonly ["class", "flax.core/sdk_widgets#type:Widget", readonly [], false]>;
export * from './generated/libraries/widgets/index.js';
/** Supply one root to the current embedded Flutter host. */
export declare function runApp(widget: Widget): void;
export type { NavigationData, PageLifecycle } from '@flax/core/bindings';
export { registerPage } from '@flax/core/bindings';
/** Mount a registered factory with page-local state and reactive arguments. */
export declare function PageContent(name: string, options?: {
    key?: ValueKey | null;
    arguments?: Bindable<NavigationData>;
}): Widget;
export { StatelessWidget, StatefulWidget, State, DartState, type WidgetOptions, } from './components.js';
export { KeepAliveState, SingleTickerProviderState, TickerProviderState, KeepAliveTickerState, KeepAliveSingleTickerState, } from './generated/libraries/widgets/components.js';
