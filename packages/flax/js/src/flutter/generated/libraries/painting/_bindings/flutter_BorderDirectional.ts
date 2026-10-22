// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import { _flaxMemberParameters8, _flaxMemberParameters0, _flaxMemberParameters10 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderDirectional extends Omit<upstream0.BoxBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.BoxBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __BorderDirectional: unique symbol;
readonly [_flaxDartTypeValue]: BorderDirectional;

readonly top: upstream2.BorderSide;
readonly bottom: upstream2.BorderSide;
readonly isUniform: boolean;
readonly preferPaintInterior: boolean;
readonly dimensions: upstream3.EdgeInsetsGeometry;
readonly start: upstream2.BorderSide;
readonly end: upstream2.BorderSide;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream0.BoxBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; shape?: upstream10.BoxShape | undefined; textDirection?: upstream6.TextDirection | null | undefined}): void;
scale(t: number): BorderDirectional;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/flutter#type:BorderDirectional", ["top","bottom","isUniform","preferPaintInterior","dimensions","start","end"], [], _flaxBindingMethods("flax.core/flutter#type:BorderDirectional", "object", {"scale":_flaxMemberParameters10}, {}), [], undefined, "flax.core/flutter#type:BoxBorder");
export function _BorderDirectionalFactory(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined } = {}): BorderDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderDirectional", "", [{"name":"top"},{"name":"start"},{"name":"end"},{"name":"bottom"}], [], options) as BorderDirectional;
}
export namespace _BorderDirectionalFactory { export function merge(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): BorderDirectional {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderDirectional.merge", [a, b], _flaxMemberParameters8);
return _flaxResult as BorderDirectional;
} }
export namespace _BorderDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): BorderDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderDirectional.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as BorderDirectional | null;
} }
export const BorderDirectional: typeof _BorderDirectionalFactory & _FlaxInstanceType<BorderDirectional> & _FlaxDartType<BorderDirectional, readonly ["class", "flax.core/flutter#type:BorderDirectional", readonly [], false]> = _flaxBindInstanceType<BorderDirectional, typeof _BorderDirectionalFactory>(_BorderDirectionalFactory, "flax.core/flutter#type:BorderDirectional", ["flax.core/flutter#type:BoxBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _BorderDirectionalFactory & _FlaxInstanceType<BorderDirectional> & _FlaxDartType<BorderDirectional, readonly ["class", "flax.core/flutter#type:BorderDirectional", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "start" | "end" | "add" | "getInnerPath" | "getOuterPath" | "paintInterior" | "paint" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional" | "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
