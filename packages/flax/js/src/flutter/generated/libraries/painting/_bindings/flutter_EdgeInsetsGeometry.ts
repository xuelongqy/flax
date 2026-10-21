// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters54, _flaxMemberParameters22, _flaxMemberParameters1, _flaxMemberParameters55, _flaxMemberParameters5, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeInsetsGeometry extends Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> { readonly __EdgeInsetsGeometry: unique symbol;
readonly [_flaxDartTypeValue]: EdgeInsetsGeometry;

readonly isNonNegative: boolean;
readonly horizontal: number;
readonly vertical: number;
readonly collapsedSize: upstream1.Size;
readonly flipped: EdgeInsetsGeometry;
along(axis: upstream2.Axis): number;
inflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
deflateSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsetsGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsetsGeometry;
clamp(min: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, max: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): EdgeInsetsGeometry;
resolve(direction: upstream4.TextDirection | null): upstream3.EdgeInsets;
toString(): string;
operatorMultiply(other: number): EdgeInsetsGeometry;
operatorDivide(other: number): EdgeInsetsGeometry;
operatorTruncateDivide(other: number): EdgeInsetsGeometry;
operatorModulo(other: number): EdgeInsetsGeometry;
operatorNegate(): EdgeInsetsGeometry;
}
defineObject("flax.core/flutter#type:EdgeInsetsGeometry", ["isNonNegative","horizontal","vertical","collapsedSize","flipped"], [], _flaxBindingMethods("flax.core/flutter#type:EdgeInsetsGeometry", "object", {"along":_flaxMemberParameters54,"inflateSize":_flaxMemberParameters22,"deflateSize":_flaxMemberParameters22,"subtract":_flaxMemberParameters1,"add":_flaxMemberParameters1,"clamp":_flaxMemberParameters55,"resolve":_flaxMemberParameters5,"toString":_flaxMemberParameters4,"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4}, {}), []);
export namespace _EdgeInsetsGeometryFactory {
export function all(value: number): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function only(options: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined } = {}): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "only", [{"name":"left"},{"name":"right"},{"name":"top"},{"name":"bottom"}], [], options) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function directional(options: { start?: number | undefined; end?: number | undefined; top?: number | undefined; bottom?: number | undefined } = {}): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "directional", [{"name":"start"},{"name":"end"},{"name":"top"},{"name":"bottom"}], [], options) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function symmetric(options: { vertical?: number | undefined; horizontal?: number | undefined } = {}): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "symmetric", [{"name":"vertical"},{"name":"horizontal"}], [], options) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "fromLTRB", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [left, top, right, bottom], {}) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function fromViewPadding(padding: Readonly<{ "__flaxBound:dart:ui::ViewPadding": readonly [] }>, devicePixelRatio: number): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "fromViewPadding", [{"name":"padding","required":true,"positional":true},{"name":"devicePixelRatio","required":true,"positional":true}], [padding, devicePixelRatio], {}) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory {
export function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsGeometry", "fromSTEB", [{"name":"start","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [start, top, end, bottom], {}) as EdgeInsetsGeometry;
}
}
export namespace _EdgeInsetsGeometryFactory { export declare const zero: EdgeInsetsGeometry; }
export namespace _EdgeInsetsGeometryFactory { export declare const infinity: EdgeInsetsGeometry; }
_flaxDefineStaticGetters(_EdgeInsetsGeometryFactory, "flax.core/flutter#read:EdgeInsetsGeometry.", ["zero","infinity"]);
export namespace _EdgeInsetsGeometryFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null, t: number): EdgeInsetsGeometry | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EdgeInsetsGeometry.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as EdgeInsetsGeometry | null;
} }
export const EdgeInsetsGeometry: typeof _EdgeInsetsGeometryFactory & _FlaxInstanceType<EdgeInsetsGeometry> & _FlaxDartType<EdgeInsetsGeometry, readonly ["class", "flax.core/flutter#type:EdgeInsetsGeometry", readonly [], false]> = _flaxBindInstanceType<EdgeInsetsGeometry, typeof _EdgeInsetsGeometryFactory>(_EdgeInsetsGeometryFactory, "flax.core/flutter#type:EdgeInsetsGeometry", ["dart:core::Object"]) as typeof _EdgeInsetsGeometryFactory & _FlaxInstanceType<EdgeInsetsGeometry> & _FlaxDartType<EdgeInsetsGeometry, readonly ["class", "flax.core/flutter#type:EdgeInsetsGeometry", readonly [], false]>;
