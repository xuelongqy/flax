// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"translateX","required":true,"positional":true},{"name":"translateY","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"delta","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Rect extends Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> { readonly __Rect: unique symbol;
readonly [_flaxDartTypeValue]: Rect;

readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
readonly width: number;
readonly height: number;
readonly size: upstream1.Size;
readonly hasNaN: boolean;
readonly isInfinite: boolean;
readonly isFinite: boolean;
readonly isEmpty: boolean;
readonly shortestSide: number;
readonly longestSide: number;
readonly topLeft: upstream0.Offset;
readonly topCenter: upstream0.Offset;
readonly topRight: upstream0.Offset;
readonly centerLeft: upstream0.Offset;
readonly center: upstream0.Offset;
readonly centerRight: upstream0.Offset;
readonly bottomLeft: upstream0.Offset;
readonly bottomCenter: upstream0.Offset;
readonly bottomRight: upstream0.Offset;
shift(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Rect;
translate(translateX: number, translateY: number): Rect;
inflate(delta: number): Rect;
deflate(delta: number): Rect;
intersect(other: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): Rect;
expandToInclude(other: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): Rect;
overlaps(other: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): boolean;
contains(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:Rect", ["left","top","right","bottom","width","height","size","hasNaN","isInfinite","isFinite","isEmpty","shortestSide","longestSide","topLeft","topCenter","topRight","centerLeft","center","centerRight","bottomLeft","bottomCenter","bottomRight"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Rect", "object", {"shift":_flaxMemberParameters0,"translate":_flaxMemberParameters1,"inflate":_flaxMemberParameters2,"deflate":_flaxMemberParameters2,"intersect":_flaxMemberParameters3,"expandToInclude":_flaxMemberParameters3,"overlaps":_flaxMemberParameters3,"contains":_flaxMemberParameters0,"toString":_flaxMemberParameters4}, {}), []);
export namespace _RectFactory {
export function fromLTRB(left: number, top: number, right: number, bottom: number): Rect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Rect", "fromLTRB", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [left, top, right, bottom], {}) as Rect;
}
}
export namespace _RectFactory {
export function fromLTWH(left: number, top: number, width: number, height: number): Rect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Rect", "fromLTWH", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}], [left, top, width, height], {}) as Rect;
}
}
export namespace _RectFactory {
export function fromCircle(options: { center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; radius: number }): Rect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Rect", "fromCircle", [{"name":"center","required":true,"positional":false},{"name":"radius","required":true,"positional":false}], [], options) as Rect;
}
}
export namespace _RectFactory {
export function fromCenter(options: { center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; width: number; height: number }): Rect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Rect", "fromCenter", [{"name":"center","required":true,"positional":false},{"name":"width","required":true,"positional":false},{"name":"height","required":true,"positional":false}], [], options) as Rect;
}
}
export namespace _RectFactory {
export function fromPoints(a: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Rect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Rect", "fromPoints", [{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true}], [a, b], {}) as Rect;
}
}
export namespace _RectFactory { export declare const zero: Rect; }
export namespace _RectFactory { export declare const largest: Rect; }
_flaxDefineStaticGetters(_RectFactory, "flax.core/sdk_dart_ui#read:Rect.", ["zero","largest"]);
export namespace _RectFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null, t: number): Rect | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Rect.lerp", [a, b, t]);
return _flaxResult as Rect | null;
} }
export const Rect: typeof _RectFactory & _FlaxInstanceType<Rect> & _FlaxDartType<Rect, readonly ["class", "flax.core/sdk_dart_ui#type:Rect", readonly [], false]> = _flaxBindInstanceType<Rect, typeof _RectFactory>(_RectFactory, "flax.core/sdk_dart_ui#type:Rect", ["dart:core::Object"]) as typeof _RectFactory & _FlaxInstanceType<Rect> & _FlaxDartType<Rect, readonly ["class", "flax.core/sdk_dart_ui#type:Rect", readonly [], false]>;
