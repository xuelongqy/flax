import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IntTween extends Omit<upstream0.Tween<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.Tween<number>>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::IntTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
}> {
    readonly __IntTween: unique symbol;
    readonly [_flaxDartTypeValue]: IntTween;
    get begin(): number | null;
    get end(): number | null;
    lerp(t: number): number;
    transform(t: number): number;
    toString(): string;
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
    }>): upstream1.Animatable<number>;
    set begin(value: number | null);
    set end(value: number | null);
}
export declare function _IntTweenFactory(options?: {
    begin?: number | null | undefined;
    end?: number | null | undefined;
}): IntTween;
export interface _IntTweenNative extends IntTween {
    readonly [_flaxDartTypeValue]: _IntTweenNative;
    lerp(t: number): number;
    transform(t: number): number;
    toString(): string;
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
    }>): upstream1.Animatable<number>;
    get begin(): number | null;
    get end(): number | null;
    set begin(value: number | null);
    set end(value: number | null);
}
export declare abstract class _IntTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IntTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IntTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false];
    constructor(options?: {
        begin?: number | null | undefined;
        end?: number | null | undefined;
    });
}
export declare namespace _IntTweenFactory {
    function implement(args: [options?: {
        begin?: number | null | undefined;
        end?: number | null | undefined;
    }], implementation: {}): IntTween;
}
declare const _IntTweenBinding: typeof _IntTweenFactory & (new (options?: {
    begin?: number | null | undefined;
    end?: number | null | undefined;
}) => _IntTweenNative);
export declare const IntTween: typeof _IntTweenBinding & _FlaxInstanceType<IntTween> & _FlaxDartType<IntTween, readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::IntTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
