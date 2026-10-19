// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
const _flaxMemberParameters0 = [{"name":"methodCall","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"envelope","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"result","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"code","required":true},{"name":"details"},{"name":"message"}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"code","required":true},{"name":"message"},{"name":"details"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MethodCodec extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }> { readonly __MethodCodec: unique symbol;
readonly [_flaxDartTypeValue]: MethodCodec;

encodeMethodCall(methodCall: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>): globalThis.DataView;
decodeMethodCall(methodCall: globalThis.DataView | null): upstream0.MethodCall;
decodeEnvelope(envelope: globalThis.DataView): unknown | null;
encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
encodeErrorEnvelope(options: {code: string; details?: unknown | null | undefined; message?: string | null | undefined}): globalThis.DataView;
}
defineObject("flax.core/sdk_services#type:MethodCodec", [], [], _flaxBindingMethods("flax.core/sdk_services#type:MethodCodec", "object", {"encodeMethodCall":_flaxMemberParameters0,"decodeMethodCall":_flaxMemberParameters0,"decodeEnvelope":_flaxMemberParameters1,"encodeSuccessEnvelope":_flaxMemberParameters2,"encodeErrorEnvelope":_flaxMemberParameters3}, {}), []);
const _MethodCodecProxy = {type: "flax.core/sdk_services#type:MethodCodec", parameters: _flaxMemberParameters4, constructors: {}, methods: {"encodeMethodCall":_flaxMemberParameters0,"decodeMethodCall":_flaxMemberParameters0,"decodeEnvelope":_flaxMemberParameters1,"encodeSuccessEnvelope":_flaxMemberParameters2,"encodeErrorEnvelope":_flaxMemberParameters5}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _MethodCodecFactory { export function implement(args: [], implementation: {encodeMethodCall: ((methodCall: upstream0.MethodCall) => globalThis.DataView); decodeMethodCall: ((methodCall: globalThis.DataView | null) => Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }>); decodeEnvelope: ((envelope: globalThis.DataView) => unknown | null); encodeSuccessEnvelope: ((result: unknown | null) => globalThis.DataView); encodeErrorEnvelope: ((options: { code: string; message?: string | null | undefined; details?: unknown | null | undefined }) => globalThis.DataView)}): MethodCodec {
return constructProxy(_MethodCodecProxy, args, implementation) as MethodCodec; } }
export const MethodCodec: typeof _MethodCodecFactory & _FlaxInstanceType<MethodCodec> & _FlaxDartType<MethodCodec, readonly ["class", "flax.core/sdk_services#type:MethodCodec", readonly [], false]> = _flaxBindInstanceType<MethodCodec, typeof _MethodCodecFactory>(_MethodCodecFactory, "flax.core/sdk_services#type:MethodCodec", ["dart:core::Object"]) as typeof _MethodCodecFactory & _FlaxInstanceType<MethodCodec> & _FlaxDartType<MethodCodec, readonly ["class", "flax.core/sdk_services#type:MethodCodec", readonly [], false]>;
