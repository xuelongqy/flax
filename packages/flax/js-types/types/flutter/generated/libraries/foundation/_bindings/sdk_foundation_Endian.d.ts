import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Endian extends Readonly<{
    "__flaxBound:dart:typed_data::Endian": readonly [];
}> {
    readonly __Endian: unique symbol;
    readonly [_flaxDartTypeValue]: Endian;
}
declare const _EndianFactory: {
    readonly big: Endian;
    readonly little: Endian;
    readonly host: Endian;
};
export declare const Endian: typeof _EndianFactory & _FlaxInstanceType<Endian> & _FlaxDartType<Endian, readonly ["class", "flax.core/sdk_foundation#type:Endian", readonly [], false]>;
export {};
