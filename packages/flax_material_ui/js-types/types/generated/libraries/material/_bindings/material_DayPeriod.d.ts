import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DayPeriod extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/time.dart::DayPeriod">, Readonly<{
    "__flaxBound:package:material_ui/src/time.dart::DayPeriod": readonly [];
}> {
    readonly __DayPeriod: unique symbol;
    readonly [_flaxDartTypeValue]: DayPeriod;
    readonly name: string;
    readonly index: number;
}
export declare const DayPeriod: Readonly<{
    am: DayPeriod;
    pm: DayPeriod;
    values: readonly DayPeriod[];
} & _FlaxInstanceType<DayPeriod> & _FlaxDartType<DayPeriod, readonly ["class", "flax.material/material#type:DayPeriod", readonly [], false]>>;
