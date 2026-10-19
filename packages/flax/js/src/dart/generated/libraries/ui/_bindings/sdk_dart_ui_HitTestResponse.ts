// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters54 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestResponse extends Readonly<{ "__flaxBound:dart:ui::HitTestResponse": readonly [] }> { readonly __HitTestResponse: unique symbol;
readonly [_flaxDartTypeValue]: HitTestResponse;

}
defineObject("flax.core/sdk_dart_ui#type:HitTestResponse", ["hasPlatformView"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:HitTestResponse", "object", {}, {}), []);
const _HitTestResponseProxy = {type: "flax.core/sdk_dart_ui#type:HitTestResponse", parameters: _flaxMemberParameters54, constructors: {"": _flaxMemberParameters54}, methods: {}, getters: ["hasPlatformView"], setters: [], contextMembers: [], superMembers: ["get:hasPlatformView"]} as const;
export interface HitTestResponse {
readonly [_flaxDartTypeValue]: HitTestResponse;

get hasPlatformView(): boolean;
}
export abstract class HitTestResponse extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResponse>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestResponse;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false];
constructor(options: {hasPlatformView: boolean}) { super(_HitTestResponseProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HitTestResponse.prototype, _HitTestResponseProxy);
export namespace HitTestResponse { export function implement(args: [options: {hasPlatformView: boolean}], implementation: {}): HitTestResponse {
return constructProxy(_HitTestResponseProxy, args, implementation) as HitTestResponse; } }
export namespace HitTestResponse { export declare const empty: HitTestResponse; }
_flaxDefineStaticGetters(HitTestResponse, "flax.core/sdk_dart_ui#read:HitTestResponse.", ["empty"]);
_flaxBindInstanceType<HitTestResponse, typeof HitTestResponse>(HitTestResponse, "flax.core/sdk_dart_ui#type:HitTestResponse", ["dart:core::Object"]);
