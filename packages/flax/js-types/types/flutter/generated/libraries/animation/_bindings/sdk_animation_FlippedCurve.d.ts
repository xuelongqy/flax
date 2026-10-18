import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FlippedCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::FlippedCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __FlippedCurve: unique symbol;
    readonly [_flaxDartTypeValue]: FlippedCurve;
}
export interface FlippedCurve {
    readonly [_flaxDartTypeValue]: FlippedCurve;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get curve(): upstream0.Curve;
    get flipped(): upstream0.Curve;
}
export declare abstract class FlippedCurve extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlippedCurve>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlippedCurve;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:FlippedCurve", readonly [], false];
    constructor(curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>);
}
export declare namespace FlippedCurve {
    function implement(args: [curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>], implementation: {}): FlippedCurve;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "curve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::FlippedCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
