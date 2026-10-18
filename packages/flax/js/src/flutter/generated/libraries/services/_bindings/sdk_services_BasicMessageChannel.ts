// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
const _flaxMemberParameters0 = [{"name":"message","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"handler","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BasicMessageChannel<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::BasicMessageChannel": readonly [T] }> { readonly __BasicMessageChannel: unique symbol;
readonly [_flaxDartTypeValue]: BasicMessageChannel<T>;

}
defineObject("flax.core/sdk_services#type:BasicMessageChannel", ["name","codec","binaryMessenger"], [], _flaxBindingMethods("flax.core/sdk_services#type:BasicMessageChannel", "object", {"send":_flaxMemberParameters0,"setMessageHandler":_flaxMemberParameters1}, {}), []);
const _BasicMessageChannelProxy = {type: "flax.core/sdk_services#type:BasicMessageChannel", parameters: [{"name":"name","required":true,"positional":true},{"name":"codec","required":true,"positional":true},{"name":"binaryMessenger","required":false,"positional":false}], constructors: {"":[{"name":"name","required":true,"positional":true},{"name":"codec","required":true,"positional":true},{"name":"binaryMessenger","required":false,"positional":false}]}, methods: {"send":_flaxMemberParameters0,"setMessageHandler":_flaxMemberParameters1}, getters: ["name","codec","binaryMessenger"], setters: [], contextMembers: [], superMembers: ["get:name","get:codec","get:binaryMessenger","send","setMessageHandler"]} as const;
export interface BasicMessageChannel<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: BasicMessageChannel<T>;

send(message: (T | DartInput<T>)): Promise<T | null>;
setMessageHandler(handler: ((message: T | null) => Promise<(T | DartInput<T>)>) | null): void;
get name(): string;
get codec(): upstream0.MessageCodec<T>;
get binaryMessenger(): upstream1.BinaryMessenger;
}
export abstract class BasicMessageChannel<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BasicMessageChannel<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BasicMessageChannel<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:BasicMessageChannel", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(name: string, codec: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}) { super(_BasicMessageChannelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BasicMessageChannel.prototype, _BasicMessageChannelProxy);
export namespace BasicMessageChannel { export function implement<T extends unknown | null = unknown | null>(args: [name: string, codec: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}], implementation: {}): BasicMessageChannel<T> {
return constructProxy(_BasicMessageChannelProxy, args, implementation) as BasicMessageChannel<T>; } }
_flaxBindInstanceType<BasicMessageChannel<unknown | null>, typeof BasicMessageChannel>(BasicMessageChannel, "flax.core/sdk_services#type:BasicMessageChannel", ["dart:core::Object"]);
_flaxDefineDartTypes(BasicMessageChannel, "flax.core/sdk_services#type:BasicMessageChannel", {...{"category":"object","constructors":{}}, proxy: _BasicMessageChannelProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, codec: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}) => BasicMessageChannel<_Selected0>) & {readonly prototype: BasicMessageChannel<_Selected0>;implement(args: readonly [string, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}], implementation: Partial<BasicMessageChannel<_Selected0>>): BasicMessageChannel<_Selected0>;} & _FlaxInstanceType<BasicMessageChannel<_Selected0>> & _FlaxDartType<BasicMessageChannel<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, codec: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}) => BasicMessageChannel<_Selected0>) & {readonly prototype: BasicMessageChannel<_Selected0>;implement(args: readonly [string, Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }>, options?: {binaryMessenger?: Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> | null | undefined}], implementation: Partial<BasicMessageChannel<_Selected0>>): BasicMessageChannel<_Selected0>;} & _FlaxInstanceType<BasicMessageChannel<_Selected0>> & _FlaxDartType<BasicMessageChannel<_Selected0>> : never : never; }
