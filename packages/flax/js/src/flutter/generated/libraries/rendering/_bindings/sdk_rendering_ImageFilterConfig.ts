// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ImageFilterContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ImageFilterContext';
import { _flaxMemberParameters78, _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageFilterConfig extends Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [] }> { readonly __ImageFilterConfig: unique symbol;
readonly [_flaxDartTypeValue]: ImageFilterConfig;

readonly filter: upstream0.ImageFilter | null;
readonly debugShortDescription: string;
resolve(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [] }>): upstream0.ImageFilter;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:ImageFilterConfig", ["filter","debugShortDescription"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ImageFilterConfig", "object", {"resolve":_flaxMemberParameters78,"toString":_flaxMemberParameters1}, {}), []);
export function _ImageFilterConfigFactory(filter: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }>): ImageFilterConfig {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ImageFilterConfig", "", [{"name":"filter","required":true,"positional":true}], [filter], {}) as ImageFilterConfig;
}
export namespace _ImageFilterConfigFactory {
export function blur(options: { sigmaX?: number | undefined; sigmaY?: number | undefined; tileMode?: upstream1.TileMode | undefined; bounded?: boolean | undefined } = {}): ImageFilterConfig {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ImageFilterConfig", "blur", [{"name":"sigmaX"},{"name":"sigmaY"},{"name":"tileMode"},{"name":"bounded"}], [], options) as ImageFilterConfig;
}
}
export namespace _ImageFilterConfigFactory {
export function compose(options: { outer: Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [] }>; inner: Readonly<{ "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [] }> }): ImageFilterConfig {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ImageFilterConfig", "compose", [{"name":"outer","required":true},{"name":"inner","required":true}], [], options) as ImageFilterConfig;
}
}
const _ImageFilterConfigProxy = {type: "flax.core/sdk_rendering#type:ImageFilterConfig", parameters: _flaxMemberParameters1, constructors: {}, methods: {"resolve":_flaxMemberParameters78,"toString":_flaxMemberParameters1}, getters: ["filter","debugShortDescription"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ImageFilterConfigFactory { export function implement(args: [], implementation: {resolve: ((context: upstream2.ImageFilterContext) => Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }>); toString: (() => string); get filter(): Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null; get debugShortDescription(): string}): ImageFilterConfig {
return constructProxy(_ImageFilterConfigProxy, args, implementation) as ImageFilterConfig; } }
export const ImageFilterConfig: typeof _ImageFilterConfigFactory & _FlaxInstanceType<ImageFilterConfig> & _FlaxDartType<ImageFilterConfig, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterConfig", readonly [], false]> = _flaxBindInstanceType<ImageFilterConfig, typeof _ImageFilterConfigFactory>(_ImageFilterConfigFactory, "flax.core/sdk_rendering#type:ImageFilterConfig", ["dart:core::Object"]) as typeof _ImageFilterConfigFactory & _FlaxInstanceType<ImageFilterConfig> & _FlaxDartType<ImageFilterConfig, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterConfig", readonly [], false]>;
