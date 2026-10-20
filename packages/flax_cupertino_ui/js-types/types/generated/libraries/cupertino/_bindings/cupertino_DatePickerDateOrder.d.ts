import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DatePickerDateOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/localizations.dart::DatePickerDateOrder">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/localizations.dart::DatePickerDateOrder": readonly [];
}> {
    readonly __DatePickerDateOrder: unique symbol;
    readonly [_flaxDartTypeValue]: DatePickerDateOrder;
    readonly name: string;
    readonly index: number;
}
export declare const DatePickerDateOrder: Readonly<{
    dmy: DatePickerDateOrder;
    mdy: DatePickerDateOrder;
    ymd: DatePickerDateOrder;
    ydm: DatePickerDateOrder;
    values: readonly DatePickerDateOrder[];
} & _FlaxInstanceType<DatePickerDateOrder> & _FlaxDartType<DatePickerDateOrder, readonly ["class", "flax.cupertino/cupertino#type:DatePickerDateOrder", readonly [], false]>>;
