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
import type * as upstream7 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoRouteTransitionMixin';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoRouteTransitionMixin';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream12 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream14 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream16 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
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
export interface CupertinoPageRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.PageRoute<T>, _flaxOwnMembers0>, Omit<upstream1.ModalRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T>>, Omit<upstream2.TransitionRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T>>, Omit<upstream3.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T>>, Omit<upstream4.Route<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T>>, Omit<upstream5.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T>>, Omit<upstream6.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T> | keyof upstream5.PredictiveBackRoute>, Omit<upstream7.CupertinoRouteTransitionMixin<T>, _flaxOwnMembers0 | keyof upstream0.PageRoute<T> | keyof upstream1.ModalRoute<T> | keyof upstream2.TransitionRoute<T> | keyof upstream3.OverlayRoute<T> | keyof upstream4.Route<T> | keyof upstream5.PredictiveBackRoute | keyof upstream6.LocalHistoryRoute<T>>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/route.dart::CupertinoPageRoute": readonly [T];
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
}>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/route.dart::CupertinoRouteTransitionMixin": readonly [T];
}> {
    readonly __CupertinoPageRoute: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoPageRoute<T>;
    readonly filter: upstream10.ImageFilter | null;
    readonly traversalEdgeBehavior: upstream11.TraversalEdgeBehavior | null;
    readonly directionalTraversalEdgeBehavior: upstream11.TraversalEdgeBehavior | null;
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
    readonly barrierDismissible: boolean;
    readonly semanticsDismissible: boolean;
    readonly barrierColor: upstream13.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierCurve: upstream14.Curve;
    readonly maintainState: boolean;
    readonly popGestureInProgress: boolean;
    readonly popGestureEnabled: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream8.BuildContext | null;
    readonly animation: upstream12.Animation<number> | null;
    readonly secondaryAnimation: upstream12.Animation<number> | null;
    readonly popDisposition: upstream15.RoutePopDisposition;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly fullscreenDialog: boolean;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream16.Duration;
    readonly reverseTransitionDuration: upstream16.Duration;
    readonly opaque: boolean;
    readonly allowSnapshotting: boolean;
    readonly finishedWhenPopped: boolean;
    readonly controller: upstream17.AnimationController | null;
    get willDisposeAnimationController(): boolean;
    readonly debugLabel: string;
    readonly overlayEntries: DartList<upstream18.OverlayEntry>;
    readonly requestFocus: boolean;
    readonly navigator: upstream19.NavigatorState | null;
    readonly settings: upstream9.RouteSettings;
    readonly restorationScopeId: upstream20.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly title: string | null;
    readonly previousTitle: upstream20.ValueListenable<string | null>;
    readonly builder: ((context: upstream8.BuildContext) => Widget);
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
    didPush(): upstream21.TickerFuture;
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
    createOverlayEntries(): DartIterable<upstream18.OverlayEntry>;
    toString(): string;
    debugTransitionCompleted(): boolean;
    createAnimationController(): upstream17.AnimationController;
    createAnimation(): upstream12.Animation<number>;
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
    buildContent(context: upstream8.BuildContext): Widget;
    set receivedTransition(value: ((context: upstream8.BuildContext, animation: upstream12.Animation<number>, secondaryAnimation: upstream12.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
    set offstage(value: boolean);
    set willDisposeAnimationController(value: boolean);
}
export declare function _CupertinoPageRouteFactory<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream8.BuildContext) => Widget);
    title?: string | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
}): CupertinoPageRoute<T>;
export declare function _CupertinoPageRouteFactory(options: {
    builder: ((context: upstream8.BuildContext) => Widget);
    title?: string | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
}): CupertinoPageRoute<unknown | null>;
export declare const CupertinoPageRoute: typeof _CupertinoPageRouteFactory & _FlaxInstanceType<CupertinoPageRoute<unknown | null>> & _FlaxDartType<CupertinoPageRoute<unknown | null>, readonly ["class", "flax.cupertino/cupertino#type:CupertinoPageRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "barrierDismissible" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "maintainState" | "popGestureInProgress" | "popGestureEnabled" | "offstage" | "subtreeContext" | "animation" | "secondaryAnimation" | "popDisposition" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "fullscreenDialog" | "completed" | "transitionDuration" | "reverseTransitionDuration" | "opaque" | "allowSnapshotting" | "finishedWhenPopped" | "controller" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "title" | "previousTitle" | "builder" | "setState" | "buildPage" | "buildTransitions" | "install" | "didPush" | "didAdd" | "willPop" | "onPopInvokedWithResult" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "didChangePrevious" | "didChangeNext" | "didPopNext" | "changedInternalState" | "changedExternalState" | "buildModalBarrier" | "createOverlayEntries" | "toString" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "didReplace" | "didPop" | "canTransitionTo" | "canTransitionFrom" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "onPopInvoked" | "didComplete" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "buildContent" | "__flaxBound:package:cupertino_ui/src/route.dart::CupertinoPageRoute" | "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute" | "__flaxBound:package:cupertino_ui/src/route.dart::CupertinoRouteTransitionMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            builder: ((context: upstream8.BuildContext) => Widget);
            title?: string | null | undefined;
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            requestFocus?: boolean | null | undefined;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
            allowSnapshotting?: boolean | undefined;
            barrierDismissible?: boolean | undefined;
        }): CupertinoPageRoute<_Selected0>;
        readonly prototype: CupertinoPageRoute<_Selected0>;
    } & _FlaxInstanceType<CupertinoPageRoute<_Selected0>> & _FlaxDartType<CupertinoPageRoute<_Selected0>> : never : never;
}
export {};
