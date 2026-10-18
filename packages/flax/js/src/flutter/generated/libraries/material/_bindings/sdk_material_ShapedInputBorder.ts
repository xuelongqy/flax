// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
const _flaxMemberParameters0 = [{"name":"borderSide","required":false,"positional":false},{"name":"gapPadding","required":false,"positional":false},{"name":"shape","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"gapExtent","required":false,"positional":false},{"name":"gapPercentage","required":false,"positional":false},{"name":"gapStart","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"paint","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [] as const;
const _flaxMemberParameters9 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapedInputBorder extends Omit<upstream0.InputBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.InputBorder>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::ShapedInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __ShapedInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: ShapedInputBorder;

}
defineObject("flax.core/sdk_material#type:ShapedInputBorder", ["borderSide","isOutline","dimensions","preferPaintInterior","gapPadding","shape"], [], _flaxBindingMethods("flax.core/sdk_material#type:ShapedInputBorder", "object", {"copyWith":_flaxMemberParameters0,"scale":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_material#type:InputBorder");
const _ShapedInputBorderProxy = {type: "flax.core/sdk_material#type:ShapedInputBorder", parameters: [{"name":"borderSide","required":false,"positional":false},{"name":"shape","required":true,"positional":false},{"name":"gapPadding","required":false,"positional":false}], constructors: {"":[{"name":"borderSide","required":false,"positional":false},{"name":"shape","required":true,"positional":false},{"name":"gapPadding","required":false,"positional":false}]}, methods: {"copyWith":_flaxMemberParameters0,"paint":_flaxMemberParameters2,"add":_flaxMemberParameters3,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters4,"lerpTo":_flaxMemberParameters5,"getOuterPath":_flaxMemberParameters6,"getInnerPath":_flaxMemberParameters6,"paintInterior":_flaxMemberParameters7,"toString":_flaxMemberParameters8,"operatorAdd":_flaxMemberParameters9}, getters: ["gapPadding","shape","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:gapPadding","get:shape","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","paint","add","scale","lerpFrom","lerpTo","getOuterPath","getInnerPath","paintInterior","toString","operatorAdd"]} as const;
export interface ShapedInputBorder {
readonly [_flaxDartTypeValue]: ShapedInputBorder;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; gapPadding?: number | null | undefined}): ShapedInputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream6.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): ShapedInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get gapPadding(): number;
get shape(): upstream1.ShapeBorder;
get isOutline(): boolean;
get dimensions(): upstream3.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream2.BorderSide;
}
export abstract class ShapedInputBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapedInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapedInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ShapedInputBorder", readonly [], false];
constructor(options: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined}) { super(_ShapedInputBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShapedInputBorder.prototype, _ShapedInputBorderProxy);
export namespace ShapedInputBorder { export function implement(args: [options: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined}], implementation: {}): ShapedInputBorder {
return constructProxy(_ShapedInputBorderProxy, args, implementation) as ShapedInputBorder; } }
_flaxBindInstanceType<ShapedInputBorder, typeof ShapedInputBorder>(ShapedInputBorder, "flax.core/sdk_material#type:ShapedInputBorder", ["flax.core/sdk_material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderSide" | "isOutline" | "dimensions" | "preferPaintInterior" | "gapPadding" | "shape" | "copyWith" | "paint" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/material/input_border.dart::ShapedInputBorder" | "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
