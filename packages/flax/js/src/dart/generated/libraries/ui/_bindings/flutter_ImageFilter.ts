// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageFilter extends Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> { readonly __ImageFilter: unique symbol;
readonly [_flaxDartTypeValue]: ImageFilter;

readonly debugShortDescription: string;
}
defineObject("flax.core/flutter#type:ImageFilter", ["debugShortDescription"], [], _flaxBindingMethods("flax.core/flutter#type:ImageFilter", "object", {}, {}), []);
export namespace _ImageFilterFactory {
export function blur(options: { sigmaX?: number | undefined; sigmaY?: number | undefined; tileMode?: upstream0.TileMode | null | undefined; bounds?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined } = {}): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "blur", [{"name":"sigmaX","required":false,"positional":false},{"name":"sigmaY","required":false,"positional":false},{"name":"tileMode","required":false,"positional":false},{"name":"bounds","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace _ImageFilterFactory {
export function dilate(options: { radiusX?: number | undefined; radiusY?: number | undefined } = {}): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "dilate", [{"name":"radiusX","required":false,"positional":false},{"name":"radiusY","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace _ImageFilterFactory {
export function erode(options: { radiusX?: number | undefined; radiusY?: number | undefined } = {}): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "erode", [{"name":"radiusX","required":false,"positional":false},{"name":"radiusY","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace _ImageFilterFactory {
export function matrix(matrix4: globalThis.Float64Array, options: { filterQuality?: upstream2.FilterQuality | undefined } = {}): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "matrix", [{"name":"matrix4","required":true,"positional":true},{"name":"filterQuality","required":false,"positional":false}], [matrix4], options) as ImageFilter;
}
}
export namespace _ImageFilterFactory {
export function compose(options: { outer: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }>; inner: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> }): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "compose", [{"name":"outer","required":true,"positional":false},{"name":"inner","required":true,"positional":false}], [], options) as ImageFilter;
}
}
export namespace _ImageFilterFactory {
export function shader(shader: Readonly<{ "__flaxBound:dart:ui::FragmentShader": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shader": readonly [] }>): ImageFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "shader", [{"name":"shader","required":true,"positional":true}], [shader], {}) as ImageFilter;
}
}
export namespace _ImageFilterFactory { export declare const isShaderFilterSupported: boolean; }
_flaxDefineStaticGetters(_ImageFilterFactory, "flax.core/flutter#read:ImageFilter.", ["isShaderFilterSupported"]);
export const ImageFilter: typeof _ImageFilterFactory & _FlaxInstanceType<ImageFilter> & _FlaxDartType<ImageFilter, readonly ["class", "flax.core/flutter#type:ImageFilter", readonly [], false]> = _flaxBindInstanceType<ImageFilter, typeof _ImageFilterFactory>(_ImageFilterFactory, "flax.core/flutter#type:ImageFilter", ["dart:core::Object"]) as typeof _ImageFilterFactory & _FlaxInstanceType<ImageFilter> & _FlaxDartType<ImageFilter, readonly ["class", "flax.core/flutter#type:ImageFilter", readonly [], false]>;
