// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters0, _flaxMemberParameters129 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OutlinedBorder extends Omit<upstream0.ShapeBorder, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __OutlinedBorder: unique symbol;
readonly [_flaxDartTypeValue]: OutlinedBorder;

readonly dimensions: upstream1.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly side: upstream2.BorderSide;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream0.ShapeBorder | null;
scale(t: number): upstream0.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): upstream3.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): upstream3.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): void;
toString(): string;
copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): OutlinedBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream0.ShapeBorder;
}
defineObject("flax.core/flutter#type:OutlinedBorder", ["dimensions","preferPaintInterior","side"], [], _flaxBindingMethods("flax.core/flutter#type:OutlinedBorder", "object", {"copyWith":_flaxMemberParameters129}, {}), [], undefined, "flax.core/flutter#type:ShapeBorder");
export namespace _OutlinedBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): OutlinedBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:OutlinedBorder.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as OutlinedBorder | null;
} }
export const OutlinedBorder: typeof _OutlinedBorderFactory & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]> = _flaxBindInstanceType<OutlinedBorder, typeof _OutlinedBorderFactory>(_OutlinedBorderFactory, "flax.core/flutter#type:OutlinedBorder", ["flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _OutlinedBorderFactory & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "side" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "copyWith" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
