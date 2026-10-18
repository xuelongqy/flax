import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ObjectCreated extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
}> {
    readonly __ObjectCreated: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectCreated;
}
export interface ObjectCreated {
    readonly [_flaxDartTypeValue]: ObjectCreated;
    toMap(): DartMap<{}, DartMap<string, {}>>;
    get library(): string;
    get className(): string;
    get object(): {};
}
export declare abstract class ObjectCreated extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectCreated>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectCreated;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectCreated", readonly [], false];
    constructor(options: {
        library: string;
        className: string;
        object: {};
    });
}
export declare namespace ObjectCreated {
    function implement(args: [options: {
        library: string;
        className: string;
        object: {};
    }], implementation: {}): ObjectCreated;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "library" | "className" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
export {};
