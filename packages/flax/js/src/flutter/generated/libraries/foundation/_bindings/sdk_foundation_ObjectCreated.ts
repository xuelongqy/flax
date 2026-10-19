// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
const _flaxMemberParameters0 = [{"name":"library","required":true},{"name":"className","required":true},{"name":"object","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectCreated extends Omit<upstream0.ObjectEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [] }> { readonly __ObjectCreated: unique symbol;
readonly [_flaxDartTypeValue]: ObjectCreated;

}
defineObject("flax.core/sdk_foundation#type:ObjectCreated", ["object","library","className"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObjectCreated", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:ObjectEvent");
const _ObjectCreatedProxy = {type: "flax.core/sdk_foundation#type:ObjectCreated", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toMap":_flaxMemberParameters1}, getters: ["library","className","object"], setters: [], contextMembers: [], superMembers: ["get:library","get:className","get:object","toMap"]} as const;
export interface ObjectCreated {
readonly [_flaxDartTypeValue]: ObjectCreated;

toMap(): DartMap<{}, DartMap<string, {}>>;
get library(): string;
get className(): string;
get object(): {};
}
export abstract class ObjectCreated extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectCreated>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectCreated;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectCreated", readonly [], false];
constructor(options: {library: string; className: string; object: {}}) { super(_ObjectCreatedProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ObjectCreated.prototype, _ObjectCreatedProxy);
export namespace ObjectCreated { export function implement(args: [options: {library: string; className: string; object: {}}], implementation: {}): ObjectCreated {
return constructProxy(_ObjectCreatedProxy, args, implementation) as ObjectCreated; } }
_flaxBindInstanceType<ObjectCreated, typeof ObjectCreated>(ObjectCreated, "flax.core/sdk_foundation#type:ObjectCreated", ["flax.core/sdk_foundation#type:ObjectEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "object" | "library" | "className" | "toMap" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectCreated" | "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent";
