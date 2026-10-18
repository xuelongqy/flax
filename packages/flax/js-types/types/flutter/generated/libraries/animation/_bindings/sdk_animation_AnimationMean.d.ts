import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_CompoundAnimation';
import '@flax/flutter/animation/_bindings/sdk_animation_CompoundAnimation';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AnimationMean extends Omit<upstream0.CompoundAnimation<number>, _flaxOwnMembers0>, Omit<upstream1.Animation<number>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number>>, Omit<upstream3.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable>, Omit<upstream4.AnimationLazyListenerMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number>>, Omit<upstream5.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number> | keyof upstream4.AnimationLazyListenerMixin>, Omit<upstream6.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number> | keyof upstream4.AnimationLazyListenerMixin | keyof upstream5.AnimationLocalListenersMixin>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMean": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
}> {
    readonly __AnimationMean: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationMean;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature0;
    };
}
export interface AnimationMean {
    readonly [_flaxDartTypeValue]: AnimationMean;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature1;
    };
    didStartListening(): void;
    didStopListening(): void;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    addStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
    removeStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
    drive<U extends unknown | null = unknown | null>(child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>];
    }>): upstream1.Animation<_FlaxDartOutput<U>>;
    toStringDetails(): string;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    clearListeners(): void;
    notifyListeners(): void;
    clearStatusListeners(): void;
    notifyStatusListeners(status: upstream7.AnimationStatus): void;
    get value(): number;
    get first(): upstream1.Animation<number>;
    get next(): upstream1.Animation<number>;
    get status(): upstream7.AnimationStatus;
    get isDismissed(): boolean;
    get isCompleted(): boolean;
    get isAnimating(): boolean;
    get isForwardOrCompleted(): boolean;
    get isListening(): boolean;
}
export declare abstract class AnimationMean extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnimationMean>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnimationMean;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AnimationMean", readonly [], false];
    constructor(options: {
        left: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        right: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
    });
}
export declare namespace AnimationMean {
    function implement(args: [options: {
        left: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        right: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
    }], implementation: {}): AnimationMean;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "first" | "next" | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "isListening" | "didStartListening" | "didStopListening" | "toString" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMean" | "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream1.Animation<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream1.Animation<_Selected0> : never : never;
}
export {};
