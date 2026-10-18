// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerDataPacket extends Readonly<{ "__flaxBound:dart:ui::PointerDataPacket": readonly [] }> { readonly __PointerDataPacket: unique symbol;
readonly [_flaxDartTypeValue]: PointerDataPacket;

}
defineObject("flax.core/sdk_dart_ui#type:PointerDataPacket", ["data"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PointerDataPacket", "object", {}, {}), []);
const _PointerDataPacketProxy = {type: "flax.core/sdk_dart_ui#type:PointerDataPacket", parameters: [{"name":"data","required":false,"positional":false}], constructors: {"":[{"name":"data","required":false,"positional":false}]}, methods: {}, getters: ["data"], setters: [], contextMembers: [], superMembers: ["get:data"]} as const;
export interface PointerDataPacket {
readonly [_flaxDartTypeValue]: PointerDataPacket;

get data(): DartList<upstream0.PointerData>;
}
export abstract class PointerDataPacket extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerDataPacket>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerDataPacket;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false];
constructor(options?: {data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined}) { super(_PointerDataPacketProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PointerDataPacket.prototype, _PointerDataPacketProxy);
export namespace PointerDataPacket { export function implement(args: [options?: {data?: DartListInput<upstream0.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>> | undefined}], implementation: {}): PointerDataPacket {
return constructProxy(_PointerDataPacketProxy, args, implementation) as PointerDataPacket; } }
_flaxBindInstanceType<PointerDataPacket, typeof PointerDataPacket>(PointerDataPacket, "flax.core/sdk_dart_ui#type:PointerDataPacket", ["dart:core::Object"]);
