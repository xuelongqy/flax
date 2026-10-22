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
import { _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters42, _flaxMemberParameters59, _flaxMemberParameters2, _flaxMemberParameters132, _flaxMemberParameters18, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SweepGradient extends Omit<upstream0.Gradient, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::SweepGradient": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> { readonly __SweepGradient: unique symbol;
readonly [_flaxDartTypeValue]: SweepGradient;

readonly colors: DartList<upstream2.Color>;
readonly stops: DartList<number> | null;
readonly transform: upstream4.GradientTransform | null;
readonly center: upstream1.AlignmentGeometry;
readonly startAngle: number;
readonly endAngle: number;
readonly tileMode: upstream3.TileMode;
createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Shader;
scale(factor: number): SweepGradient;
withOpacity(opacity: number): SweepGradient;
fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): SweepGradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:SweepGradient", ["colors","stops","transform","center","startAngle","endAngle","tileMode"], [], _flaxBindingMethods("flax.core/sdk_painting#type:SweepGradient", "object", {"scale":_flaxMemberParameters25,"withOpacity":_flaxMemberParameters42,"fromColor":_flaxMemberParameters59,"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_painting#type:Gradient");
export function _SweepGradientFactory(options: { center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; startAngle?: number | undefined; endAngle?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined }): SweepGradient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:SweepGradient", "", [{"name":"center"},{"name":"startAngle"},{"name":"endAngle"},{"name":"colors","required":true},{"name":"stops"},{"name":"tileMode"},{"name":"transform"}], [], options) as SweepGradient;
}
const _SweepGradientProxy = {type: "flax.core/sdk_painting#type:SweepGradient", parameters: _flaxMemberParameters132, constructors: {"": _flaxMemberParameters132}, methods: {"createShader":_flaxMemberParameters18,"scale":_flaxMemberParameters25,"withOpacity":_flaxMemberParameters42,"fromColor":_flaxMemberParameters59,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"toString":_flaxMemberParameters2}, getters: ["center","startAngle","endAngle","tileMode","colors","stops","transform"], setters: [], contextMembers: [], superMembers: ["get:center","get:startAngle","get:endAngle","get:tileMode","get:colors","get:stops","get:transform","createShader","scale","withOpacity","fromColor","lerpFrom","lerpTo","toString"]} as const;
export interface _SweepGradientNative extends SweepGradient {
readonly [_flaxDartTypeValue]: _SweepGradientNative;

createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Shader;
scale(factor: number): SweepGradient;
withOpacity(opacity: number): SweepGradient;
fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): SweepGradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
toString(): string;
get center(): upstream1.AlignmentGeometry;
get startAngle(): number;
get endAngle(): number;
get tileMode(): upstream3.TileMode;
get colors(): DartList<upstream2.Color>;
get stops(): DartList<number> | null;
get transform(): upstream4.GradientTransform | null;
}
export abstract class _SweepGradientNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SweepGradient>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SweepGradient;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:SweepGradient", readonly [], false];
constructor(options: {center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; startAngle?: number | undefined; endAngle?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) { super(_SweepGradientProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SweepGradientNative.prototype, _SweepGradientProxy);
export namespace _SweepGradientFactory { export function implement(args: [options: {center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; startAngle?: number | undefined; endAngle?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}], implementation: {}): SweepGradient {
return constructProxy(_SweepGradientProxy, args, implementation) as SweepGradient; } }
const _SweepGradientBinding = _flaxProxyFactory(_SweepGradientFactory, _SweepGradientNative) as unknown as typeof _SweepGradientFactory & (new(options: {center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; startAngle?: number | undefined; endAngle?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) => _SweepGradientNative);
export namespace _SweepGradientFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::SweepGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::SweepGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): SweepGradient | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:SweepGradient.lerp", [a, b, t], _flaxMemberParameters24);
return _flaxResult as SweepGradient | null;
} }
export const SweepGradient: typeof _SweepGradientBinding & _FlaxInstanceType<SweepGradient> & _FlaxDartType<SweepGradient, readonly ["class", "flax.core/sdk_painting#type:SweepGradient", readonly [], false]> = _flaxBindInstanceType<SweepGradient, typeof _SweepGradientBinding>(_SweepGradientBinding, "flax.core/sdk_painting#type:SweepGradient", ["flax.core/sdk_painting#type:Gradient","dart:core::Object"]) as typeof _SweepGradientBinding & _FlaxInstanceType<SweepGradient> & _FlaxDartType<SweepGradient, readonly ["class", "flax.core/sdk_painting#type:SweepGradient", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "colors" | "stops" | "transform" | "center" | "startAngle" | "endAngle" | "tileMode" | "createShader" | "scale" | "withOpacity" | "fromColor" | "lerpFrom" | "lerpTo" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::SweepGradient" | "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient";
