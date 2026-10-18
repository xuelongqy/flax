import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Gradient extends Omit<upstream0.Shader, typeof _flaxDartTypeValue | "debugDisposed" | "dispose" | "__flaxBound:dart:ui::Gradient" | "__flaxBound:dart:ui::Shader">, Readonly<{
    "__flaxBound:dart:ui::Gradient": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Shader": readonly [];
}> {
    readonly __Gradient: unique symbol;
    readonly [_flaxDartTypeValue]: Gradient;
    readonly debugDisposed: boolean;
    dispose(): void;
}
export declare namespace _GradientFactory {
    function linear(from: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, to: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, colors: DartListInput<upstream2.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, matrix4?: globalThis.Float64Array | null): Gradient;
}
export declare namespace _GradientFactory {
    function radial(center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, radius: number, colors: DartListInput<upstream2.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, matrix4?: globalThis.Float64Array | null, focal?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, focalRadius?: number): Gradient;
}
export declare namespace _GradientFactory {
    function sweep(center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, colors: DartListInput<upstream2.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, startAngle?: number, endAngle?: number, matrix4?: globalThis.Float64Array | null): Gradient;
}
export declare const Gradient: typeof _GradientFactory & _FlaxInstanceType<Gradient> & _FlaxDartType<Gradient, readonly ["class", "flax.core/sdk_dart_ui#type:Gradient", readonly [], false]>;
