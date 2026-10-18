import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisplayFeatureState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::DisplayFeatureState">, Readonly<{
    "__flaxBound:dart:ui::DisplayFeatureState": readonly [];
}> {
    readonly __DisplayFeatureState: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayFeatureState;
    readonly name: string;
    readonly index: number;
}
export declare const DisplayFeatureState: Readonly<{
    unknown: DisplayFeatureState;
    postureFlat: DisplayFeatureState;
    postureHalfOpened: DisplayFeatureState;
    values: readonly DisplayFeatureState[];
} & _FlaxInstanceType<DisplayFeatureState> & _FlaxDartType<DisplayFeatureState, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeatureState", readonly [], false]>>;
