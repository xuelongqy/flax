// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
const _flaxMemberParameters0 = [{"name":"bottom","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"side","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"top","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"paint","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [] as const;
const _flaxMemberParameters9 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LinearBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __LinearBorder: unique symbol;
readonly [_flaxDartTypeValue]: LinearBorder;

}
defineObject("flax.core/sdk_painting#type:LinearBorder", ["dimensions","side","preferPaintInterior","start","end","top","bottom"], [], _flaxBindingMethods("flax.core/sdk_painting#type:LinearBorder", "object", {"copyWith":_flaxMemberParameters0,"scale":_flaxMemberParameters1}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
const _LinearBorderProxy = {type: "flax.core/sdk_painting#type:LinearBorder", parameters: [{"name":"side","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], constructors: {"":[{"name":"side","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}]}, methods: {"copyWith":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"add":_flaxMemberParameters4,"getOuterPath":_flaxMemberParameters5,"getInnerPath":_flaxMemberParameters5,"paintInterior":_flaxMemberParameters6,"paint":_flaxMemberParameters7,"toString":_flaxMemberParameters8,"operatorAdd":_flaxMemberParameters9}, getters: ["start","end","top","bottom","dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","get:top","get:bottom","get:dimensions","get:side","get:preferPaintInterior","copyWith","scale","lerpFrom","lerpTo","add","getOuterPath","getInnerPath","paintInterior","paint","toString","operatorAdd"]} as const;
export interface LinearBorder {
readonly [_flaxDartTypeValue]: LinearBorder;

copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}): LinearBorder;
scale(t: number): LinearBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get start(): upstream3.LinearBorderEdge | null;
get end(): upstream3.LinearBorderEdge | null;
get top(): upstream3.LinearBorderEdge | null;
get bottom(): upstream3.LinearBorderEdge | null;
get dimensions(): upstream4.EdgeInsetsGeometry;
get side(): upstream2.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class LinearBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LinearBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false];
constructor(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}) { super(_LinearBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LinearBorder.prototype, _LinearBorderProxy);
export namespace LinearBorder { export function implement(args: [options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}], implementation: {}): LinearBorder {
return constructProxy(_LinearBorderProxy, args, implementation) as LinearBorder; } }
export namespace LinearBorder { export declare const none: LinearBorder; }
_flaxDefineStaticGetters(LinearBorder, "flax.core/sdk_painting#read:LinearBorder.", ["none"]);
_flaxBindInstanceType<LinearBorder, typeof LinearBorder>(LinearBorder, "flax.core/sdk_painting#type:LinearBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "start" | "end" | "top" | "bottom" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
