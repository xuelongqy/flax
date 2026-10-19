// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"scaleX","required":true,"positional":true},{"name":"scaleY","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"translateX","required":true,"positional":true},{"name":"translateY","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"operand","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Offset extends Omit<upstream0.OffsetBase, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> { readonly __Offset: unique symbol;
readonly [_flaxDartTypeValue]: Offset;

readonly isInfinite: boolean;
readonly isFinite: boolean;
readonly dx: number;
readonly dy: number;
readonly distance: number;
readonly distanceSquared: number;
readonly direction: number;
toString(): string;
scale(scaleX: number, scaleY: number): Offset;
translate(translateX: number, translateY: number): Offset;
operatorLessThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorLessThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorAdd(other: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Offset;
operatorSubtract(other: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Offset;
operatorMultiply(operand: number): Offset;
operatorDivide(operand: number): Offset;
operatorTruncateDivide(operand: number): Offset;
operatorModulo(operand: number): Offset;
operatorBitAnd(other: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Rect;
operatorNegate(): Offset;
}
defineObject("flax.core/flutter#type:Offset", ["isInfinite","isFinite","dx","dy","distance","distanceSquared","direction"], [], _flaxBindingMethods("flax.core/flutter#type:Offset", "object", {"scale":_flaxMemberParameters0,"translate":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters3,"operatorDivide":_flaxMemberParameters3,"operatorTruncateDivide":_flaxMemberParameters3,"operatorModulo":_flaxMemberParameters3,"operatorBitAnd":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_dart_ui#type:OffsetBase");
export function _OffsetFactory(dx: number, dy: number): Offset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Offset", "", [{"name":"dx","required":true,"positional":true},{"name":"dy","required":true,"positional":true}], [dx, dy], {}) as Offset;
}
export namespace _OffsetFactory {
export function fromDirection(direction: number, distance?: number): Offset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Offset", "fromDirection", [{"name":"direction","required":true,"positional":true},{"name":"distance","positional":true}], [direction, distance], {}) as Offset;
}
}
export namespace _OffsetFactory { export declare const zero: Offset; }
export namespace _OffsetFactory { export declare const infinite: Offset; }
_flaxDefineStaticGetters(_OffsetFactory, "flax.core/flutter#read:Offset.", ["zero","infinite"]);
export namespace _OffsetFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null, t: number): Offset | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Offset.lerp", [a, b, t]);
return _flaxResult as Offset | null;
} }
export const Offset: typeof _OffsetFactory & _FlaxInstanceType<Offset> & _FlaxDartType<Offset, readonly ["class", "flax.core/flutter#type:Offset", readonly [], false]> = _flaxBindInstanceType<Offset, typeof _OffsetFactory>(_OffsetFactory, "flax.core/flutter#type:Offset", ["flax.core/sdk_dart_ui#type:OffsetBase","dart:core::Object"]) as typeof _OffsetFactory & _FlaxInstanceType<Offset> & _FlaxDartType<Offset, readonly ["class", "flax.core/flutter#type:Offset", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isInfinite" | "isFinite" | "dx" | "dy" | "distance" | "distanceSquared" | "direction" | "toString" | "scale" | "translate" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorBitAnd" | "operatorNegate" | "__flaxBound:dart:ui::Offset" | "__flaxBound:dart:ui::OffsetBase";
