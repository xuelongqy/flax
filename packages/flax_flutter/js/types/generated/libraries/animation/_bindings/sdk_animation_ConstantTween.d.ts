import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ConstantTween<T extends unknown | null = unknown | null> extends Omit<upstream0.Tween<T>, _flaxOwnMembers0>, Omit<upstream1.Animatable<T>, _flaxOwnMembers0 | keyof upstream0.Tween<T>>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::ConstantTween": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}> {
    readonly __ConstantTween: unique symbol;
    readonly [_flaxDartTypeValue]: ConstantTween<T>;
    get begin(): T | null;
    get end(): T | null;
    lerp(t: number): T;
    transform(t: number): T;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): T;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<T>;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare function _ConstantTweenFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): ConstantTween<T>;
export declare function _ConstantTweenFactory(value: unknown | null): ConstantTween<unknown | null>;
export interface _ConstantTweenNative<T extends unknown | null = unknown | null> extends ConstantTween<T> {
    readonly [_flaxDartTypeValue]: _ConstantTweenNative<T>;
    lerp(t: number): T;
    transform(t: number): T;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): T;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<T>;
    get begin(): T | null;
    get end(): T | null;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare abstract class _ConstantTweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ConstantTween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ConstantTween<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ConstantTween", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(value: unknown | null);
}
export declare namespace _ConstantTweenFactory {
    function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): ConstantTween<T>;
}
declare const _ConstantTweenBinding: typeof _ConstantTweenFactory & (new <T extends unknown | null = unknown | null>(value: unknown | null) => _ConstantTweenNative<T>);
export declare const ConstantTween: typeof _ConstantTweenBinding & _FlaxInstanceType<ConstantTween<unknown | null>> & _FlaxDartType<ConstantTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ConstantTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ConstantTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _ConstantTweenNative<_Selected0>) & {
        (value: (_Selected0 | DartInput<_Selected0>)): _ConstantTweenNative<_Selected0>;
        readonly prototype: _ConstantTweenNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_ConstantTweenNative<_Selected0>>): _ConstantTweenNative<_Selected0>;
    } & _FlaxInstanceType<_ConstantTweenNative<_Selected0>> & _FlaxDartType<_ConstantTweenNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _ConstantTweenNative<_Selected0>) & {
        (value: (_Selected0 | DartInput<_Selected0>)): _ConstantTweenNative<_Selected0>;
        readonly prototype: _ConstantTweenNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_ConstantTweenNative<_Selected0>>): _ConstantTweenNative<_Selected0>;
    } & _FlaxInstanceType<_ConstantTweenNative<_Selected0>> & _FlaxDartType<_ConstantTweenNative<_Selected0>> : never : never;
}
export {};
