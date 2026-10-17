import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Bindable, type DartInput, type WidgetDescription } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Page';
import '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Navigator extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Navigator";
}
export declare function _NavigatorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    pages?: Bindable<DartListInput<upstream1.Page<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null];
    }>>> | undefined;
    onPopPage?: Bindable<((route: upstream2.Route<unknown | null>, result: unknown | null) => boolean) | null> | undefined;
    initialRoute?: Bindable<string | null> | undefined;
    onGenerateInitialRoutes?: Bindable<((navigator: upstream3.NavigatorState, initialRoute: string) => DartListInput<upstream2.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>>)> | undefined;
    onGenerateRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    onUnknownRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    reportsRouteUpdateToEngine?: Bindable<boolean> | undefined;
    clipBehavior?: Bindable<upstream5.Clip> | undefined;
    observers?: Bindable<DartListInput<upstream6.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    requestFocus?: Bindable<boolean> | undefined;
    restorationScopeId?: Bindable<string | null> | undefined;
    onDidRemovePage?: Bindable<((page: upstream1.Page<unknown | null>) => void) | null> | undefined;
}): Navigator;
export declare namespace _NavigatorFactory {
    const defaultRouteName: string;
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pushNamed<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    export const pushNamed: _FlaxDartCallable<typeof _flaxDefault_pushNamed, _FlaxSignature0>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePushNamed<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }): string;
    export const restorablePushNamed: _FlaxDartCallable<typeof _flaxDefault_restorablePushNamed, _FlaxSignature1>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    export const pushReplacementNamed: _FlaxDartCallable<typeof _flaxDefault_pushReplacementNamed, _FlaxSignature2>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    export const restorablePushReplacementNamed: _FlaxDartCallable<typeof _flaxDefault_restorablePushReplacementNamed, _FlaxSignature3>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_popAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    export const popAndPushNamed: _FlaxDartCallable<typeof _flaxDefault_popAndPushNamed, _FlaxSignature4>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePopAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    export const restorablePopAndPushNamed: _FlaxDartCallable<typeof _flaxDefault_restorablePopAndPushNamed, _FlaxSignature5>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    export const pushNamedAndRemoveUntil: _FlaxDartCallable<typeof _flaxDefault_pushNamedAndRemoveUntil, _FlaxSignature6>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    export const restorablePushNamedAndRemoveUntil: _FlaxDartCallable<typeof _flaxDefault_restorablePushNamedAndRemoveUntil, _FlaxSignature7>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_push<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>): Promise<_FlaxDartOutput<T> | null>;
    export const push: _FlaxDartCallable<typeof _flaxDefault_push, _FlaxSignature8>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePush<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    export const restorablePush: _FlaxDartCallable<typeof _flaxDefault_restorablePush, _FlaxSignature9>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, options?: {
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    export const pushReplacement: _FlaxDartCallable<typeof _flaxDefault_pushReplacement, _FlaxSignature10>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    export const restorablePushReplacement: _FlaxDartCallable<typeof _flaxDefault_restorablePushReplacement, _FlaxSignature11>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pushAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, predicate: ((route: upstream2.Route<unknown | null>) => boolean)): Promise<_FlaxDartOutput<T> | null>;
    export const pushAndRemoveUntil: _FlaxDartCallable<typeof _flaxDefault_pushAndRemoveUntil, _FlaxSignature12>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorablePushAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    export const restorablePushAndRemoveUntil: _FlaxDartCallable<typeof _flaxDefault_restorablePushAndRemoveUntil, _FlaxSignature13>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_replace<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }): void;
    export const replace: _FlaxDartCallable<typeof _flaxDefault_replace, _FlaxSignature14>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorableReplace<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }): string;
    export const restorableReplace: _FlaxDartCallable<typeof _flaxDefault_restorableReplace, _FlaxSignature15>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_replaceRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>;
    }): void;
    export const replaceRouteBelow: _FlaxDartCallable<typeof _flaxDefault_replaceRouteBelow, _FlaxSignature16>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_restorableReplaceRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>);
    }): string;
    export const restorableReplaceRouteBelow: _FlaxDartCallable<typeof _flaxDefault_restorableReplaceRouteBelow, _FlaxSignature17>;
    export {};
}
export declare namespace _NavigatorFactory {
    function canPop(context: upstream7.BuildContext): boolean;
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_maybePop<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, result?: (T | _FlaxDartOutput<T>) | null): Promise<boolean>;
    export const maybePop: _FlaxDartCallable<typeof _flaxDefault_maybePop, _FlaxSignature18>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_pop<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, result?: (T | _FlaxDartOutput<T>) | null): void;
    export const pop: _FlaxDartCallable<typeof _flaxDefault_pop, _FlaxSignature19>;
    export {};
}
export declare namespace _NavigatorFactory {
    function popUntil(context: upstream7.BuildContext, predicate: ((route: upstream2.Route<unknown | null>) => boolean)): void;
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_popUntilWithResult<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, predicate: ((route: upstream2.Route<unknown | null>) => boolean), result: (T | _FlaxDartOutput<T>) | null): void;
    export const popUntilWithResult: _FlaxDartCallable<typeof _flaxDefault_popUntilWithResult, _FlaxSignature20>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_removeRoute<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    export const removeRoute: _FlaxDartCallable<typeof _flaxDefault_removeRoute, _FlaxSignature21>;
    export {};
}
export declare namespace _NavigatorFactory {
    function _flaxDefault_removeRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    export const removeRouteBelow: _FlaxDartCallable<typeof _flaxDefault_removeRouteBelow, _FlaxSignature22>;
    export {};
}
export declare namespace _NavigatorFactory {
    function of(context: upstream7.BuildContext, options?: {
        rootNavigator?: boolean | undefined;
    }): upstream3.NavigatorState;
}
export declare namespace _NavigatorFactory {
    function maybeOf(context: upstream7.BuildContext, options?: {
        rootNavigator?: boolean | undefined;
    }): upstream3.NavigatorState | null;
}
export declare namespace _NavigatorFactory {
    function defaultGenerateInitialRoutes(navigator: upstream3.NavigatorState, initialRouteName: string): DartList<upstream2.Route<unknown | null>>;
}
export declare const Navigator: typeof _NavigatorFactory & _FlaxInstanceType<Navigator> & _FlaxDartType<Navigator, readonly ["class", "flax.core/flutter#type:Navigator", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, routeName: string, options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature8 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature9 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature10 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, options?: {
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature11 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature12 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, predicate: ((route: upstream2.Route<unknown | null>) => boolean)) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature13 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), predicate: ((route: upstream2.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature14 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature15 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }) => string : never : never;
}
interface _FlaxSignature16 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature17 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>);
    }) => string : never : never;
}
interface _FlaxSignature18 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, result?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<boolean> : never : never;
}
interface _FlaxSignature19 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature20 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, predicate: ((route: upstream2.Route<unknown | null>) => boolean), result: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature21 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature22 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext, anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
export {};
