import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueKey<T extends unknown | null = unknown | null> extends upstream0.LocalKey, upstream1.Key, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T];
}> {
    readonly __ValueKey: unique symbol;
    readonly value: T;
}
declare function _ValueKeyFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): ValueKey<T>;
declare function _ValueKeyFactory(value: unknown | null): ValueKey<unknown | null>;
export declare const ValueKey: typeof _ValueKeyFactory & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (value: (_Selected0 | DartInput<_Selected0>)): ValueKey<_Selected0>;
        readonly prototype: ValueKey<_Selected0>;
    } & _FlaxInstanceType<ValueKey<_Selected0>> & _FlaxDartType<ValueKey<_Selected0>> : never : never;
}
export {};
