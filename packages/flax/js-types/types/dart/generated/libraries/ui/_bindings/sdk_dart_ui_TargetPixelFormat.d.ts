import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TargetPixelFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TargetPixelFormat">, Readonly<{
    "__flaxBound:dart:ui::TargetPixelFormat": readonly [];
}> {
    readonly __TargetPixelFormat: unique symbol;
    readonly [_flaxDartTypeValue]: TargetPixelFormat;
    readonly name: string;
    readonly index: number;
}
export declare const TargetPixelFormat: Readonly<{
    dontCare: TargetPixelFormat;
    rgbaFloat32: TargetPixelFormat;
    rFloat32: TargetPixelFormat;
    values: readonly TargetPixelFormat[];
} & _FlaxInstanceType<TargetPixelFormat> & _FlaxDartType<TargetPixelFormat, readonly ["class", "flax.core/sdk_dart_ui#type:TargetPixelFormat", readonly [], false]>>;
