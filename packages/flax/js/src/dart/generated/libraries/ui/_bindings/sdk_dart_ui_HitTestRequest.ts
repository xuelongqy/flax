// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"view","required":true},{"name":"offset","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestRequest extends Readonly<{ "__flaxBound:dart:ui::HitTestRequest": readonly [] }> { readonly __HitTestRequest: unique symbol;
readonly [_flaxDartTypeValue]: HitTestRequest;

}
defineObject("flax.core/sdk_dart_ui#type:HitTestRequest", ["view","offset"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:HitTestRequest", "object", {}, {}), []);
const _HitTestRequestProxy = {type: "flax.core/sdk_dart_ui#type:HitTestRequest", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["view","offset"], setters: [], contextMembers: [], superMembers: ["get:view","get:offset"]} as const;
export interface HitTestRequest {
readonly [_flaxDartTypeValue]: HitTestRequest;

get view(): upstream0.FlutterView;
get offset(): upstream1.Offset;
}
export abstract class HitTestRequest extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestRequest>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestRequest;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestRequest", readonly [], false];
constructor(options: {view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_HitTestRequestProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HitTestRequest.prototype, _HitTestRequestProxy);
export namespace HitTestRequest { export function implement(args: [options: {view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): HitTestRequest {
return constructProxy(_HitTestRequestProxy, args, implementation) as HitTestRequest; } }
_flaxBindInstanceType<HitTestRequest, typeof HitTestRequest>(HitTestRequest, "flax.core/sdk_dart_ui#type:HitTestRequest", ["dart:core::Object"]);
