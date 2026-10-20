import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimePickerEntryMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/time_picker.dart::TimePickerEntryMode">, Readonly<{
    "__flaxBound:package:material_ui/src/time_picker.dart::TimePickerEntryMode": readonly [];
}> {
    readonly __TimePickerEntryMode: unique symbol;
    readonly [_flaxDartTypeValue]: TimePickerEntryMode;
    readonly name: string;
    readonly index: number;
}
export declare const TimePickerEntryMode: Readonly<{
    dial: TimePickerEntryMode;
    input: TimePickerEntryMode;
    dialOnly: TimePickerEntryMode;
    inputOnly: TimePickerEntryMode;
    values: readonly TimePickerEntryMode[];
} & _FlaxInstanceType<TimePickerEntryMode> & _FlaxDartType<TimePickerEntryMode, readonly ["class", "flax.material/material#type:TimePickerEntryMode", readonly [], false]>>;
