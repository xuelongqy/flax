// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters56 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestRequest extends Readonly<{ "__flaxBound:dart:ui::HitTestRequest": readonly [] }> { readonly __HitTestRequest: unique symbol;
readonly [_flaxDartTypeValue]: HitTestRequest;

readonly view: upstream0.FlutterView;
readonly offset: upstream1.Offset;
}
defineObject("flax.core/sdk_dart_ui#type:HitTestRequest", ["view","offset"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:HitTestRequest", "object", {}, {}), []);
export function _HitTestRequestFactory(options: { view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): HitTestRequest {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:HitTestRequest", "", [{"name":"view","required":true},{"name":"offset","required":true}], [], options) as HitTestRequest;
}
const _HitTestRequestProxy = {type: "flax.core/sdk_dart_ui#type:HitTestRequest", parameters: _flaxMemberParameters56, constructors: {"": _flaxMemberParameters56}, methods: {}, getters: ["view","offset"], setters: [], contextMembers: [], superMembers: ["get:view","get:offset"]} as const;
export interface _HitTestRequestNative extends HitTestRequest {
readonly [_flaxDartTypeValue]: _HitTestRequestNative;

get view(): upstream0.FlutterView;
get offset(): upstream1.Offset;
}
export abstract class _HitTestRequestNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestRequest>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestRequest;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestRequest", readonly [], false];
constructor(options: {view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_HitTestRequestProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_HitTestRequestNative.prototype, _HitTestRequestProxy);
export namespace _HitTestRequestFactory { export function implement(args: [options: {view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): HitTestRequest {
return constructProxy(_HitTestRequestProxy, args, implementation) as HitTestRequest; } }
const _HitTestRequestBinding = _flaxProxyFactory(_HitTestRequestFactory, _HitTestRequestNative) as unknown as typeof _HitTestRequestFactory & (new(options: {view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _HitTestRequestNative);
export const HitTestRequest: typeof _HitTestRequestBinding & _FlaxInstanceType<HitTestRequest> & _FlaxDartType<HitTestRequest, readonly ["class", "flax.core/sdk_dart_ui#type:HitTestRequest", readonly [], false]> = _flaxBindInstanceType<HitTestRequest, typeof _HitTestRequestBinding>(_HitTestRequestBinding, "flax.core/sdk_dart_ui#type:HitTestRequest", ["dart:core::Object"]) as typeof _HitTestRequestBinding & _FlaxInstanceType<HitTestRequest> & _FlaxDartType<HitTestRequest, readonly ["class", "flax.core/sdk_dart_ui#type:HitTestRequest", readonly [], false]>;
