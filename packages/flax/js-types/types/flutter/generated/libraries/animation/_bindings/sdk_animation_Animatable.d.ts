import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Animatable<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}> {
    readonly __Animatable: unique symbol;
    readonly [_flaxDartTypeValue]: Animatable<T>;
    transform(t: number): T;
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
    }>): upstream3.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): Animatable<T>;
}
export declare namespace _AnimatableFactory {
    function fromCallback<T extends unknown | null = unknown | null>(callback: ((value: number) => (T | _FlaxDartOutput<T>))): Animatable<T>;
    function fromCallback(callback: ((value: number) => unknown | null)): Animatable<unknown | null>;
}
export interface _AnimatableNative<T extends unknown | null = unknown | null> extends Animatable<T> {
    readonly [_flaxDartTypeValue]: _AnimatableNative<T>;
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
    }>): upstream3.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): Animatable<T>;
}
export declare abstract class _AnimatableNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Animatable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Animatable<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Animatable", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract transform(t: number): T;
}
export declare namespace _AnimatableFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        transform: ((t: number) => (T | DartInput<T>));
    }): Animatable<T>;
}
declare const _AnimatableBinding: typeof _AnimatableFactory & (abstract new <T extends unknown | null = unknown | null>() => _AnimatableNative<T>);
export declare const Animatable: typeof _AnimatableBinding & _FlaxInstanceType<Animatable<unknown | null>> & _FlaxDartType<Animatable<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:Animatable", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => _AnimatableNative<_Selected0>) & {
        fromCallback: (callback: ((value: number) => (_Selected0 | DartInput<_Selected0>))) => _AnimatableNative<_Selected0>;
        readonly prototype: _AnimatableNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AnimatableNative<_Selected0>>): _AnimatableNative<_Selected0>;
    } & _FlaxInstanceType<_AnimatableNative<_Selected0>> & _FlaxDartType<_AnimatableNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => _AnimatableNative<_Selected0>) & {
        fromCallback: (callback: ((value: number) => (_Selected0 | DartInput<_Selected0>))) => _AnimatableNative<_Selected0>;
        readonly prototype: _AnimatableNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AnimatableNative<_Selected0>>): _AnimatableNative<_Selected0>;
    } & _FlaxInstanceType<_AnimatableNative<_Selected0>> & _FlaxDartType<_AnimatableNative<_Selected0>> : never : never;
}
export {};
