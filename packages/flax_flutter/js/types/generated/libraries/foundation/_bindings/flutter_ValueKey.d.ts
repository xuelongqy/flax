import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueKey<T extends unknown | null = unknown | null> extends upstream0.LocalKey, upstream1.Key, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T];
}> {
    readonly __ValueKey: unique symbol;
    readonly value: T;
}
declare function _ValueKeyFactory(value: unknown | null): ValueKey<unknown | null>;
export declare const ValueKey: typeof _ValueKeyFactory & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["String", null, readonly [], false]];
    value: {
        (value: string): ValueKey<string>;
        readonly prototype: ValueKey<string>;
    } & _FlaxInstanceType<ValueKey<string>> & _FlaxDartType<ValueKey<string>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["String", null, readonly [], false]], false]>;
} | {
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        (value: unknown | null): ValueKey<unknown | null>;
        readonly prototype: ValueKey<unknown | null>;
    } & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]>;
} | {
    arguments: readonly [readonly ["int", null, readonly [], false]];
    value: {
        (value: number): ValueKey<number>;
        readonly prototype: ValueKey<number>;
    } & _FlaxInstanceType<ValueKey<number>> & _FlaxDartType<ValueKey<number>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["int", null, readonly [], false]], false]>;
}>;
export {};
