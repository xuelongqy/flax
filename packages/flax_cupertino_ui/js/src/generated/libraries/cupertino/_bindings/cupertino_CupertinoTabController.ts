// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { _flaxMemberParameters54, _flaxMemberParameters55, _flaxMemberParameters0 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTabController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __CupertinoTabController: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTabController;

readonly hasListeners: boolean;
get index(): number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
set index(value: number);
}
defineObject("flax.cupertino/cupertino#type:CupertinoTabController", ["hasListeners","index"], ["index"], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoTabController", "object", {}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _CupertinoTabControllerFactory(options: { initialIndex?: number | undefined } = {}): CupertinoTabController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoTabController", "", [{"name":"initialIndex"}], [], options) as CupertinoTabController;
}
const _CupertinoTabControllerProxy = {type: "flax.cupertino/cupertino#type:CupertinoTabController", parameters: _flaxMemberParameters54, constructors: {"": _flaxMemberParameters54}, methods: {"addListener":_flaxMemberParameters55,"removeListener":_flaxMemberParameters55,"dispose":_flaxMemberParameters0}, getters: ["index","hasListeners"], setters: ["index"], contextMembers: [], superMembers: ["get:index","get:hasListeners","set:index","addListener","removeListener","dispose"]} as const;
export interface _CupertinoTabControllerNative extends CupertinoTabController {
readonly [_flaxDartTypeValue]: _CupertinoTabControllerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get index(): number;
get hasListeners(): boolean;
set index(value: number);
}
export abstract class _CupertinoTabControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTabController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoTabController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoTabController", readonly [], false];
constructor(options?: {initialIndex?: number | undefined}) { super(_CupertinoTabControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CupertinoTabControllerNative.prototype, _CupertinoTabControllerProxy);
export namespace _CupertinoTabControllerFactory { export function implement(args: [options?: {initialIndex?: number | undefined}], implementation: {}): CupertinoTabController {
return constructProxy(_CupertinoTabControllerProxy, args, implementation) as CupertinoTabController; } }
const _CupertinoTabControllerBinding = _flaxProxyFactory(_CupertinoTabControllerFactory, _CupertinoTabControllerNative) as unknown as typeof _CupertinoTabControllerFactory & (new(options?: {initialIndex?: number | undefined}) => _CupertinoTabControllerNative);
export const CupertinoTabController: typeof _CupertinoTabControllerBinding & _FlaxInstanceType<CupertinoTabController> & _FlaxDartType<CupertinoTabController, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTabController", readonly [], false]> = _flaxBindInstanceType<CupertinoTabController, typeof _CupertinoTabControllerBinding>(_CupertinoTabControllerBinding, "flax.cupertino/cupertino#type:CupertinoTabController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _CupertinoTabControllerBinding & _FlaxInstanceType<CupertinoTabController> & _FlaxDartType<CupertinoTabController, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTabController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "index" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
