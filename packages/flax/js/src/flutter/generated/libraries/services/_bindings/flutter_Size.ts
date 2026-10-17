// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"origin","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"operand","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Size extends Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> { readonly __Size: unique symbol;

readonly width: number;
readonly height: number;
readonly aspectRatio: number;
readonly isEmpty: boolean;
readonly shortestSide: number;
readonly longestSide: number;
readonly flipped: Size;
readonly isInfinite: boolean;
readonly isFinite: boolean;
topLeft(origin: upstream0.Offset): upstream0.Offset;
topCenter(origin: upstream0.Offset): upstream0.Offset;
topRight(origin: upstream0.Offset): upstream0.Offset;
centerLeft(origin: upstream0.Offset): upstream0.Offset;
center(origin: upstream0.Offset): upstream0.Offset;
centerRight(origin: upstream0.Offset): upstream0.Offset;
bottomLeft(origin: upstream0.Offset): upstream0.Offset;
bottomCenter(origin: upstream0.Offset): upstream0.Offset;
bottomRight(origin: upstream0.Offset): upstream0.Offset;
contains(offset: upstream0.Offset): boolean;
toString(): string;
operatorAdd(other: upstream0.Offset): Size;
operatorMultiply(operand: number): Size;
operatorDivide(operand: number): Size;
operatorTruncateDivide(operand: number): Size;
operatorModulo(operand: number): Size;
}
defineObject("flax.core/flutter#type:Size", ["width","height","aspectRatio","isEmpty","shortestSide","longestSide","flipped","isInfinite","isFinite"], [], _flaxBindingMethods("flax.core/flutter#type:Size", "object", {"topLeft":_flaxMemberParameters0,"topCenter":_flaxMemberParameters0,"topRight":_flaxMemberParameters0,"centerLeft":_flaxMemberParameters0,"center":_flaxMemberParameters0,"centerRight":_flaxMemberParameters0,"bottomLeft":_flaxMemberParameters0,"bottomCenter":_flaxMemberParameters0,"bottomRight":_flaxMemberParameters0,"contains":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters4,"operatorDivide":_flaxMemberParameters4,"operatorTruncateDivide":_flaxMemberParameters4,"operatorModulo":_flaxMemberParameters4}, {}), []);
export function _SizeFactory(width: number, height: number): Size {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "", [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}], [width, height], {}) as Size;
}
export namespace _SizeFactory {
export function copy(source: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): Size {
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
Object.defineProperty(_SizeFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:Size.zero", []) });
export namespace _SizeFactory { export declare const infinite: Size; }
Object.defineProperty(_SizeFactory, "infinite", { get: () => invokeTopLevel("flax.core/flutter#read:Size.infinite", []) });
export namespace _SizeFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> | null, t: number): Size | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Size.lerp", [a, b, t]);
return _flaxResult as Size | null;
} }
export const Size: typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]> = _flaxBindInstanceType<Size, typeof _SizeFactory>(_SizeFactory, "flax.core/flutter#type:Size", ["dart:ui::OffsetBase","dart:core::Object"]) as typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]>;
