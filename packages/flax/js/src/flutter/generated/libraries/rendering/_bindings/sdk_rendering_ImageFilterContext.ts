// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"bounds","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageFilterContext extends Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [] }> { readonly __ImageFilterContext: unique symbol;
readonly [_flaxDartTypeValue]: ImageFilterContext;

}
defineObject("flax.core/sdk_rendering#type:ImageFilterContext", ["bounds"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ImageFilterContext", "object", {}, {}), []);
const _ImageFilterContextProxy = {type: "flax.core/sdk_rendering#type:ImageFilterContext", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["bounds"], setters: [], contextMembers: [], superMembers: ["get:bounds"]} as const;
export interface ImageFilterContext {
readonly [_flaxDartTypeValue]: ImageFilterContext;

get bounds(): upstream0.Rect;
}
export abstract class ImageFilterContext extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageFilterContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageFilterContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false];
constructor(options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) { super(_ImageFilterContextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageFilterContext.prototype, _ImageFilterContextProxy);
export namespace ImageFilterContext { export function implement(args: [options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}], implementation: {}): ImageFilterContext {
return constructProxy(_ImageFilterContextProxy, args, implementation) as ImageFilterContext; } }
_flaxBindInstanceType<ImageFilterContext, typeof ImageFilterContext>(ImageFilterContext, "flax.core/sdk_rendering#type:ImageFilterContext", ["dart:core::Object"]);
