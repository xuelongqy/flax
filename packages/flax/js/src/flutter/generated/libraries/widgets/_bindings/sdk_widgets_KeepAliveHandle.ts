// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeepAliveHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __KeepAliveHandle: unique symbol;
readonly [_flaxDartTypeValue]: KeepAliveHandle;

readonly hasListeners: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:KeepAliveHandle", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:KeepAliveHandle", "object", {}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _KeepAliveHandleFactory(): KeepAliveHandle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:KeepAliveHandle", "", [], [], {}) as KeepAliveHandle;
}
const _KeepAliveHandleProxy = {type: "flax.core/sdk_widgets#type:KeepAliveHandle", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface _KeepAliveHandleNative extends KeepAliveHandle {
readonly [_flaxDartTypeValue]: _KeepAliveHandleNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class _KeepAliveHandleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeepAliveHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false];
constructor() { super(_KeepAliveHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_KeepAliveHandleNative.prototype, _KeepAliveHandleProxy);
export namespace _KeepAliveHandleFactory { export function implement(args: [], implementation: {}): KeepAliveHandle {
return constructProxy(_KeepAliveHandleProxy, args, implementation) as KeepAliveHandle; } }
const _KeepAliveHandleBinding = _flaxProxyFactory(_KeepAliveHandleFactory, _KeepAliveHandleNative) as unknown as typeof _KeepAliveHandleFactory & (new() => _KeepAliveHandleNative);
export const KeepAliveHandle: typeof _KeepAliveHandleBinding & _FlaxInstanceType<KeepAliveHandle> & _FlaxDartType<KeepAliveHandle, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false]> = _flaxBindInstanceType<KeepAliveHandle, typeof _KeepAliveHandleBinding>(_KeepAliveHandleBinding, "flax.core/sdk_widgets#type:KeepAliveHandle", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _KeepAliveHandleBinding & _FlaxInstanceType<KeepAliveHandle> & _FlaxDartType<KeepAliveHandle, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
