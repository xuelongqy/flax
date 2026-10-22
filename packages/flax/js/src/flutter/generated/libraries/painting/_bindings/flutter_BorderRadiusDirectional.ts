// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderRadiusDirectional extends Omit<upstream0.BorderRadiusGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> { readonly __BorderRadiusDirectional: unique symbol;
readonly [_flaxDartTypeValue]: BorderRadiusDirectional;

readonly topStart: upstream1.Radius;
readonly topEnd: upstream1.Radius;
readonly bottomStart: upstream1.Radius;
readonly bottomEnd: upstream1.Radius;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
resolve(direction: upstream3.TextDirection | null): upstream2.BorderRadius;
toString(): string;
operatorMultiply(other: number): BorderRadiusDirectional;
operatorDivide(other: number): BorderRadiusDirectional;
operatorTruncateDivide(other: number): BorderRadiusDirectional;
operatorModulo(other: number): BorderRadiusDirectional;
operatorNegate(): BorderRadiusDirectional;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadiusDirectional;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): BorderRadiusDirectional;
}
defineObject("flax.core/flutter#type:BorderRadiusDirectional", ["topStart","topEnd","bottomStart","bottomEnd"], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadiusDirectional", "object", {"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), [], undefined, "flax.core/flutter#type:BorderRadiusGeometry");
export namespace _BorderRadiusDirectionalFactory {
export function all(radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function circular(radius: number): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function vertical(options: { top?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "vertical", [{"name":"top"},{"name":"bottom"}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function horizontal(options: { start?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "horizontal", [{"name":"start"},{"name":"end"}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function only(options: { topStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "only", [{"name":"topStart"},{"name":"topEnd"},{"name":"bottomStart"},{"name":"bottomEnd"}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory { export declare const zero: BorderRadiusDirectional; }
_flaxDefineStaticGetters(_BorderRadiusDirectionalFactory, "flax.core/flutter#read:BorderRadiusDirectional.", ["zero"]);
export namespace _BorderRadiusDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null, t: number): BorderRadiusDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderRadiusDirectional.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as BorderRadiusDirectional | null;
} }
export const BorderRadiusDirectional: typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional> & _FlaxDartType<BorderRadiusDirectional, readonly ["class", "flax.core/flutter#type:BorderRadiusDirectional", readonly [], false]> = _flaxBindInstanceType<BorderRadiusDirectional, typeof _BorderRadiusDirectionalFactory>(_BorderRadiusDirectionalFactory, "flax.core/flutter#type:BorderRadiusDirectional", ["flax.core/flutter#type:BorderRadiusGeometry","dart:core::Object"]) as typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional> & _FlaxDartType<BorderRadiusDirectional, readonly ["class", "flax.core/flutter#type:BorderRadiusDirectional", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "topStart" | "topEnd" | "bottomStart" | "bottomEnd" | "subtract" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry";
