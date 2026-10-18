import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TweenSequenceItem<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [T];
}> {
    readonly __TweenSequenceItem: unique symbol;
    readonly [_flaxDartTypeValue]: TweenSequenceItem<T>;
}
export interface TweenSequenceItem<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: TweenSequenceItem<T>;
    get tween(): upstream0.Animatable<T>;
    get weight(): number;
}
export declare abstract class TweenSequenceItem<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequenceItem<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TweenSequenceItem<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequenceItem", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        tween: Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
        }>;
        weight: number;
    });
}
export declare namespace TweenSequenceItem {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        tween: Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
        }>;
        weight: number;
    }], implementation: {}): TweenSequenceItem<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        tween: Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
        }>;
        weight: number;
    }) => TweenSequenceItem<_Selected0>) & {
        readonly prototype: TweenSequenceItem<_Selected0>;
        implement(args: readonly [options: {
            tween: Readonly<{
                "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
            }>;
            weight: number;
        }], implementation: Partial<TweenSequenceItem<_Selected0>>): TweenSequenceItem<_Selected0>;
    } & _FlaxInstanceType<TweenSequenceItem<_Selected0>> & _FlaxDartType<TweenSequenceItem<_Selected0>> : never : never;
}
export {};
