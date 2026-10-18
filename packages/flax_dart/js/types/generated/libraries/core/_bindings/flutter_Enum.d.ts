import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Enum extends Readonly<{
    "__flaxBound:dart:core::Enum": readonly [];
}> {
    readonly __Enum: unique symbol;
    readonly [_flaxDartTypeValue]: Enum;
    readonly index: number;
}
export declare namespace _EnumFactory {
    function _flaxDefault_compareByIndex<T extends Enum = Enum>(value1: (T | DartInput<T>), value2: (T | DartInput<T>)): number;
    export const compareByIndex: _FlaxDartCallable<typeof _flaxDefault_compareByIndex, _FlaxSignature0>;
    export {};
}
export declare namespace _EnumFactory {
    function _flaxDefault_compareByName<T extends Enum = Enum>(value1: (T | DartInput<T>), value2: (T | DartInput<T>)): number;
    export const compareByName: _FlaxDartCallable<typeof _flaxDefault_compareByName, _FlaxSignature1>;
    export {};
}
export declare const Enum: typeof _EnumFactory & _FlaxInstanceType<Enum> & _FlaxDartType<Enum, readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Enum] ? (value1: (_Selected0 | DartInput<_Selected0>), value2: (_Selected0 | DartInput<_Selected0>)) => number : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Enum] ? (value1: (_Selected0 | DartInput<_Selected0>), value2: (_Selected0 | DartInput<_Selected0>)) => number : never : never;
}
export {};
