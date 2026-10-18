import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PopupRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopupRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ModalRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ModalRoute';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream15 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream17 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream21 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import type * as upstream23 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawDialogRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.PopupRoute<T>, _flaxOwnMembers0>, Omit<upstream1.ModalRoute<T>, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T>>, Omit<upstream2.TransitionRoute<T>, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T> | keyof upstream1.ModalRoute<T>>, Omit<upstream3.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T>>, Omit<upstream4.Route<T>, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T>>, Omit<upstream5.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T>>, Omit<upstream6.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.PopupRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T> | keyof upstream5.PredictiveBackRoute>, Readonly<{
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
    readonly __RawDialogRoute: unique symbol;
    readonly [_flaxDartTypeValue]: RawDialogRoute<T>;
    readonly opaque: boolean;
    readonly maintainState: boolean;
    readonly allowSnapshotting: boolean;
    readonly filter: upstream14.ImageFilter | null;
    readonly traversalEdgeBehavior: upstream13.TraversalEdgeBehavior | null;
    readonly directionalTraversalEdgeBehavior: upstream13.TraversalEdgeBehavior | null;
    readonly delegatedTransition: ((context: upstream7.BuildContext, animation: Readonly<{
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
    get receivedTransition(): ((context: upstream7.BuildContext, animation: Readonly<{
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
    readonly barrierColor: upstream9.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierCurve: upstream15.Curve;
    readonly popGestureInProgress: boolean;
    readonly popGestureEnabled: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream7.BuildContext | null;
    readonly animation: upstream8.Animation<number> | null;
    readonly secondaryAnimation: upstream8.Animation<number> | null;
    readonly popDisposition: upstream16.RoutePopDisposition;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly fullscreenDialog: boolean;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream10.Duration;
    readonly reverseTransitionDuration: upstream10.Duration;
    readonly finishedWhenPopped: boolean;
    readonly controller: upstream17.AnimationController | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    readonly overlayEntries: DartList<upstream18.OverlayEntry>;
    readonly requestFocus: boolean;
    readonly navigator: upstream19.NavigatorState | null;
    readonly settings: upstream11.RouteSettings;
    readonly restorationScopeId: upstream20.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly anchorPoint: upstream12.Offset | null;
    setState(fn: (() => void)): void;
    buildPage(context: upstream7.BuildContext, animation: Readonly<{
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
    buildTransitions(context: upstream7.BuildContext, animation: Readonly<{
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
    install(): void;
    didPush(): upstream21.TickerFuture;
    didAdd(): void;
    willPop(): Promise<upstream16.RoutePopDisposition>;
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
    createOverlayEntries(): DartIterable<upstream18.OverlayEntry>;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream17.AnimationController;
    createAnimation(): upstream8.Animation<number>;
    createSimulation(options: {
        forward: boolean;
    }): upstream23.Simulation | null;
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
    set receivedTransition(value: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
    set offstage(value: boolean);
    set willDisposeAnimationController(value: boolean);
}
export declare function _RawDialogRouteFactory<T extends unknown | null = unknown | null>(options: {
    pageBuilder: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>) => Widget);
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
    transitionBuilder?: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>, child: Widget) => Widget) | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    traversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
    directionalTraversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
    fullscreenDialog?: boolean | undefined;
}): RawDialogRoute<T>;
export declare function _RawDialogRouteFactory(options: {
    pageBuilder: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>) => Widget);
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
    transitionBuilder?: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>, child: Widget) => Widget) | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    traversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
    directionalTraversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
    fullscreenDialog?: boolean | undefined;
}): RawDialogRoute<unknown | null>;
export declare const RawDialogRoute: typeof _RawDialogRouteFactory & _FlaxInstanceType<RawDialogRoute<unknown | null>> & _FlaxDartType<RawDialogRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:RawDialogRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "opaque" | "maintainState" | "allowSnapshotting" | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "barrierDismissible" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "popGestureInProgress" | "popGestureEnabled" | "offstage" | "subtreeContext" | "animation" | "secondaryAnimation" | "popDisposition" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "fullscreenDialog" | "completed" | "transitionDuration" | "reverseTransitionDuration" | "finishedWhenPopped" | "controller" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "anchorPoint" | "setState" | "buildPage" | "buildTransitions" | "install" | "didPush" | "didAdd" | "willPop" | "onPopInvokedWithResult" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "didChangePrevious" | "didChangeNext" | "didPopNext" | "changedInternalState" | "changedExternalState" | "buildModalBarrier" | "createOverlayEntries" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "didReplace" | "didPop" | "canTransitionTo" | "canTransitionFrom" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "onPopInvoked" | "didComplete" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "toString" | "__flaxBound:package:flutter/src/widgets/routes.dart::RawDialogRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::PopupRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            pageBuilder: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>) => Widget);
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
            transitionBuilder?: ((context: upstream7.BuildContext, animation: upstream8.Animation<number>, secondaryAnimation: upstream8.Animation<number>, child: Widget) => Widget) | null | undefined;
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            requestFocus?: boolean | null | undefined;
            anchorPoint?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            traversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
            directionalTraversalEdgeBehavior?: upstream13.TraversalEdgeBehavior | null | undefined;
            fullscreenDialog?: boolean | undefined;
        }): RawDialogRoute<_Selected0>;
        readonly prototype: RawDialogRoute<_Selected0>;
    } & _FlaxInstanceType<RawDialogRoute<_Selected0>> & _FlaxDartType<RawDialogRoute<_Selected0>> : never : never;
}
export {};
