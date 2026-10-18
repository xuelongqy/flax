import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CatmullRomSpline extends Omit<upstream0.Curve2D, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<upstream2.Offset>, _flaxOwnMembers0 | keyof upstream0.Curve2D>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream2.Offset];
}> {
    readonly __CatmullRomSpline: unique symbol;
    readonly [_flaxDartTypeValue]: CatmullRomSpline;
}
export interface CatmullRomSpline {
    readonly [_flaxDartTypeValue]: CatmullRomSpline;
    generateSamples(options?: {
        start?: number | undefined;
        end?: number | undefined;
        tolerance?: number | undefined;
    }): DartIterable<upstream3.Curve2DSample>;
    findInverse(x: number): number;
    transform(t: number): upstream2.Offset;
    transformInternal(t: number): upstream2.Offset;
    toString(): string;
    get samplingSeed(): number;
}
export declare abstract class CatmullRomSpline extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomSpline>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CatmullRomSpline;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false];
    constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
        startHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        endHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace CatmullRomSpline {
    function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
        startHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        endHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }], implementation: {}): CatmullRomSpline;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "generateSamples" | "findInverse" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
