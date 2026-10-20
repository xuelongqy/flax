// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters31, _flaxMemberParameters32 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EventChannel extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::EventChannel": readonly [] }> { readonly __EventChannel: unique symbol;
readonly [_flaxDartTypeValue]: EventChannel;

readonly name: string;
readonly codec: upstream0.MethodCodec;
readonly binaryMessenger: upstream1.BinaryMessenger;
receiveBroadcastStream(_flaxArg_617267756d656e7473?: unknown | null): upstream2.Stream<unknown | null>;
}
defineObject("flax.core/sdk_services#type:EventChannel", ["name","codec","binaryMessenger"], [], _flaxBindingMethods("flax.core/sdk_services#type:EventChannel", "object", {"receiveBroadcastStream":_flaxMemberParameters31}, {}), []);
export function _EventChannelFactory(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null): EventChannel {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (codec === undefined && (binaryMessenger !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/sdk_services#type:EventChannel", "", [{"name":"name","required":true,"positional":true},{"name":"codec","positional":true},{"name":"binaryMessenger","positional":true}], [name, codec, binaryMessenger], {}) as EventChannel;
}
const _EventChannelProxy = {type: "flax.core/sdk_services#type:EventChannel", parameters: _flaxMemberParameters32, constructors: {"": _flaxMemberParameters32}, methods: {"receiveBroadcastStream":_flaxMemberParameters31}, getters: ["name","codec","binaryMessenger"], setters: [], contextMembers: [], superMembers: ["get:name","get:codec","get:binaryMessenger","receiveBroadcastStream"]} as const;
export interface _EventChannelNative extends EventChannel {
readonly [_flaxDartTypeValue]: _EventChannelNative;

receiveBroadcastStream(_flaxArg_617267756d656e7473?: unknown | null): upstream2.Stream<unknown | null>;
get name(): string;
get codec(): upstream0.MethodCodec;
get binaryMessenger(): upstream1.BinaryMessenger;
}
export abstract class _EventChannelNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EventChannel>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: EventChannel;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:EventChannel", readonly [], false];
constructor(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null) { super(_EventChannelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_EventChannelNative.prototype, _EventChannelProxy);
export namespace _EventChannelFactory { export function implement(args: [name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null], implementation: {}): EventChannel {
return constructProxy(_EventChannelProxy, args, implementation) as EventChannel; } }
const _EventChannelBinding = _flaxProxyFactory(_EventChannelFactory, _EventChannelNative) as unknown as typeof _EventChannelFactory & (new(name: string, codec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [] }>, binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null) => _EventChannelNative);
export const EventChannel: typeof _EventChannelBinding & _FlaxInstanceType<EventChannel> & _FlaxDartType<EventChannel, readonly ["class", "flax.core/sdk_services#type:EventChannel", readonly [], false]> = _flaxBindInstanceType<EventChannel, typeof _EventChannelBinding>(_EventChannelBinding, "flax.core/sdk_services#type:EventChannel", ["dart:core::Object"]) as typeof _EventChannelBinding & _FlaxInstanceType<EventChannel> & _FlaxDartType<EventChannel, readonly ["class", "flax.core/sdk_services#type:EventChannel", readonly [], false]>;
