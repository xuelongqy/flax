// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClipboardData extends Readonly<{ "__flaxBound:package:flutter/src/services/clipboard.dart::ClipboardData": readonly [] }> { readonly __ClipboardData: unique symbol;
readonly [_flaxDartTypeValue]: ClipboardData;

}
defineObject("flax.core/sdk_services#type:ClipboardData", ["text"], [], _flaxBindingMethods("flax.core/sdk_services#type:ClipboardData", "object", {}, {}), []);
const _ClipboardDataProxy = {type: "flax.core/sdk_services#type:ClipboardData", parameters: [{"name":"text","required":true,"positional":false}], constructors: {"":[{"name":"text","required":true,"positional":false}]}, methods: {}, getters: ["text"], setters: [], contextMembers: [], superMembers: ["get:text"]} as const;
export interface ClipboardData {
readonly [_flaxDartTypeValue]: ClipboardData;

get text(): string | null;
}
export abstract class ClipboardData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipboardData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClipboardData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ClipboardData", readonly [], false];
constructor(options: {text: string}) { super(_ClipboardDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ClipboardData.prototype, _ClipboardDataProxy);
export namespace ClipboardData { export function implement(args: [options: {text: string}], implementation: {}): ClipboardData {
return constructProxy(_ClipboardDataProxy, args, implementation) as ClipboardData; } }
_flaxBindInstanceType<ClipboardData, typeof ClipboardData>(ClipboardData, "flax.core/sdk_services#type:ClipboardData", ["dart:core::Object"]);
