import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SchedulerPhase extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerPhase">, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerPhase": readonly [];
}> {
    readonly __SchedulerPhase: unique symbol;
    readonly [_flaxDartTypeValue]: SchedulerPhase;
    readonly name: string;
    readonly index: number;
}
export declare const SchedulerPhase: Readonly<{
    idle: SchedulerPhase;
    transientCallbacks: SchedulerPhase;
    midFrameMicrotasks: SchedulerPhase;
    persistentCallbacks: SchedulerPhase;
    postFrameCallbacks: SchedulerPhase;
    values: readonly SchedulerPhase[];
} & _FlaxInstanceType<SchedulerPhase> & _FlaxDartType<SchedulerPhase, readonly ["class", "flax.core/sdk_scheduler#type:SchedulerPhase", readonly [], false]>>;
