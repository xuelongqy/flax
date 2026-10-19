// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters3, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters21, _flaxMemberParameters22 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxConstraints extends Omit<upstream0.Constraints, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __BoxConstraints: unique symbol;
readonly [_flaxDartTypeValue]: BoxConstraints;

readonly isTight: boolean;
readonly isNormalized: boolean;
readonly minWidth: number;
readonly maxWidth: number;
readonly minHeight: number;
readonly maxHeight: number;
readonly flipped: BoxConstraints;
readonly biggest: upstream1.Size;
readonly smallest: upstream1.Size;
readonly hasTightWidth: boolean;
readonly hasTightHeight: boolean;
readonly hasBoundedWidth: boolean;
readonly hasBoundedHeight: boolean;
readonly hasInfiniteWidth: boolean;
readonly hasInfiniteHeight: boolean;
debugAssertIsValid(options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; isAppliedConstraint?: boolean | undefined}): boolean;
copyWith(options?: {maxHeight?: number | null | undefined; maxWidth?: number | null | undefined; minHeight?: number | null | undefined; minWidth?: number | null | undefined}): BoxConstraints;
deflate(edges: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>): BoxConstraints;
loosen(): BoxConstraints;
enforce(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): BoxConstraints;
tighten(options?: {height?: number | null | undefined; width?: number | null | undefined}): BoxConstraints;
widthConstraints(): BoxConstraints;
heightConstraints(): BoxConstraints;
constrainWidth(width?: number): number;
constrainHeight(height?: number): number;
constrain(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
constrainDimensions(width: number, height: number): upstream1.Size;
constrainSizeAndAttemptToPreserveAspectRatio(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Size;
isSatisfiedBy(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
normalize(): BoxConstraints;
toString(): string;
operatorMultiply(factor: number): BoxConstraints;
operatorDivide(factor: number): BoxConstraints;
operatorTruncateDivide(factor: number): BoxConstraints;
operatorModulo(value: number): BoxConstraints;
}
defineObject("flax.core/flutter#type:BoxConstraints", ["isTight","isNormalized","minWidth","maxWidth","minHeight","maxHeight","flipped","biggest","smallest","hasTightWidth","hasTightHeight","hasBoundedWidth","hasBoundedHeight","hasInfiniteWidth","hasInfiniteHeight"], [], _flaxBindingMethods("flax.core/flutter#type:BoxConstraints", "object", {"copyWith":_flaxMemberParameters13,"deflate":_flaxMemberParameters14,"loosen":_flaxMemberParameters3,"enforce":_flaxMemberParameters15,"tighten":_flaxMemberParameters16,"widthConstraints":_flaxMemberParameters3,"heightConstraints":_flaxMemberParameters3,"constrainWidth":_flaxMemberParameters17,"constrainHeight":_flaxMemberParameters18,"constrain":_flaxMemberParameters19,"constrainDimensions":_flaxMemberParameters20,"constrainSizeAndAttemptToPreserveAspectRatio":_flaxMemberParameters19,"isSatisfiedBy":_flaxMemberParameters19,"normalize":_flaxMemberParameters3,"toString":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters21,"operatorDivide":_flaxMemberParameters21,"operatorTruncateDivide":_flaxMemberParameters21,"operatorModulo":_flaxMemberParameters22}, {}), [], undefined, "flax.core/sdk_rendering#type:Constraints");
export function _BoxConstraintsFactory(options: { minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "", [{"name":"minWidth"},{"name":"maxWidth"},{"name":"minHeight"},{"name":"maxHeight"}], [], options) as BoxConstraints;
}
export namespace _BoxConstraintsFactory {
export function tight(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tight", _flaxMemberParameters19, [size], {}) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function tightFor(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightFor", [{"name":"width"},{"name":"height"}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function tightForFinite(options: { width?: number | undefined; height?: number | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightForFinite", [{"name":"width"},{"name":"height"}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function loose(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "loose", _flaxMemberParameters19, [size], {}) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function expand(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "expand", [{"name":"width"},{"name":"height"}], [], options) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory {
export function fromViewConstraints(constraints: Readonly<{ "__flaxBound:dart:ui::ViewConstraints": readonly [] }>): BoxConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "fromViewConstraints", _flaxMemberParameters15, [constraints], {}) as BoxConstraints;
}
}
export namespace _BoxConstraintsFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null, t: number): BoxConstraints | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxConstraints.lerp", [a, b, t]);
return _flaxResult as BoxConstraints | null;
} }
export const BoxConstraints: typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]> = _flaxBindInstanceType<BoxConstraints, typeof _BoxConstraintsFactory>(_BoxConstraintsFactory, "flax.core/flutter#type:BoxConstraints", ["flax.core/sdk_rendering#type:Constraints","dart:core::Object"]) as typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isTight" | "isNormalized" | "minWidth" | "maxWidth" | "minHeight" | "maxHeight" | "flipped" | "biggest" | "smallest" | "hasTightWidth" | "hasTightHeight" | "hasBoundedWidth" | "hasBoundedHeight" | "hasInfiniteWidth" | "hasInfiniteHeight" | "debugAssertIsValid" | "copyWith" | "deflate" | "loosen" | "enforce" | "tighten" | "widthConstraints" | "heightConstraints" | "constrainWidth" | "constrainHeight" | "constrain" | "constrainDimensions" | "constrainSizeAndAttemptToPreserveAspectRatio" | "isSatisfiedBy" | "normalize" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints" | "__flaxBound:package:flutter/src/rendering/object.dart::Constraints";
