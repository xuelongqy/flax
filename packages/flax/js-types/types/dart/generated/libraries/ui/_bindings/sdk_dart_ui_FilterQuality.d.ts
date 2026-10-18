import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FilterQuality extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::FilterQuality">, Readonly<{
    "__flaxBound:dart:ui::FilterQuality": readonly [];
}> {
    readonly __FilterQuality: unique symbol;
    readonly [_flaxDartTypeValue]: FilterQuality;
    readonly name: string;
    readonly index: number;
}
export declare const FilterQuality: Readonly<{
    none: FilterQuality;
    low: FilterQuality;
    medium: FilterQuality;
    high: FilterQuality;
    values: readonly FilterQuality[];
} & _FlaxInstanceType<FilterQuality> & _FlaxDartType<FilterQuality, readonly ["class", "flax.core/sdk_dart_ui#type:FilterQuality", readonly [], false]>>;
