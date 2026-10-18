// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"origin","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"operand","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Size extends Omit<upstream0.OffsetBase, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> { readonly __Size: unique symbol;
readonly [_flaxDartTypeValue]: Size;

readonly isInfinite: boolean;
readonly isFinite: boolean;
readonly width: number;
readonly height: number;
readonly aspectRatio: number;
readonly isEmpty: boolean;
readonly shortestSide: number;
readonly longestSide: number;
readonly flipped: Size;
toString(): string;
topLeft(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
topCenter(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
topRight(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
centerLeft(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
center(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
centerRight(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
bottomLeft(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
bottomCenter(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
bottomRight(origin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
contains(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorLessThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorLessThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorAdd(other: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Size;
operatorSubtract(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream0.OffsetBase;
operatorMultiply(operand: number): Size;
operatorDivide(operand: number): Size;
operatorTruncateDivide(operand: number): Size;
operatorModulo(operand: number): Size;
}
defineObject("flax.core/flutter#type:Size", ["isInfinite","isFinite","width","height","aspectRatio","isEmpty","shortestSide","longestSide","flipped"], [], _flaxBindingMethods("flax.core/flutter#type:Size", "object", {"topLeft":_flaxMemberParameters0,"topCenter":_flaxMemberParameters0,"topRight":_flaxMemberParameters0,"centerLeft":_flaxMemberParameters0,"center":_flaxMemberParameters0,"centerRight":_flaxMemberParameters0,"bottomLeft":_flaxMemberParameters0,"bottomCenter":_flaxMemberParameters0,"bottomRight":_flaxMemberParameters0,"contains":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters3,"operatorDivide":_flaxMemberParameters3,"operatorTruncateDivide":_flaxMemberParameters3,"operatorModulo":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_dart_ui#type:OffsetBase");
export function _SizeFactory(width: number, height: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "", [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}], [width, height], {}) as Size;
}
export namespace _SizeFactory {
export function copy(source: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "copy", [{"name":"source","required":true,"positional":true}], [source], {}) as Size;
}
}
export namespace _SizeFactory {
export function square(dimension: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "square", [{"name":"dimension","required":true,"positional":true}], [dimension], {}) as Size;
}
}
export namespace _SizeFactory {
export function fromWidth(width: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "fromWidth", [{"name":"width","required":true,"positional":true}], [width], {}) as Size;
}
}
export namespace _SizeFactory {
export function fromHeight(height: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "fromHeight", [{"name":"height","required":true,"positional":true}], [height], {}) as Size;
}
}
export namespace _SizeFactory {
export function fromRadius(radius: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "fromRadius", [{"name":"radius","required":true,"positional":true}], [radius], {}) as Size;
}
}
export namespace _SizeFactory { export declare const zero: Size; }
export namespace _SizeFactory { export declare const infinite: Size; }
_flaxDefineStaticGetters(_SizeFactory, "flax.core/flutter#read:Size.", ["zero","infinite"]);
export namespace _SizeFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null, t: number): Size | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Size.lerp", [a, b, t]);
return _flaxResult as Size | null;
} }
export const Size: typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]> = _flaxBindInstanceType<Size, typeof _SizeFactory>(_SizeFactory, "flax.core/flutter#type:Size", ["flax.core/sdk_dart_ui#type:OffsetBase","dart:core::Object"]) as typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isInfinite" | "isFinite" | "width" | "height" | "aspectRatio" | "isEmpty" | "shortestSide" | "longestSide" | "flipped" | "toString" | "topLeft" | "topCenter" | "topRight" | "centerLeft" | "center" | "centerRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | "contains" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "__flaxBound:dart:ui::Size" | "__flaxBound:dart:ui::OffsetBase";
