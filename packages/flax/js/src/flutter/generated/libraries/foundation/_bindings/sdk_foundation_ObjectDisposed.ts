// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
const _flaxMemberParameters0 = [{"name":"object","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectDisposed extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [] }> { readonly __ObjectDisposed: unique symbol;
readonly [_flaxDartTypeValue]: ObjectDisposed;

}
defineObject("flax.core/sdk_foundation#type:ObjectDisposed", ["object"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObjectDisposed", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:ObjectEvent");
const _ObjectDisposedProxy = {type: "flax.core/sdk_foundation#type:ObjectDisposed", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toMap":_flaxMemberParameters1}, getters: ["object"], setters: [], contextMembers: [], superMembers: ["get:object","toMap"]} as const;
export interface ObjectDisposed {
readonly [_flaxDartTypeValue]: ObjectDisposed;

toMap(): DartMap<{}, DartMap<string, {}>>;
get object(): {};
}
export abstract class ObjectDisposed extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectDisposed>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectDisposed;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectDisposed", readonly [], false];
constructor(options: {object: {}}) { super(_ObjectDisposedProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ObjectDisposed.prototype, _ObjectDisposedProxy);
export namespace ObjectDisposed { export function implement(args: [options: {object: {}}], implementation: {}): ObjectDisposed {
return constructProxy(_ObjectDisposedProxy, args, implementation) as ObjectDisposed; } }
_flaxBindInstanceType<ObjectDisposed, typeof ObjectDisposed>(ObjectDisposed, "flax.core/sdk_foundation#type:ObjectDisposed", ["flax.core/sdk_foundation#type:ObjectEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectDisposed" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
