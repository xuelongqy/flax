// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters229, _flaxMemberParameters4, _flaxMemberParameters177, _flaxMemberParameters184, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters182, _flaxMemberParameters183, _flaxMemberParameters185 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateInputBorder extends Omit<upstream0.InputBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.InputBorder>, Omit<upstream2.WidgetStateProperty<upstream0.InputBorder>, _flaxOwnMembers0 | keyof upstream0.InputBorder | keyof upstream1.ShapeBorder>, Readonly<{ "__flaxBound:package:material_ui/src/material_state.dart::WidgetStateInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.InputBorder] }> { readonly __WidgetStateInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateInputBorder;

readonly borderSide: upstream5.BorderSide;
readonly isOutline: boolean;
readonly dimensions: upstream6.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): upstream0.InputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapExtent?: number | undefined; gapPercentage?: number | undefined; gapStart?: number | null | undefined; textDirection?: upstream9.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream10.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream10.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
toString(): string;
resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.InputBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.material/material#type:WidgetStateInputBorder", ["borderSide","isOutline","dimensions","preferPaintInterior"], [], _flaxBindingMethods("flax.material/material#type:WidgetStateInputBorder", "object", {"resolve":_flaxMemberParameters229}, {}), [], undefined, "flax.material/material#type:InputBorder");
export namespace _WidgetStateInputBorderFactory {
export function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>)): WidgetStateInputBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:WidgetStateInputBorder", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateInputBorder;
}
}
export namespace _WidgetStateInputBorderFactory {
export function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.InputBorder, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>>): WidgetStateInputBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:WidgetStateInputBorder", "fromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as WidgetStateInputBorder;
}
}
const _WidgetStateInputBorderProxy = {type: "flax.material/material#type:WidgetStateInputBorder", parameters: _flaxMemberParameters4, constructors: {}, methods: {"copyWith":_flaxMemberParameters177,"paint":_flaxMemberParameters184,"add":_flaxMemberParameters178,"scale":_flaxMemberParameters179,"lerpFrom":_flaxMemberParameters180,"lerpTo":_flaxMemberParameters181,"getOuterPath":_flaxMemberParameters182,"getInnerPath":_flaxMemberParameters182,"paintInterior":_flaxMemberParameters183,"toString":_flaxMemberParameters4,"resolve":_flaxMemberParameters229,"operatorAdd":_flaxMemberParameters185}, getters: ["borderSide","isOutline","dimensions","preferPaintInterior"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _WidgetStateInputBorderFactory { export function implement(args: [], implementation: {copyWith: ((options?: { borderSide?: upstream5.BorderSide | null | undefined }) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); paint: ((canvas: upstream7.Canvas, rect: upstream8.Rect, options?: { gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream9.TextDirection | null | undefined }) => void); add: ((other: upstream1.ShapeBorder, options?: { reversed?: boolean | undefined }) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null); scale: ((t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); lerpFrom: ((a: upstream1.ShapeBorder | null, t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null); lerpTo: ((b: upstream1.ShapeBorder | null, t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null); getOuterPath: ((rect: upstream8.Rect, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getInnerPath: ((rect: upstream8.Rect, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); paintInterior: ((canvas: upstream7.Canvas, rect: upstream8.Rect, paint: upstream11.Paint, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => void); toString: (() => string); resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); operatorAdd: ((other: upstream1.ShapeBorder) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); get borderSide(): Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; get isOutline(): boolean; get dimensions(): Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>; get preferPaintInterior(): boolean}): WidgetStateInputBorder {
return constructProxy(_WidgetStateInputBorderProxy, args, implementation) as WidgetStateInputBorder; } }
export const WidgetStateInputBorder: typeof _WidgetStateInputBorderFactory & _FlaxInstanceType<WidgetStateInputBorder> & _FlaxDartType<WidgetStateInputBorder, readonly ["class", "flax.material/material#type:WidgetStateInputBorder", readonly [], false]> = _flaxBindInstanceType<WidgetStateInputBorder, typeof _WidgetStateInputBorderFactory>(_WidgetStateInputBorderFactory, "flax.material/material#type:WidgetStateInputBorder", ["dart:core::Object","flax.material/material#type:InputBorder","flax.core/flutter#type:ShapeBorder","flax.core/flutter#type:WidgetStateProperty"]) as typeof _WidgetStateInputBorderFactory & _FlaxInstanceType<WidgetStateInputBorder> & _FlaxDartType<WidgetStateInputBorder, readonly ["class", "flax.material/material#type:WidgetStateInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderSide" | "isOutline" | "dimensions" | "preferPaintInterior" | "copyWith" | "paint" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:material_ui/src/material_state.dart::WidgetStateInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
