import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimeOfDayFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/time.dart::TimeOfDayFormat">, Readonly<{
    "__flaxBound:package:flutter/src/material/time.dart::TimeOfDayFormat": readonly [];
}> {
    readonly __TimeOfDayFormat: unique symbol;
    readonly [_flaxDartTypeValue]: TimeOfDayFormat;
    readonly name: string;
    readonly index: number;
}
export declare const TimeOfDayFormat: Readonly<{
    HH_colon_mm: TimeOfDayFormat;
    HH_dot_mm: TimeOfDayFormat;
    frenchCanadian: TimeOfDayFormat;
    H_colon_mm: TimeOfDayFormat;
    h_colon_mm_space_a: TimeOfDayFormat;
    a_space_h_colon_mm: TimeOfDayFormat;
    values: readonly TimeOfDayFormat[];
} & _FlaxInstanceType<TimeOfDayFormat> & _FlaxDartType<TimeOfDayFormat, readonly ["class", "flax.core/sdk_material#type:TimeOfDayFormat", readonly [], false]>>;
