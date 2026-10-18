import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RadialGradient extends Omit<upstream0.Gradient, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
}> {
    readonly __RadialGradient: unique symbol;
    readonly [_flaxDartTypeValue]: RadialGradient;
}
export interface RadialGradient {
    readonly [_flaxDartTypeValue]: RadialGradient;
    createShader(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Shader;
    scale(factor: number): RadialGradient;
    withOpacity(opacity: number): RadialGradient;
    fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): RadialGradient;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    toString(): string;
    get center(): upstream1.AlignmentGeometry;
    get radius(): number;
    get tileMode(): upstream3.TileMode;
    get focal(): upstream1.AlignmentGeometry | null;
    get focalRadius(): number;
    get colors(): DartList<upstream2.Color>;
    get stops(): DartList<number> | null;
    get transform(): upstream4.GradientTransform | null;
}
export declare abstract class RadialGradient extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RadialGradient>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RadialGradient;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:RadialGradient", readonly [], false];
    constructor(options: {
        center?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        radius?: number | undefined;
        colors: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        tileMode?: upstream3.TileMode | undefined;
        focal?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        focalRadius?: number | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    });
}
export declare namespace RadialGradient {
    function implement(args: [options: {
        center?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        radius?: number | undefined;
        colors: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        tileMode?: upstream3.TileMode | undefined;
        focal?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        focalRadius?: number | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    }], implementation: {}): RadialGradient;
}
export declare namespace RadialGradient {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }>) | null, t: number): RadialGradient | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "colors" | "stops" | "transform" | "center" | "radius" | "tileMode" | "focal" | "focalRadius" | "createShader" | "scale" | "withOpacity" | "fromColor" | "lerpFrom" | "lerpTo" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient" | "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient";
export {};
