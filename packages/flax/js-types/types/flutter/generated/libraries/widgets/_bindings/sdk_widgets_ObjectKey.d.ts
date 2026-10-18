import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ObjectKey extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __ObjectKey: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectKey;
}
export interface ObjectKey {
    readonly [_flaxDartTypeValue]: ObjectKey;
    toString(): string;
    get value(): unknown | null;
}
export declare abstract class ObjectKey extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ObjectKey", readonly [], false];
    constructor(value: unknown | null);
}
export declare namespace ObjectKey {
    function implement(args: [value: unknown | null], implementation: {}): ObjectKey;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
export {};
