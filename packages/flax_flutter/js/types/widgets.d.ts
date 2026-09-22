import { type Bindable, type NavigationData, type Widget } from '@flax/core/bindings';
import type { ValueKey } from './generated/libraries/foundation/_bindings/flutter_ValueKey.js';
export type { Widget, DartWidget, DartList, DartMap, DartCopy, DartInput, ComponentConstructor, } from '@flax/core/bindings';
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
export { StatelessWidget, StatefulWidget, State, type WidgetOptions, } from './components.js';
