// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_WriteBuffer';
import '@flax/flutter/foundation/_bindings/sdk_foundation_WriteBuffer';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ReadBuffer';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ReadBuffer';
import { _flaxMemberParameters18, _flaxMemberParameters95, _flaxMemberParameters96, _flaxMemberParameters97, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StandardMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> { readonly __StandardMessageCodec: unique symbol;
readonly [_flaxDartTypeValue]: StandardMessageCodec;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
writeValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: unknown | null): void;
readValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
readValueOfType(type: number, buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
writeSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: number): void;
readSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): number;
}
defineObject("flax.core/sdk_services#type:StandardMessageCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:StandardMessageCodec", "object", {"encodeMessage":_flaxMemberParameters18,"decodeMessage":_flaxMemberParameters18,"writeValue":_flaxMemberParameters95,"readValue":_flaxMemberParameters96,"readValueOfType":_flaxMemberParameters97,"writeSize":_flaxMemberParameters95,"readSize":_flaxMemberParameters96}, {}), []);
export function _StandardMessageCodecFactory(): StandardMessageCodec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:StandardMessageCodec", "", [], [], {}) as StandardMessageCodec;
}
const _StandardMessageCodecProxy = {type: "flax.core/sdk_services#type:StandardMessageCodec", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"encodeMessage":_flaxMemberParameters18,"decodeMessage":_flaxMemberParameters18,"writeValue":_flaxMemberParameters95,"readValue":_flaxMemberParameters96,"readValueOfType":_flaxMemberParameters97,"writeSize":_flaxMemberParameters95,"readSize":_flaxMemberParameters96}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage","writeValue","readValue","readValueOfType","writeSize","readSize"]} as const;
export interface _StandardMessageCodecNative extends StandardMessageCodec {
readonly [_flaxDartTypeValue]: _StandardMessageCodecNative;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
writeValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: unknown | null): void;
readValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
readValueOfType(type: number, buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
writeSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: number): void;
readSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): number;
}
export abstract class _StandardMessageCodecNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardMessageCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StandardMessageCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false];
constructor() { super(_StandardMessageCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StandardMessageCodecNative.prototype, _StandardMessageCodecProxy);
export namespace _StandardMessageCodecFactory { export function implement(args: [], implementation: {}): StandardMessageCodec {
return constructProxy(_StandardMessageCodecProxy, args, implementation) as StandardMessageCodec; } }
const _StandardMessageCodecBinding = _flaxProxyFactory(_StandardMessageCodecFactory, _StandardMessageCodecNative) as unknown as typeof _StandardMessageCodecFactory & (new() => _StandardMessageCodecNative);
export const StandardMessageCodec: typeof _StandardMessageCodecBinding & _FlaxInstanceType<StandardMessageCodec> & _FlaxDartType<StandardMessageCodec, readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false]> = _flaxBindInstanceType<StandardMessageCodec, typeof _StandardMessageCodecBinding>(_StandardMessageCodecBinding, "flax.core/sdk_services#type:StandardMessageCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]) as typeof _StandardMessageCodecBinding & _FlaxInstanceType<StandardMessageCodec> & _FlaxDartType<StandardMessageCodec, readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "writeValue" | "readValue" | "readValueOfType" | "writeSize" | "readSize" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
