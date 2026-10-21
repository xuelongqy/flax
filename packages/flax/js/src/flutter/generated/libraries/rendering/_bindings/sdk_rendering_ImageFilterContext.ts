// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters84 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageFilterContext extends Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [] }> { readonly __ImageFilterContext: unique symbol;
readonly [_flaxDartTypeValue]: ImageFilterContext;

readonly bounds: upstream0.Rect;
}
defineObject("flax.core/sdk_rendering#type:ImageFilterContext", ["bounds"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ImageFilterContext", "object", {}, {}), []);
export function _ImageFilterContextFactory(options: { bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> }): ImageFilterContext {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ImageFilterContext", "", [{"name":"bounds","required":true}], [], options) as ImageFilterContext;
}
const _ImageFilterContextProxy = {type: "flax.core/sdk_rendering#type:ImageFilterContext", parameters: _flaxMemberParameters84, constructors: {"": _flaxMemberParameters84}, methods: {}, getters: ["bounds"], setters: [], contextMembers: [], superMembers: ["get:bounds"]} as const;
export interface _ImageFilterContextNative extends ImageFilterContext {
readonly [_flaxDartTypeValue]: _ImageFilterContextNative;

get bounds(): upstream0.Rect;
}
export abstract class _ImageFilterContextNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageFilterContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageFilterContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false];
constructor(options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) { super(_ImageFilterContextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageFilterContextNative.prototype, _ImageFilterContextProxy);
export namespace _ImageFilterContextFactory { export function implement(args: [options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}], implementation: {}): ImageFilterContext {
return constructProxy(_ImageFilterContextProxy, args, implementation) as ImageFilterContext; } }
const _ImageFilterContextBinding = _flaxProxyFactory(_ImageFilterContextFactory, _ImageFilterContextNative) as unknown as typeof _ImageFilterContextFactory & (new(options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) => _ImageFilterContextNative);
export const ImageFilterContext: typeof _ImageFilterContextBinding & _FlaxInstanceType<ImageFilterContext> & _FlaxDartType<ImageFilterContext, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false]> = _flaxBindInstanceType<ImageFilterContext, typeof _ImageFilterContextBinding>(_ImageFilterContextBinding, "flax.core/sdk_rendering#type:ImageFilterContext", ["dart:core::Object"]) as typeof _ImageFilterContextBinding & _FlaxInstanceType<ImageFilterContext> & _FlaxDartType<ImageFilterContext, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false]>;
