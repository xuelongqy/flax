import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_RuneIterator';
import '@flax/dart/core/_bindings/flutter_RuneIterator';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Runes extends Readonly<{
    "__flaxBound:dart:core::Runes": readonly [];
}>, Omit<DartIterable<number>, typeof _flaxDartTypeValue | "string" | "length" | "iterator"> {
    readonly __Runes: unique symbol;
    readonly string: string;
    readonly length: number;
    readonly iterator: upstream0.RuneIterator;
}
declare function _RunesFactory(string: string): Runes;
export declare const Runes: typeof _RunesFactory & _FlaxInstanceType<Runes> & _FlaxDartType<Runes, readonly ["class", "flax.core/flutter#type:Runes", readonly [], false]>;
export {};
