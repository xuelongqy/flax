import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GradientRotation extends Omit<upstream0.GradientTransform, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::GradientRotation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [];
}> {
    readonly __GradientRotation: unique symbol;
    readonly [_flaxDartTypeValue]: GradientRotation;
    readonly radians: number;
    transform(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream3.TextDirection | null | undefined;
    }): upstream1.Matrix4;
    toString(): string;
}
export declare function _GradientRotationFactory(radians: number): GradientRotation;
export interface _GradientRotationNative extends GradientRotation {
    readonly [_flaxDartTypeValue]: _GradientRotationNative;
    transform(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream3.TextDirection | null | undefined;
    }): upstream1.Matrix4;
    toString(): string;
    get radians(): number;
}
export declare abstract class _GradientRotationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GradientRotation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GradientRotation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:GradientRotation", readonly [], false];
    constructor(radians: number);
}
export declare namespace _GradientRotationFactory {
    function implement(args: [radians: number], implementation: {}): GradientRotation;
}
declare const _GradientRotationBinding: typeof _GradientRotationFactory & (new (radians: number) => _GradientRotationNative);
export declare const GradientRotation: typeof _GradientRotationBinding & _FlaxInstanceType<GradientRotation> & _FlaxDartType<GradientRotation, readonly ["class", "flax.core/sdk_painting#type:GradientRotation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "radians" | "transform" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::GradientRotation" | "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform";
export {};
