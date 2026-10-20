import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CatmullRomCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __CatmullRomCurve: unique symbol;
    readonly [_flaxDartTypeValue]: CatmullRomCurve;
    readonly flipped: upstream0.Curve;
    readonly controlPoints: DartList<upstream2.Offset>;
    readonly tension: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _CatmullRomCurveFactory(controlPoints: DartListInput<upstream2.Offset, Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>>, options?: {
    tension?: number | undefined;
}): CatmullRomCurve;
export declare namespace _CatmullRomCurveFactory {
    function precompute(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
    }): CatmullRomCurve;
}
export interface _CatmullRomCurveNative extends CatmullRomCurve {
    readonly [_flaxDartTypeValue]: _CatmullRomCurveNative;
    readonly [_flaxDartConstructors]?: {
        "": (controlPoints: DartListInput<upstream2.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>>, options?: {
            tension?: number | undefined;
        }) => void;
        "precompute": (controlPoints: DartListInput<upstream2.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>>, options?: {
            tension?: number | undefined;
        }) => void;
    };
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get controlPoints(): DartList<upstream2.Offset>;
    get tension(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _CatmullRomCurveNative extends _FlaxProxyBase {
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
    constructor(call: _FlaxProxySuper<_CatmullRomCurveNative>);
}
export declare namespace _CatmullRomCurveFactory {
    function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
    }], implementation: {}): CatmullRomCurve;
}
declare const _CatmullRomCurveBinding: typeof _CatmullRomCurveFactory & (new (controlPoints: DartListInput<upstream2.Offset, Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>>, options?: {
    tension?: number | undefined;
}) => _CatmullRomCurveNative) & (new (call: _FlaxProxySuper<_CatmullRomCurveNative>) => _CatmullRomCurveNative);
export declare namespace _CatmullRomCurveFactory {
    function validateControlPoints(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>> | null, options?: {
        reasons?: DartListInput<string, string> | null | undefined;
        tension?: number | undefined;
    }): boolean;
}
export declare const CatmullRomCurve: typeof _CatmullRomCurveBinding & _FlaxInstanceType<CatmullRomCurve> & _FlaxDartType<CatmullRomCurve, readonly ["class", "flax.core/sdk_animation#type:CatmullRomCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "controlPoints" | "tension" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
