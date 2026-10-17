// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"axis","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"min","required":true,"positional":true},{"name":"max","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"direction","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [] as const;
const _flaxMemberParameters6 = [{"name":"bottom","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"top","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeInsetsDirectional extends Omit<upstream0.EdgeInsetsGeometry, typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "start" | "top" | "end" | "bottom" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> { readonly __EdgeInsetsDirectional: unique symbol;

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
inflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): upstream1.Size;
deflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): upstream1.Size;
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
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }>): EdgeInsetsDirectional;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }>): EdgeInsetsDirectional;
}
defineObject("flax.core/flutter#type:EdgeInsetsDirectional", ["isNonNegative","horizontal","vertical","collapsedSize","flipped","start","top","end","bottom"], [], _flaxBindingMethods("flax.core/flutter#type:EdgeInsetsDirectional", "object", {"along":_flaxMemberParameters0,"inflateSize":_flaxMemberParameters1,"deflateSize":_flaxMemberParameters1,"subtract":_flaxMemberParameters2,"add":_flaxMemberParameters2,"clamp":_flaxMemberParameters3,"resolve":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"copyWith":_flaxMemberParameters6,"operatorMultiply":_flaxMemberParameters2,"operatorDivide":_flaxMemberParameters2,"operatorTruncateDivide":_flaxMemberParameters2,"operatorModulo":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters5,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2}, {}), []);
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
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "only", [{"name":"start","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
}
}
export namespace _EdgeInsetsDirectionalFactory {
export function symmetric(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): EdgeInsetsDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "symmetric", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
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
Object.defineProperty(_EdgeInsetsDirectionalFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:EdgeInsetsDirectional.zero", []) });
export namespace _EdgeInsetsDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> | null, t: number): EdgeInsetsDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EdgeInsetsDirectional.lerp", [a, b, t]);
return _flaxResult as EdgeInsetsDirectional | null;
} }
export const EdgeInsetsDirectional: typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional> & _FlaxDartType<EdgeInsetsDirectional, readonly ["class", "flax.core/flutter#type:EdgeInsetsDirectional", readonly [], false]> = _flaxBindInstanceType<EdgeInsetsDirectional, typeof _EdgeInsetsDirectionalFactory>(_EdgeInsetsDirectionalFactory, "flax.core/flutter#type:EdgeInsetsDirectional", ["flax.core/flutter#type:EdgeInsetsGeometry","dart:core::Object"]) as typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional> & _FlaxDartType<EdgeInsetsDirectional, readonly ["class", "flax.core/flutter#type:EdgeInsetsDirectional", readonly [], false]>;
