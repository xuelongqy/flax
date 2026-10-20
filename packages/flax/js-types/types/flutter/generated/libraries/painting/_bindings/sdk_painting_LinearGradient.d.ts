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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LinearGradient extends Omit<upstream0.Gradient, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
}> {
    readonly __LinearGradient: unique symbol;
    readonly [_flaxDartTypeValue]: LinearGradient;
    readonly colors: DartList<upstream2.Color>;
    readonly stops: DartList<number> | null;
    readonly transform: upstream4.GradientTransform | null;
    readonly begin: upstream1.AlignmentGeometry;
    readonly end: upstream1.AlignmentGeometry;
    readonly tileMode: upstream3.TileMode;
    createShader(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Shader;
    scale(factor: number): LinearGradient;
    withOpacity(opacity: number): LinearGradient;
    fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): LinearGradient;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    toString(): string;
}
export declare function _LinearGradientFactory(options: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    colors: DartListInput<upstream2.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>;
    stops?: DartListInput<number, number> | null | undefined;
    tileMode?: upstream3.TileMode | undefined;
    transform?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
    }> | null | undefined;
}): LinearGradient;
export interface _LinearGradientNative extends LinearGradient {
    readonly [_flaxDartTypeValue]: _LinearGradientNative;
    createShader(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Shader;
    scale(factor: number): LinearGradient;
    withOpacity(opacity: number): LinearGradient;
    fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): LinearGradient;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): upstream0.Gradient | null;
    toString(): string;
    get begin(): upstream1.AlignmentGeometry;
    get end(): upstream1.AlignmentGeometry;
    get tileMode(): upstream3.TileMode;
    get colors(): DartList<upstream2.Color>;
    get stops(): DartList<number> | null;
    get transform(): upstream4.GradientTransform | null;
}
export declare abstract class _LinearGradientNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearGradient>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LinearGradient;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearGradient", readonly [], false];
    constructor(options: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        colors: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        tileMode?: upstream3.TileMode | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _LinearGradientFactory {
    function implement(args: [options: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        colors: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        tileMode?: upstream3.TileMode | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    }], implementation: {}): LinearGradient;
}
declare const _LinearGradientBinding: typeof _LinearGradientFactory & (new (options: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    colors: DartListInput<upstream2.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>;
    stops?: DartListInput<number, number> | null | undefined;
    tileMode?: upstream3.TileMode | undefined;
    transform?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
    }> | null | undefined;
}) => _LinearGradientNative);
export declare namespace _LinearGradientFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }>) | null, t: number): LinearGradient | null;
}
export declare const LinearGradient: typeof _LinearGradientBinding & _FlaxInstanceType<LinearGradient> & _FlaxDartType<LinearGradient, readonly ["class", "flax.core/sdk_painting#type:LinearGradient", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "colors" | "stops" | "transform" | "begin" | "end" | "tileMode" | "createShader" | "scale" | "withOpacity" | "fromColor" | "lerpFrom" | "lerpTo" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient" | "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient";
export {};
