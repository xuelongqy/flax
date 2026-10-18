// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
const _flaxMemberParameters0 = [{"name":"message","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StringCodec extends Omit<upstream0.MessageCodec<string>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [string] }> { readonly __StringCodec: unique symbol;
readonly [_flaxDartTypeValue]: StringCodec;

}
defineObject("flax.core/sdk_services#type:StringCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:StringCodec", "object", {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0}, {}), []);
const _StringCodecProxy = {type: "flax.core/sdk_services#type:StringCodec", parameters: [], constructors: {"":[]}, methods: {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage"]} as const;
export interface StringCodec {
readonly [_flaxDartTypeValue]: StringCodec;

encodeMessage(message: string | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): string | null;
}
export abstract class StringCodec extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StringCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StringCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false];
constructor() { super(_StringCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(StringCodec.prototype, _StringCodecProxy);
export namespace StringCodec { export function implement(args: [], implementation: {}): StringCodec {
return constructProxy(_StringCodecProxy, args, implementation) as StringCodec; } }
_flaxBindInstanceType<StringCodec, typeof StringCodec>(StringCodec, "flax.core/sdk_services#type:StringCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
