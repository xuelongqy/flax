import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoDatePickerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoDatePickerMode">, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoDatePickerMode": readonly [];
}> {
    readonly __CupertinoDatePickerMode: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoDatePickerMode;
    readonly name: string;
    readonly index: number;
}
export declare const CupertinoDatePickerMode: Readonly<{
    time: CupertinoDatePickerMode;
    date: CupertinoDatePickerMode;
    dateAndTime: CupertinoDatePickerMode;
    monthYear: CupertinoDatePickerMode;
    values: readonly CupertinoDatePickerMode[];
} & _FlaxInstanceType<CupertinoDatePickerMode> & _FlaxDartType<CupertinoDatePickerMode, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoDatePickerMode", readonly [], false]>>;
