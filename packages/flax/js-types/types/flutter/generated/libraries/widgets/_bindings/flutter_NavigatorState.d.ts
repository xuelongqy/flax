import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Navigator';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigatorState {
    readonly __NavigatorState: unique symbol;
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
    readonly focusNode: upstream0.FocusNode;
    readonly restorationId: string | null;
    readonly userGestureInProgress: boolean;
    readonly widget: upstream1.Navigator;
    readonly context: upstream2.BuildContext;
    readonly mounted: boolean;
    readonly restorePending: boolean;
    initState(): void;
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
    pushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteName: string, predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteName: string, predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    push<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>): Promise<_FlaxDartOutput<T> | null>;
    restorablePush<T extends unknown | null = unknown | null>(routeBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    pushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, options?: {
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    restorablePushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(routeBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): string;
    pushAndRemoveUntil<T extends unknown | null = unknown | null>(newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, predicate: ((route: upstream3.Route<unknown | null>) => boolean)): Promise<_FlaxDartOutput<T> | null>;
    restorablePushAndRemoveUntil<T extends unknown | null = unknown | null>(newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>), predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }): string;
    replace<T extends unknown | null = unknown | null>(options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }): void;
    restorableReplace<T extends unknown | null = unknown | null>(options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }): string;
    replaceRouteBelow<T extends unknown | null = unknown | null>(options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>;
    }): void;
    restorableReplaceRouteBelow<T extends unknown | null = unknown | null>(options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
        }>);
    }): string;
    canPop(): boolean;
    maybePop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): Promise<boolean>;
    pop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): void;
    popUntil(predicate: ((route: upstream3.Route<unknown | null>) => boolean)): void;
    popUntilWithResult<T extends unknown | null = unknown | null>(predicate: ((route: upstream3.Route<unknown | null>) => boolean), result: (T | _FlaxDartOutput<T>) | null): void;
    removeRoute<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    removeRouteBelow<T extends unknown | null = unknown | null>(anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, result?: (T | _FlaxDartOutput<T>) | null): void;
    finalizeRoute(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>): void;
    didStartUserGesture(): void;
    didStopUserGesture(): void;
    build(context: upstream2.BuildContext): Widget;
    reassemble(): void;
    setState(fn: (() => void)): void;
    toStringShort(): string;
    didUpdateRestorationId(): void;
}
export declare const NavigatorState: object & _FlaxInstanceType<NavigatorState> & _FlaxDartType<NavigatorState, readonly ["class", "flax.core/flutter#type:NavigatorState", readonly [], false]>;
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteName: string, predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteName: string, predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature8 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature9 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (routeBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature10 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, options?: {
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature11 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (routeBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), options?: {
        arguments?: unknown | null | undefined;
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => string : never : never : never;
}
interface _FlaxSignature12 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, predicate: ((route: upstream3.Route<unknown | null>) => boolean)) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature13 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>), predicate: ((route: upstream3.Route<unknown | null>) => boolean), options?: {
        arguments?: unknown | null | undefined;
    }) => string : never : never;
}
interface _FlaxSignature14 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>;
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature15 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>);
        oldRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
    }) => string : never : never;
}
interface _FlaxSignature16 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        newRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }>;
    }) => void : never : never;
}
interface _FlaxSignature17 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorRoute: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }>;
        arguments?: unknown | null | undefined;
        newRouteBuilder: ((context: upstream2.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (predicate: ((route: upstream3.Route<unknown | null>) => boolean), result: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature21 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature22 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (anchorRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
export {};
