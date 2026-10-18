import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StandardComponentType';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueKey<T extends unknown | null = unknown | null> extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __ValueKey: unique symbol;
    readonly [_flaxDartTypeValue]: ValueKey<T>;
    readonly value: T;
    toString(): string;
}
export declare function _ValueKeyFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): ValueKey<T>;
export declare function _ValueKeyFactory(value: unknown | null): ValueKey<unknown | null>;
export declare const ValueKey: typeof _ValueKeyFactory & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (value: (_Selected0 | DartInput<_Selected0>)): ValueKey<_Selected0>;
        readonly prototype: ValueKey<_Selected0>;
    } & _FlaxInstanceType<ValueKey<_Selected0>> & _FlaxDartType<ValueKey<_Selected0>> : never : never;
}
export {};
