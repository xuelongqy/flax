// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters4, _flaxMemberParameters3 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderRadiusGeometry extends Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> { readonly __BorderRadiusGeometry: unique symbol;
readonly [_flaxDartTypeValue]: BorderRadiusGeometry;

subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadiusGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadiusGeometry;
resolve(direction: upstream2.TextDirection | null): upstream1.BorderRadius;
toString(): string;
operatorMultiply(other: number): BorderRadiusGeometry;
operatorDivide(other: number): BorderRadiusGeometry;
operatorTruncateDivide(other: number): BorderRadiusGeometry;
operatorModulo(other: number): BorderRadiusGeometry;
operatorNegate(): BorderRadiusGeometry;
}
defineObject("flax.core/flutter#type:BorderRadiusGeometry", [], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadiusGeometry", "object", {"subtract":_flaxMemberParameters0,"add":_flaxMemberParameters0,"resolve":_flaxMemberParameters4,"toString":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters3}, {}), []);
export namespace _BorderRadiusGeometryFactory {
export function all(radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory {
export function circular(radius: number): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory {
export function horizontal(options: { left?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; right?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; start?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined } = {}): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "horizontal", [{"name":"left"},{"name":"right"},{"name":"start"},{"name":"end"}], [], options) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory {
export function only(options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "only", [{"name":"topLeft"},{"name":"topRight"},{"name":"bottomLeft"},{"name":"bottomRight"}], [], options) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory {
export function directional(options: { topStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "directional", [{"name":"topStart"},{"name":"topEnd"},{"name":"bottomStart"},{"name":"bottomEnd"}], [], options) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory {
export function vertical(options: { top?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusGeometry", "vertical", [{"name":"top"},{"name":"bottom"}], [], options) as BorderRadiusGeometry;
}
}
export namespace _BorderRadiusGeometryFactory { export declare const zero: BorderRadiusGeometry; }
_flaxDefineStaticGetters(_BorderRadiusGeometryFactory, "flax.core/flutter#read:BorderRadiusGeometry.", ["zero"]);
export namespace _BorderRadiusGeometryFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, t: number): BorderRadiusGeometry | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderRadiusGeometry.lerp", [a, b, t]);
return _flaxResult as BorderRadiusGeometry | null;
} }
export const BorderRadiusGeometry: typeof _BorderRadiusGeometryFactory & _FlaxInstanceType<BorderRadiusGeometry> & _FlaxDartType<BorderRadiusGeometry, readonly ["class", "flax.core/flutter#type:BorderRadiusGeometry", readonly [], false]> = _flaxBindInstanceType<BorderRadiusGeometry, typeof _BorderRadiusGeometryFactory>(_BorderRadiusGeometryFactory, "flax.core/flutter#type:BorderRadiusGeometry", ["dart:core::Object"]) as typeof _BorderRadiusGeometryFactory & _FlaxInstanceType<BorderRadiusGeometry> & _FlaxDartType<BorderRadiusGeometry, readonly ["class", "flax.core/flutter#type:BorderRadiusGeometry", readonly [], false]>;
