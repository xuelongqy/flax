// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"arguments","required":false,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableRouteFuture<T extends unknown | null = unknown | null> extends Omit<upstream0.RestorableProperty<string | null>, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<string | null>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<string | null> | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RestorableRouteFuture": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [string | null] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableRouteFuture: unique symbol;
readonly [_flaxDartTypeValue]: RestorableRouteFuture<T>;

}
defineObject("flax.core/sdk_widgets#type:RestorableRouteFuture", ["enabled","state","isRegistered","hasListeners","navigatorFinder","onPresent","onComplete","isPresent","route"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableRouteFuture", "object", {"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters1,"initWithValue":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3,"present":_flaxMemberParameters4}, {}), ["removeListener"]);
const _RestorableRouteFutureProxy = {type: "flax.core/sdk_widgets#type:RestorableRouteFuture", parameters: [{"name":"navigatorFinder","required":false,"positional":false},{"name":"onPresent","required":true,"positional":false},{"name":"onComplete","required":false,"positional":false}], constructors: {"":[{"name":"navigatorFinder","required":false,"positional":false},{"name":"onPresent","required":true,"positional":false},{"name":"onComplete","required":false,"positional":false}]}, methods: {"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters1,"initWithValue":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3,"present":_flaxMemberParameters4}, getters: ["navigatorFinder","onPresent","onComplete","isPresent","route","enabled","state","isRegistered","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:navigatorFinder","get:onPresent","get:onComplete","get:isPresent","get:route","get:enabled","get:state","get:isRegistered","get:hasListeners","createDefaultValue","fromPrimitives","initWithValue","toPrimitives","dispose","addListener","removeListener","present"]} as const;
export interface RestorableRouteFuture<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: RestorableRouteFuture<T>;

createDefaultValue(): string | null;
fromPrimitives(data: unknown | null): string;
initWithValue(value: string | null): void;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
present(_flaxArg_617267756d656e7473?: unknown | null): void;
get navigatorFinder(): ((context: upstream4.BuildContext) => upstream3.NavigatorState);
get onPresent(): ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
get onComplete(): ((result: (T | DartInput<T>)) => void) | null;
get isPresent(): boolean;
get route(): upstream7.Route<T> | null;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
}
export abstract class RestorableRouteFuture<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableRouteFuture<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableRouteFuture<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableRouteFuture", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined; onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string); onComplete?: ((result: unknown | null) => void) | null | undefined}) { super(_RestorableRouteFutureProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RestorableRouteFuture.prototype, _RestorableRouteFutureProxy);
export namespace RestorableRouteFuture { export function implement<T extends unknown | null = unknown | null>(args: [options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined; onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string); onComplete?: ((result: unknown | null) => void) | null | undefined}], implementation: {}): RestorableRouteFuture<T> {
return constructProxy(_RestorableRouteFutureProxy, args, implementation) as RestorableRouteFuture<T>; } }
_flaxBindInstanceType<RestorableRouteFuture<unknown | null>, typeof RestorableRouteFuture>(RestorableRouteFuture, "flax.core/sdk_widgets#type:RestorableRouteFuture", ["flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
_flaxDefineDartTypes(RestorableRouteFuture, "flax.core/sdk_widgets#type:RestorableRouteFuture", {...{"category":"object","constructors":{}}, proxy: _RestorableRouteFutureProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "state" | "isRegistered" | "hasListeners" | "navigatorFinder" | "onPresent" | "onComplete" | "isPresent" | "route" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "present" | "__flaxBound:package:flutter/src/widgets/navigator.dart::RestorableRouteFuture" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);onComplete?: ((result: unknown | null) => void) | null | undefined}) => RestorableRouteFuture<_Selected0>) & {readonly prototype: RestorableRouteFuture<_Selected0>;implement(args: readonly [options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined; onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string); onComplete?: ((result: unknown | null) => void) | null | undefined}], implementation: Partial<RestorableRouteFuture<_Selected0>>): RestorableRouteFuture<_Selected0>;} & _FlaxInstanceType<RestorableRouteFuture<_Selected0>> & _FlaxDartType<RestorableRouteFuture<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);onComplete?: ((result: unknown | null) => void) | null | undefined}) => RestorableRouteFuture<_Selected0>) & {readonly prototype: RestorableRouteFuture<_Selected0>;implement(args: readonly [options: {navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined; onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string); onComplete?: ((result: unknown | null) => void) | null | undefined}], implementation: Partial<RestorableRouteFuture<_Selected0>>): RestorableRouteFuture<_Selected0>;} & _FlaxInstanceType<RestorableRouteFuture<_Selected0>> & _FlaxDartType<RestorableRouteFuture<_Selected0>> : never : never; }
