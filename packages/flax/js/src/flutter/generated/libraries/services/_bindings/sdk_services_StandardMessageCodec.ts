// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_WriteBuffer';
import '@flax/flutter/foundation/_bindings/sdk_foundation_WriteBuffer';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ReadBuffer';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ReadBuffer';
const _flaxMemberParameters0 = [{"name":"message","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"buffer","required":true,"positional":true},{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"buffer","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"type","required":true,"positional":true},{"name":"buffer","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StandardMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> { readonly __StandardMessageCodec: unique symbol;
readonly [_flaxDartTypeValue]: StandardMessageCodec;

}
defineObject("flax.core/sdk_services#type:StandardMessageCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:StandardMessageCodec", "object", {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0,"writeValue":_flaxMemberParameters1,"readValue":_flaxMemberParameters2,"readValueOfType":_flaxMemberParameters3,"writeSize":_flaxMemberParameters1,"readSize":_flaxMemberParameters2}, {}), []);
const _StandardMessageCodecProxy = {type: "flax.core/sdk_services#type:StandardMessageCodec", parameters: [], constructors: {"":[]}, methods: {"encodeMessage":_flaxMemberParameters0,"decodeMessage":_flaxMemberParameters0,"writeValue":_flaxMemberParameters1,"readValue":_flaxMemberParameters2,"readValueOfType":_flaxMemberParameters3,"writeSize":_flaxMemberParameters1,"readSize":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["encodeMessage","decodeMessage","writeValue","readValue","readValueOfType","writeSize","readSize"]} as const;
export interface StandardMessageCodec {
readonly [_flaxDartTypeValue]: StandardMessageCodec;

encodeMessage(message: unknown | null): globalThis.DataView | null;
decodeMessage(message: globalThis.DataView | null): unknown | null;
writeValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: unknown | null): void;
readValue(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
readValueOfType(type: number, buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): unknown | null;
writeSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }>, value: number): void;
readSize(buffer: Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }>): number;
}
export abstract class StandardMessageCodec extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardMessageCodec>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StandardMessageCodec;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false];
constructor() { super(_StandardMessageCodecProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(StandardMessageCodec.prototype, _StandardMessageCodecProxy);
export namespace StandardMessageCodec { export function implement(args: [], implementation: {}): StandardMessageCodec {
return constructProxy(_StandardMessageCodecProxy, args, implementation) as StandardMessageCodec; } }
_flaxBindInstanceType<StandardMessageCodec, typeof StandardMessageCodec>(StandardMessageCodec, "flax.core/sdk_services#type:StandardMessageCodec", ["dart:core::Object","flax.core/sdk_services#type:MessageCodec"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "writeValue" | "readValue" | "readValueOfType" | "writeSize" | "readSize" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
