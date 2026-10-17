// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"direction","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false},{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderRadius extends Omit<upstream0.BorderRadiusGeometry, typeof _flaxDartTypeValue | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "subtract" | "add" | "resolve" | "toString" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> { readonly __BorderRadius: unique symbol;

readonly topLeft: upstream1.Radius;
readonly topRight: upstream1.Radius;
readonly bottomLeft: upstream1.Radius;
readonly bottomRight: upstream1.Radius;
subtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }>): upstream0.BorderRadiusGeometry;
resolve(direction: upstream2.TextDirection | null): BorderRadius;
toString(): string;
copyWith(options?: {bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined}): BorderRadius;
operatorMultiply(other: number): BorderRadius;
operatorDivide(other: number): BorderRadius;
operatorTruncateDivide(other: number): BorderRadius;
operatorModulo(other: number): BorderRadius;
operatorNegate(): BorderRadius;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }>): BorderRadius;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }>): BorderRadius;
}
defineObject("flax.core/flutter#type:BorderRadius", ["topLeft","topRight","bottomLeft","bottomRight"], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadius", "object", {"subtract":_flaxMemberParameters0,"add":_flaxMemberParameters0,"resolve":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters0,"operatorSubtract":_flaxMemberParameters0}, {}), []);
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
return constructObject("object", "flax.core/flutter#type:BorderRadius", "vertical", [{"name":"top","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function horizontal(options: { left?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "horizontal", [{"name":"left","required":false,"positional":false},{"name":"right","required":false,"positional":false}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory {
export function only(options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "only", [{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false},{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false}], [], options) as BorderRadius;
}
}
export namespace _BorderRadiusFactory { export declare const zero: BorderRadius; }
Object.defineProperty(_BorderRadiusFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:BorderRadius.zero", []) });
export namespace _BorderRadiusFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> | null, t: number): BorderRadius | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderRadius.lerp", [a, b, t]);
return _flaxResult as BorderRadius | null;
} }
export const BorderRadius: typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> & _FlaxDartType<BorderRadius, readonly ["class", "flax.core/flutter#type:BorderRadius", readonly [], false]> = _flaxBindInstanceType<BorderRadius, typeof _BorderRadiusFactory>(_BorderRadiusFactory, "flax.core/flutter#type:BorderRadius", ["flax.core/flutter#type:BorderRadiusGeometry","dart:core::Object"]) as typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> & _FlaxDartType<BorderRadius, readonly ["class", "flax.core/flutter#type:BorderRadius", readonly [], false]>;
