// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
const _flaxMemberParameters0 = [{"name":"message","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface JSONMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> { readonly __JSONMessageCodec: unique symbol;
readonly [_flaxDartTypeValue]: JSONMessageCodec;

}
defineObject("flax.core/sdk_services#type:JSONMessageCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:JSONMessageCodec", "object", {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0}, {}), []);
const _JSONMessageCodecProxy = {type: "flax.core/sdk_services#type:JSONMessageCodec", parameters: [], constructors: {"":[]}, methods: {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage"]} as const;
export interface JSONMessageCodec {
readonly [_flaxDartTypeValue]: JSONMessageCodec;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
}
export abstract class JSONMessageCodec extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMessageCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: JSONMessageCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false];
constructor() { super(_JSONMessageCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(JSONMessageCodec.prototype, _JSONMessageCodecProxy);
export namespace JSONMessageCodec { export function implement(args: [], implementation: {}): JSONMessageCodec {
return constructProxy(_JSONMessageCodecProxy, args, implementation) as JSONMessageCodec; } }
_flaxBindInstanceType<JSONMessageCodec, typeof JSONMessageCodec>(JSONMessageCodec, "flax.core/sdk_services#type:JSONMessageCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
