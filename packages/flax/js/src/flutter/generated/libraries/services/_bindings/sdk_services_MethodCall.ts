// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters55 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MethodCall extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [] }> { readonly __MethodCall: unique symbol;
readonly [_flaxDartTypeValue]: MethodCall;

}
defineObject("flax.core/sdk_services#type:MethodCall", ["method","arguments"], [], _flaxBindingMethods("flax.core/sdk_services#type:MethodCall", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _MethodCallProxy = {type: "flax.core/sdk_services#type:MethodCall", parameters: _flaxMemberParameters55, constructors: {"": _flaxMemberParameters55}, methods: {"toString":_flaxMemberParameters0}, getters: ["method","arguments"], setters: [], contextMembers: [], superMembers: ["get:method","get:arguments","toString"]} as const;
export interface MethodCall {
readonly [_flaxDartTypeValue]: MethodCall;

toString(): string;
get method(): string;
get arguments(): unknown | null;
}
export abstract class MethodCall extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodCall>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MethodCall;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false];
constructor(method: string, _flaxArg_617267756d656e7473?: unknown | null) { super(_MethodCallProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MethodCall.prototype, _MethodCallProxy);
export namespace MethodCall { export function implement(args: [method: string, _flaxArg_617267756d656e7473?: unknown | null], implementation: {}): MethodCall {
return constructProxy(_MethodCallProxy, args, implementation) as MethodCall; } }
_flaxBindInstanceType<MethodCall, typeof MethodCall>(MethodCall, "flax.core/sdk_services#type:MethodCall", ["dart:core::Object"]);
