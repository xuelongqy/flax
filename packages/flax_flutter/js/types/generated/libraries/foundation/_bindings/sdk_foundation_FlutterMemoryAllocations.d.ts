import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterMemoryAllocations extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::FlutterMemoryAllocations": readonly [];
}> {
    readonly __FlutterMemoryAllocations: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterMemoryAllocations;
    readonly hasListeners: boolean;
    addListener(listener: ((event: upstream0.ObjectEvent) => void)): void;
    removeListener(listener: ((event: upstream0.ObjectEvent) => void)): void;
    dispatchObjectEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [];
    }>): void;
    dispatchObjectCreated(options: {
        className: string;
        library: string;
        object: {};
    }): void;
    dispatchObjectDisposed(options: {
        object: {};
    }): void;
}
declare const _FlutterMemoryAllocationsFactory: {
    readonly instance: FlutterMemoryAllocations;
};
export declare const FlutterMemoryAllocations: typeof _FlutterMemoryAllocationsFactory & _FlaxInstanceType<FlutterMemoryAllocations> & _FlaxDartType<FlutterMemoryAllocations, readonly ["class", "flax.core/sdk_foundation#type:FlutterMemoryAllocations", readonly [], false]>;
export {};
