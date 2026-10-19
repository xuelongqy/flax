// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters1, _flaxMemberParameters62 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectEvent extends Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [] }> { readonly __ObjectEvent: unique symbol;
readonly [_flaxDartTypeValue]: ObjectEvent;

}
defineObject("flax.core/sdk_foundation#type:ObjectEvent", ["object"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObjectEvent", "object", {"toMap":_flaxMemberParameters1}, {}), []);
const _ObjectEventProxy = {type: "flax.core/sdk_foundation#type:ObjectEvent", parameters: _flaxMemberParameters62, constructors: {"": _flaxMemberParameters62}, methods: {"toMap":_flaxMemberParameters1}, getters: ["object"], setters: [], contextMembers: [], superMembers: ["get:object"]} as const;
export interface ObjectEvent {
readonly [_flaxDartTypeValue]: ObjectEvent;

get object(): {};
}
export abstract class ObjectEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectEvent", readonly [], false];
constructor(options: {object: {}}) { super(_ObjectEventProxy, Array.from(arguments)); }
abstract toMap(): DartMap<{}, DartMap<string, {}>>;
}
_flaxDefineProxyBase(ObjectEvent.prototype, _ObjectEventProxy);
export namespace ObjectEvent { export function implement(args: [options: {object: {}}], implementation: {toMap: (() => DartMapInput<{}, DartMap<string, {}>, {}, DartMapInput<string, {}, string, {}>>)}): ObjectEvent {
return constructProxy(_ObjectEventProxy, args, implementation) as ObjectEvent; } }
_flaxBindInstanceType<ObjectEvent, typeof ObjectEvent>(ObjectEvent, "flax.core/sdk_foundation#type:ObjectEvent", ["dart:core::Object"]);
