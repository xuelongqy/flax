import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BitField<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/bitfield.dart::BitField": readonly [T];
}> {
    readonly __BitField: unique symbol;
    readonly [_flaxDartTypeValue]: BitField<T>;
    reset(value?: boolean): void;
    operatorGetIndex(index: (T | DartInput<T>)): boolean;
    operatorSetIndex(index: (T | DartInput<T>), value: boolean): void;
}
export declare function _BitFieldFactory<T extends unknown | null = unknown | null>(length: number): BitField<T>;
export declare function _BitFieldFactory(length: number): BitField<unknown | null>;
export declare namespace _BitFieldFactory {
    function filled<T extends unknown | null = unknown | null>(length: number, value: boolean): BitField<T>;
    function filled(length: number, value: boolean): BitField<unknown | null>;
}
export declare namespace _BitFieldFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        reset: ((value?: boolean) => void);
        operatorGetIndex: ((index: T) => boolean);
        operatorSetIndex: ((index: T, value: boolean) => void);
    }): BitField<T>;
}
export declare const BitField: typeof _BitFieldFactory & _FlaxInstanceType<BitField<unknown | null>> & _FlaxDartType<BitField<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:BitField", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (length: number): BitField<_Selected0>;
        filled: (length: number, value: boolean) => BitField<_Selected0>;
        readonly prototype: BitField<_Selected0>;
        implement(args: readonly [], implementation: Partial<BitField<_Selected0>>): BitField<_Selected0>;
    } & _FlaxInstanceType<BitField<_Selected0>> & _FlaxDartType<BitField<_Selected0>> : never : never;
}
export {};
