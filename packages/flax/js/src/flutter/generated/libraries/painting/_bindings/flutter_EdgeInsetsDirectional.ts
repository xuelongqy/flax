// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters53, _flaxMemberParameters1, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeInsetsDirectional extends Omit<upstream0.EdgeInsetsGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> { readonly __EdgeInsetsDirectional: unique symbol;
readonly [_flaxDartTypeValue]: EdgeInsetsDirectional;

readonly isNonNegative: boolean;
readonly horizontal: number;
readonly vertical: number;
readonly collapsedSize: upstream1.Size;
readonly flipped: EdgeInsetsDirectional;
readonly start: number;
readonly top: number;
readonly end: number;
readonly bottom: number;
along(axis: upstream2.Axis): number;
inflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
deflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
clamp(min: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, max: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): upstream0.EdgeInsetsGeometry;
resolve(direction: upstream4.TextDirection | null): upstream3.EdgeInsets;
toString(): string;
copyWith(options?: {bottom?: number | null | undefined; end?: number | null | undefined; start?: number | null | undefined; top?: number | null | undefined}): EdgeInsetsDirectional;
operatorMultiply(other: number): EdgeInsetsDirectional;
operatorDivide(other: number): EdgeInsetsDirectional;
operatorTruncateDivide(other: number): EdgeInsetsDirectional;
operatorModulo(other: number): EdgeInsetsDirectional;
operatorNegate(): EdgeInsetsDirectional;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsetsDirectional;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsetsDirectional;
}
defineObject("flax.core/flutter#type:EdgeInsetsDirectional", ["isNonNegative","horizontal","vertical","collapsedSize","flipped","start","top","end","bottom"], [], _flaxBindingMethods("flax.core/flutter#type:EdgeInsetsDirectional", "object", {"copyWith":_flaxMemberParameters53,"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), [], undefined, "flax.core/flutter#type:EdgeInsetsGeometry");
export namespace _EdgeInsetsDirectionalFactory {
export function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "fromSTEB", [{"name":"start","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [start, top, end, bottom], {}) as EdgeInsetsDirectional;
}
}
export namespace _EdgeInsetsDirectionalFactory {
export function only(options: { start?: number | undefined; top?: number | undefined; end?: number | undefined; bottom?: number | undefined } = {}): EdgeInsetsDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "only", [{"name":"start"},{"name":"top"},{"name":"end"},{"name":"bottom"}], [], options) as EdgeInsetsDirectional;
}
}
export namespace _EdgeInsetsDirectionalFactory {
export function symmetric(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): EdgeInsetsDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "symmetric", [{"name":"horizontal"},{"name":"vertical"}], [], options) as EdgeInsetsDirectional;
}
}
export namespace _EdgeInsetsDirectionalFactory {
export function all(value: number): EdgeInsetsDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsetsDirectional;
}
}
export namespace _EdgeInsetsDirectionalFactory { export declare const zero: EdgeInsetsDirectional; }
_flaxDefineStaticGetters(_EdgeInsetsDirectionalFactory, "flax.core/flutter#read:EdgeInsetsDirectional.", ["zero"]);
export namespace _EdgeInsetsDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, t: number): EdgeInsetsDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EdgeInsetsDirectional.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as EdgeInsetsDirectional | null;
} }
export const EdgeInsetsDirectional: typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional> & _FlaxDartType<EdgeInsetsDirectional, readonly ["class", "flax.core/flutter#type:EdgeInsetsDirectional", readonly [], false]> = _flaxBindInstanceType<EdgeInsetsDirectional, typeof _EdgeInsetsDirectionalFactory>(_EdgeInsetsDirectionalFactory, "flax.core/flutter#type:EdgeInsetsDirectional", ["flax.core/flutter#type:EdgeInsetsGeometry","dart:core::Object"]) as typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional> & _FlaxDartType<EdgeInsetsDirectional, readonly ["class", "flax.core/flutter#type:EdgeInsetsDirectional", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "start" | "top" | "end" | "bottom" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry";
