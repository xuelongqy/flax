// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"configuration","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouterDelegate<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RouterDelegate: unique symbol;
readonly [_flaxDartTypeValue]: RouterDelegate<T>;

}
defineObject("flax.core/sdk_widgets#type:RouterDelegate", ["currentConfiguration"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouterDelegate", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"setInitialRoutePath":_flaxMemberParameters1,"setRestoredRoutePath":_flaxMemberParameters1,"setNewRoutePath":_flaxMemberParameters1,"popRoute":_flaxMemberParameters2,"build":_flaxMemberParameters3}, {}), ["removeListener"]);
const _RouterDelegateProxy = {type: "flax.core/sdk_widgets#type:RouterDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"setInitialRoutePath":_flaxMemberParameters1,"setRestoredRoutePath":_flaxMemberParameters1,"setNewRoutePath":_flaxMemberParameters1,"popRoute":_flaxMemberParameters2,"build":_flaxMemberParameters3}, getters: ["currentConfiguration"], setters: [], contextMembers: [], superMembers: ["get:currentConfiguration","setInitialRoutePath","setRestoredRoutePath"]} as const;
export interface RouterDelegate<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: RouterDelegate<T>;

setInitialRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
setRestoredRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
get currentConfiguration(): T | null;
}
export abstract class RouterDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouterDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouterDelegate<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouterDelegate", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RouterDelegateProxy, Array.from(arguments)); }
abstract addListener(listener: (() => void)): void;
abstract removeListener(listener: (() => void)): void;
abstract setNewRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
abstract popRoute(): Promise<boolean>;
abstract build(context: upstream1.BuildContext): Widget;
}
_flaxDefineProxyBase(RouterDelegate.prototype, _RouterDelegateProxy);
export namespace RouterDelegate { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); setNewRoutePath: ((configuration: T) => Promise<void>); popRoute: (() => Promise<boolean>); build: ((context: upstream1.BuildContext) => Widget)}): RouterDelegate<T> {
return constructProxy(_RouterDelegateProxy, args, implementation) as RouterDelegate<T>; } }
_flaxBindInstanceType<RouterDelegate<unknown | null>, typeof RouterDelegate>(RouterDelegate, "flax.core/sdk_widgets#type:RouterDelegate", ["flax.core/flutter#type:Listenable","dart:core::Object"]);
_flaxDefineDartTypes(RouterDelegate, "flax.core/sdk_widgets#type:RouterDelegate", {...{"category":"object","constructors":{}}, proxy: _RouterDelegateProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentConfiguration" | "addListener" | "removeListener" | "setInitialRoutePath" | "setRestoredRoutePath" | "setNewRoutePath" | "popRoute" | "build" | "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouterDelegate<_Selected0>) & {readonly prototype: RouterDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<RouterDelegate<_Selected0>>): RouterDelegate<_Selected0>;} & _FlaxInstanceType<RouterDelegate<_Selected0>> & _FlaxDartType<RouterDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouterDelegate<_Selected0>) & {readonly prototype: RouterDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<RouterDelegate<_Selected0>>): RouterDelegate<_Selected0>;} & _FlaxInstanceType<RouterDelegate<_Selected0>> & _FlaxDartType<RouterDelegate<_Selected0>> : never : never; }
