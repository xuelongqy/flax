// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { _flaxMemberParameters21, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface JSONMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> { readonly __JSONMessageCodec: unique symbol;
readonly [_flaxDartTypeValue]: JSONMessageCodec;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
}
defineObject("flax.core/sdk_services#type:JSONMessageCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:JSONMessageCodec", "object", {"encodeMessage":_flaxMemberParameters21,"decodeMessage":_flaxMemberParameters21}, {}), []);
export function _JSONMessageCodecFactory(): JSONMessageCodec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:JSONMessageCodec", "", [], [], {}) as JSONMessageCodec;
}
const _JSONMessageCodecProxy = {type: "flax.core/sdk_services#type:JSONMessageCodec", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"encodeMessage":_flaxMemberParameters21,"decodeMessage":_flaxMemberParameters21}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage"]} as const;
export interface _JSONMessageCodecNative extends JSONMessageCodec {
readonly [_flaxDartTypeValue]: _JSONMessageCodecNative;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
}
export abstract class _JSONMessageCodecNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMessageCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: JSONMessageCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false];
constructor() { super(_JSONMessageCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_JSONMessageCodecNative.prototype, _JSONMessageCodecProxy);
export namespace _JSONMessageCodecFactory { export function implement(args: [], implementation: {}): JSONMessageCodec {
return constructProxy(_JSONMessageCodecProxy, args, implementation) as JSONMessageCodec; } }
const _JSONMessageCodecBinding = _flaxProxyFactory(_JSONMessageCodecFactory, _JSONMessageCodecNative) as unknown as typeof _JSONMessageCodecFactory & (new() => _JSONMessageCodecNative);
export const JSONMessageCodec: typeof _JSONMessageCodecBinding & _FlaxInstanceType<JSONMessageCodec> & _FlaxDartType<JSONMessageCodec, readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false]> = _flaxBindInstanceType<JSONMessageCodec, typeof _JSONMessageCodecBinding>(_JSONMessageCodecBinding, "flax.core/sdk_services#type:JSONMessageCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]) as typeof _JSONMessageCodecBinding & _FlaxInstanceType<JSONMessageCodec> & _FlaxDartType<JSONMessageCodec, readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
