// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollCacheExtent extends Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> { readonly __ScrollCacheExtent: unique symbol;
readonly [_flaxDartTypeValue]: ScrollCacheExtent;

readonly style: upstream0.CacheExtentStyle;
readonly value: number;
}
defineObject("flax.core/sdk_rendering#type:ScrollCacheExtent", ["style","value"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ScrollCacheExtent", "object", {}, {}), []);
export namespace _ScrollCacheExtentFactory {
export function pixels(pixels: number): ScrollCacheExtent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ScrollCacheExtent", "pixels", [{"name":"pixels","required":true,"positional":true}], [pixels], {}) as ScrollCacheExtent;
}
}
export namespace _ScrollCacheExtentFactory {
export function viewport(value: number): ScrollCacheExtent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ScrollCacheExtent", "viewport", [{"name":"value","required":true,"positional":true}], [value], {}) as ScrollCacheExtent;
}
}
export const ScrollCacheExtent: typeof _ScrollCacheExtentFactory & _FlaxInstanceType<ScrollCacheExtent> & _FlaxDartType<ScrollCacheExtent, readonly ["class", "flax.core/sdk_rendering#type:ScrollCacheExtent", readonly [], false]> = _flaxBindInstanceType<ScrollCacheExtent, typeof _ScrollCacheExtentFactory>(_ScrollCacheExtentFactory, "flax.core/sdk_rendering#type:ScrollCacheExtent", ["dart:core::Object"]) as typeof _ScrollCacheExtentFactory & _FlaxInstanceType<ScrollCacheExtent> & _FlaxDartType<ScrollCacheExtent, readonly ["class", "flax.core/sdk_rendering#type:ScrollCacheExtent", readonly [], false]>;
