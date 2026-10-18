// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
const _flaxMemberParameters0 = [{"name":"rect","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"top","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeInsets extends Omit<upstream0.EdgeInsetsGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> { readonly __EdgeInsets: unique symbol;
readonly [_flaxDartTypeValue]: EdgeInsets;

readonly isNonNegative: boolean;
readonly horizontal: number;
readonly vertical: number;
readonly collapsedSize: upstream2.Size;
readonly flipped: EdgeInsets;
readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
readonly topLeft: upstream3.Offset;
readonly topRight: upstream3.Offset;
readonly bottomLeft: upstream3.Offset;
readonly bottomRight: upstream3.Offset;
along(axis: upstream4.Axis): number;
inflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Size;
deflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Size;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
clamp(min: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, max: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
resolve(direction: upstream5.TextDirection | null): EdgeInsets;
toString(): string;
inflateRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream6.Rect;
deflateRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream6.Rect;
inflateRRect(rect: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream7.RRect] }>): upstream7.RRect;
deflateRRect(rect: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream7.RRect] }>): upstream7.RRect;
copyWith(options?: {bottom?: number | null | undefined; left?: number | null | undefined; right?: number | null | undefined; top?: number | null | undefined}): EdgeInsets;
operatorMultiply(other: number): EdgeInsets;
operatorDivide(other: number): EdgeInsets;
operatorTruncateDivide(other: number): EdgeInsets;
operatorModulo(other: number): EdgeInsets;
operatorNegate(): EdgeInsets;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsets;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsets;
}
defineObject("flax.core/flutter#type:EdgeInsets", ["isNonNegative","horizontal","vertical","collapsedSize","flipped","left","top","right","bottom","topLeft","topRight","bottomLeft","bottomRight"], [], _flaxBindingMethods("flax.core/flutter#type:EdgeInsets", "object", {"inflateRect":_flaxMemberParameters0,"deflateRect":_flaxMemberParameters0,"inflateRRect":_flaxMemberParameters0,"deflateRRect":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1,"operatorMultiply":_flaxMemberParameters2,"operatorDivide":_flaxMemberParameters2,"operatorTruncateDivide":_flaxMemberParameters2,"operatorModulo":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters3,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:EdgeInsetsGeometry");
export namespace _EdgeInsetsFactory {
export function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "fromLTRB", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [left, top, right, bottom], {}) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory {
export function all(value: number): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory {
export function only(options: { left?: number | undefined; top?: number | undefined; right?: number | undefined; bottom?: number | undefined } = {}): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "only", [{"name":"left","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory {
export function symmetric(options: { vertical?: number | undefined; horizontal?: number | undefined } = {}): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "symmetric", [{"name":"vertical","required":false,"positional":false},{"name":"horizontal","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory {
export function fromViewPadding(padding: Readonly<{ "__flaxBound:dart:ui::ViewPadding": readonly [] }>, devicePixelRatio: number): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "fromViewPadding", [{"name":"padding","required":true,"positional":true},{"name":"devicePixelRatio","required":true,"positional":true}], [padding, devicePixelRatio], {}) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory {
export function fromWindowPadding(padding: Readonly<{ "__flaxBound:dart:ui::ViewPadding": readonly [] }>, devicePixelRatio: number): EdgeInsets {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "fromWindowPadding", [{"name":"padding","required":true,"positional":true},{"name":"devicePixelRatio","required":true,"positional":true}], [padding, devicePixelRatio], {}) as EdgeInsets;
}
}
export namespace _EdgeInsetsFactory { export declare const zero: EdgeInsets; }
_flaxDefineStaticGetters(_EdgeInsetsFactory, "flax.core/flutter#read:EdgeInsets.", ["zero"]);
export namespace _EdgeInsetsFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, t: number): EdgeInsets | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EdgeInsets.lerp", [a, b, t]);
return _flaxResult as EdgeInsets | null;
} }
export const EdgeInsets: typeof _EdgeInsetsFactory & _FlaxInstanceType<EdgeInsets> & _FlaxDartType<EdgeInsets, readonly ["class", "flax.core/flutter#type:EdgeInsets", readonly [], false]> = _flaxBindInstanceType<EdgeInsets, typeof _EdgeInsetsFactory>(_EdgeInsetsFactory, "flax.core/flutter#type:EdgeInsets", ["flax.core/flutter#type:EdgeInsetsGeometry","dart:core::Object"]) as typeof _EdgeInsetsFactory & _FlaxInstanceType<EdgeInsets> & _FlaxDartType<EdgeInsets, readonly ["class", "flax.core/flutter#type:EdgeInsets", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "left" | "top" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "inflateRect" | "deflateRect" | "inflateRRect" | "deflateRRect" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry";
