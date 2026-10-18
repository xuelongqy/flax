import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream16 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream17 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream18 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream19 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ModalRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.TransitionRoute<T>, _flaxOwnMembers0>, Omit<upstream1.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T>>, Omit<upstream2.Route<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T>>, Omit<upstream3.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T> | keyof upstream2.Route<T>>, Omit<upstream4.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T> | keyof upstream2.Route<T> | keyof upstream3.PredictiveBackRoute>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}> {
    readonly __ModalRoute: unique symbol;
    readonly [_flaxDartTypeValue]: ModalRoute<T>;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream5.Duration;
    readonly reverseTransitionDuration: upstream5.Duration;
    readonly opaque: boolean;
    readonly allowSnapshotting: boolean;
    readonly finishedWhenPopped: boolean;
    readonly animation: upstream6.Animation<number> | null;
    readonly controller: upstream7.AnimationController | null;
    readonly secondaryAnimation: upstream6.Animation<number> | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    readonly overlayEntries: DartList<upstream8.OverlayEntry>;
    readonly requestFocus: boolean;
    readonly navigator: upstream9.NavigatorState | null;
    readonly settings: upstream10.RouteSettings;
    readonly restorationScopeId: upstream11.ValueListenable<string | null>;
    readonly popDisposition: upstream12.RoutePopDisposition;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly popGestureEnabled: boolean;
    readonly filter: upstream13.ImageFilter | null;
    readonly traversalEdgeBehavior: upstream14.TraversalEdgeBehavior | null;
    readonly directionalTraversalEdgeBehavior: upstream14.TraversalEdgeBehavior | null;
    readonly delegatedTransition: ((context: upstream15.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
    get receivedTransition(): ((context: upstream15.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
    readonly barrierDismissible: boolean;
    readonly semanticsDismissible: boolean;
    readonly barrierColor: upstream16.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierCurve: upstream17.Curve;
    readonly maintainState: boolean;
    readonly popGestureInProgress: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream15.BuildContext | null;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly fullscreenDialog: boolean;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream7.AnimationController;
    createAnimation(): upstream6.Animation<number>;
    createSimulation(options: {
        forward: boolean;
    }): upstream18.Simulation | null;
    install(): void;
    didPush(): upstream19.TickerFuture;
    didAdd(): void;
    didReplace(oldRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
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
    handleStartBackGesture(options?: {
        progress?: number | undefined;
    }): void;
    handleUpdateBackGestureProgress(options: {
        progress: number;
    }): void;
    handleCancelBackGesture(): void;
    handleCommitBackGesture(): void;
    dispose(): void;
    toString(): string;
    createOverlayEntries(): DartIterable<upstream8.OverlayEntry>;
    willPop(): Promise<upstream12.RoutePopDisposition>;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    didComplete(result: (T | DartInput<T>) | null): void;
    didChangePrevious(previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    changedInternalState(): void;
    changedExternalState(): void;
    addLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
    removeLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
    setState(fn: (() => void)): void;
    buildPage(context: upstream15.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): Widget;
    buildTransitions(context: upstream15.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, child: Widget): Widget;
    addScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    removeScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    registerPopEntry(popEntry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null];
    }>): void;
    unregisterPopEntry(popEntry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null];
    }>): void;
    buildModalBarrier(): Widget;
    set willDisposeAnimationController(value: boolean);
    set receivedTransition(value: ((context: upstream15.BuildContext, animation: upstream6.Animation<number>, secondaryAnimation: upstream6.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
    set offstage(value: boolean);
}
export declare namespace _ModalRouteFactory {
    function _flaxDefault_of<T extends unknown | null = unknown | null>(context: upstream15.BuildContext): ModalRoute<T> | null;
    export const of: _FlaxDartCallable<typeof _flaxDefault_of, _FlaxSignature1>;
    export {};
}
export declare namespace _ModalRouteFactory {
    function isCurrentOf(context: upstream15.BuildContext): boolean | null;
}
export declare namespace _ModalRouteFactory {
    function canPopOf(context: upstream15.BuildContext): boolean | null;
}
export declare namespace _ModalRouteFactory {
    function settingsOf(context: upstream15.BuildContext): upstream10.RouteSettings | null;
}
export declare namespace _ModalRouteFactory {
    function isActiveOf(context: upstream15.BuildContext): boolean | null;
}
export declare namespace _ModalRouteFactory {
    function isFirstOf(context: upstream15.BuildContext): boolean | null;
}
export declare namespace _ModalRouteFactory {
    function opaqueOf(context: upstream15.BuildContext): boolean | null;
}
export declare namespace _ModalRouteFactory {
    function popDispositionOf(context: upstream15.BuildContext): upstream12.RoutePopDisposition | null;
}
export declare namespace _ModalRouteFactory {
    function withName(name: string): ((route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) => boolean);
}
export declare const ModalRoute: typeof _ModalRouteFactory & _FlaxInstanceType<ModalRoute<unknown | null>> & _FlaxDartType<ModalRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:ModalRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "completed" | "transitionDuration" | "reverseTransitionDuration" | "opaque" | "allowSnapshotting" | "finishedWhenPopped" | "animation" | "controller" | "secondaryAnimation" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "popGestureEnabled" | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "barrierDismissible" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "maintainState" | "popGestureInProgress" | "offstage" | "subtreeContext" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "fullscreenDialog" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "install" | "didPush" | "didAdd" | "didReplace" | "didPop" | "didPopNext" | "didChangeNext" | "canTransitionTo" | "canTransitionFrom" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "toString" | "createOverlayEntries" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didComplete" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "setState" | "buildPage" | "buildTransitions" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "buildModalBarrier" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: ModalRoute<_Selected0>;
    } & _FlaxInstanceType<ModalRoute<_Selected0>> & _FlaxDartType<ModalRoute<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream15.BuildContext) => ModalRoute<_Selected0> | null : never : never;
}
export {};
