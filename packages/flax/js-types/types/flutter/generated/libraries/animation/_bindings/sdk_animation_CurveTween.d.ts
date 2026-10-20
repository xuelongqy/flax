import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream1 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CurveTween extends Omit<upstream0.Animatable<number>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::CurveTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
}> {
    readonly __CurveTween: unique symbol;
    readonly [_flaxDartTypeValue]: CurveTween;
    get curve(): upstream1.Curve;
    transform(t: number): number;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): number;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<number>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream0.Animatable<number>;
    toString(): string;
    set curve(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>);
}
export declare function _CurveTweenFactory(options: {
    curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>;
}): CurveTween;
export interface _CurveTweenNative extends CurveTween {
    readonly [_flaxDartTypeValue]: _CurveTweenNative;
    transform(t: number): number;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): number;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<number>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream0.Animatable<number>;
    toString(): string;
    get curve(): upstream1.Curve;
    set curve(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>);
}
export declare abstract class _CurveTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CurveTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CurveTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CurveTween", readonly [], false];
    constructor(options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
    });
}
export declare namespace _CurveTweenFactory {
    function implement(args: [options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
    }], implementation: {}): CurveTween;
}
declare const _CurveTweenBinding: typeof _CurveTweenFactory & (new (options: {
    curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>;
}) => _CurveTweenNative);
export declare const CurveTween: typeof _CurveTweenBinding & _FlaxInstanceType<CurveTween> & _FlaxDartType<CurveTween, readonly ["class", "flax.core/sdk_animation#type:CurveTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "curve" | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/animation/tween.dart::CurveTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
