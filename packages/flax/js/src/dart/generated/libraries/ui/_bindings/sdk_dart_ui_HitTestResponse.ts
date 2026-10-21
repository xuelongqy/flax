// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters61 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestResponse extends Readonly<{ "__flaxBound:dart:ui::HitTestResponse": readonly [] }> { readonly __HitTestResponse: unique symbol;
readonly [_flaxDartTypeValue]: HitTestResponse;

readonly hasPlatformView: boolean;
}
defineObject("flax.core/sdk_dart_ui#type:HitTestResponse", ["hasPlatformView"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:HitTestResponse", "object", {}, {}), []);
export function _HitTestResponseFactory(options: { hasPlatformView: boolean }): HitTestResponse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:HitTestResponse", "", [{"name":"hasPlatformView","required":true}], [], options) as HitTestResponse;
}
const _HitTestResponseProxy = {type: "flax.core/sdk_dart_ui#type:HitTestResponse", parameters: _flaxMemberParameters61, constructors: {"": _flaxMemberParameters61}, methods: {}, getters: ["hasPlatformView"], setters: [], contextMembers: [], superMembers: ["get:hasPlatformView"]} as const;
export interface _HitTestResponseNative extends HitTestResponse {
readonly [_flaxDartTypeValue]: _HitTestResponseNative;

get hasPlatformView(): boolean;
}
export abstract class _HitTestResponseNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResponse>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestResponse;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false];
constructor(options: {hasPlatformView: boolean}) { super(_HitTestResponseProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_HitTestResponseNative.prototype, _HitTestResponseProxy);
export namespace _HitTestResponseFactory { export function implement(args: [options: {hasPlatformView: boolean}], implementation: {}): HitTestResponse {
return constructProxy(_HitTestResponseProxy, args, implementation) as HitTestResponse; } }
const _HitTestResponseBinding = _flaxProxyFactory(_HitTestResponseFactory, _HitTestResponseNative) as unknown as typeof _HitTestResponseFactory & (new(options: {hasPlatformView: boolean}) => _HitTestResponseNative);
export namespace _HitTestResponseFactory { export declare const empty: HitTestResponse; }
_flaxDefineStaticGetters(_HitTestResponseFactory, "flax.core/sdk_dart_ui#read:HitTestResponse.", ["empty"]);
export const HitTestResponse: typeof _HitTestResponseBinding & _FlaxInstanceType<HitTestResponse> & _FlaxDartType<HitTestResponse, readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false]> = _flaxBindInstanceType<HitTestResponse, typeof _HitTestResponseBinding>(_HitTestResponseBinding, "flax.core/sdk_dart_ui#type:HitTestResponse", ["dart:core::Object"]) as typeof _HitTestResponseBinding & _FlaxInstanceType<HitTestResponse> & _FlaxDartType<HitTestResponse, readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false]>;
