import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DatePickerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/date.dart::DatePickerMode">, Readonly<{
    "__flaxBound:package:flutter/src/material/date.dart::DatePickerMode": readonly [];
}> {
    readonly __DatePickerMode: unique symbol;
    readonly [_flaxDartTypeValue]: DatePickerMode;
    readonly name: string;
    readonly index: number;
}
export declare const DatePickerMode: Readonly<{
    day: DatePickerMode;
    year: DatePickerMode;
    values: readonly DatePickerMode[];
} & _FlaxInstanceType<DatePickerMode> & _FlaxDartType<DatePickerMode, readonly ["class", "flax.core/sdk_material#type:DatePickerMode", readonly [], false]>>;
