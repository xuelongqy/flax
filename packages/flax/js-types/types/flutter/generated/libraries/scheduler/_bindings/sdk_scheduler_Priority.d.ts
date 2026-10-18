import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Priority extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
}> {
    readonly __Priority: unique symbol;
    readonly [_flaxDartTypeValue]: Priority;
    readonly value: number;
    operatorAdd(offset: number): Priority;
    operatorSubtract(offset: number): Priority;
}
declare const _PriorityFactory: {
    readonly idle: Priority;
    readonly animation: Priority;
    readonly touch: Priority;
    readonly kMaxOffset: number;
};
export declare const Priority: typeof _PriorityFactory & _FlaxInstanceType<Priority> & _FlaxDartType<Priority, readonly ["class", "flax.core/sdk_scheduler#type:Priority", readonly [], false]>;
export {};
