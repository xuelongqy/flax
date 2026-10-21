// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters141, _flaxMemberParameters142, _flaxMemberParameters4, _flaxMemberParameters1, _flaxMemberParameters128 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Radius extends Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> { readonly __Radius: unique symbol;
readonly [_flaxDartTypeValue]: Radius;

readonly x: number;
readonly y: number;
clamp(options?: {maximum?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; minimum?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined}): Radius;
clampValues(options?: {maximumX?: number | null | undefined; maximumY?: number | null | undefined; minimumX?: number | null | undefined; minimumY?: number | null | undefined}): Radius;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): Radius;
operatorSubtract(other: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): Radius;
operatorMultiply(operand: number): Radius;
operatorDivide(operand: number): Radius;
operatorTruncateDivide(operand: number): Radius;
operatorModulo(operand: number): Radius;
operatorNegate(): Radius;
}
defineObject("flax.core/flutter#type:Radius", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Radius", "object", {"clamp":_flaxMemberParameters141,"clampValues":_flaxMemberParameters142,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1,"operatorMultiply":_flaxMemberParameters128,"operatorDivide":_flaxMemberParameters128,"operatorTruncateDivide":_flaxMemberParameters128,"operatorModulo":_flaxMemberParameters128,"operatorNegate":_flaxMemberParameters4}, {}), []);
export namespace _RadiusFactory {
export function circular(radius: number): Radius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Radius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as Radius;
}
}
export namespace _RadiusFactory {
export function elliptical(x: number, y: number): Radius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Radius", "elliptical", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Radius;
}
}
export namespace _RadiusFactory { export declare const zero: Radius; }
_flaxDefineStaticGetters(_RadiusFactory, "flax.core/flutter#read:Radius.", ["zero"]);
export namespace _RadiusFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null, t: number): Radius | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Radius.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as Radius | null;
} }
export const Radius: typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]> = _flaxBindInstanceType<Radius, typeof _RadiusFactory>(_RadiusFactory, "flax.core/flutter#type:Radius", ["dart:core::Object"]) as typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]>;
