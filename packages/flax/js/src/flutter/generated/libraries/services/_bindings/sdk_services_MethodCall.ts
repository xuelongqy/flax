// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters55 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MethodCall extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }> { readonly __MethodCall: unique symbol;
readonly [_flaxDartTypeValue]: MethodCall;

readonly method: string;
readonly arguments: unknown | null;
toString(): string;
}
defineObject("flax.core/sdk_services#type:MethodCall", ["method","arguments"], [], _flaxBindingMethods("flax.core/sdk_services#type:MethodCall", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _MethodCallFactory(method: string, _flaxArg_617267756d656e7473?: unknown | null): MethodCall {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:MethodCall", "", [{"name":"method","required":true,"positional":true},{"name":"arguments","positional":true}], [method, _flaxArg_617267756d656e7473], {}) as MethodCall;
}
const _MethodCallProxy = {type: "flax.core/sdk_services#type:MethodCall", parameters: _flaxMemberParameters55, constructors: {"": _flaxMemberParameters55}, methods: {"toString":_flaxMemberParameters0}, getters: ["method","arguments"], setters: [], contextMembers: [], superMembers: ["get:method","get:arguments","toString"]} as const;
export interface _MethodCallNative extends MethodCall {
readonly [_flaxDartTypeValue]: _MethodCallNative;

toString(): string;
get method(): string;
get arguments(): unknown | null;
}
export abstract class _MethodCallNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodCall>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MethodCall;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false];
constructor(method: string, _flaxArg_617267756d656e7473?: unknown | null) { super(_MethodCallProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MethodCallNative.prototype, _MethodCallProxy);
export namespace _MethodCallFactory { export function implement(args: [method: string, _flaxArg_617267756d656e7473?: unknown | null], implementation: {}): MethodCall {
return constructProxy(_MethodCallProxy, args, implementation) as MethodCall; } }
const _MethodCallBinding = _flaxProxyFactory(_MethodCallFactory, _MethodCallNative) as unknown as typeof _MethodCallFactory & (new(method: string, _flaxArg_617267756d656e7473?: unknown | null) => _MethodCallNative);
export const MethodCall: typeof _MethodCallBinding & _FlaxInstanceType<MethodCall> & _FlaxDartType<MethodCall, readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false]> = _flaxBindInstanceType<MethodCall, typeof _MethodCallBinding>(_MethodCallBinding, "flax.core/sdk_services#type:MethodCall", ["dart:core::Object"]) as typeof _MethodCallBinding & _FlaxInstanceType<MethodCall> & _FlaxDartType<MethodCall, readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false]>;
