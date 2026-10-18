import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream10 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream11 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import type * as upstream12 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TransitionRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.OverlayRoute<T>, _flaxOwnMembers0>, Omit<upstream1.Route<T>, _flaxOwnMembers0 | keyof upstream0.OverlayRoute<T>>, Omit<upstream2.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.OverlayRoute<T> | keyof upstream1.Route<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}> {
    readonly __TransitionRoute: unique symbol;
    readonly [_flaxDartTypeValue]: TransitionRoute<T>;
    readonly overlayEntries: DartList<upstream3.OverlayEntry>;
    readonly finishedWhenPopped: boolean;
    readonly requestFocus: boolean;
    readonly navigator: upstream4.NavigatorState | null;
    readonly settings: upstream5.RouteSettings;
    readonly restorationScopeId: upstream6.ValueListenable<string | null>;
    readonly popDisposition: upstream7.RoutePopDisposition;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly popGestureEnabled: boolean;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream8.Duration;
    readonly reverseTransitionDuration: upstream8.Duration;
    readonly opaque: boolean;
    readonly allowSnapshotting: boolean;
    readonly animation: upstream9.Animation<number> | null;
    readonly controller: upstream10.AnimationController | null;
    readonly secondaryAnimation: upstream9.Animation<number> | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    createOverlayEntries(): DartIterable<upstream3.OverlayEntry>;
    install(): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
    dispose(): void;
    didPush(): upstream11.TickerFuture;
    didAdd(): void;
    didReplace(oldRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    willPop(): Promise<upstream7.RoutePopDisposition>;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    didComplete(result: (T | DartInput<T>) | null): void;
    didPopNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>): void;
    didChangeNext(nextRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didChangePrevious(previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    changedInternalState(): void;
    changedExternalState(): void;
    handleStartBackGesture(options?: {
        progress?: number | undefined;
    }): void;
    handleUpdateBackGestureProgress(options: {
        progress: number;
    }): void;
    handleCommitBackGesture(): void;
    handleCancelBackGesture(): void;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream10.AnimationController;
    createAnimation(): upstream9.Animation<number>;
    createSimulation(options: {
        forward: boolean;
    }): upstream12.Simulation | null;
    canTransitionTo(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }>): boolean;
    canTransitionFrom(previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }>): boolean;
    toString(): string;
    set willDisposeAnimationController(value: boolean);
}
export declare const TransitionRoute: object & _FlaxInstanceType<TransitionRoute<unknown | null>> & _FlaxDartType<TransitionRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TransitionRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "overlayEntries" | "finishedWhenPopped" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "popGestureEnabled" | "completed" | "transitionDuration" | "reverseTransitionDuration" | "opaque" | "allowSnapshotting" | "animation" | "controller" | "secondaryAnimation" | "willDisposeAnimationController" | "debugLabel" | "createOverlayEntries" | "install" | "didPop" | "dispose" | "didPush" | "didAdd" | "didReplace" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didComplete" | "didPopNext" | "didChangeNext" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "canTransitionTo" | "canTransitionFrom" | "toString" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: TransitionRoute<_Selected0>;
    } & _FlaxInstanceType<TransitionRoute<_Selected0>> & _FlaxDartType<TransitionRoute<_Selected0>> : never : never;
}
export {};
