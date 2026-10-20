import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DatePickerDateTimeOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/localizations.dart::DatePickerDateTimeOrder">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/localizations.dart::DatePickerDateTimeOrder": readonly [];
}> {
    readonly __DatePickerDateTimeOrder: unique symbol;
    readonly [_flaxDartTypeValue]: DatePickerDateTimeOrder;
    readonly name: string;
    readonly index: number;
}
export declare const DatePickerDateTimeOrder: Readonly<{
    date_time_dayPeriod: DatePickerDateTimeOrder;
    date_dayPeriod_time: DatePickerDateTimeOrder;
    time_dayPeriod_date: DatePickerDateTimeOrder;
    dayPeriod_time_date: DatePickerDateTimeOrder;
    values: readonly DatePickerDateTimeOrder[];
} & _FlaxInstanceType<DatePickerDateTimeOrder> & _FlaxDartType<DatePickerDateTimeOrder, readonly ["class", "flax.cupertino/cupertino#type:DatePickerDateTimeOrder", readonly [], false]>>;
