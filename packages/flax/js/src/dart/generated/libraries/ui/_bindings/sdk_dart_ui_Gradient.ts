// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Gradient extends Omit<upstream0.Shader, typeof _flaxDartTypeValue | "debugDisposed" | "dispose" | "__flaxBound:dart:ui::Gradient" | "__flaxBound:dart:ui::Shader">, Readonly<{ "__flaxBound:dart:ui::Gradient": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Shader": readonly [] }> { readonly __Gradient: unique symbol;
readonly [_flaxDartTypeValue]: Gradient;

readonly debugDisposed: boolean;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Gradient", ["debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Gradient", "object", {}, {}), [], undefined, "flax.core/sdk_dart_ui#type:Shader");
export namespace _GradientFactory {
export function linear(from: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, to: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, matrix4?: globalThis.Float64Array | null): Gradient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 6) throw new TypeError('Too many constructor arguments');
if (colorStops === undefined && (tileMode !== undefined || matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (tileMode === undefined && (matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/sdk_dart_ui#type:Gradient", "linear", [{"name":"from","required":true,"positional":true},{"name":"to","required":true,"positional":true},{"name":"colors","required":true,"positional":true},{"name":"colorStops","positional":true},{"name":"tileMode","positional":true},{"name":"matrix4","positional":true}], [from, to, colors, colorStops, tileMode, matrix4], {}) as Gradient;
}
}
export namespace _GradientFactory {
export function radial(center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, radius: number, colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, matrix4?: globalThis.Float64Array | null, focal?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null, focalRadius?: number): Gradient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
if (colorStops === undefined && (tileMode !== undefined || matrix4 !== undefined || focal !== undefined || focalRadius !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (tileMode === undefined && (matrix4 !== undefined || focal !== undefined || focalRadius !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (matrix4 === undefined && (focal !== undefined || focalRadius !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (focal === undefined && (focalRadius !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/sdk_dart_ui#type:Gradient", "radial", [{"name":"center","required":true,"positional":true},{"name":"radius","required":true,"positional":true},{"name":"colors","required":true,"positional":true},{"name":"colorStops","positional":true},{"name":"tileMode","positional":true},{"name":"matrix4","positional":true},{"name":"focal","positional":true},{"name":"focalRadius","positional":true}], [center, radius, colors, colorStops, tileMode, matrix4, focal, focalRadius], {}) as Gradient;
}
}
export namespace _GradientFactory {
export function sweep(center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>, colorStops?: DartListInput<number, number> | null, tileMode?: upstream3.TileMode, startAngle?: number, endAngle?: number, matrix4?: globalThis.Float64Array | null): Gradient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 7) throw new TypeError('Too many constructor arguments');
if (colorStops === undefined && (tileMode !== undefined || startAngle !== undefined || endAngle !== undefined || matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (tileMode === undefined && (startAngle !== undefined || endAngle !== undefined || matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (startAngle === undefined && (endAngle !== undefined || matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (endAngle === undefined && (matrix4 !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/sdk_dart_ui#type:Gradient", "sweep", [{"name":"center","required":true,"positional":true},{"name":"colors","required":true,"positional":true},{"name":"colorStops","positional":true},{"name":"tileMode","positional":true},{"name":"startAngle","positional":true},{"name":"endAngle","positional":true},{"name":"matrix4","positional":true}], [center, colors, colorStops, tileMode, startAngle, endAngle, matrix4], {}) as Gradient;
}
}
export const Gradient: typeof _GradientFactory & _FlaxInstanceType<Gradient> & _FlaxDartType<Gradient, readonly ["class", "flax.core/sdk_dart_ui#type:Gradient", readonly [], false]> = _flaxBindInstanceType<Gradient, typeof _GradientFactory>(_GradientFactory, "flax.core/sdk_dart_ui#type:Gradient", ["flax.core/sdk_dart_ui#type:Shader","dart:core::Object"]) as typeof _GradientFactory & _FlaxInstanceType<Gradient> & _FlaxDartType<Gradient, readonly ["class", "flax.core/sdk_dart_ui#type:Gradient", readonly [], false]>;
