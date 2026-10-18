import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PixelFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PixelFormat">, Readonly<{
    "__flaxBound:dart:ui::PixelFormat": readonly [];
}> {
    readonly __PixelFormat: unique symbol;
    readonly [_flaxDartTypeValue]: PixelFormat;
    readonly name: string;
    readonly index: number;
}
export declare const PixelFormat: Readonly<{
    rgba8888: PixelFormat;
    bgra8888: PixelFormat;
    rgbaFloat32: PixelFormat;
    rFloat32: PixelFormat;
    values: readonly PixelFormat[];
} & _FlaxInstanceType<PixelFormat> & _FlaxDartType<PixelFormat, readonly ["class", "flax.core/sdk_dart_ui#type:PixelFormat", readonly [], false]>>;
