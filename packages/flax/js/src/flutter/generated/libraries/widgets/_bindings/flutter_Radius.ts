// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"maximum","required":false,"positional":false},{"name":"minimum","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"maximumX","required":false,"positional":false},{"name":"maximumY","required":false,"positional":false},{"name":"minimumX","required":false,"positional":false},{"name":"minimumY","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"operand","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Radius extends Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> { readonly __Radius: unique symbol;

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
defineObject("flax.core/flutter#type:Radius", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Radius", "object", {"clamp":_flaxMemberParameters0,"clampValues":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters3,"operatorSubtract":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters4,"operatorDivide":_flaxMemberParameters4,"operatorTruncateDivide":_flaxMemberParameters4,"operatorModulo":_flaxMemberParameters4,"operatorNegate":_flaxMemberParameters2}, {}), []);
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
Object.defineProperty(_RadiusFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:Radius.zero", []) });
export namespace _RadiusFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null, t: number): Radius | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Radius.lerp", [a, b, t]);
return _flaxResult as Radius | null;
} }
export const Radius: typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]> = _flaxBindInstanceType<Radius, typeof _RadiusFactory>(_RadiusFactory, "flax.core/flutter#type:Radius", ["dart:core::Object"]) as typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]>;
