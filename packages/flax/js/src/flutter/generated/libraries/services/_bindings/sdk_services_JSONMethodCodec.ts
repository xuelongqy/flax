// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { _flaxMemberParameters0, _flaxMemberParameters45, _flaxMemberParameters46, _flaxMemberParameters47, _flaxMemberParameters48 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface JSONMethodCodec extends Omit<upstream0.MethodCodec, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMethodCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }> { readonly __JSONMethodCodec: unique symbol;
readonly [_flaxDartTypeValue]: JSONMethodCodec;

encodeMethodCall(methodCall: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>): globalThis.DataView;
decodeMethodCall(methodCall: globalThis.DataView | null): upstream1.MethodCall;
decodeEnvelope(envelope: globalThis.DataView): unknown | null;
encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
encodeErrorEnvelope(options: {code: string; details?: unknown | null | undefined; message?: string | null | undefined}): globalThis.DataView;
}
defineObject("flax.core/sdk_services#type:JSONMethodCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:JSONMethodCodec", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:MethodCodec");
export function _JSONMethodCodecFactory(): JSONMethodCodec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:JSONMethodCodec", "", [], [], {}) as JSONMethodCodec;
}
const _JSONMethodCodecProxy = {type: "flax.core/sdk_services#type:JSONMethodCodec", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"encodeMethodCall":_flaxMemberParameters45,"decodeMethodCall":_flaxMemberParameters45,"decodeEnvelope":_flaxMemberParameters46,"encodeSuccessEnvelope":_flaxMemberParameters47,"encodeErrorEnvelope":_flaxMemberParameters48}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMethodCall","decodeMethodCall","decodeEnvelope","encodeSuccessEnvelope","encodeErrorEnvelope"]} as const;
export interface _JSONMethodCodecNative extends JSONMethodCodec {
readonly [_flaxDartTypeValue]: _JSONMethodCodecNative;

encodeMethodCall(methodCall: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>): globalThis.DataView;
decodeMethodCall(methodCall: globalThis.DataView | null): upstream1.MethodCall;
decodeEnvelope(envelope: globalThis.DataView): unknown | null;
encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
encodeErrorEnvelope(options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined}): globalThis.DataView;
}
export abstract class _JSONMethodCodecNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMethodCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: JSONMethodCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMethodCodec", readonly [], false];
constructor() { super(_JSONMethodCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_JSONMethodCodecNative.prototype, _JSONMethodCodecProxy);
export namespace _JSONMethodCodecFactory { export function implement(args: [], implementation: {}): JSONMethodCodec {
return constructProxy(_JSONMethodCodecProxy, args, implementation) as JSONMethodCodec; } }
const _JSONMethodCodecBinding = _flaxProxyFactory(_JSONMethodCodecFactory, _JSONMethodCodecNative) as unknown as typeof _JSONMethodCodecFactory & (new() => _JSONMethodCodecNative);
export const JSONMethodCodec: typeof _JSONMethodCodecBinding & _FlaxInstanceType<JSONMethodCodec> & _FlaxDartType<JSONMethodCodec, readonly ["class", "flax.core/sdk_services#type:JSONMethodCodec", readonly [], false]> = _flaxBindInstanceType<JSONMethodCodec, typeof _JSONMethodCodecBinding>(_JSONMethodCodecBinding, "flax.core/sdk_services#type:JSONMethodCodec", ["dart:core::Object","flax.core/sdk_services#type:MethodCodec"]) as typeof _JSONMethodCodecBinding & _FlaxInstanceType<JSONMethodCodec> & _FlaxDartType<JSONMethodCodec, readonly ["class", "flax.core/sdk_services#type:JSONMethodCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMethodCall" | "decodeMethodCall" | "decodeEnvelope" | "encodeSuccessEnvelope" | "encodeErrorEnvelope" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMethodCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec";
