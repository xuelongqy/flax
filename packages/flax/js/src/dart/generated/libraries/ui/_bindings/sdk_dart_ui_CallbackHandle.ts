// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CallbackHandle extends Readonly<{ "__flaxBound:dart:ui::CallbackHandle": readonly [] }> { readonly __CallbackHandle: unique symbol;
readonly [_flaxDartTypeValue]: CallbackHandle;

toRawHandle(): number;
}
defineObject("flax.core/sdk_dart_ui#type:CallbackHandle", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:CallbackHandle", "object", {"toRawHandle":_flaxMemberParameters0}, {}), []);
export namespace _CallbackHandleFactory {
export function fromRawHandle(_handle: number): CallbackHandle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:CallbackHandle", "fromRawHandle", [{"name":"_handle","required":true,"positional":true}], [_handle], {}) as CallbackHandle;
}
}
const _CallbackHandleProxy = {type: "flax.core/sdk_dart_ui#type:CallbackHandle", parameters: _flaxMemberParameters1, constructors: {"fromRawHandle": _flaxMemberParameters1}, methods: {"toRawHandle":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["toRawHandle"]} as const;
export interface _CallbackHandleNative extends CallbackHandle {
readonly [_flaxDartTypeValue]: _CallbackHandleNative;
readonly [_flaxDartConstructors]?: {"fromRawHandle": (_handle: number) => void;};

toRawHandle(): number;
}
export abstract class _CallbackHandleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CallbackHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false];
constructor(_handle: number); constructor(call: _FlaxProxySuper<_CallbackHandleNative>); constructor(...args: unknown[]) { super(_CallbackHandleProxy, args); }
}
_flaxDefineProxyBase(_CallbackHandleNative.prototype, _CallbackHandleProxy);
export namespace _CallbackHandleFactory { export function implement(args: [_handle: number], implementation: {}): CallbackHandle {
return constructProxy(_CallbackHandleProxy, args, implementation) as CallbackHandle; } }
const _CallbackHandleBinding = _flaxProxyFactory(_CallbackHandleFactory, _CallbackHandleNative) as unknown as typeof _CallbackHandleFactory & (new(_handle: number) => _CallbackHandleNative) & (new(call: _FlaxProxySuper<_CallbackHandleNative>) => _CallbackHandleNative);
export const CallbackHandle: typeof _CallbackHandleBinding & _FlaxInstanceType<CallbackHandle> & _FlaxDartType<CallbackHandle, readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false]> = _flaxBindInstanceType<CallbackHandle, typeof _CallbackHandleBinding>(_CallbackHandleBinding, "flax.core/sdk_dart_ui#type:CallbackHandle", ["dart:core::Object"]) as typeof _CallbackHandleBinding & _FlaxInstanceType<CallbackHandle> & _FlaxDartType<CallbackHandle, readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false]>;
