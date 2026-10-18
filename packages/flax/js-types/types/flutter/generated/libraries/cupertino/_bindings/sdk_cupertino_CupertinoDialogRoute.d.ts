import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawDialogRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawDialogRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_PopupRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopupRoute';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ModalRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ModalRoute';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream11 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream16 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream18 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream22 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import type * as upstream24 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoDialogRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.RawDialogRoute<T>, _flaxOwnMembers0>, Omit<upstream1.PopupRoute<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T>>, Omit<upstream2.ModalRoute<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T>>, Omit<upstream3.TransitionRoute<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T> | keyof upstream2.ModalRoute<T>>, Omit<upstream4.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T> | keyof upstream2.ModalRoute<T> | keyof upstream3.TransitionRoute<T>>, Omit<upstream5.Route<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T> | keyof upstream2.ModalRoute<T> | keyof upstream3.TransitionRoute<T> | keyof upstream4.OverlayRoute<T>>, Omit<upstream6.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T> | keyof upstream2.ModalRoute<T> | keyof upstream3.TransitionRoute<T> | keyof upstream4.OverlayRoute<T> | keyof upstream5.Route<T>>, Omit<upstream7.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.RawDialogRoute<T> | keyof upstream1.PopupRoute<T> | keyof upstream2.ModalRoute<T> | keyof upstream3.TransitionRoute<T> | keyof upstream4.OverlayRoute<T> | keyof upstream5.Route<T> | keyof upstream6.PredictiveBackRoute>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/route.dart::CupertinoDialogRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::RawDialogRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PopupRoute": readonly [T];
}>, Readonly<{
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
    readonly __CupertinoDialogRoute: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoDialogRoute<T>;
    readonly barrierDismissible: boolean;
    readonly barrierLabel: string | null;
    readonly barrierColor: upstream9.Color | null;
    readonly transitionDuration: upstream10.Duration;
    readonly anchorPoint: upstream13.Offset | null;
    readonly fullscreenDialog: boolean;
    readonly opaque: boolean;
    readonly maintainState: boolean;
    readonly allowSnapshotting: boolean;
    readonly filter: upstream14.ImageFilter | null;
    readonly traversalEdgeBehavior: upstream15.TraversalEdgeBehavior | null;
    readonly directionalTraversalEdgeBehavior: upstream15.TraversalEdgeBehavior | null;
    readonly delegatedTransition: ((context: upstream8.BuildContext, animation: Readonly<{
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
    get receivedTransition(): ((context: upstream8.BuildContext, animation: Readonly<{
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
    readonly semanticsDismissible: boolean;
    readonly barrierCurve: upstream16.Curve;
    readonly popGestureInProgress: boolean;
    readonly popGestureEnabled: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream8.BuildContext | null;
    readonly animation: upstream11.Animation<number> | null;
    readonly secondaryAnimation: upstream11.Animation<number> | null;
    readonly popDisposition: upstream17.RoutePopDisposition;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly completed: Promise<T | null>;
    readonly reverseTransitionDuration: upstream10.Duration;
    readonly finishedWhenPopped: boolean;
    readonly controller: upstream18.AnimationController | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    readonly overlayEntries: DartList<upstream19.OverlayEntry>;
    readonly requestFocus: boolean;
    readonly navigator: upstream20.NavigatorState | null;
    readonly settings: upstream12.RouteSettings;
    readonly restorationScopeId: upstream21.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    get transitionBuilder(): ((context: upstream8.BuildContext, animation: Readonly<{
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
    }>, child: Widget) => Widget) | null;
    buildPage(context: upstream8.BuildContext, animation: Readonly<{
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
    buildTransitions(context: upstream8.BuildContext, animation: Readonly<{
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
    setState(fn: (() => void)): void;
    install(): void;
    didPush(): upstream22.TickerFuture;
    didAdd(): void;
    willPop(): Promise<upstream17.RoutePopDisposition>;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    addScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    removeScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    registerPopEntry(popEntry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null];
    }>): void;
    unregisterPopEntry(popEntry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null];
    }>): void;
    didChangePrevious(previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didChangeNext(nextRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPopNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>): void;
    changedInternalState(): void;
    changedExternalState(): void;
    buildModalBarrier(): Widget;
    createOverlayEntries(): DartIterable<upstream19.OverlayEntry>;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream18.AnimationController;
    createAnimation(): upstream11.Animation<number>;
    createSimulation(options: {
        forward: boolean;
    }): upstream24.Simulation;
    didReplace(oldRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
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
    onPopInvoked(didPop: boolean): void;
    didComplete(result: (T | DartInput<T>) | null): void;
    addLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
    removeLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
    toString(): string;
    set receivedTransition(value: ((context: upstream8.BuildContext, animation: upstream11.Animation<number>, secondaryAnimation: upstream11.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
    set offstage(value: boolean);
    set willDisposeAnimationController(value: boolean);
    set transitionBuilder(value: ((context: upstream8.BuildContext, animation: upstream11.Animation<number>, secondaryAnimation: upstream11.Animation<number>, child: Widget) => Widget) | null);
}
export declare function _CupertinoDialogRouteFactory<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream8.BuildContext) => Widget);
    context: upstream8.BuildContext;
    barrierDismissible?: boolean | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    transitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    transitionBuilder?: ((context: upstream8.BuildContext, animation: upstream11.Animation<number>, secondaryAnimation: upstream11.Animation<number>, child: Widget) => Widget) | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): CupertinoDialogRoute<T>;
export declare function _CupertinoDialogRouteFactory(options: {
    builder: ((context: upstream8.BuildContext) => Widget);
    context: upstream8.BuildContext;
    barrierDismissible?: boolean | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    transitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    transitionBuilder?: ((context: upstream8.BuildContext, animation: upstream11.Animation<number>, secondaryAnimation: upstream11.Animation<number>, child: Widget) => Widget) | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): CupertinoDialogRoute<unknown | null>;
export declare const CupertinoDialogRoute: typeof _CupertinoDialogRouteFactory & _FlaxInstanceType<CupertinoDialogRoute<unknown | null>> & _FlaxDartType<CupertinoDialogRoute<unknown | null>, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoDialogRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "barrierDismissible" | "barrierLabel" | "barrierColor" | "transitionDuration" | "anchorPoint" | "fullscreenDialog" | "opaque" | "maintainState" | "allowSnapshotting" | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "semanticsDismissible" | "barrierCurve" | "popGestureInProgress" | "popGestureEnabled" | "offstage" | "subtreeContext" | "animation" | "secondaryAnimation" | "popDisposition" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "completed" | "reverseTransitionDuration" | "finishedWhenPopped" | "controller" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "transitionBuilder" | "buildPage" | "buildTransitions" | "setState" | "install" | "didPush" | "didAdd" | "willPop" | "onPopInvokedWithResult" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "didChangePrevious" | "didChangeNext" | "didPopNext" | "changedInternalState" | "changedExternalState" | "buildModalBarrier" | "createOverlayEntries" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "didReplace" | "didPop" | "canTransitionTo" | "canTransitionFrom" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "onPopInvoked" | "didComplete" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "toString" | "__flaxBound:package:flutter/src/cupertino/route.dart::CupertinoDialogRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::RawDialogRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::PopupRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            builder: ((context: upstream8.BuildContext) => Widget);
            context: upstream8.BuildContext;
            barrierDismissible?: boolean | undefined;
            barrierColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            barrierLabel?: string | null | undefined;
            transitionDuration?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
            }>) | undefined;
            transitionBuilder?: ((context: upstream8.BuildContext, animation: upstream11.Animation<number>, secondaryAnimation: upstream11.Animation<number>, child: Widget) => Widget) | null | undefined;
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            requestFocus?: boolean | null | undefined;
            anchorPoint?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
        }): CupertinoDialogRoute<_Selected0>;
        readonly prototype: CupertinoDialogRoute<_Selected0>;
    } & _FlaxInstanceType<CupertinoDialogRoute<_Selected0>> & _FlaxDartType<CupertinoDialogRoute<_Selected0>> : never : never;
}
export {};
