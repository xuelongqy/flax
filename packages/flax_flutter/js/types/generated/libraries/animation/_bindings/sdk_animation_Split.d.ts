import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Split extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Split": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Split: unique symbol;
    readonly [_flaxDartTypeValue]: Split;
    readonly flipped: upstream0.Curve;
    readonly split: number;
    readonly beginCurve: upstream0.Curve;
    readonly endCurve: upstream0.Curve;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _SplitFactory(split: number, options?: {
    beginCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    endCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
}): Split;
export interface _SplitNative extends Split {
    readonly [_flaxDartTypeValue]: _SplitNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get split(): number;
    get beginCurve(): upstream0.Curve;
    get endCurve(): upstream0.Curve;
    get flipped(): upstream0.Curve;
}
export declare abstract class _SplitNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Split>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Split;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Split", readonly [], false];
    constructor(split: number, options?: {
        beginCurve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        endCurve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    });
}
export declare namespace _SplitFactory {
    function implement(args: [split: number, options?: {
        beginCurve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        endCurve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }], implementation: {}): Split;
}
declare const _SplitBinding: typeof _SplitFactory & (new (split: number, options?: {
    beginCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    endCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
}) => _SplitNative);
export declare const Split: typeof _SplitBinding & _FlaxInstanceType<Split> & _FlaxDartType<Split, readonly ["class", "flax.core/sdk_animation#type:Split", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "split" | "beginCurve" | "endCurve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Split" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
