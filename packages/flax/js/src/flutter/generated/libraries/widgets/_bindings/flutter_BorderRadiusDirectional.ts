// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"direction","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderRadiusDirectional extends Omit<upstream0.BorderRadiusGeometry, typeof _flaxDartTypeValue | "topStart" | "topEnd" | "bottomStart" | "bottomEnd" | "subtract" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> { readonly __BorderRadiusDirectional: unique symbol;

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
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }>): BorderRadiusDirectional;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }>): BorderRadiusDirectional;
}
defineObject("flax.core/flutter#type:BorderRadiusDirectional", ["topStart","topEnd","bottomStart","bottomEnd"], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadiusDirectional", "object", {"subtract":_flaxMemberParameters0,"add":_flaxMemberParameters0,"resolve":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters0,"operatorSubtract":_flaxMemberParameters0}, {}), []);
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
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "vertical", [{"name":"top","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function horizontal(options: { start?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "horizontal", [{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory {
export function only(options: { topStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomStart?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomEnd?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadiusDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "only", [{"name":"topStart","required":false,"positional":false},{"name":"topEnd","required":false,"positional":false},{"name":"bottomStart","required":false,"positional":false},{"name":"bottomEnd","required":false,"positional":false}], [], options) as BorderRadiusDirectional;
}
}
export namespace _BorderRadiusDirectionalFactory { export declare const zero: BorderRadiusDirectional; }
Object.defineProperty(_BorderRadiusDirectionalFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:BorderRadiusDirectional.zero", []) });
export namespace _BorderRadiusDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> | null, t: number): BorderRadiusDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderRadiusDirectional.lerp", [a, b, t]);
return _flaxResult as BorderRadiusDirectional | null;
} }
export const BorderRadiusDirectional: typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional> & _FlaxDartType<BorderRadiusDirectional, readonly ["class", "flax.core/flutter#type:BorderRadiusDirectional", readonly [], false]> = _flaxBindInstanceType<BorderRadiusDirectional, typeof _BorderRadiusDirectionalFactory>(_BorderRadiusDirectionalFactory, "flax.core/flutter#type:BorderRadiusDirectional", ["flax.core/flutter#type:BorderRadiusGeometry","dart:core::Object"]) as typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional> & _FlaxDartType<BorderRadiusDirectional, readonly ["class", "flax.core/flutter#type:BorderRadiusDirectional", readonly [], false]>;
