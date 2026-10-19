// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChannelBuffers extends Readonly<{ "__flaxBound:dart:ui::ChannelBuffers": readonly [] }> { readonly __ChannelBuffers: unique symbol;
readonly [_flaxDartTypeValue]: ChannelBuffers;

}
defineObject("flax.core/sdk_dart_ui#type:ChannelBuffers", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ChannelBuffers", "object", {"push":_flaxMemberParameters34,"setListener":_flaxMemberParameters35,"clearListener":_flaxMemberParameters36,"sendChannelUpdate":_flaxMemberParameters37,"drain":_flaxMemberParameters35,"handleMessage":_flaxMemberParameters38,"resize":_flaxMemberParameters39,"allowOverflow":_flaxMemberParameters40}, {}), []);
const _ChannelBuffersProxy = {type: "flax.core/sdk_dart_ui#type:ChannelBuffers", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"push":_flaxMemberParameters34,"setListener":_flaxMemberParameters35,"clearListener":_flaxMemberParameters36,"sendChannelUpdate":_flaxMemberParameters37,"drain":_flaxMemberParameters35,"handleMessage":_flaxMemberParameters38,"resize":_flaxMemberParameters39,"allowOverflow":_flaxMemberParameters40}, getters: [], setters: [], contextMembers: [], superMembers: ["push","setListener","clearListener","sendChannelUpdate","drain","handleMessage","resize","allowOverflow"]} as const;
export interface ChannelBuffers {
readonly [_flaxDartTypeValue]: ChannelBuffers;

push(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)): void;
setListener(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => void)): void;
clearListener(name: string): void;
sendChannelUpdate(name: string, options: {listening: boolean}): void;
drain(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => Promise<void>)): Promise<void>;
handleMessage(data: globalThis.DataView): void;
resize(name: string, newSize: number): void;
allowOverflow(name: string, allowed: boolean): void;
}
export abstract class ChannelBuffers extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChannelBuffers>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChannelBuffers;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false];
constructor() { super(_ChannelBuffersProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ChannelBuffers.prototype, _ChannelBuffersProxy);
export namespace ChannelBuffers { export function implement(args: [], implementation: {}): ChannelBuffers {
return constructProxy(_ChannelBuffersProxy, args, implementation) as ChannelBuffers; } }
export namespace ChannelBuffers { export declare const kDefaultBufferSize: number; }
export namespace ChannelBuffers { export declare const kControlChannelName: string; }
_flaxDefineStaticGetters(ChannelBuffers, "flax.core/sdk_dart_ui#read:ChannelBuffers.", ["kDefaultBufferSize","kControlChannelName"]);
_flaxBindInstanceType<ChannelBuffers, typeof ChannelBuffers>(ChannelBuffers, "flax.core/sdk_dart_ui#type:ChannelBuffers", ["dart:core::Object"]);
