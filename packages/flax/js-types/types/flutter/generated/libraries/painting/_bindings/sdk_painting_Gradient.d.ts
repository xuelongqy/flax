import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Gradient extends Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
}> {
    readonly __Gradient: unique symbol;
    readonly [_flaxDartTypeValue]: Gradient;
}
export interface Gradient {
    readonly [_flaxDartTypeValue]: Gradient;
    fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): Gradient;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): Gradient | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): Gradient | null;
    get colors(): DartList<upstream0.Color>;
    get stops(): DartList<number> | null;
    get transform(): upstream1.GradientTransform | null;
}
export declare abstract class Gradient extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Gradient>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Gradient;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Gradient", readonly [], false];
    constructor(options: {
        colors: DartListInput<upstream0.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    });
    abstract createShader(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream4.TextDirection | null | undefined;
    }): upstream2.Shader;
    abstract scale(factor: number): Gradient;
    abstract withOpacity(opacity: number): Gradient;
}
export declare namespace Gradient {
    function implement(args: [options: {
        colors: DartListInput<upstream0.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>;
        stops?: DartListInput<number, number> | null | undefined;
        transform?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
        }> | null | undefined;
    }], implementation: {
        createShader: ((rect: upstream3.Rect, options?: {
            textDirection?: upstream4.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Shader": readonly [];
        }>);
        scale: ((factor: number) => Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }>);
        withOpacity: ((opacity: number) => Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }>);
    }): Gradient;
}
export declare namespace Gradient {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null, t: number): Gradient | null;
}
