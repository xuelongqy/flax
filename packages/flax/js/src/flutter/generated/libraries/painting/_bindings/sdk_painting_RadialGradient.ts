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
const _flaxMemberParameters0 = [{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"color","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"center"},{"name":"radius"},{"name":"colors","required":true},{"name":"stops"},{"name":"tileMode"},{"name":"focal"},{"name":"focalRadius"},{"name":"transform"}] as const;
const _flaxMemberParameters5 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters6 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadialGradient extends Omit<upstream0.Gradient, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> { readonly __RadialGradient: unique symbol;
readonly [_flaxDartTypeValue]: RadialGradient;

}
defineObject("flax.core/sdk_painting#type:RadialGradient", ["colors","stops","transform","center","radius","tileMode","focal","focalRadius"], [], _flaxBindingMethods("flax.core/sdk_painting#type:RadialGradient", "object", {"scale":_flaxMemberParameters0,"withOpacity":_flaxMemberParameters1,"fromColor":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_painting#type:Gradient");
const _RadialGradientProxy = {type: "flax.core/sdk_painting#type:RadialGradient", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"createShader":_flaxMemberParameters5,"scale":_flaxMemberParameters0,"withOpacity":_flaxMemberParameters1,"fromColor":_flaxMemberParameters2,"lerpFrom":_flaxMemberParameters6,"lerpTo":_flaxMemberParameters7,"toString":_flaxMemberParameters3}, getters: ["center","radius","tileMode","focal","focalRadius","colors","stops","transform"], setters: [], contextMembers: [], superMembers: ["get:center","get:radius","get:tileMode","get:focal","get:focalRadius","get:colors","get:stops","get:transform","createShader","scale","withOpacity","fromColor","lerpFrom","lerpTo","toString"]} as const;
export interface RadialGradient {
readonly [_flaxDartTypeValue]: RadialGradient;

createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Shader;
scale(factor: number): RadialGradient;
withOpacity(opacity: number): RadialGradient;
fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): RadialGradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): upstream0.Gradient | null;
toString(): string;
get center(): upstream1.AlignmentGeometry;
get radius(): number;
get tileMode(): upstream3.TileMode;
get focal(): upstream1.AlignmentGeometry | null;
get focalRadius(): number;
get colors(): DartList<upstream2.Color>;
get stops(): DartList<number> | null;
get transform(): upstream4.GradientTransform | null;
}
export abstract class RadialGradient extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RadialGradient>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RadialGradient;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:RadialGradient", readonly [], false];
constructor(options: {center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; radius?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; focal?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; focalRadius?: number | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) { super(_RadialGradientProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RadialGradient.prototype, _RadialGradientProxy);
export namespace RadialGradient { export function implement(args: [options: {center?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; radius?: number | undefined; colors: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; tileMode?: upstream3.TileMode | undefined; focal?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; focalRadius?: number | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}], implementation: {}): RadialGradient {
return constructProxy(_RadialGradientProxy, args, implementation) as RadialGradient; } }
export namespace RadialGradient { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): RadialGradient | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:RadialGradient.lerp", [a, b, t]);
return _flaxResult as RadialGradient | null;
} }
_flaxBindInstanceType<RadialGradient, typeof RadialGradient>(RadialGradient, "flax.core/sdk_painting#type:RadialGradient", ["flax.core/sdk_painting#type:Gradient","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "colors" | "stops" | "transform" | "center" | "radius" | "tileMode" | "focal" | "focalRadius" | "createShader" | "scale" | "withOpacity" | "fromColor" | "lerpFrom" | "lerpTo" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::RadialGradient" | "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient";
