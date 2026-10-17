import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPageRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.Route<T>, typeof _flaxDartTypeValue | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "builder" | "maintainState" | "debugLabel" | "fullscreenDialog" | "allowSnapshotting" | "opaque" | "barrierDismissible" | "popGestureEnabled" | "filter" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "popGestureInProgress" | "offstage" | "subtreeContext" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "completed" | "transitionDuration" | "reverseTransitionDuration" | "finishedWhenPopped" | "willDisposeAnimationController" | "install" | "didAdd" | "didReplace" | "onPopInvoked" | "onPopInvokedWithResult" | "didPop" | "didComplete" | "didPopNext" | "didChangeNext" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "dispose" | "buildContent" | "setState" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "buildModalBarrier" | "debugTransitionCompleted" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture">, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPageRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialRouteTransitionMixin": readonly [T];
}> {
    readonly __MaterialPageRoute: unique symbol;
    readonly requestFocus: boolean;
    readonly navigator: upstream3.NavigatorState | null;
    readonly settings: upstream2.RouteSettings;
    readonly restorationScopeId: upstream4.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    readonly builder: ((context: upstream1.BuildContext) => Widget);
    readonly maintainState: boolean;
    readonly debugLabel: string;
    readonly fullscreenDialog: boolean;
    readonly allowSnapshotting: boolean;
    readonly opaque: boolean;
    readonly barrierDismissible: boolean;
    readonly popGestureEnabled: boolean;
    readonly filter: upstream5.ImageFilter | null;
    readonly semanticsDismissible: boolean;
    readonly barrierColor: upstream6.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierCurve: upstream7.Curve;
    readonly popGestureInProgress: boolean;
    get offstage(): boolean;
    readonly subtreeContext: upstream1.BuildContext | null;
    readonly hasScopedWillPopCallback: boolean;
    readonly canPop: boolean;
    readonly impliesAppBarDismissal: boolean;
    readonly completed: Promise<T | null>;
    readonly transitionDuration: upstream8.Duration;
    readonly reverseTransitionDuration: upstream8.Duration;
    readonly finishedWhenPopped: boolean;
    get willDisposeAnimationController(): boolean;
    install(): void;
    didAdd(): void;
    didReplace(oldRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
    didComplete(result: (T | DartInput<T>) | null): void;
    didPopNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>): void;
    didChangeNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didChangePrevious(previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    changedInternalState(): void;
    changedExternalState(): void;
    dispose(): void;
    buildContent(context: upstream1.BuildContext): Widget;
    setState(fn: (() => void)): void;
    addScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    removeScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
    buildModalBarrier(): Widget;
    debugTransitionCompleted(): boolean;
    handleStartBackGesture(options?: {
        progress?: number | undefined;
    }): void;
    handleUpdateBackGestureProgress(options: {
        progress: number;
    }): void;
    handleCancelBackGesture(): void;
    handleCommitBackGesture(): void;
    set offstage(value: boolean);
    set willDisposeAnimationController(value: boolean);
}
export declare function _MaterialPageRouteFactory<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
}): MaterialPageRoute<T>;
export declare function _MaterialPageRouteFactory(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    requestFocus?: boolean | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    barrierDismissible?: boolean | undefined;
}): MaterialPageRoute<unknown | null>;
export declare const MaterialPageRoute: typeof _MaterialPageRouteFactory & _FlaxInstanceType<MaterialPageRoute<unknown | null>> & _FlaxDartType<MaterialPageRoute<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPageRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            builder: ((context: upstream1.BuildContext) => Widget);
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            requestFocus?: boolean | null | undefined;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
            allowSnapshotting?: boolean | undefined;
            barrierDismissible?: boolean | undefined;
        }): MaterialPageRoute<_Selected0>;
        readonly prototype: MaterialPageRoute<_Selected0>;
    } & _FlaxInstanceType<MaterialPageRoute<_Selected0>> & _FlaxDartType<MaterialPageRoute<_Selected0>> : never : never;
}
export {};
