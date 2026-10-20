// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_StandardMessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_StandardMessageCodec';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { _flaxMemberParameters98, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StandardMethodCodec extends Omit<upstream0.MethodCodec, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMethodCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }> { readonly __StandardMethodCodec: unique symbol;
readonly [_flaxDartTypeValue]: StandardMethodCodec;

readonly messageCodec: upstream1.StandardMessageCodec;
encodeMethodCall(methodCall: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>): globalThis.DataView;
decodeMethodCall(methodCall: globalThis.DataView | null): upstream2.MethodCall;
decodeEnvelope(envelope: globalThis.DataView): unknown | null;
encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
encodeErrorEnvelope(options: {code: string; details?: unknown | null | undefined; message?: string | null | undefined}): globalThis.DataView;
}
defineObject("flax.core/sdk_services#type:StandardMethodCodec", ["messageCodec"], [], _flaxBindingMethods("flax.core/sdk_services#type:StandardMethodCodec", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:MethodCodec");
export function _StandardMethodCodecFactory(messageCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>): StandardMethodCodec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:StandardMethodCodec", "", [{"name":"messageCodec","positional":true}], [messageCodec], {}) as StandardMethodCodec;
}
const _StandardMethodCodecProxy = {type: "flax.core/sdk_services#type:StandardMethodCodec", parameters: _flaxMemberParameters98, constructors: {"": _flaxMemberParameters98}, methods: {"encodeMethodCall":_flaxMemberParameters38,"decodeMethodCall":_flaxMemberParameters38,"decodeEnvelope":_flaxMemberParameters39,"encodeSuccessEnvelope":_flaxMemberParameters40,"encodeErrorEnvelope":_flaxMemberParameters41}, getters: ["messageCodec"], setters: [], contextMembers: [], superMembers: ["get:messageCodec","encodeMethodCall","decodeMethodCall","decodeEnvelope","encodeSuccessEnvelope","encodeErrorEnvelope"]} as const;
export interface _StandardMethodCodecNative extends StandardMethodCodec {
readonly [_flaxDartTypeValue]: _StandardMethodCodecNative;

encodeMethodCall(methodCall: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>): globalThis.DataView;
decodeMethodCall(methodCall: globalThis.DataView | null): upstream2.MethodCall;
decodeEnvelope(envelope: globalThis.DataView): unknown | null;
encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
encodeErrorEnvelope(options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined}): globalThis.DataView;
get messageCodec(): upstream1.StandardMessageCodec;
}
export abstract class _StandardMethodCodecNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardMethodCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StandardMethodCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StandardMethodCodec", readonly [], false];
constructor(messageCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>) { super(_StandardMethodCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StandardMethodCodecNative.prototype, _StandardMethodCodecProxy);
export namespace _StandardMethodCodecFactory { export function implement(args: [messageCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>], implementation: {}): StandardMethodCodec {
return constructProxy(_StandardMethodCodecProxy, args, implementation) as StandardMethodCodec; } }
const _StandardMethodCodecBinding = _flaxProxyFactory(_StandardMethodCodecFactory, _StandardMethodCodecNative) as unknown as typeof _StandardMethodCodecFactory & (new(messageCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>) => _StandardMethodCodecNative);
export const StandardMethodCodec: typeof _StandardMethodCodecBinding & _FlaxInstanceType<StandardMethodCodec> & _FlaxDartType<StandardMethodCodec, readonly ["class", "flax.core/sdk_services#type:StandardMethodCodec", readonly [], false]> = _flaxBindInstanceType<StandardMethodCodec, typeof _StandardMethodCodecBinding>(_StandardMethodCodecBinding, "flax.core/sdk_services#type:StandardMethodCodec", ["dart:core::Object","flax.core/sdk_services#type:MethodCodec"]) as typeof _StandardMethodCodecBinding & _FlaxInstanceType<StandardMethodCodec> & _FlaxDartType<StandardMethodCodec, readonly ["class", "flax.core/sdk_services#type:StandardMethodCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "messageCodec" | "encodeMethodCall" | "decodeMethodCall" | "decodeEnvelope" | "encodeSuccessEnvelope" | "encodeErrorEnvelope" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMethodCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec";
