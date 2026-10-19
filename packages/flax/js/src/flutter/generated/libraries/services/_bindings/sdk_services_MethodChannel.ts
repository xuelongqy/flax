// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
const _flaxMemberParameters0 = [{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"handler","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":true,"positional":true},{"name":"codec","positional":true},{"name":"binaryMessenger","positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MethodChannel extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> { readonly __MethodChannel: unique symbol;
readonly [_flaxDartTypeValue]: MethodChannel;
readonly [_flaxDartMethodCases]?: {invokeMethod: _FlaxSignature0;invokeListMethod: _FlaxSignature1;invokeMapMethod: _FlaxSignature2;};
}
defineObject("flax.core/sdk_services#type:MethodChannel", ["name","codec","binaryMessenger"], [], _flaxBindingMethods("flax.core/sdk_services#type:MethodChannel", "object", {"invokeMethod":_flaxMemberParameters0,"invokeListMethod":_flaxMemberParameters0,"invokeMapMethod":_flaxMemberParameters0,"setMethodCallHandler":_flaxMemberParameters1}, {"invokeMethod":{"id":"invokeMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]},"invokeListMethod":{"id":"invokeListMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]},"invokeMapMethod":{"id":"invokeMapMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]}}), []);
const _MethodChannelProxy = {type: "flax.core/sdk_services#type:MethodChannel", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"invokeMethod":_flaxMemberParameters0,"invokeListMethod":_flaxMemberParameters0,"invokeMapMethod":_flaxMemberParameters0,"setMethodCallHandler":_flaxMemberParameters1}, getters: ["name","codec","binaryMessenger"], setters: [], contextMembers: ["invokeMethod","invokeListMethod","invokeMapMethod"], superMembers: ["get:name","get:codec","get:binaryMessenger","invokeMethod","invokeListMethod","invokeMapMethod","setMethodCallHandler"]} as const;
export interface MethodChannel {
readonly [_flaxDartTypeValue]: MethodChannel;
readonly [_flaxDartMethodCases]?: {invokeMethod: _FlaxSignature3;invokeListMethod: _FlaxSignature4;invokeMapMethod: _FlaxSignature5;};
invokeMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<_FlaxDartOutput<T> | null>;
invokeListMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartList<_FlaxDartOutput<T>> | null>;
invokeMapMethod<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartMap<_FlaxDartOutput<K>, _FlaxDartOutput<V>> | null>;
setMethodCallHandler(handler: ((call: upstream2.MethodCall) => Promise<unknown | null>) | null): void;
get name(): string;
get codec(): upstream0.MethodCodec;
get binaryMessenger(): upstream1.BinaryMessenger;
}
export abstract class MethodChannel extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodChannel>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MethodChannel;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodChannel", readonly [], false];
constructor(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null) { super(_MethodChannelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MethodChannel.prototype, _MethodChannelProxy);
export namespace MethodChannel { export function implement(args: [name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null], implementation: {}): MethodChannel {
return constructProxy(_MethodChannelProxy, args, implementation) as MethodChannel; } }
_flaxBindInstanceType<MethodChannel, typeof MethodChannel>(MethodChannel, "flax.core/sdk_services#type:MethodChannel", ["dart:core::Object"]);
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never; }
