// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { _flaxMemberParameters18, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BinaryCodec extends Omit<upstream0.MessageCodec<globalThis.DataView>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::BinaryCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [globalThis.DataView] }> { readonly __BinaryCodec: unique symbol;
readonly [_flaxDartTypeValue]: BinaryCodec;

}
defineObject("flax.core/sdk_services#type:BinaryCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:BinaryCodec", "object", {"encodeMessage":_flaxMemberParameters18,"decodeMessage":_flaxMemberParameters18}, {}), []);
const _BinaryCodecProxy = {type: "flax.core/sdk_services#type:BinaryCodec", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"encodeMessage":_flaxMemberParameters18,"decodeMessage":_flaxMemberParameters18}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage"]} as const;
export interface BinaryCodec {
readonly [_flaxDartTypeValue]: BinaryCodec;

encodeMessage(message: globalThis.DataView | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): globalThis.DataView | null;
}
export abstract class BinaryCodec extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BinaryCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BinaryCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:BinaryCodec", readonly [], false];
constructor() { super(_BinaryCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BinaryCodec.prototype, _BinaryCodecProxy);
export namespace BinaryCodec { export function implement(args: [], implementation: {}): BinaryCodec {
return constructProxy(_BinaryCodecProxy, args, implementation) as BinaryCodec; } }
_flaxBindInstanceType<BinaryCodec, typeof BinaryCodec>(BinaryCodec, "flax.core/sdk_services#type:BinaryCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::BinaryCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
