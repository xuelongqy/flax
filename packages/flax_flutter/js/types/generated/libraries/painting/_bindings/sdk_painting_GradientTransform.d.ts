import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GradientTransform extends Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
}> {
    readonly __GradientTransform: unique symbol;
    readonly [_flaxDartTypeValue]: GradientTransform;
    transform(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream2.TextDirection | null | undefined;
    }): upstream0.Matrix4 | null;
}
export declare namespace _GradientTransformFactory {
    function implement(args: [], implementation: {
        transform: ((bounds: upstream1.Rect, options?: {
            textDirection?: upstream2.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null);
    }): GradientTransform;
}
export declare const GradientTransform: typeof _GradientTransformFactory & _FlaxInstanceType<GradientTransform> & _FlaxDartType<GradientTransform, readonly ["class", "flax.core/sdk_painting#type:GradientTransform", readonly [], false]>;
