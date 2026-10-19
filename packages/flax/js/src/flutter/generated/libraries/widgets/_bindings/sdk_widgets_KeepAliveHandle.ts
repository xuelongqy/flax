// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeepAliveHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __KeepAliveHandle: unique symbol;
readonly [_flaxDartTypeValue]: KeepAliveHandle;

}
defineObject("flax.core/sdk_widgets#type:KeepAliveHandle", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:KeepAliveHandle", "object", {}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _KeepAliveHandleProxy = {type: "flax.core/sdk_widgets#type:KeepAliveHandle", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"addListener":_flaxMemberParameters1,"removeListener":_flaxMemberParameters1,"dispose":_flaxMemberParameters0}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface KeepAliveHandle {
readonly [_flaxDartTypeValue]: KeepAliveHandle;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class KeepAliveHandle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeepAliveHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false];
constructor() { super(_KeepAliveHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(KeepAliveHandle.prototype, _KeepAliveHandleProxy);
export namespace KeepAliveHandle { export function implement(args: [], implementation: {}): KeepAliveHandle {
return constructProxy(_KeepAliveHandleProxy, args, implementation) as KeepAliveHandle; } }
_flaxBindInstanceType<KeepAliveHandle, typeof KeepAliveHandle>(KeepAliveHandle, "flax.core/sdk_widgets#type:KeepAliveHandle", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
