import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TweenSequence<T extends unknown | null = unknown | null> extends Omit<upstream0.Animatable<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}> {
    readonly __TweenSequence: unique symbol;
    readonly [_flaxDartTypeValue]: TweenSequence<T>;
}
export interface TweenSequence<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: TweenSequence<T>;
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
    }>): upstream2.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream0.Animatable<T>;
    toString(): string;
}
export declare abstract class TweenSequence<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequence<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TweenSequence<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequence", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>);
}
export declare namespace TweenSequence {
    function implement<T extends unknown | null = unknown | null>(args: [items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>], implementation: {}): TweenSequence<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>) => TweenSequence<_Selected0>) & {
        readonly prototype: TweenSequence<_Selected0>;
        implement(args: readonly [DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
        }>>], implementation: Partial<TweenSequence<_Selected0>>): TweenSequence<_Selected0>;
    } & _FlaxInstanceType<TweenSequence<_Selected0>> & _FlaxDartType<TweenSequence<_Selected0>> : never : never;
}
export {};
