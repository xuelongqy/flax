import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CompoundAnimation<T extends unknown | null = unknown | null> extends Omit<upstream0.Animation<T>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<T>>, Omit<upstream2.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.Animation<T> | keyof upstream1.Listenable>, Omit<upstream3.AnimationLazyListenerMixin, _flaxOwnMembers0 | keyof upstream0.Animation<T> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<T>>, Omit<upstream4.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<T> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<T> | keyof upstream3.AnimationLazyListenerMixin>, Omit<upstream5.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<T> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<T> | keyof upstream3.AnimationLazyListenerMixin | keyof upstream4.AnimationLocalListenersMixin>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
}> {
    readonly __CompoundAnimation: unique symbol;
    readonly [_flaxDartTypeValue]: CompoundAnimation<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature1<T>;
    };
}
export interface CompoundAnimation<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: CompoundAnimation<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature2<T>;
    };
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    addStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
    removeStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
    drive<U extends unknown | null = unknown | null>(child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>];
    }>): upstream0.Animation<_FlaxDartOutput<U>>;
    toString(): string;
    toStringDetails(): string;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    didStartListening(): void;
    didStopListening(): void;
    clearListeners(): void;
    notifyListeners(): void;
    clearStatusListeners(): void;
    notifyStatusListeners(status: upstream6.AnimationStatus): void;
    get first(): upstream0.Animation<T>;
    get next(): upstream0.Animation<T>;
    get status(): upstream6.AnimationStatus;
    get isDismissed(): boolean;
    get isCompleted(): boolean;
    get isAnimating(): boolean;
    get isForwardOrCompleted(): boolean;
    get isListening(): boolean;
}
export declare abstract class CompoundAnimation<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CompoundAnimation<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CompoundAnimation<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CompoundAnimation", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature3;
    constructor(options: {
        first: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
        next: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
    });
    abstract get value(): T;
}
export declare namespace CompoundAnimation {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        first: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
        next: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
    }], implementation: {
        get value(): (T | DartInput<T>);
    }): CompoundAnimation<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "isListening" | "first" | "next" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "didStartListening" | "didStopListening" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream0.Animation<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream0.Animation<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        first: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
        next: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
        }>;
    }) => CompoundAnimation<_Selected0>) & {
        readonly prototype: CompoundAnimation<_Selected0>;
        implement(args: readonly [options: {
            first: Readonly<{
                "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
            }>;
            next: Readonly<{
                "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [unknown | null];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [unknown | null];
            }>;
        }], implementation: Partial<CompoundAnimation<_Selected0>>): CompoundAnimation<_Selected0>;
    } & _FlaxInstanceType<CompoundAnimation<_Selected0>> & _FlaxDartType<CompoundAnimation<_Selected0>> : never : never;
}
export {};
