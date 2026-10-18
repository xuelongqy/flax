import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CatmullRomCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __CatmullRomCurve: unique symbol;
    readonly [_flaxDartTypeValue]: CatmullRomCurve;
}
export interface CatmullRomCurve {
    readonly [_flaxDartTypeValue]: CatmullRomCurve;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get controlPoints(): DartList<upstream2.Offset>;
    get tension(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class CatmullRomCurve extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomCurve>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CatmullRomCurve;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomCurve", readonly [], false];
    constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
    });
}
export declare namespace CatmullRomCurve {
    function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
    }], implementation: {}): CatmullRomCurve;
}
export declare namespace CatmullRomCurve {
    function validateControlPoints(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>> | null, options?: {
        reasons?: DartListInput<string, string> | null | undefined;
        tension?: number | undefined;
    }): boolean;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "controlPoints" | "tension" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
