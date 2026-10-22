// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters51, _flaxMemberParameters106, _flaxMemberParameters0, _flaxMemberParameters81, _flaxMemberParameters139 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RSuperellipse extends Readonly<{ "__flaxBound:dart:ui::RSuperellipse": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse] }> { readonly __RSuperellipse: unique symbol;
readonly [_flaxDartTypeValue]: RSuperellipse;

readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
readonly tlRadiusX: number;
readonly tlRadiusY: number;
readonly tlRadius: upstream0.Radius;
readonly trRadiusX: number;
readonly trRadiusY: number;
readonly trRadius: upstream0.Radius;
readonly brRadiusX: number;
readonly brRadiusY: number;
readonly brRadius: upstream0.Radius;
readonly blRadiusX: number;
readonly blRadiusY: number;
readonly blRadius: upstream0.Radius;
readonly width: number;
readonly height: number;
readonly outerRect: upstream1.Rect;
readonly safeInnerRect: upstream1.Rect;
readonly middleRect: upstream1.Rect;
readonly wideMiddleRect: upstream1.Rect;
readonly tallMiddleRect: upstream1.Rect;
readonly isEmpty: boolean;
readonly isFinite: boolean;
readonly isRect: boolean;
readonly isStadium: boolean;
readonly isEllipse: boolean;
readonly isCircle: boolean;
readonly shortestSide: number;
readonly longestSide: number;
readonly hasNaN: boolean;
readonly center: upstream2.Offset;
contains(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
shift(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): RSuperellipse;
inflate(delta: number): RSuperellipse;
deflate(delta: number): RSuperellipse;
scaleRadii(): RSuperellipse;
}
defineObject("flax.core/sdk_dart_ui#type:RSuperellipse", ["left","top","right","bottom","tlRadiusX","tlRadiusY","tlRadius","trRadiusX","trRadiusY","trRadius","brRadiusX","brRadiusY","brRadius","blRadiusX","blRadiusY","blRadius","width","height","outerRect","safeInnerRect","middleRect","wideMiddleRect","tallMiddleRect","isEmpty","isFinite","isRect","isStadium","isEllipse","isCircle","shortestSide","longestSide","hasNaN","center"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:RSuperellipse", "object", {"contains":_flaxMemberParameters106,"toString":_flaxMemberParameters0,"shift":_flaxMemberParameters81,"inflate":_flaxMemberParameters139,"deflate":_flaxMemberParameters139,"scaleRadii":_flaxMemberParameters0}, {}), []);
export namespace _RSuperellipseFactory {
export function fromLTRBXY(left: number, top: number, right: number, bottom: number, radiusX: number, radiusY: number): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 6) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromLTRBXY", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"radiusX","required":true,"positional":true},{"name":"radiusY","required":true,"positional":true}], [left, top, right, bottom, radiusX, radiusY], {}) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory {
export function fromLTRBR(left: number, top: number, right: number, bottom: number, radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromLTRBR", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"radius","required":true,"positional":true}], [left, top, right, bottom, radius], {}) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory {
export function fromRectXY(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, radiusX: number, radiusY: number): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromRectXY", [{"name":"rect","required":true,"positional":true},{"name":"radiusX","required":true,"positional":true},{"name":"radiusY","required":true,"positional":true}], [rect, radiusX, radiusY], {}) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory {
export function fromRectAndRadius(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromRectAndRadius", [{"name":"rect","required":true,"positional":true},{"name":"radius","required":true,"positional":true}], [rect, radius], {}) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory {
export function fromLTRBAndCorners(left: number, top: number, right: number, bottom: number, options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromLTRBAndCorners", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"topLeft"},{"name":"topRight"},{"name":"bottomRight"},{"name":"bottomLeft"}], [left, top, right, bottom], options) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory {
export function fromRectAndCorners(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): RSuperellipse {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSuperellipse", "fromRectAndCorners", [{"name":"rect","required":true,"positional":true},{"name":"topLeft"},{"name":"topRight"},{"name":"bottomRight"},{"name":"bottomLeft"}], [rect], options) as RSuperellipse;
}
}
export namespace _RSuperellipseFactory { export declare const zero: RSuperellipse; }
_flaxDefineStaticGetters(_RSuperellipseFactory, "flax.core/sdk_dart_ui#read:RSuperellipse.", ["zero"]);
export namespace _RSuperellipseFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::RSuperellipse": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse] }> | null, b: Readonly<{ "__flaxBound:dart:ui::RSuperellipse": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse] }> | null, t: number): RSuperellipse | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:RSuperellipse.lerp", [a, b, t], _flaxMemberParameters51);
return _flaxResult as RSuperellipse | null;
} }
export const RSuperellipse: typeof _RSuperellipseFactory & _FlaxInstanceType<RSuperellipse> & _FlaxDartType<RSuperellipse, readonly ["class", "flax.core/sdk_dart_ui#type:RSuperellipse", readonly [], false]> = _flaxBindInstanceType<RSuperellipse, typeof _RSuperellipseFactory>(_RSuperellipseFactory, "flax.core/sdk_dart_ui#type:RSuperellipse", ["dart:ui::_RRectLike","dart:core::Object"]) as typeof _RSuperellipseFactory & _FlaxInstanceType<RSuperellipse> & _FlaxDartType<RSuperellipse, readonly ["class", "flax.core/sdk_dart_ui#type:RSuperellipse", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "left" | "top" | "right" | "bottom" | "tlRadiusX" | "tlRadiusY" | "tlRadius" | "trRadiusX" | "trRadiusY" | "trRadius" | "brRadiusX" | "brRadiusY" | "brRadius" | "blRadiusX" | "blRadiusY" | "blRadius" | "width" | "height" | "outerRect" | "safeInnerRect" | "middleRect" | "wideMiddleRect" | "tallMiddleRect" | "isEmpty" | "isFinite" | "isRect" | "isStadium" | "isEllipse" | "isCircle" | "shortestSide" | "longestSide" | "hasNaN" | "center" | "contains" | "toString" | "shift" | "inflate" | "deflate" | "scaleRadii" | "__flaxBound:dart:ui::RSuperellipse" | "__flaxBound:dart:ui::_RRectLike";
