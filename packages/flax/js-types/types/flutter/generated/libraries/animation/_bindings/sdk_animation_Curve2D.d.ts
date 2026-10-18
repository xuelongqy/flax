import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Curve2D extends Omit<upstream0.ParametricCurve<upstream1.Offset>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream1.Offset];
}> {
    readonly __Curve2D: unique symbol;
    readonly [_flaxDartTypeValue]: Curve2D;
}
export interface Curve2D {
    readonly [_flaxDartTypeValue]: Curve2D;
    transform(t: number): upstream1.Offset;
    transformInternal(t: number): upstream1.Offset;
    toString(): string;
    generateSamples(options?: {
        start?: number | undefined;
        end?: number | undefined;
        tolerance?: number | undefined;
    }): DartIterable<upstream2.Curve2DSample>;
    findInverse(x: number): number;
    get samplingSeed(): number;
}
export declare abstract class Curve2D extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Curve2D>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Curve2D;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Curve2D", readonly [], false];
    constructor();
}
export declare namespace Curve2D {
    function implement(args: [], implementation: {}): Curve2D;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "transform" | "transformInternal" | "toString" | "generateSamples" | "findInverse" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
