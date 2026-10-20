import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ObjectDisposed extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
}> {
    readonly __ObjectDisposed: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectDisposed;
    readonly object: {};
    toMap(): DartMap<{}, DartMap<string, {}>>;
}
export declare function _ObjectDisposedFactory(options: {
    object: {};
}): ObjectDisposed;
export interface _ObjectDisposedNative extends ObjectDisposed {
    readonly [_flaxDartTypeValue]: _ObjectDisposedNative;
    toMap(): DartMap<{}, DartMap<string, {}>>;
    get object(): {};
}
export declare abstract class _ObjectDisposedNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectDisposed>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectDisposed;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false];
    constructor(options: {
        object: {};
    });
}
export declare namespace _ObjectDisposedFactory {
    function implement(args: [options: {
        object: {};
    }], implementation: {}): ObjectDisposed;
}
declare const _ObjectDisposedBinding: typeof _ObjectDisposedFactory & (new (options: {
    object: {};
}) => _ObjectDisposedNative);
export declare const ObjectDisposed: typeof _ObjectDisposedBinding & _FlaxInstanceType<ObjectDisposed> & _FlaxDartType<ObjectDisposed, readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
export {};
