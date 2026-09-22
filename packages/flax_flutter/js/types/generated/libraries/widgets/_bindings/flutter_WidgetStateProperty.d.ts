import { type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T];
}> {
    readonly __WidgetStateProperty: unique symbol;
    resolve(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): T;
}
export declare namespace WidgetStateProperty {
    function resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream0.WidgetState>) => T)): WidgetStateProperty<T>;
}
