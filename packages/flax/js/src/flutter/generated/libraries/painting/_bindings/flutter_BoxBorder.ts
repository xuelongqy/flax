// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters7, _flaxMemberParameters12 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxBorder extends Omit<upstream0.ShapeBorder, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __BoxBorder: unique symbol;
readonly [_flaxDartTypeValue]: BoxBorder;

readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly top: upstream1.BorderSide;
readonly bottom: upstream1.BorderSide;
readonly isUniform: boolean;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): BoxBorder | null;
scale(t: number): upstream0.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream10.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream10.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; shape?: upstream8.BoxShape | undefined; textDirection?: upstream9.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream0.ShapeBorder;
}
defineObject("flax.core/flutter#type:BoxBorder", ["dimensions","preferPaintInterior","top","bottom","isUniform"], [], _flaxBindingMethods("flax.core/flutter#type:BoxBorder", "object", {"add":_flaxMemberParameters7,"paint":_flaxMemberParameters12}, {}), [], undefined, "flax.core/flutter#type:ShapeBorder");
export namespace _BoxBorderFactory {
export function fromLTRB(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromLTRB", [{"name":"top"},{"name":"right"},{"name":"bottom"},{"name":"left"}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function all(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; width?: number | undefined; style?: upstream3.BorderStyle | undefined; strokeAlign?: number | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "all", [{"name":"color"},{"name":"width"},{"name":"style"},{"name":"strokeAlign"}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function fromBorderSide(side: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromBorderSide", [{"name":"side","required":true,"positional":true}], [side], {}) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function symmetric(options: { vertical?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; horizontal?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "symmetric", [{"name":"vertical"},{"name":"horizontal"}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function fromSTEB(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromSTEB", [{"name":"top"},{"name":"start"},{"name":"end"},{"name":"bottom"}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): BoxBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxBorder.lerp", [a, b, t]);
return _flaxResult as BoxBorder | null;
} }
export namespace _BoxBorderFactory { export function paintNonUniformBorder(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options: { borderRadius: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape?: upstream8.BoxShape | undefined; textDirection: upstream9.TextDirection | null; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined }): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["borderRadius","bottom","color","left","right","shape","textDirection","top"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxBorder.paintNonUniformBorder", [canvas, rect, options.borderRadius, options.bottom, options.color, options.left, options.right, options.shape, options.textDirection, options.top]);
} }
export const BoxBorder: typeof _BoxBorderFactory & _FlaxInstanceType<BoxBorder> & _FlaxDartType<BoxBorder, readonly ["class", "flax.core/flutter#type:BoxBorder", readonly [], false]> = _flaxBindInstanceType<BoxBorder, typeof _BoxBorderFactory>(_BoxBorderFactory, "flax.core/flutter#type:BoxBorder", ["flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _BoxBorderFactory & _FlaxInstanceType<BoxBorder> & _FlaxDartType<BoxBorder, readonly ["class", "flax.core/flutter#type:BoxBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "top" | "bottom" | "isUniform" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
