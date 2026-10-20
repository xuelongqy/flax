// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import { _flaxMemberParameters63, _flaxMemberParameters1 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectDisposed extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [] }> { readonly __ObjectDisposed: unique symbol;
readonly [_flaxDartTypeValue]: ObjectDisposed;

readonly object: {};
toMap(): DartMap<{}, DartMap<string, {}>>;
}
defineObject("flax.core/sdk_foundation#type:ObjectDisposed", ["object"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObjectDisposed", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:ObjectEvent");
export function _ObjectDisposedFactory(options: { object: {} }): ObjectDisposed {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ObjectDisposed", "", [{"name":"object","required":true}], [], options) as ObjectDisposed;
}
const _ObjectDisposedProxy = {type: "flax.core/sdk_foundation#type:ObjectDisposed", parameters: _flaxMemberParameters63, constructors: {"": _flaxMemberParameters63}, methods: {"toMap":_flaxMemberParameters1}, getters: ["object"], setters: [], contextMembers: [], superMembers: ["get:object","toMap"]} as const;
export interface _ObjectDisposedNative extends ObjectDisposed {
readonly [_flaxDartTypeValue]: _ObjectDisposedNative;

toMap(): DartMap<{}, DartMap<string, {}>>;
get object(): {};
}
export abstract class _ObjectDisposedNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectDisposed>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectDisposed;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false];
constructor(options: {object: {}}) { super(_ObjectDisposedProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ObjectDisposedNative.prototype, _ObjectDisposedProxy);
export namespace _ObjectDisposedFactory { export function implement(args: [options: {object: {}}], implementation: {}): ObjectDisposed {
return constructProxy(_ObjectDisposedProxy, args, implementation) as ObjectDisposed; } }
const _ObjectDisposedBinding = _flaxProxyFactory(_ObjectDisposedFactory, _ObjectDisposedNative) as unknown as typeof _ObjectDisposedFactory & (new(options: {object: {}}) => _ObjectDisposedNative);
export const ObjectDisposed: typeof _ObjectDisposedBinding & _FlaxInstanceType<ObjectDisposed> & _FlaxDartType<ObjectDisposed, readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false]> = _flaxBindInstanceType<ObjectDisposed, typeof _ObjectDisposedBinding>(_ObjectDisposedBinding, "flax.core/sdk_foundation#type:ObjectDisposed", ["flax.core/sdk_foundation#type:ObjectEvent","dart:core::Object"]) as typeof _ObjectDisposedBinding & _FlaxInstanceType<ObjectDisposed> & _FlaxDartType<ObjectDisposed, readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
