// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import { _flaxMemberParameters0, _flaxMemberParameters11, _flaxMemberParameters2, _flaxMemberParameters1, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderRadius extends Omit<upstream0.BorderRadiusGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> { readonly __BorderRadius: unique symbol;
readonly [_flaxDartTypeValue]: BorderRadius;

readonly topLeft: upstream1.Radius;
readonly topRight: upstream1.Radius;
readonly bottomLeft: upstream1.Radius;
readonly bottomRight: upstream1.Radius;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
resolve(direction: upstream2.TextDirection | null): BorderRadius;
toString(): string;
copyWith(options?: {bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined}): BorderRadius;
toRRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream3.RRect;
toRSuperellipse(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream5.RSuperellipse;
operatorMultiply(other: number): BorderRadius;
operatorDivide(other: number): BorderRadius;
operatorTruncateDivide(other: number): BorderRadius;
operatorModulo(other: number): BorderRadius;
operatorNegate(): BorderRadius;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadius;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadius;
}
defineObject("flax.core/flutter#type:BorderRadius", ["topLeft","topRight","bottomLeft","bottomRight"], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadius", "object", {"copyWith":_flaxMemberParameters11,"toRRect":_flaxMemberParameters2,"toRSuperellipse":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), [], undefined, "flax.core/flutter#type:BorderRadiusGeometry");
export namespace _BorderRadiusFactory {
export function all(radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function circular(radius: number): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function vertical(options: { top?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "vertical", [{"name":"top"},{"name":"bottom"}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function horizontal(options: { left?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "horizontal", [{"name":"left"},{"name":"right"}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function only(options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "only", [{"name":"topLeft"},{"name":"topRight"},{"name":"bottomLeft"},{"name":"bottomRight"}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory { export declare const zero: BorderRadius; }
_flaxDefineStaticGetters(_BorderRadiusFactory, "flax.core/flutter#read:BorderRadius.", ["zero"]);
export namespace _BorderRadiusFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, t: number): BorderRadius | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderRadius.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as BorderRadius | null;
} }
export const BorderRadius: typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> & _FlaxDartType<BorderRadius, readonly ["class", "flax.core/flutter#type:BorderRadius", readonly [], false]> = _flaxBindInstanceType<BorderRadius, typeof _BorderRadiusFactory>(_BorderRadiusFactory, "flax.core/flutter#type:BorderRadius", ["flax.core/flutter#type:BorderRadiusGeometry","dart:core::Object"]) as typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> & _FlaxDartType<BorderRadius, readonly ["class", "flax.core/flutter#type:BorderRadius", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "subtract" | "add" | "resolve" | "toString" | "copyWith" | "toRRect" | "toRSuperellipse" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry";
