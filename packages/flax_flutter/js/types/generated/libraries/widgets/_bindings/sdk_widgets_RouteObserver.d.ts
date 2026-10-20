import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteAware';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteObserver<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> extends Omit<upstream1.NavigatorObserver, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::RouteObserver": readonly [R];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
}> {
    readonly __RouteObserver: unique symbol;
    readonly [_flaxDartTypeValue]: RouteObserver<R>;
    readonly navigator: upstream2.NavigatorState | null;
    didPush(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didRemove(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didReplace(options?: {
        newRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
        oldRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
    }): void;
    didChangeTop(topRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousTopRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStartUserGesture(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStopUserGesture(): void;
    subscribe(routeAware: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [];
    }>, route: (R | DartInput<R>)): void;
    unsubscribe(routeAware: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [];
    }>): void;
}
export declare function _RouteObserverFactory<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>>(): RouteObserver<R>;
export declare function _RouteObserverFactory(): RouteObserver<upstream0.Route<unknown | null>>;
export interface _RouteObserverNative<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> extends RouteObserver<R> {
    readonly [_flaxDartTypeValue]: _RouteObserverNative<R>;
    didPush(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didRemove(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didReplace(options?: {
        newRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
        oldRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
    }): void;
    didChangeTop(topRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousTopRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStartUserGesture(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStopUserGesture(): void;
    subscribe(routeAware: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [];
    }>, route: (R | DartInput<R>)): void;
    unsubscribe(routeAware: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [];
    }>): void;
    get navigator(): upstream2.NavigatorState | null;
}
export declare abstract class _RouteObserverNative<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteObserver<upstream0.Route<unknown | null>>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteObserver<upstream0.Route<unknown | null>>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteObserver", readonly [readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace _RouteObserverFactory {
    function implement<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>>(args: [], implementation: {}): RouteObserver<R>;
}
declare const _RouteObserverBinding: typeof _RouteObserverFactory & (new <R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>>() => _RouteObserverNative<R>);
export declare const RouteObserver: typeof _RouteObserverBinding & _FlaxInstanceType<RouteObserver<upstream0.Route<unknown | null>>> & _FlaxDartType<RouteObserver<upstream0.Route<unknown | null>>, readonly ["class", "flax.core/sdk_widgets#type:RouteObserver", readonly [readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "navigator" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture" | "subscribe" | "unsubscribe" | "__flaxBound:package:flutter/src/widgets/routes.dart::RouteObserver" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Route<unknown | null>] ? (new () => _RouteObserverNative<_Selected0>) & {
        (): _RouteObserverNative<_Selected0>;
        readonly prototype: _RouteObserverNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_RouteObserverNative<_Selected0>>): _RouteObserverNative<_Selected0>;
    } & _FlaxInstanceType<_RouteObserverNative<_Selected0>> & _FlaxDartType<_RouteObserverNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Route<unknown | null>] ? (new () => _RouteObserverNative<_Selected0>) & {
        (): _RouteObserverNative<_Selected0>;
        readonly prototype: _RouteObserverNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_RouteObserverNative<_Selected0>>): _RouteObserverNative<_Selected0>;
    } & _FlaxInstanceType<_RouteObserverNative<_Selected0>> & _FlaxDartType<_RouteObserverNative<_Selected0>> : never : never;
}
export {};
