// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters53 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyboardInsertedContent extends Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [] }> { readonly __KeyboardInsertedContent: unique symbol;
readonly [_flaxDartTypeValue]: KeyboardInsertedContent;

}
defineObject("flax.core/sdk_services#type:KeyboardInsertedContent", ["mimeType","uri","data","hasData"], [], _flaxBindingMethods("flax.core/sdk_services#type:KeyboardInsertedContent", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _KeyboardInsertedContentProxy = {type: "flax.core/sdk_services#type:KeyboardInsertedContent", parameters: _flaxMemberParameters53, constructors: {"": _flaxMemberParameters53}, methods: {"toString":_flaxMemberParameters0}, getters: ["mimeType","uri","data","hasData"], setters: [], contextMembers: [], superMembers: ["get:mimeType","get:uri","get:data","get:hasData","toString"]} as const;
export interface KeyboardInsertedContent {
readonly [_flaxDartTypeValue]: KeyboardInsertedContent;

toString(): string;
get mimeType(): string;
get uri(): string;
get data(): globalThis.Uint8Array | null;
get hasData(): boolean;
}
export abstract class KeyboardInsertedContent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyboardInsertedContent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyboardInsertedContent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false];
constructor(options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}) { super(_KeyboardInsertedContentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(KeyboardInsertedContent.prototype, _KeyboardInsertedContentProxy);
export namespace KeyboardInsertedContent { export function implement(args: [options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}], implementation: {}): KeyboardInsertedContent {
return constructProxy(_KeyboardInsertedContentProxy, args, implementation) as KeyboardInsertedContent; } }
_flaxBindInstanceType<KeyboardInsertedContent, typeof KeyboardInsertedContent>(KeyboardInsertedContent, "flax.core/sdk_services#type:KeyboardInsertedContent", ["dart:core::Object"]);
