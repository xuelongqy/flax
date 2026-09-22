import { type ComponentWidget, type Widget } from '@flax/core/bindings';
import type { ValueKey } from './generated/libraries/foundation/_bindings/flutter_ValueKey.js';
import type { BuildContext } from './generated/libraries/widgets/_bindings/flutter_BuildContext.js';
import { StateLifecycle } from './generated/libraries/widgets/components.js';
export interface WidgetOptions {
    readonly key?: ValueKey | null | undefined;
}
/** Immutable configuration. Each mount gets its own real Flutter Element. */
export declare abstract class StatelessWidget implements ComponentWidget {
    readonly kind: 'component';
    readonly key: ValueKey | null;
    constructor(options?: WidgetOptions);
    abstract build(context: BuildContext): Widget;
}
export declare abstract class StatefulWidget implements ComponentWidget {
    readonly kind: 'component';
    readonly key: ValueKey | null;
    constructor(options?: WidgetOptions);
    abstract createState(): State;
}
/** Paired with a Flutter-owned State only when createState returns. */
export declare abstract class State<T extends StatefulWidget = StatefulWidget> extends StateLifecycle<T> {
    constructor();
    get widget(): T;
    get context(): BuildContext;
    get mounted(): boolean;
    setState(callback: () => void): void;
    protected invokeSuper(name: string, args: readonly unknown[]): unknown;
}
