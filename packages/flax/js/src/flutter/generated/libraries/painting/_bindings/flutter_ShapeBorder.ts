// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters145, _flaxMemberParameters146, _flaxMemberParameters147, _flaxMemberParameters3, _flaxMemberParameters0 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorder extends Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __ShapeBorder: unique symbol;
readonly [_flaxDartTypeValue]: ShapeBorder;

readonly dimensions: upstream0.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): ShapeBorder | null;
scale(t: number): ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): upstream1.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): upstream1.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): ShapeBorder;
}
defineObject("flax.core/flutter#type:ShapeBorder", ["dimensions","preferPaintInterior"], [], _flaxBindingMethods("flax.core/flutter#type:ShapeBorder", "object", {"add":_flaxMemberParameters7,"scale":_flaxMemberParameters8,"lerpFrom":_flaxMemberParameters23,"lerpTo":_flaxMemberParameters24,"getOuterPath":_flaxMemberParameters145,"getInnerPath":_flaxMemberParameters145,"paintInterior":_flaxMemberParameters146,"paint":_flaxMemberParameters147,"toString":_flaxMemberParameters3,"operatorAdd":_flaxMemberParameters0}, {}), []);
export namespace _ShapeBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:ShapeBorder.lerp", [a, b, t]);
return _flaxResult as ShapeBorder | null;
} }
export const ShapeBorder: typeof _ShapeBorderFactory & _FlaxInstanceType<ShapeBorder> & _FlaxDartType<ShapeBorder, readonly ["class", "flax.core/flutter#type:ShapeBorder", readonly [], false]> = _flaxBindInstanceType<ShapeBorder, typeof _ShapeBorderFactory>(_ShapeBorderFactory, "flax.core/flutter#type:ShapeBorder", ["dart:core::Object"]) as typeof _ShapeBorderFactory & _FlaxInstanceType<ShapeBorder> & _FlaxDartType<ShapeBorder, readonly ["class", "flax.core/flutter#type:ShapeBorder", readonly [], false]>;
