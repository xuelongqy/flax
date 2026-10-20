// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { _flaxMemberParameters55, _flaxMemberParameters32, _flaxMemberParameters19 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OptionalMethodChannel extends Omit<upstream0.MethodChannel, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::OptionalMethodChannel": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> { readonly __OptionalMethodChannel: unique symbol;
readonly [_flaxDartTypeValue]: OptionalMethodChannel;
readonly [_flaxDartMethodCases]?: {invokeMethod: _FlaxSignature0;invokeListMethod: _FlaxSignature1;invokeMapMethod: _FlaxSignature2;};
readonly name: string;
readonly codec: upstream1.MethodCodec;
readonly binaryMessenger: upstream2.BinaryMessenger;
invokeMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<_FlaxDartOutput<T> | null>;
invokeListMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartList<_FlaxDartOutput<T>> | null>;
invokeMapMethod<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartMap<_FlaxDartOutput<K>, _FlaxDartOutput<V>> | null>;
setMethodCallHandler(handler: ((call: upstream3.MethodCall) => Promise<unknown | null>) | null): void;
}
defineObject("flax.core/sdk_services#type:OptionalMethodChannel", ["name","codec","binaryMessenger"], [], _flaxBindingMethods("flax.core/sdk_services#type:OptionalMethodChannel", "object", {"invokeMethod":_flaxMemberParameters55,"invokeListMethod":_flaxMemberParameters55,"invokeMapMethod":_flaxMemberParameters55}, {"invokeMethod":{"id":"invokeMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]},"invokeListMethod":{"id":"invokeListMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]},"invokeMapMethod":{"id":"invokeMapMethod","parameters":[{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}]}}), [], undefined, "flax.core/sdk_services#type:MethodChannel");
export function _OptionalMethodChannelFactory(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null): OptionalMethodChannel {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (codec === undefined && (binaryMessenger !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/sdk_services#type:OptionalMethodChannel", "", [{"name":"name","required":true,"positional":true},{"name":"codec","positional":true},{"name":"binaryMessenger","positional":true}], [name, codec, binaryMessenger], {}) as OptionalMethodChannel;
}
const _OptionalMethodChannelProxy = {type: "flax.core/sdk_services#type:OptionalMethodChannel", parameters: _flaxMemberParameters32, constructors: {"": _flaxMemberParameters32}, methods: {"invokeMethod":_flaxMemberParameters55,"invokeListMethod":_flaxMemberParameters55,"invokeMapMethod":_flaxMemberParameters55,"setMethodCallHandler":_flaxMemberParameters19}, getters: ["name","codec","binaryMessenger"], setters: [], contextMembers: ["invokeMethod","invokeListMethod","invokeMapMethod"], superMembers: ["get:name","get:codec","get:binaryMessenger","invokeMethod","invokeListMethod","invokeMapMethod","setMethodCallHandler"]} as const;
export interface _OptionalMethodChannelNative extends OptionalMethodChannel {
readonly [_flaxDartTypeValue]: _OptionalMethodChannelNative;
readonly [_flaxDartMethodCases]?: {invokeMethod: _FlaxSignature3;invokeListMethod: _FlaxSignature4;invokeMapMethod: _FlaxSignature5;};
invokeMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<_FlaxDartOutput<T> | null>;
invokeListMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartList<_FlaxDartOutput<T>> | null>;
invokeMapMethod<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartMap<_FlaxDartOutput<K>, _FlaxDartOutput<V>> | null>;
setMethodCallHandler(handler: ((call: upstream3.MethodCall) => Promise<unknown | null>) | null): void;
get name(): string;
get codec(): upstream1.MethodCodec;
get binaryMessenger(): upstream2.BinaryMessenger;
}
export abstract class _OptionalMethodChannelNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OptionalMethodChannel>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OptionalMethodChannel;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:OptionalMethodChannel", readonly [], false];
constructor(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null) { super(_OptionalMethodChannelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OptionalMethodChannelNative.prototype, _OptionalMethodChannelProxy);
export namespace _OptionalMethodChannelFactory { export function implement(args: [name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null], implementation: {}): OptionalMethodChannel {
return constructProxy(_OptionalMethodChannelProxy, args, implementation) as OptionalMethodChannel; } }
const _OptionalMethodChannelBinding = _flaxProxyFactory(_OptionalMethodChannelFactory, _OptionalMethodChannelNative) as unknown as typeof _OptionalMethodChannelFactory & (new(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null) => _OptionalMethodChannelNative);
export const OptionalMethodChannel: typeof _OptionalMethodChannelBinding & _FlaxInstanceType<OptionalMethodChannel> & _FlaxDartType<OptionalMethodChannel, readonly ["class", "flax.core/sdk_services#type:OptionalMethodChannel", readonly [], false]> = _flaxBindInstanceType<OptionalMethodChannel, typeof _OptionalMethodChannelBinding>(_OptionalMethodChannelBinding, "flax.core/sdk_services#type:OptionalMethodChannel", ["flax.core/sdk_services#type:MethodChannel","dart:core::Object"]) as typeof _OptionalMethodChannelBinding & _FlaxInstanceType<OptionalMethodChannel> & _FlaxDartType<OptionalMethodChannel, readonly ["class", "flax.core/sdk_services#type:OptionalMethodChannel", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "codec" | "binaryMessenger" | "invokeMethod" | "invokeListMethod" | "invokeMapMethod" | "setMethodCallHandler" | "__flaxBound:package:flutter/src/services/platform_channel.dart::OptionalMethodChannel" | "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string,_flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never; }
