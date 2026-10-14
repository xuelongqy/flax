import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T];
}> {
    readonly __WidgetStateProperty: unique symbol;
    resolve(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): T;
}
declare namespace _WidgetStatePropertyFactory {
    function _flaxDefault_resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream0.WidgetState>) => (T | DartInput<T>))): WidgetStateProperty<T>;
    export const resolveWith: _FlaxDartCallable<typeof _flaxDefault_resolveWith, _FlaxSignature1>;
    export {};
}
export declare const WidgetStateProperty: typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: WidgetStateProperty<_Selected0>;
    } & _FlaxInstanceType<WidgetStateProperty<_Selected0>> & _FlaxDartType<WidgetStateProperty<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (callback: ((states: DartSet<upstream0.WidgetState>) => (_Selected0 | DartInput<_Selected0>))) => WidgetStateProperty<_Selected0> : never : never;
}
export {};
