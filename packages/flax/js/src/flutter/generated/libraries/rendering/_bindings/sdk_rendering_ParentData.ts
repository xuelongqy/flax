// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParentData extends Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __ParentData: unique symbol;
readonly [_flaxDartTypeValue]: ParentData;

}
defineObject("flax.core/sdk_rendering#type:ParentData", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ParentData", "object", {"detach":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _ParentDataProxy = {type: "flax.core/sdk_rendering#type:ParentData", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"detach":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["detach","toString"]} as const;
export interface ParentData {
readonly [_flaxDartTypeValue]: ParentData;

detach(): void;
toString(): string;
}
export abstract class ParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false];
constructor() { super(_ParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ParentData.prototype, _ParentDataProxy);
export namespace ParentData { export function implement(args: [], implementation: {}): ParentData {
return constructProxy(_ParentDataProxy, args, implementation) as ParentData; } }
_flaxBindInstanceType<ParentData, typeof ParentData>(ParentData, "flax.core/sdk_rendering#type:ParentData", ["dart:core::Object"]);
