import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ObjectCreated extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
}> {
    readonly __ObjectCreated: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectCreated;
    readonly object: {};
    readonly library: string;
    readonly className: string;
    toMap(): DartMap<{}, DartMap<string, {}>>;
}
export declare function _ObjectCreatedFactory(options: {
    library: string;
    className: string;
    object: {};
}): ObjectCreated;
export interface _ObjectCreatedNative extends ObjectCreated {
    readonly [_flaxDartTypeValue]: _ObjectCreatedNative;
    toMap(): DartMap<{}, DartMap<string, {}>>;
    get library(): string;
    get className(): string;
    get object(): {};
}
export declare abstract class _ObjectCreatedNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectCreated>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectCreated;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectCreated", readonly [], false];
    constructor(options: {
        library: string;
        className: string;
        object: {};
    });
}
export declare namespace _ObjectCreatedFactory {
    function implement(args: [options: {
        library: string;
        className: string;
        object: {};
    }], implementation: {}): ObjectCreated;
}
declare const _ObjectCreatedBinding: typeof _ObjectCreatedFactory & (new (options: {
    library: string;
    className: string;
    object: {};
}) => _ObjectCreatedNative);
export declare const ObjectCreated: typeof _ObjectCreatedBinding & _FlaxInstanceType<ObjectCreated> & _FlaxDartType<ObjectCreated, readonly ["class", "flax.core/sdk_foundation#type:ObjectCreated", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "library" | "className" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
export {};
