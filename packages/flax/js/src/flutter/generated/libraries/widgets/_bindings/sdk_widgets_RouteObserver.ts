// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteAware';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteAware';
const _flaxMemberParameters0 = [{"name":"route","required":true,"positional":true},{"name":"previousRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"newRoute","required":false,"positional":false},{"name":"oldRoute","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"topRoute","required":true,"positional":true},{"name":"previousTopRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"routeAware","required":true,"positional":true},{"name":"route","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"routeAware","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteObserver<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> extends Omit<upstream1.NavigatorObserver, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::RouteObserver": readonly [R] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [] }> { readonly __RouteObserver: unique symbol;
readonly [_flaxDartTypeValue]: RouteObserver<R>;

}
defineObject("flax.core/sdk_widgets#type:RouteObserver", ["navigator"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteObserver", "object", {"didPush":_flaxMemberParameters0,"didPop":_flaxMemberParameters0,"didRemove":_flaxMemberParameters0,"didReplace":_flaxMemberParameters1,"didChangeTop":_flaxMemberParameters2,"didStartUserGesture":_flaxMemberParameters0,"didStopUserGesture":_flaxMemberParameters3,"subscribe":_flaxMemberParameters4,"unsubscribe":_flaxMemberParameters5}, {}), []);
const _RouteObserverProxy = {type: "flax.core/sdk_widgets#type:RouteObserver", parameters: [], constructors: {"":[]}, methods: {"didPush":_flaxMemberParameters0,"didPop":_flaxMemberParameters0,"didRemove":_flaxMemberParameters0,"didReplace":_flaxMemberParameters1,"didChangeTop":_flaxMemberParameters2,"didStartUserGesture":_flaxMemberParameters0,"didStopUserGesture":_flaxMemberParameters3,"subscribe":_flaxMemberParameters4,"unsubscribe":_flaxMemberParameters5}, getters: ["navigator"], setters: [], contextMembers: [], superMembers: ["get:navigator","didPush","didPop","didRemove","didReplace","didChangeTop","didStartUserGesture","didStopUserGesture","subscribe","unsubscribe"]} as const;
export interface RouteObserver<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> {
readonly [_flaxDartTypeValue]: RouteObserver<R>;

didPush(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didPop(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didRemove(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didReplace(options?: {newRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null | undefined; oldRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null | undefined}): void;
didChangeTop(topRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousTopRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didStartUserGesture(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didStopUserGesture(): void;
subscribe(routeAware: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [] }>, route: (R | DartInput<R>)): void;
unsubscribe(routeAware: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [] }>): void;
get navigator(): upstream2.NavigatorState | null;
}
export abstract class RouteObserver<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteObserver<upstream0.Route<unknown | null>>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteObserver<upstream0.Route<unknown | null>>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteObserver", readonly [readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RouteObserverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RouteObserver.prototype, _RouteObserverProxy);
export namespace RouteObserver { export function implement<R extends upstream0.Route<unknown | null> = upstream0.Route<unknown | null>>(args: [], implementation: {}): RouteObserver<R> {
return constructProxy(_RouteObserverProxy, args, implementation) as RouteObserver<R>; } }
_flaxBindInstanceType<RouteObserver<upstream0.Route<unknown | null>>, typeof RouteObserver>(RouteObserver, "flax.core/sdk_widgets#type:RouteObserver", ["flax.core/flutter#type:NavigatorObserver","dart:core::Object"]);
_flaxDefineDartTypes(RouteObserver, "flax.core/sdk_widgets#type:RouteObserver", {...{"category":"object","constructors":{}}, proxy: _RouteObserverProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "navigator" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture" | "subscribe" | "unsubscribe" | "__flaxBound:package:flutter/src/widgets/routes.dart::RouteObserver" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Route<unknown | null>] ? (abstract new () => RouteObserver<_Selected0>) & {readonly prototype: RouteObserver<_Selected0>;implement(args: readonly [], implementation: Partial<RouteObserver<_Selected0>>): RouteObserver<_Selected0>;} & _FlaxInstanceType<RouteObserver<_Selected0>> & _FlaxDartType<RouteObserver<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Route<unknown | null>] ? (abstract new () => RouteObserver<_Selected0>) & {readonly prototype: RouteObserver<_Selected0>;implement(args: readonly [], implementation: Partial<RouteObserver<_Selected0>>): RouteObserver<_Selected0>;} & _FlaxInstanceType<RouteObserver<_Selected0>> & _FlaxDartType<RouteObserver<_Selected0>> : never : never; }
