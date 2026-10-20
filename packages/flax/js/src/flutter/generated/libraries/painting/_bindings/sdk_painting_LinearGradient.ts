// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters24, _flaxMemberParameters41, _flaxMemberParameters58, _flaxMemberParameters2, _flaxMemberParameters102, _flaxMemberParameters18, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LinearGradient extends Omit<upstream0.Gradient, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> { readonly __LinearGradient: unique symbol;
readonly [_flaxDartTypeValue]: LinearGradient;

readonly colors: DartList<upstream2.Color>;
readonly stops: DartList<number> | null;
readonly transform: upstream4.GradientTransform | null;
readonly begin: upstream1.AlignmentGeometry;
readonly end: upstream1.AlignmentGeometry;
readonly tileMode: upstream3.TileMode;
createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Shader;
scale(factor: number): LinearGradient;
withOpacity(opacity: number): LinearGradient;
fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): LinearGradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:LinearGradient", ["colors","stops","transform","begin","end","tileMode"], [], _flaxBindingMethods("flax.core/sdk_painting#type:LinearGradient", "object", {"scale":_flaxMemberParameters24,"withOpacity":_flaxMemberParameters41,"fromColor":_flaxMemberParameters58,"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_painting#type:Gradient");
export function _LinearGradientFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined }): LinearGradient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearGradient", "", [{"name":"begin"},{"name":"end"},{"name":"colors","required":true},{"name":"stops"},{"name":"tileMode"},{"name":"transform"}], [], options) as LinearGradient;
}
const _LinearGradientProxy = {type: "flax.core/sdk_painting#type:LinearGradient", parameters: _flaxMemberParameters102, constructors: {"": _flaxMemberParameters102}, methods: {"createShader":_flaxMemberParameters18,"scale":_flaxMemberParameters24,"withOpacity":_flaxMemberParameters41,"fromColor":_flaxMemberParameters58,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"toString":_flaxMemberParameters2}, getters: ["begin","end","tileMode","colors","stops","transform"], setters: [], contextMembers: [], superMembers: ["get:begin","get:end","get:tileMode","get:colors","get:stops","get:transform","createShader","scale","withOpacity","fromColor","lerpFrom","lerpTo","toString"]} as const;
export interface _LinearGradientNative extends LinearGradient {
readonly [_flaxDartTypeValue]: _LinearGradientNative;

createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Shader;
scale(factor: number): LinearGradient;
withOpacity(opacity: number): LinearGradient;
fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): LinearGradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
toString(): string;
get begin(): upstream1.AlignmentGeometry;
get end(): upstream1.AlignmentGeometry;
get tileMode(): upstream3.TileMode;
get colors(): DartList<upstream2.Color>;
get stops(): DartList<number> | null;
get transform(): upstream4.GradientTransform | null;
}
export abstract class _LinearGradientNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearGradient>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LinearGradient;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearGradient", readonly [], false];
constructor(options: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) { super(_LinearGradientProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LinearGradientNative.prototype, _LinearGradientProxy);
export namespace _LinearGradientFactory { export function implement(args: [options: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}], implementation: {}): LinearGradient {
return constructProxy(_LinearGradientProxy, args, implementation) as LinearGradient; } }
const _LinearGradientBinding = _flaxProxyFactory(_LinearGradientFactory, _LinearGradientNative) as unknown as typeof _LinearGradientFactory & (new(options: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) => _LinearGradientNative);
export namespace _LinearGradientFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): LinearGradient | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:LinearGradient.lerp", [a, b, t]);
return _flaxResult as LinearGradient | null;
} }
export const LinearGradient: typeof _LinearGradientBinding & _FlaxInstanceType<LinearGradient> & _FlaxDartType<LinearGradient, readonly ["class", "flax.core/sdk_painting#type:LinearGradient", readonly [], false]> = _flaxBindInstanceType<LinearGradient, typeof _LinearGradientBinding>(_LinearGradientBinding, "flax.core/sdk_painting#type:LinearGradient", ["flax.core/sdk_painting#type:Gradient","dart:core::Object"]) as typeof _LinearGradientBinding & _FlaxInstanceType<LinearGradient> & _FlaxDartType<LinearGradient, readonly ["class", "flax.core/sdk_painting#type:LinearGradient", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "colors" | "stops" | "transform" | "begin" | "end" | "tileMode" | "createShader" | "scale" | "withOpacity" | "fromColor" | "lerpFrom" | "lerpTo" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::LinearGradient" | "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient";
