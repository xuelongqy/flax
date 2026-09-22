import type { Widget } from '@flax/core/bindings';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export declare abstract class StateLifecycle<T> {
    protected abstract invokeSuper(name: string, args: readonly unknown[]): unknown;
    initState(): void;
    didUpdateWidget(oldWidget: T): void;
    reassemble(): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    abstract build(context: upstream1.BuildContext): Widget;
    didChangeDependencies(): void;
}
