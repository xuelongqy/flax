// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"maxHeight","required":false,"positional":false},{"name":"maxWidth","required":false,"positional":false},{"name":"minHeight","required":false,"positional":false},{"name":"minWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"edges","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"constraints","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"height","required":false,"positional":false},{"name":"width","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"width","required":false,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"height","required":false,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"isAppliedConstraint","required":false,"positional":false}] as const;
const _flaxMemberParameters10 = [{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"value","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxConstraints extends Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __BoxConstraints: unique symbol;

readonly minWidth: number;
readonly maxWidth: number;
readonly minHeight: number;
readonly maxHeight: number;
readonly flipped: BoxConstraints;
readonly biggest: upstream0.Size;
readonly smallest: upstream0.Size;
readonly hasTightWidth: boolean;
readonly hasTightHeight: boolean;
readonly isTight: boolean;
readonly hasBoundedWidth: boolean;
readonly hasBoundedHeight: boolean;
readonly hasInfiniteWidth: boolean;
readonly hasInfiniteHeight: boolean;
readonly isNormalized: boolean;
copyWith(options?: {maxHeight?: number | null | undefined; maxWidth?: number | null | undefined; minHeight?: number | null | undefined; minWidth?: number | null | undefined}): BoxConstraints;
deflate(edges: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): BoxConstraints;
loosen(): BoxConstraints;
enforce(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }>): BoxConstraints;
tighten(options?: {height?: number | null | undefined; width?: number | null | undefined}): BoxConstraints;
widthConstraints(): BoxConstraints;
heightConstraints(): BoxConstraints;
constrainWidth(width?: number): number;
constrainHeight(height?: number): number;
constrain(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): upstream0.Size;
constrainDimensions(width: number, height: number): upstream0.Size;
constrainSizeAndAttemptToPreserveAspectRatio(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): upstream0.Size;
isSatisfiedBy(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): boolean;
debugAssertIsValid(options?: {isAppliedConstraint?: boolean | undefined}): boolean;
normalize(): BoxConstraints;
toString(): string;
operatorMultiply(factor: number): BoxConstraints;
operatorDivide(factor: number): BoxConstraints;
operatorTruncateDivide(factor: number): BoxConstraints;
operatorModulo(value: number): BoxConstraints;
}
defineObject("flax.core/flutter#type:BoxConstraints", ["minWidth","maxWidth","minHeight","maxHeight","flipped","biggest","smallest","hasTightWidth","hasTightHeight","isTight","hasBoundedWidth","hasBoundedHeight","hasInfiniteWidth","hasInfiniteHeight","isNormalized"], [], _flaxBindingMethods("flax.core/flutter#type:BoxConstraints", "object", {"copyWith":_flaxMemberParameters0,"deflate":_flaxMemberParameters1,"loosen":_flaxMemberParameters2,"enforce":_flaxMemberParameters3,"tighten":_flaxMemberParameters4,"widthConstraints":_flaxMemberParameters2,"heightConstraints":_flaxMemberParameters2,"constrainWidth":_flaxMemberParameters5,"constrainHeight":_flaxMemberParameters6,"constrain":_flaxMemberParameters7,"constrainDimensions":_flaxMemberParameters8,"constrainSizeAndAttemptToPreserveAspectRatio":_flaxMemberParameters7,"isSatisfiedBy":_flaxMemberParameters7,"debugAssertIsValid":_flaxMemberParameters9,"normalize":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters10,"operatorDivide":_flaxMemberParameters10,"operatorTruncateDivide":_flaxMemberParameters10,"operatorModulo":_flaxMemberParameters11}, {}), []);
export function _BoxConstraintsFactory(options: { minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "", [{"name":"minWidth","required":false,"positional":false},{"name":"maxWidth","required":false,"positional":false},{"name":"minHeight","required":false,"positional":false},{"name":"maxHeight","required":false,"positional":false}], [], options) as BoxConstraints;
}
export namespace _BoxConstraintsFactory {
export function tight(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tight", [{"name":"size","required":true,"positional":true}], [size], {}) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function tightFor(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightFor", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function tightForFinite(options: { width?: number | undefined; height?: number | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightForFinite", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function loose(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "loose", [{"name":"size","required":true,"positional":true}], [size], {}) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function expand(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "expand", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> | null, t: number): BoxConstraints | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxConstraints.lerp", [a, b, t]);
return _flaxResult as BoxConstraints | null;
} }
export const BoxConstraints: typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]> = _flaxBindInstanceType<BoxConstraints, typeof _BoxConstraintsFactory>(_BoxConstraintsFactory, "flax.core/flutter#type:BoxConstraints", ["package:flutter/src/rendering/object.dart::Constraints","dart:core::Object"]) as typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]>;
