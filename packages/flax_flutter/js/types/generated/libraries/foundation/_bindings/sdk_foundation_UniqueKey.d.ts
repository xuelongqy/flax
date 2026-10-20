import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniqueKey extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::UniqueKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __UniqueKey: unique symbol;
    readonly [_flaxDartTypeValue]: UniqueKey;
    toString(): string;
}
export declare function _UniqueKeyFactory(): UniqueKey;
export interface _UniqueKeyNative extends UniqueKey {
    readonly [_flaxDartTypeValue]: _UniqueKeyNative;
    toString(): string;
}
export declare abstract class _UniqueKeyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UniqueKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UniqueKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:UniqueKey", readonly [], false];
    constructor();
}
export declare namespace _UniqueKeyFactory {
    function implement(args: [], implementation: {}): UniqueKey;
}
declare const _UniqueKeyBinding: typeof _UniqueKeyFactory & (new () => _UniqueKeyNative);
export declare const UniqueKey: typeof _UniqueKeyBinding & _FlaxInstanceType<UniqueKey> & _FlaxDartType<UniqueKey, readonly ["class", "flax.core/sdk_foundation#type:UniqueKey", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toString" | "__flaxBound:package:flutter/src/foundation/key.dart::UniqueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
export {};
