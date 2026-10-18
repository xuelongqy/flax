// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ColorFilter extends Omit<upstream0.ImageFilter, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::ColorFilter": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> { readonly __ColorFilter: unique symbol;
readonly [_flaxDartTypeValue]: ColorFilter;

readonly debugShortDescription: string;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:ColorFilter", ["debugShortDescription"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ColorFilter", "object", {"toString":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:ImageFilter");
export namespace _ColorFilterFactory {
export function mode(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, blendMode: upstream2.BlendMode): ColorFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ColorFilter", "mode", [{"name":"color","required":true,"positional":true},{"name":"blendMode","required":true,"positional":true}], [color, blendMode], {}) as ColorFilter;
}
}
export namespace _ColorFilterFactory {
export function matrix(matrix: DartListInput<number, number>): ColorFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ColorFilter", "matrix", [{"name":"matrix","required":true,"positional":true}], [matrix], {}) as ColorFilter;
}
}
export namespace _ColorFilterFactory {
export function linearToSrgbGamma(): ColorFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ColorFilter", "linearToSrgbGamma", [], [], {}) as ColorFilter;
}
}
export namespace _ColorFilterFactory {
export function srgbToLinearGamma(): ColorFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ColorFilter", "srgbToLinearGamma", [], [], {}) as ColorFilter;
}
}
export namespace _ColorFilterFactory {
export function saturation(saturation: number): ColorFilter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ColorFilter", "saturation", [{"name":"saturation","required":true,"positional":true}], [saturation], {}) as ColorFilter;
}
}
export const ColorFilter: typeof _ColorFilterFactory & _FlaxInstanceType<ColorFilter> & _FlaxDartType<ColorFilter, readonly ["class", "flax.core/sdk_dart_ui#type:ColorFilter", readonly [], false]> = _flaxBindInstanceType<ColorFilter, typeof _ColorFilterFactory>(_ColorFilterFactory, "flax.core/sdk_dart_ui#type:ColorFilter", ["dart:core::Object","flax.core/flutter#type:ImageFilter"]) as typeof _ColorFilterFactory & _FlaxInstanceType<ColorFilter> & _FlaxDartType<ColorFilter, readonly ["class", "flax.core/sdk_dart_ui#type:ColorFilter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugShortDescription" | "toString" | "__flaxBound:dart:ui::ColorFilter" | "__flaxBound:dart:ui::ImageFilter";
