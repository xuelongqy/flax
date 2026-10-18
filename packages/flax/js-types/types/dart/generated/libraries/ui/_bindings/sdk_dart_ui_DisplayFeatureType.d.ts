import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisplayFeatureType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::DisplayFeatureType">, Readonly<{
    "__flaxBound:dart:ui::DisplayFeatureType": readonly [];
}> {
    readonly __DisplayFeatureType: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayFeatureType;
    readonly name: string;
    readonly index: number;
}
export declare const DisplayFeatureType: Readonly<{
    unknown: DisplayFeatureType;
    fold: DisplayFeatureType;
    hinge: DisplayFeatureType;
    cutout: DisplayFeatureType;
    values: readonly DisplayFeatureType[];
} & _FlaxInstanceType<DisplayFeatureType> & _FlaxDartType<DisplayFeatureType, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeatureType", readonly [], false]>>;
