import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tween<T extends unknown | null = unknown | null> extends Omit<upstream0.Animatable<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}> {
    readonly __Tween: unique symbol;
    readonly [_flaxDartTypeValue]: Tween<T>;
    get begin(): T | null;
    get end(): T | null;
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
    }>): upstream4.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream0.Animatable<T>;
    lerp(t: number): T;
    toString(): string;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare function _TweenFactory<T extends unknown | null = unknown | null>(options?: {
    begin?: (T | _FlaxDartOutput<T>) | null | undefined;
    end?: (T | _FlaxDartOutput<T>) | null | undefined;
}): Tween<T>;
export declare function _TweenFactory(options?: {
    begin?: unknown | null | undefined;
    end?: unknown | null | undefined;
}): Tween<unknown | null>;
export interface _TweenNative<T extends unknown | null = unknown | null> extends Tween<T> {
    readonly [_flaxDartTypeValue]: _TweenNative<T>;
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
    }>): upstream4.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream0.Animatable<T>;
    lerp(t: number): T;
    toString(): string;
    get begin(): T | null;
    get end(): T | null;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare abstract class _TweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Tween<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options?: {
        begin?: unknown | null | undefined;
        end?: unknown | null | undefined;
    });
}
export declare namespace _TweenFactory {
    function implement<T extends unknown | null = unknown | null>(args: [options?: {
        begin?: unknown | null | undefined;
        end?: unknown | null | undefined;
    }], implementation: {}): Tween<T>;
}
declare const _TweenBinding: typeof _TweenFactory & (new <T extends unknown | null = unknown | null>(options?: {
    begin?: unknown | null | undefined;
    end?: unknown | null | undefined;
}) => _TweenNative<T>);
export declare const Tween: typeof _TweenBinding & _FlaxInstanceType<Tween<unknown | null>> & _FlaxDartType<Tween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options?: {
        begin?: unknown | null | undefined;
        end?: unknown | null | undefined;
    }) => _TweenNative<_Selected0>) & {
        (options?: {
            begin?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            end?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
        }): _TweenNative<_Selected0>;
        readonly prototype: _TweenNative<_Selected0>;
        implement(args: readonly [options?: {
            begin?: unknown | null | undefined;
            end?: unknown | null | undefined;
        }], implementation: Partial<_TweenNative<_Selected0>>): _TweenNative<_Selected0>;
    } & _FlaxInstanceType<_TweenNative<_Selected0>> & _FlaxDartType<_TweenNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options?: {
        begin?: unknown | null | undefined;
        end?: unknown | null | undefined;
    }) => _TweenNative<_Selected0>) & {
        (options?: {
            begin?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            end?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
        }): _TweenNative<_Selected0>;
        readonly prototype: _TweenNative<_Selected0>;
        implement(args: readonly [options?: {
            begin?: unknown | null | undefined;
            end?: unknown | null | undefined;
        }], implementation: Partial<_TweenNative<_Selected0>>): _TweenNative<_Selected0>;
    } & _FlaxInstanceType<_TweenNative<_Selected0>> & _FlaxDartType<_TweenNative<_Selected0>> : never : never;
}
export {};
