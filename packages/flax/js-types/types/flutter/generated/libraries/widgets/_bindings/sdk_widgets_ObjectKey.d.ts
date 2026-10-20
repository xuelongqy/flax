import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ObjectKey extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __ObjectKey: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectKey;
    readonly value: unknown | null;
    toString(): string;
}
export declare function _ObjectKeyFactory(value: unknown | null): ObjectKey;
export interface _ObjectKeyNative extends ObjectKey {
    readonly [_flaxDartTypeValue]: _ObjectKeyNative;
    toString(): string;
    get value(): unknown | null;
}
export declare abstract class _ObjectKeyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ObjectKey", readonly [], false];
    constructor(value: unknown | null);
}
export declare namespace _ObjectKeyFactory {
    function implement(args: [value: unknown | null], implementation: {}): ObjectKey;
}
declare const _ObjectKeyBinding: typeof _ObjectKeyFactory & (new (value: unknown | null) => _ObjectKeyNative);
export declare const ObjectKey: typeof _ObjectKeyBinding & _FlaxInstanceType<ObjectKey> & _FlaxDartType<ObjectKey, readonly ["class", "flax.core/sdk_widgets#type:ObjectKey", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
export {};
