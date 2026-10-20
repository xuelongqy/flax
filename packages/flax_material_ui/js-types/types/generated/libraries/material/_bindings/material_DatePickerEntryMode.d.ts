import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DatePickerEntryMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/date.dart::DatePickerEntryMode">, Readonly<{
    "__flaxBound:package:material_ui/src/date.dart::DatePickerEntryMode": readonly [];
}> {
    readonly __DatePickerEntryMode: unique symbol;
    readonly [_flaxDartTypeValue]: DatePickerEntryMode;
    readonly name: string;
    readonly index: number;
}
export declare const DatePickerEntryMode: Readonly<{
    calendar: DatePickerEntryMode;
    input: DatePickerEntryMode;
    calendarOnly: DatePickerEntryMode;
    inputOnly: DatePickerEntryMode;
    values: readonly DatePickerEntryMode[];
} & _FlaxInstanceType<DatePickerEntryMode> & _FlaxDartType<DatePickerEntryMode, readonly ["class", "flax.material/material#type:DatePickerEntryMode", readonly [], false]>>;
