// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters95, _flaxMemberParameters0, _flaxMemberParameters71, _flaxMemberParameters128 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RRect extends Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RRect] }> { readonly __RRect: unique symbol;
readonly [_flaxDartTypeValue]: RRect;

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
shift(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): RRect;
inflate(delta: number): RRect;
deflate(delta: number): RRect;
scaleRadii(): RRect;
}
defineObject("flax.core/sdk_dart_ui#type:RRect", ["left","top","right","bottom","tlRadiusX","tlRadiusY","tlRadius","trRadiusX","trRadiusY","trRadius","brRadiusX","brRadiusY","brRadius","blRadiusX","blRadiusY","blRadius","width","height","outerRect","safeInnerRect","middleRect","wideMiddleRect","tallMiddleRect","isEmpty","isFinite","isRect","isStadium","isEllipse","isCircle","shortestSide","longestSide","hasNaN","center"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:RRect", "object", {"contains":_flaxMemberParameters95,"toString":_flaxMemberParameters0,"shift":_flaxMemberParameters71,"inflate":_flaxMemberParameters128,"deflate":_flaxMemberParameters128,"scaleRadii":_flaxMemberParameters0}, {}), []);
export namespace _RRectFactory {
export function fromLTRBXY(left: number, top: number, right: number, bottom: number, radiusX: number, radiusY: number): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 6) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromLTRBXY", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"radiusX","required":true,"positional":true},{"name":"radiusY","required":true,"positional":true}], [left, top, right, bottom, radiusX, radiusY], {}) as RRect;
}
}
export namespace _RRectFactory {
export function fromLTRBR(left: number, top: number, right: number, bottom: number, radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromLTRBR", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"radius","required":true,"positional":true}], [left, top, right, bottom, radius], {}) as RRect;
}
}
export namespace _RRectFactory {
export function fromRectXY(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, radiusX: number, radiusY: number): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromRectXY", [{"name":"rect","required":true,"positional":true},{"name":"radiusX","required":true,"positional":true},{"name":"radiusY","required":true,"positional":true}], [rect, radiusX, radiusY], {}) as RRect;
}
}
export namespace _RRectFactory {
export function fromRectAndRadius(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromRectAndRadius", [{"name":"rect","required":true,"positional":true},{"name":"radius","required":true,"positional":true}], [rect, radius], {}) as RRect;
}
}
export namespace _RRectFactory {
export function fromLTRBAndCorners(left: number, top: number, right: number, bottom: number, options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromLTRBAndCorners", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"topLeft"},{"name":"topRight"},{"name":"bottomRight"},{"name":"bottomLeft"}], [left, top, right, bottom], options) as RRect;
}
}
export namespace _RRectFactory {
export function fromRectAndCorners(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): RRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RRect", "fromRectAndCorners", [{"name":"rect","required":true,"positional":true},{"name":"topLeft"},{"name":"topRight"},{"name":"bottomRight"},{"name":"bottomLeft"}], [rect], options) as RRect;
}
}
export namespace _RRectFactory { export declare const zero: RRect; }
_flaxDefineStaticGetters(_RRectFactory, "flax.core/sdk_dart_ui#read:RRect.", ["zero"]);
export namespace _RRectFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RRect] }> | null, b: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [RRect] }> | null, t: number): RRect | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:RRect.lerp", [a, b, t]);
return _flaxResult as RRect | null;
} }
export const RRect: typeof _RRectFactory & _FlaxInstanceType<RRect> & _FlaxDartType<RRect, readonly ["class", "flax.core/sdk_dart_ui#type:RRect", readonly [], false]> = _flaxBindInstanceType<RRect, typeof _RRectFactory>(_RRectFactory, "flax.core/sdk_dart_ui#type:RRect", ["dart:ui::_RRectLike","dart:core::Object"]) as typeof _RRectFactory & _FlaxInstanceType<RRect> & _FlaxDartType<RRect, readonly ["class", "flax.core/sdk_dart_ui#type:RRect", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "left" | "top" | "right" | "bottom" | "tlRadiusX" | "tlRadiusY" | "tlRadius" | "trRadiusX" | "trRadiusY" | "trRadius" | "brRadiusX" | "brRadiusY" | "brRadius" | "blRadiusX" | "blRadiusY" | "blRadius" | "width" | "height" | "outerRect" | "safeInnerRect" | "middleRect" | "wideMiddleRect" | "tallMiddleRect" | "isEmpty" | "isFinite" | "isRect" | "isStadium" | "isEllipse" | "isCircle" | "shortestSide" | "longestSide" | "hasNaN" | "center" | "contains" | "toString" | "shift" | "inflate" | "deflate" | "scaleRadii" | "__flaxBound:dart:ui::RRect" | "__flaxBound:dart:ui::_RRectLike";
