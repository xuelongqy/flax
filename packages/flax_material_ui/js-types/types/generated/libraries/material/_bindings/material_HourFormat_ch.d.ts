import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HourFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/time.dart::HourFormat">, Readonly<{
    "__flaxBound:package:material_ui/src/time.dart::HourFormat": readonly [];
}> {
    readonly __HourFormat: unique symbol;
    readonly [_flaxDartTypeValue]: HourFormat;
    readonly name: string;
    readonly index: number;
}
export declare const HourFormat: Readonly<{
    HH: HourFormat;
    H: HourFormat;
    h: HourFormat;
    values: readonly HourFormat[];
} & _FlaxInstanceType<HourFormat> & _FlaxDartType<HourFormat, readonly ["class", "flax.material/material#type:HourFormat", readonly [], false]>>;
