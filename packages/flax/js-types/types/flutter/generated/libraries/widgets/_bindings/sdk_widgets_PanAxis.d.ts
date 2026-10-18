import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PanAxis extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::PanAxis">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::PanAxis": readonly [];
}> {
    readonly __PanAxis: unique symbol;
    readonly [_flaxDartTypeValue]: PanAxis;
    readonly name: string;
    readonly index: number;
}
export declare const PanAxis: Readonly<{
    horizontal: PanAxis;
    vertical: PanAxis;
    aligned: PanAxis;
    free: PanAxis;
    values: readonly PanAxis[];
} & _FlaxInstanceType<PanAxis> & _FlaxDartType<PanAxis, readonly ["class", "flax.core/sdk_widgets#type:PanAxis", readonly [], false]>>;
