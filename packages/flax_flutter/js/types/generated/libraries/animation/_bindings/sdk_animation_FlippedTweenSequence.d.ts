import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequence';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequence';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlippedTweenSequence extends Omit<upstream0.TweenSequence<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.TweenSequence<number>>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::FlippedTweenSequence": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
}> {
    readonly __FlippedTweenSequence: unique symbol;
    readonly [_flaxDartTypeValue]: FlippedTweenSequence;
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
    }>): upstream3.Animation<number>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<number>;
}
export declare function _FlippedTweenSequenceFactory(items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number];
}>>): FlippedTweenSequence;
export interface _FlippedTweenSequenceNative extends FlippedTweenSequence {
    readonly [_flaxDartTypeValue]: _FlippedTweenSequenceNative;
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
    }>): upstream3.Animation<number>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<number>;
}
export declare abstract class _FlippedTweenSequenceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlippedTweenSequence>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlippedTweenSequence;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:FlippedTweenSequence", readonly [], false];
    constructor(items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number];
    }>>);
}
export declare namespace _FlippedTweenSequenceFactory {
    function implement(args: [items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number];
    }>>], implementation: {}): FlippedTweenSequence;
}
declare const _FlippedTweenSequenceBinding: typeof _FlippedTweenSequenceFactory & (new (items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number];
}>>) => _FlippedTweenSequenceNative);
export declare const FlippedTweenSequence: typeof _FlippedTweenSequenceBinding & _FlaxInstanceType<FlippedTweenSequence> & _FlaxDartType<FlippedTweenSequence, readonly ["class", "flax.core/sdk_animation#type:FlippedTweenSequence", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::FlippedTweenSequence" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
