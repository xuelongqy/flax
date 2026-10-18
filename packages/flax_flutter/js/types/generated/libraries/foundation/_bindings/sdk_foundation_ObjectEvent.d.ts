import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ObjectEvent extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
}> {
    readonly __ObjectEvent: unique symbol;
    readonly [_flaxDartTypeValue]: ObjectEvent;
}
export interface ObjectEvent {
    readonly [_flaxDartTypeValue]: ObjectEvent;
    get object(): {};
}
export declare abstract class ObjectEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObjectEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectEvent", readonly [], false];
    constructor(options: {
        object: {};
    });
    abstract toMap(): DartMap<{}, DartMap<string, {}>>;
}
export declare namespace ObjectEvent {
    function implement(args: [options: {
        object: {};
    }], implementation: {
        toMap: (() => DartMapInput<{}, DartMap<string, {}>, {}, DartMapInput<string, {}, string, {}>>);
    }): ObjectEvent;
}
