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
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationMax<T extends number = number> extends Omit<upstream0.CompoundAnimation<T>, _flaxOwnMembers0>, Omit<upstream1.Animation<T>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T> | keyof upstream1.Animation<T>>, Omit<upstream3.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T> | keyof upstream1.Animation<T> | keyof upstream2.Listenable>, Omit<upstream4.AnimationLazyListenerMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T> | keyof upstream1.Animation<T> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<T>>, Omit<upstream5.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T> | keyof upstream1.Animation<T> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<T> | keyof upstream4.AnimationLazyListenerMixin>, Omit<upstream6.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<T> | keyof upstream1.Animation<T> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<T> | keyof upstream4.AnimationLazyListenerMixin | keyof upstream5.AnimationLocalListenersMixin>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMax": readonly [T];
}>, Readonly<{
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
    readonly __AnimationMax: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationMax<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature1<T>;
    };
    readonly first: upstream1.Animation<T>;
    readonly next: upstream1.Animation<T>;
    readonly status: upstream7.AnimationStatus;
    readonly value: T;
    readonly isDismissed: boolean;
    readonly isCompleted: boolean;
    readonly isAnimating: boolean;
    readonly isForwardOrCompleted: boolean;
    readonly isListening: boolean;
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
}
export declare function _AnimationMaxFactory<T extends number = number>(first: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}>, next: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}>): AnimationMax<T>;
export declare function _AnimationMaxFactory(first: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>, next: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>): AnimationMax<number>;
export interface _AnimationMaxNative<T extends number = number> extends AnimationMax<T> {
    readonly [_flaxDartTypeValue]: _AnimationMaxNative<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature2<T>;
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
    get value(): T;
    get first(): upstream1.Animation<T>;
    get next(): upstream1.Animation<T>;
    get status(): upstream7.AnimationStatus;
    get isDismissed(): boolean;
    get isCompleted(): boolean;
    get isAnimating(): boolean;
    get isForwardOrCompleted(): boolean;
    get isListening(): boolean;
}
export declare abstract class _AnimationMaxNative<T extends number = number> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnimationMax<number>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnimationMax<number>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AnimationMax", readonly [readonly ["num", null, readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature3;
    constructor(first: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, next: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
}
export declare namespace _AnimationMaxFactory {
    function implement<T extends number = number>(args: [first: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, next: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>], implementation: {}): AnimationMax<T>;
}
declare const _AnimationMaxBinding: typeof _AnimationMaxFactory & (new <T extends number = number>(first: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>, next: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>) => _AnimationMaxNative<T>);
export declare const AnimationMax: typeof _AnimationMaxBinding & _FlaxInstanceType<AnimationMax<number>> & _FlaxDartType<AnimationMax<number>, readonly ["class", "flax.core/sdk_animation#type:AnimationMax", readonly [readonly ["num", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "first" | "next" | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "isListening" | "didStartListening" | "didStopListening" | "toString" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMax" | "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number] ? (new (first: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, next: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => _AnimationMaxNative<_Selected0>) & {
        (first: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [_Selected0];
        }>, next: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [_Selected0];
        }>): _AnimationMaxNative<_Selected0>;
        readonly prototype: _AnimationMaxNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>], implementation: Partial<_AnimationMaxNative<_Selected0>>): _AnimationMaxNative<_Selected0>;
    } & _FlaxInstanceType<_AnimationMaxNative<_Selected0>> & _FlaxDartType<_AnimationMaxNative<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends number> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream1.Animation<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends number> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream1.Animation<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number] ? (new (first: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, next: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => _AnimationMaxNative<_Selected0>) & {
        (first: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [_Selected0];
        }>, next: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [_Selected0];
        }>): _AnimationMaxNative<_Selected0>;
        readonly prototype: _AnimationMaxNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>], implementation: Partial<_AnimationMaxNative<_Selected0>>): _AnimationMaxNative<_Selected0>;
    } & _FlaxInstanceType<_AnimationMaxNative<_Selected0>> & _FlaxDartType<_AnimationMaxNative<_Selected0>> : never : never;
}
export {};
