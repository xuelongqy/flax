import { flaxDartTypeValue, type ComponentWidget, type Widget } from '@flax/core/bindings';
import type { State as NativeState } from './generated/libraries/widgets/_bindings/components_State.js';
import type { ValueKey } from '@flax/flutter/foundation';
import type { BuildContext } from '@flax/flutter/widgets';
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
export declare abstract class State<T extends Widget = StatefulWidget> {
    readonly [flaxDartTypeValue]: NativeState;
    constructor();
    get widget(): T;
    get context(): BuildContext;
    get mounted(): boolean;
    setState(callback: () => void): void;
    initState(): void;
    didChangeDependencies(): void;
    didUpdateWidget(oldWidget: T): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    reassemble(): void;
    abstract build(context: BuildContext): Widget;
    protected invokeSuper(name: string, args: readonly unknown[]): unknown;
}
/** Native State reference token, independent of the JS lifecycle base above. */
export { State as DartState } from './generated/libraries/widgets/_bindings/components_State.js';
