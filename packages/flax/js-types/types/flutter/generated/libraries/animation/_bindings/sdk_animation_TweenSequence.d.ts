import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
export declare function _TweenSequenceFactory<T extends unknown | null = unknown | null>(items: DartListInput<upstream1.TweenSequenceItem<_FlaxDartOutput<T>>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [_FlaxDartOutput<T>];
}>>): TweenSequence<T>;
export declare function _TweenSequenceFactory(items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
}>>): TweenSequence<unknown | null>;
export interface _TweenSequenceNative<T extends unknown | null = unknown | null> extends TweenSequence<T> {
    readonly [_flaxDartTypeValue]: _TweenSequenceNative<T>;
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
export declare abstract class _TweenSequenceNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequence<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TweenSequence<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequence", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>);
}
export declare namespace _TweenSequenceFactory {
    function implement<T extends unknown | null = unknown | null>(args: [items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>], implementation: {}): TweenSequence<T>;
}
declare const _TweenSequenceBinding: typeof _TweenSequenceFactory & (new <T extends unknown | null = unknown | null>(items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
}>>) => _TweenSequenceNative<T>);
export declare const TweenSequence: typeof _TweenSequenceBinding & _FlaxInstanceType<TweenSequence<unknown | null>> & _FlaxDartType<TweenSequence<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:TweenSequence", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>) => _TweenSequenceNative<_Selected0>) & {
        (items: DartListInput<upstream1.TweenSequenceItem<_Selected0>, Readonly<{
            "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [_Selected0];
        }>>): _TweenSequenceNative<_Selected0>;
        readonly prototype: _TweenSequenceNative<_Selected0>;
        implement(args: readonly [DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
        }>>], implementation: Partial<_TweenSequenceNative<_Selected0>>): _TweenSequenceNative<_Selected0>;
    } & _FlaxInstanceType<_TweenSequenceNative<_Selected0>> & _FlaxDartType<_TweenSequenceNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
    }>>) => _TweenSequenceNative<_Selected0>) & {
        (items: DartListInput<upstream1.TweenSequenceItem<_Selected0>, Readonly<{
            "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [_Selected0];
        }>>): _TweenSequenceNative<_Selected0>;
        readonly prototype: _TweenSequenceNative<_Selected0>;
        implement(args: readonly [DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null];
        }>>], implementation: Partial<_TweenSequenceNative<_Selected0>>): _TweenSequenceNative<_Selected0>;
    } & _FlaxInstanceType<_TweenSequenceNative<_Selected0>> & _FlaxDartType<_TweenSequenceNative<_Selected0>> : never : never;
}
export {};
