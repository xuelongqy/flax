// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"_handle","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CallbackHandle extends Readonly<{ "__flaxBound:dart:ui::CallbackHandle": readonly [] }> { readonly __CallbackHandle: unique symbol;
readonly [_flaxDartTypeValue]: CallbackHandle;

}
defineObject("flax.core/sdk_dart_ui#type:CallbackHandle", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:CallbackHandle", "object", {"toRawHandle":_flaxMemberParameters0}, {}), []);
const _CallbackHandleProxy = {type: "flax.core/sdk_dart_ui#type:CallbackHandle", parameters: _flaxMemberParameters1, constructors: {"fromRawHandle": _flaxMemberParameters1}, methods: {"toRawHandle":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["toRawHandle"]} as const;
export interface CallbackHandle {
readonly [_flaxDartTypeValue]: CallbackHandle;

toRawHandle(): number;
}
export abstract class CallbackHandle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CallbackHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false];
constructor(_handle: number) { super(_CallbackHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CallbackHandle.prototype, _CallbackHandleProxy);
export namespace CallbackHandle { export function implement(args: [_handle: number], implementation: {}): CallbackHandle {
return constructProxy(_CallbackHandleProxy, args, implementation) as CallbackHandle; } }
_flaxBindInstanceType<CallbackHandle, typeof CallbackHandle>(CallbackHandle, "flax.core/sdk_dart_ui#type:CallbackHandle", ["dart:core::Object"]);
