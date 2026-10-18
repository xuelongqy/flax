import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SchedulerServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/scheduler/service_extensions.dart::SchedulerServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/service_extensions.dart::SchedulerServiceExtensions": readonly [];
}> {
    readonly __SchedulerServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: SchedulerServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const SchedulerServiceExtensions: Readonly<{
    timeDilation: SchedulerServiceExtensions;
    values: readonly SchedulerServiceExtensions[];
} & _FlaxInstanceType<SchedulerServiceExtensions> & _FlaxDartType<SchedulerServiceExtensions, readonly ["class", "flax.core/sdk_scheduler#type:SchedulerServiceExtensions", readonly [], false]>>;
