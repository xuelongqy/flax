// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChannelBuffers extends Readonly<{ "__flaxBound:dart:ui::ChannelBuffers": readonly [] }> { readonly __ChannelBuffers: unique symbol;
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
defineObject("flax.core/sdk_dart_ui#type:ChannelBuffers", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ChannelBuffers", "object", {"push":_flaxMemberParameters33,"setListener":_flaxMemberParameters34,"clearListener":_flaxMemberParameters35,"sendChannelUpdate":_flaxMemberParameters36,"drain":_flaxMemberParameters34,"handleMessage":_flaxMemberParameters37,"resize":_flaxMemberParameters38,"allowOverflow":_flaxMemberParameters39}, {}), []);
export function _ChannelBuffersFactory(): ChannelBuffers {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ChannelBuffers", "", [], [], {}) as ChannelBuffers;
}
const _ChannelBuffersProxy = {type: "flax.core/sdk_dart_ui#type:ChannelBuffers", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"push":_flaxMemberParameters33,"setListener":_flaxMemberParameters34,"clearListener":_flaxMemberParameters35,"sendChannelUpdate":_flaxMemberParameters36,"drain":_flaxMemberParameters34,"handleMessage":_flaxMemberParameters37,"resize":_flaxMemberParameters38,"allowOverflow":_flaxMemberParameters39}, getters: [], setters: [], contextMembers: [], superMembers: ["push","setListener","clearListener","sendChannelUpdate","drain","handleMessage","resize","allowOverflow"]} as const;
export interface _ChannelBuffersNative extends ChannelBuffers {
readonly [_flaxDartTypeValue]: _ChannelBuffersNative;

push(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)): void;
setListener(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => void)): void;
clearListener(name: string): void;
sendChannelUpdate(name: string, options: {listening: boolean}): void;
drain(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => Promise<void>)): Promise<void>;
handleMessage(data: globalThis.DataView): void;
resize(name: string, newSize: number): void;
allowOverflow(name: string, allowed: boolean): void;
}
export abstract class _ChannelBuffersNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChannelBuffers>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChannelBuffers;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false];
constructor() { super(_ChannelBuffersProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ChannelBuffersNative.prototype, _ChannelBuffersProxy);
export namespace _ChannelBuffersFactory { export function implement(args: [], implementation: {}): ChannelBuffers {
return constructProxy(_ChannelBuffersProxy, args, implementation) as ChannelBuffers; } }
const _ChannelBuffersBinding = _flaxProxyFactory(_ChannelBuffersFactory, _ChannelBuffersNative) as unknown as typeof _ChannelBuffersFactory & (new() => _ChannelBuffersNative);
export namespace _ChannelBuffersFactory { export declare const kDefaultBufferSize: number; }
export namespace _ChannelBuffersFactory { export declare const kControlChannelName: string; }
_flaxDefineStaticGetters(_ChannelBuffersFactory, "flax.core/sdk_dart_ui#read:ChannelBuffers.", ["kDefaultBufferSize","kControlChannelName"]);
export const ChannelBuffers: typeof _ChannelBuffersBinding & _FlaxInstanceType<ChannelBuffers> & _FlaxDartType<ChannelBuffers, readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false]> = _flaxBindInstanceType<ChannelBuffers, typeof _ChannelBuffersBinding>(_ChannelBuffersBinding, "flax.core/sdk_dart_ui#type:ChannelBuffers", ["dart:core::Object"]) as typeof _ChannelBuffersBinding & _FlaxInstanceType<ChannelBuffers> & _FlaxDartType<ChannelBuffers, readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false]>;
