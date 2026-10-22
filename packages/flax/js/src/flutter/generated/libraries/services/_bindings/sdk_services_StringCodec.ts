// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { _flaxMemberParameters21, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StringCodec extends Omit<upstream0.MessageCodec<string>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [string] }> { readonly __StringCodec: unique symbol;
readonly [_flaxDartTypeValue]: StringCodec;

encodeMessage(message: string | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): string | null;
}
defineObject("flax.core/sdk_services#type:StringCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:StringCodec", "object", {"encodeMessage":_flaxMemberParameters21,"decodeMessage":_flaxMemberParameters21}, {}), []);
export function _StringCodecFactory(): StringCodec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:StringCodec", "", [], [], {}) as StringCodec;
}
const _StringCodecProxy = {type: "flax.core/sdk_services#type:StringCodec", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"encodeMessage":_flaxMemberParameters21,"decodeMessage":_flaxMemberParameters21}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage"]} as const;
export interface _StringCodecNative extends StringCodec {
readonly [_flaxDartTypeValue]: _StringCodecNative;

encodeMessage(message: string | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): string | null;
}
export abstract class _StringCodecNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StringCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StringCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false];
constructor() { super(_StringCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StringCodecNative.prototype, _StringCodecProxy);
export namespace _StringCodecFactory { export function implement(args: [], implementation: {}): StringCodec {
return constructProxy(_StringCodecProxy, args, implementation) as StringCodec; } }
const _StringCodecBinding = _flaxProxyFactory(_StringCodecFactory, _StringCodecNative) as unknown as typeof _StringCodecFactory & (new() => _StringCodecNative);
export const StringCodec: typeof _StringCodecBinding & _FlaxInstanceType<StringCodec> & _FlaxDartType<StringCodec, readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false]> = _flaxBindInstanceType<StringCodec, typeof _StringCodecBinding>(_StringCodecBinding, "flax.core/sdk_services#type:StringCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]) as typeof _StringCodecBinding & _FlaxInstanceType<StringCodec> & _FlaxDartType<StringCodec, readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
