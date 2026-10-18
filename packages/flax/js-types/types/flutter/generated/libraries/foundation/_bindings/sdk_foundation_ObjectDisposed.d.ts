import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ObjectDisposed extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
}> {
    readonly __ObjectDisposed: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectDisposed;
}
export interface ObjectDisposed {
    readonly [_flaxDartTypeValue]: ObjectDisposed;
    toMap(): DartMap<{}, DartMap<string, {}>>;
    get object(): {};
}
export declare abstract class ObjectDisposed extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectDisposed>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectDisposed;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false];
    constructor(options: {
        object: {};
    });
}
export declare namespace ObjectDisposed {
    function implement(args: [options: {
        object: {};
    }], implementation: {}): ObjectDisposed;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
export {};
