// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"name","required":true,"positional":true},{"name":"data","required":true,"positional":true},{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"name","required":true,"positional":true},{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":true,"positional":true},{"name":"listening","required":true,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"name","required":true,"positional":true},{"name":"newSize","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"name","required":true,"positional":true},{"name":"allowed","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChannelBuffers extends Readonly<{ "__flaxBound:dart:ui::ChannelBuffers": readonly [] }> { readonly __ChannelBuffers: unique symbol;
readonly [_flaxDartTypeValue]: ChannelBuffers;

}
defineObject("flax.core/sdk_dart_ui#type:ChannelBuffers", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ChannelBuffers", "object", {"push":_flaxMemberParameters0,"setListener":_flaxMemberParameters1,"clearListener":_flaxMemberParameters2,"sendChannelUpdate":_flaxMemberParameters3,"drain":_flaxMemberParameters1,"handleMessage":_flaxMemberParameters4,"resize":_flaxMemberParameters5,"allowOverflow":_flaxMemberParameters6}, {}), []);
const _ChannelBuffersProxy = {type: "flax.core/sdk_dart_ui#type:ChannelBuffers", parameters: [], constructors: {"":[]}, methods: {"push":_flaxMemberParameters0,"setListener":_flaxMemberParameters1,"clearListener":_flaxMemberParameters2,"sendChannelUpdate":_flaxMemberParameters3,"drain":_flaxMemberParameters1,"handleMessage":_flaxMemberParameters4,"resize":_flaxMemberParameters5,"allowOverflow":_flaxMemberParameters6}, getters: [], setters: [], contextMembers: [], superMembers: ["push","setListener","clearListener","sendChannelUpdate","drain","handleMessage","resize","allowOverflow"]} as const;
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
