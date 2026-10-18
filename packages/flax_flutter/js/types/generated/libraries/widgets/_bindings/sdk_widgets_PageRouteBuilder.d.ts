import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
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
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream14 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream16 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream20 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import type * as upstream22 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageRouteBuilder<T extends unknown | null = unknown | null> extends Omit<upstream0.PageRoute<T>, _flaxOwnMembers0>, Omit<upstream1.ModalRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T>>, Omit<upstream2.TransitionRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T>>, Omit<upstream3.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T>>, Omit<upstream4.Route<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T>>, Omit<upstream5.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T>>, Omit<upstream6.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T> | keyof upstream5.PredictiveBackRoute>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRouteBuilder": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [T];
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
    readonly __PageRouteBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: PageRouteBuilder<T>;
    readonly fullscreenDialog: boolean;
    readonly allowSnapshotting: boolean;
    readonly opaque: boolean;
    readonly barrierDismissible: boolean;
    readonly popGestureEnabled: boolean;
    readonly filter: upstream12.ImageFilter | null;
    readonly traversalEdgeBehavior: upstream13.TraversalEdgeBehavior | null;
    readonly directionalTraversalEdgeBehavior: upstream13.TraversalEdgeBehavior | null;
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
    readonly barrierColor: upstream11.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierCurve: upstream14.Curve;
    readonly maintainState: boolean;
    readonly popGestureInProgress: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream8.BuildContext | null;
    readonly animation: upstream9.Animation<number> | null;
    readonly secondaryAnimation: upstream9.Animation<number> | null;
    readonly popDisposition: upstream15.RoutePopDisposition;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream10.Duration;
    readonly reverseTransitionDuration: upstream10.Duration;
    readonly finishedWhenPopped: boolean;
    readonly controller: upstream16.AnimationController | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    readonly overlayEntries: DartList<upstream17.OverlayEntry>;
    readonly requestFocus: boolean;
    readonly navigator: upstream18.NavigatorState | null;
    readonly settings: upstream7.RouteSettings;
    readonly restorationScopeId: upstream19.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly pageBuilder: ((context: upstream8.BuildContext, animation: Readonly<{
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
    }>) => Widget);
    readonly transitionsBuilder: ((context: upstream8.BuildContext, animation: Readonly<{
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
    }>, child: Widget) => Widget);
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
    setState(fn: (() => void)): void;
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
    install(): void;
    didPush(): upstream20.TickerFuture;
    didAdd(): void;
    willPop(): Promise<upstream15.RoutePopDisposition>;
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
    createOverlayEntries(): DartIterable<upstream17.OverlayEntry>;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream16.AnimationController;
    createAnimation(): upstream9.Animation<number>;
    createSimulation(options: {
        forward: boolean;
    }): upstream22.Simulation | null;
    didReplace(oldRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
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
    set receivedTransition(value: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
    set offstage(value: boolean);
    set willDisposeAnimationController(value: boolean);
}
export declare function _PageRouteBuilderFactory<T extends unknown | null = unknown | null>(options: {
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    pageBuilder: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>) => Widget);
    transitionsBuilder?: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>, child: Widget) => Widget) | undefined;
    transitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    reverseTransitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    opaque?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
}): PageRouteBuilder<T>;
export declare function _PageRouteBuilderFactory(options: {
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    pageBuilder: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>) => Widget);
    transitionsBuilder?: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>, child: Widget) => Widget) | undefined;
    transitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    reverseTransitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
    opaque?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
}): PageRouteBuilder<unknown | null>;
export declare const PageRouteBuilder: typeof _PageRouteBuilderFactory & _FlaxInstanceType<PageRouteBuilder<unknown | null>> & _FlaxDartType<PageRouteBuilder<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:PageRouteBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fullscreenDialog" | "allowSnapshotting" | "opaque" | "barrierDismissible" | "popGestureEnabled" | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "maintainState" | "popGestureInProgress" | "offstage" | "subtreeContext" | "animation" | "secondaryAnimation" | "popDisposition" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "completed" | "transitionDuration" | "reverseTransitionDuration" | "finishedWhenPopped" | "controller" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "pageBuilder" | "transitionsBuilder" | "canTransitionTo" | "canTransitionFrom" | "setState" | "buildPage" | "buildTransitions" | "install" | "didPush" | "didAdd" | "willPop" | "onPopInvokedWithResult" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "didChangePrevious" | "didChangeNext" | "didPopNext" | "changedInternalState" | "changedExternalState" | "buildModalBarrier" | "createOverlayEntries" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "didReplace" | "didPop" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "onPopInvoked" | "didComplete" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "toString" | "__flaxBound:package:flutter/src/widgets/pages.dart::PageRouteBuilder" | "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            requestFocus?: boolean | null | undefined;
            pageBuilder: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>) => Widget);
            transitionsBuilder?: ((context: upstream8.BuildContext, animation: upstream9.Animation<number>, secondaryAnimation: upstream9.Animation<number>, child: Widget) => Widget) | undefined;
            transitionDuration?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
            }>) | undefined;
            reverseTransitionDuration?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
            }>) | undefined;
            opaque?: boolean | undefined;
            barrierDismissible?: boolean | undefined;
            barrierColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            barrierLabel?: string | null | undefined;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
            allowSnapshotting?: boolean | undefined;
        }): PageRouteBuilder<_Selected0>;
        readonly prototype: PageRouteBuilder<_Selected0>;
    } & _FlaxInstanceType<PageRouteBuilder<_Selected0>> & _FlaxDartType<PageRouteBuilder<_Selected0>> : never : never;
}
export {};
