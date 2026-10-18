import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Navigator';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayState';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream16 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigatorState extends Omit<upstream0.State<upstream1.Navigator>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Navigator>>, Omit<upstream3.TickerProviderStateMixin<upstream1.Navigator>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Navigator> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Navigator> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Navigator>>, Omit<upstream5.RestorationMixin<upstream1.Navigator>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Navigator> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Navigator> | keyof upstream4.TickerProvider>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Navigator];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.Navigator];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream1.Navigator];
}> {
    readonly __NavigatorState: unique symbol;
    readonly [_flaxDartTypeValue]: NavigatorState;
    readonly [_flaxDartMethodCases]?: {
        pushNamed: _FlaxSignature0;
        restorablePushNamed: _FlaxSignature1;
        pushReplacementNamed: _FlaxSignature2;
        restorablePushReplacementNamed: _FlaxSignature3;
        popAndPushNamed: _FlaxSignature4;
        restorablePopAndPushNamed: _FlaxSignature5;
        pushNamedAndRemoveUntil: _FlaxSignature6;
        restorablePushNamedAndRemoveUntil: _FlaxSignature7;
        push: _FlaxSignature8;
        restorablePush: _FlaxSignature9;
        pushReplacement: _FlaxSignature10;
        restorablePushReplacement: _FlaxSignature11;
        pushAndRemoveUntil: _FlaxSignature12;
        restorablePushAndRemoveUntil: _FlaxSignature13;
        replace: _FlaxSignature14;
        restorableReplace: _FlaxSignature15;
        replaceRouteBelow: _FlaxSignature16;
        restorableReplaceRouteBelow: _FlaxSignature17;
        maybePop: _FlaxSignature18;
        pop: _FlaxSignature19;
        popUntilWithResult: _FlaxSignature20;
        removeRoute: _FlaxSignature21;
        removeRouteBelow: _FlaxSignature22;
    };
    readonly focusNode: upstream6.FocusNode;
    readonly restorationId: string | null;
    readonly overlay: upstream7.OverlayState | null;
    readonly userGestureInProgress: boolean;
    readonly userGestureInProgressNotifier: upstream8.ValueNotifier<boolean>;
    readonly widget: upstream1.Navigator;
    readonly context: upstream9.BuildContext;
    readonly mounted: boolean;
    readonly bucket: upstream10.RestorationBucket | null;
    readonly restorePending: boolean;
    initState(): void;
    restoreState(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null, initialRestore: boolean): void;
    didToggleBucket(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null): void;
    didChangeDependencies(): void;
    didUpdateWidget(oldWidget: upstream1.Navigator): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    pushNamed<T extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushNamed<T extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }): string;
    pushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    popAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePopAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    pushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteName: string, predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteName: string, predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    push<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>): Promise<_FlaxDartOutput<T> | null>;
    restorablePush<T extends unknown | null = unknown | null>(routeBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    pushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, options?: {
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    pushAndRemoveUntil<T extends unknown | null = unknown | null>(newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, predicate: ((route: upstream11.Route<unknown | null>) => boolean)): Promise<_FlaxDartOutput<T> | null>;
    restorablePushAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    replace<T extends unknown | null = unknown | null>(options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }): void;
    restorableReplace<T extends unknown | null = unknown | null>(options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }): string;
    replaceRouteBelow<T extends unknown | null = unknown | null>(options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }): void;
    restorableReplaceRouteBelow<T extends unknown | null = unknown | null>(options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>);
    }): string;
    canPop(): boolean;
    maybePop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): Promise<boolean>;
    pop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): void;
    popUntil(predicate: ((route: upstream11.Route<unknown | null>) => boolean)): void;
    popUntilWithResult<T extends unknown | null = unknown | null>(predicate: ((route: upstream11.Route<unknown | null>) => boolean), result: (T | _FlaxDartOutput<T>) | null): void;
    removeRoute<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    removeRouteBelow<T extends unknown | null = unknown | null>(anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    finalizeRoute(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>): void;
    didStartUserGesture(): void;
    didStopUserGesture(): void;
    build(context: upstream9.BuildContext): Widget;
    reassemble(): void;
    setState(fn: (() => void)): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream14.DiagnosticsTreeStyle | null | undefined;
    }): upstream13.DiagnosticsNode;
    createTicker(onTick: ((elapsed: upstream16.Duration) => void)): upstream15.Ticker;
    registerForRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, restorationId: string): void;
    unregisterFromRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    didUpdateRestorationId(): void;
}
export declare const NavigatorState: object & _FlaxInstanceType<NavigatorState> & _FlaxDartType<NavigatorState, readonly ["class", "flax.core/flutter#type:NavigatorState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "focusNode" | "restorationId" | "overlay" | "userGestureInProgress" | "userGestureInProgressNotifier" | "widget" | "context" | "mounted" | "bucket" | "restorePending" | "initState" | "restoreState" | "didToggleBucket" | "didChangeDependencies" | "didUpdateWidget" | "deactivate" | "activate" | "dispose" | "pushNamed" | "restorablePushNamed" | "pushReplacementNamed" | "restorablePushReplacementNamed" | "popAndPushNamed" | "restorablePopAndPushNamed" | "pushNamedAndRemoveUntil" | "restorablePushNamedAndRemoveUntil" | "push" | "restorablePush" | "pushReplacement" | "restorablePushReplacement" | "pushAndRemoveUntil" | "restorablePushAndRemoveUntil" | "replace" | "restorableReplace" | "replaceRouteBelow" | "restorableReplaceRouteBelow" | "canPop" | "maybePop" | "pop" | "popUntil" | "popUntilWithResult" | "removeRoute" | "removeRouteBelow" | "finalizeRoute" | "didStartUserGesture" | "didStopUserGesture" | "build" | "reassemble" | "setState" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "createTicker" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteName: string, predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteName: string, predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature8 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature9 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (routeBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature10 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, options?: {
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature11 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature12 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, predicate: ((route: upstream11.Route<unknown | null>) => boolean)) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature13 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>), predicate: ((route: upstream11.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature14 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature15 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }) => string : never : never;
}
interface _FlaxSignature16 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature17 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream9.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>);
    }) => string : never : never;
}
interface _FlaxSignature18 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<boolean> : never : never;
}
interface _FlaxSignature19 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature20 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (predicate: ((route: upstream11.Route<unknown | null>) => boolean), result: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature21 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature22 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
export {};
