import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationEagerListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationEagerListenerMixin';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationBehavior';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationBehavior';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream11 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AnimationController extends Omit<upstream0.Animation<number>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<number>>, Omit<upstream2.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable>, Omit<upstream3.AnimationEagerListenerMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number>>, Omit<upstream4.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin>, Omit<upstream5.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin | keyof upstream4.AnimationLocalListenersMixin>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
}> {
    readonly __AnimationController: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationController;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature0;
    };
}
export interface AnimationController {
    readonly [_flaxDartTypeValue]: AnimationController;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature1;
    };
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    addStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
    removeStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
    drive<U extends unknown | null = unknown | null>(child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>];
    }>): upstream0.Animation<_FlaxDartOutput<U>>;
    toString(): string;
    toStringDetails(): string;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    dispose(): void;
    clearListeners(): void;
    notifyListeners(): void;
    clearStatusListeners(): void;
    notifyStatusListeners(status: upstream9.AnimationStatus): void;
    resync(vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>): void;
    reset(): void;
    forward(options?: {
        from?: number | null | undefined;
    }): upstream11.TickerFuture;
    reverse(options?: {
        from?: number | null | undefined;
    }): upstream11.TickerFuture;
    toggle(options?: {
        from?: number | null | undefined;
    }): upstream11.TickerFuture;
    animateTo(target: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): upstream11.TickerFuture;
    animateBack(target: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): upstream11.TickerFuture;
    repeat(options?: {
        min?: number | null | undefined;
        max?: number | null | undefined;
        reverse?: boolean | undefined;
        period?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        count?: number | null | undefined;
    }): upstream11.TickerFuture;
    fling(options?: {
        velocity?: number | undefined;
        springDescription?: Readonly<{
            "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
        }> | null | undefined;
        animationBehavior?: upstream7.AnimationBehavior | null | undefined;
    }): upstream11.TickerFuture;
    animateWith(simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>): upstream11.TickerFuture;
    animateBackWith(simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>): upstream11.TickerFuture;
    stop(options?: {
        canceled?: boolean | undefined;
    }): void;
    get lowerBound(): number;
    get upperBound(): number;
    get debugLabel(): string | null;
    get animationBehavior(): upstream7.AnimationBehavior;
    get view(): upstream0.Animation<number>;
    get duration(): upstream6.Duration | null;
    get reverseDuration(): upstream6.Duration | null;
    get value(): number;
    get velocity(): number;
    get lastElapsedDuration(): upstream6.Duration | null;
    get isAnimating(): boolean;
    get status(): upstream9.AnimationStatus;
    get isDismissed(): boolean;
    get isCompleted(): boolean;
    get isForwardOrCompleted(): boolean;
    set duration(value: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null);
    set reverseDuration(value: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null);
    set value(value: number);
}
export declare abstract class AnimationController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnimationController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnimationController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AnimationController", readonly [], false];
    constructor(options: {
        value?: number | null | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        reverseDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        debugLabel?: string | null | undefined;
        lowerBound?: number | undefined;
        upperBound?: number | undefined;
        animationBehavior?: upstream7.AnimationBehavior | undefined;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    });
}
export declare namespace AnimationController {
    function implement(args: [options: {
        value?: number | null | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        reverseDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        debugLabel?: string | null | undefined;
        lowerBound?: number | undefined;
        upperBound?: number | undefined;
        animationBehavior?: upstream7.AnimationBehavior | undefined;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }], implementation: {}): AnimationController;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "lowerBound" | "upperBound" | "debugLabel" | "animationBehavior" | "view" | "duration" | "reverseDuration" | "velocity" | "lastElapsedDuration" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "dispose" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "resync" | "reset" | "forward" | "reverse" | "toggle" | "animateTo" | "animateBack" | "repeat" | "fling" | "animateWith" | "animateBackWith" | "stop" | "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream0.Animation<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => upstream0.Animation<_Selected0> : never : never;
}
export {};
