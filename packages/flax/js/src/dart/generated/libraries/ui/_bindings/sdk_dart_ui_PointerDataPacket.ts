// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { _flaxMemberParameters129 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerDataPacket extends Readonly<{ "__flaxBound:dart:ui::PointerDataPacket": readonly [] }> { readonly __PointerDataPacket: unique symbol;
readonly [_flaxDartTypeValue]: PointerDataPacket;

readonly data: DartList<upstream0.PointerData>;
}
defineObject("flax.core/sdk_dart_ui#type:PointerDataPacket", ["data"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PointerDataPacket", "object", {}, {}), []);
export function _PointerDataPacketFactory(options: { data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined } = {}): PointerDataPacket {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:PointerDataPacket", "", [{"name":"data"}], [], options) as PointerDataPacket;
}
const _PointerDataPacketProxy = {type: "flax.core/sdk_dart_ui#type:PointerDataPacket", parameters: _flaxMemberParameters129, constructors: {"": _flaxMemberParameters129}, methods: {}, getters: ["data"], setters: [], contextMembers: [], superMembers: ["get:data"]} as const;
export interface _PointerDataPacketNative extends PointerDataPacket {
readonly [_flaxDartTypeValue]: _PointerDataPacketNative;

get data(): DartList<upstream0.PointerData>;
}
export abstract class _PointerDataPacketNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerDataPacket>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerDataPacket;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false];
constructor(options?: {data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined}) { super(_PointerDataPacketProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerDataPacketNative.prototype, _PointerDataPacketProxy);
export namespace _PointerDataPacketFactory { export function implement(args: [options?: {data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined}], implementation: {}): PointerDataPacket {
return constructProxy(_PointerDataPacketProxy, args, implementation) as PointerDataPacket; } }
const _PointerDataPacketBinding = _flaxProxyFactory(_PointerDataPacketFactory, _PointerDataPacketNative) as unknown as typeof _PointerDataPacketFactory & (new(options?: {data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined}) => _PointerDataPacketNative);
export const PointerDataPacket: typeof _PointerDataPacketBinding & _FlaxInstanceType<PointerDataPacket> & _FlaxDartType<PointerDataPacket, readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false]> = _flaxBindInstanceType<PointerDataPacket, typeof _PointerDataPacketBinding>(_PointerDataPacketBinding, "flax.core/sdk_dart_ui#type:PointerDataPacket", ["dart:core::Object"]) as typeof _PointerDataPacketBinding & _FlaxInstanceType<PointerDataPacket> & _FlaxDartType<PointerDataPacket, readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false]>;
