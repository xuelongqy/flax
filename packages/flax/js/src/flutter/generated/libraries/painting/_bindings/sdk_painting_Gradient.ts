// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters18, _flaxMemberParameters24, _flaxMemberParameters41, _flaxMemberParameters58, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters59 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Gradient extends Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> { readonly __Gradient: unique symbol;
readonly [_flaxDartTypeValue]: Gradient;

}
defineObject("flax.core/sdk_painting#type:Gradient", ["colors","stops","transform"], [], _flaxBindingMethods("flax.core/sdk_painting#type:Gradient", "object", {"createShader":_flaxMemberParameters18,"scale":_flaxMemberParameters24,"withOpacity":_flaxMemberParameters41,"fromColor":_flaxMemberParameters58,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16}, {}), []);
const _GradientProxy = {type: "flax.core/sdk_painting#type:Gradient", parameters: _flaxMemberParameters59, constructors: {"": _flaxMemberParameters59}, methods: {"createShader":_flaxMemberParameters18,"scale":_flaxMemberParameters24,"withOpacity":_flaxMemberParameters41,"fromColor":_flaxMemberParameters58,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16}, getters: ["colors","stops","transform"], setters: [], contextMembers: [], superMembers: ["get:colors","get:stops","get:transform","fromColor","lerpFrom","lerpTo"]} as const;
export interface Gradient {
readonly [_flaxDartTypeValue]: Gradient;

fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): Gradient;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): Gradient | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): Gradient | null;
get colors(): DartList<upstream0.Color>;
get stops(): DartList<number> | null;
get transform(): upstream1.GradientTransform | null;
}
export abstract class Gradient extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Gradient>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Gradient;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Gradient", readonly [], false];
constructor(options: {colors: DartListInput<upstream0.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}) { super(_GradientProxy, Array.from(arguments)); }
abstract createShader(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream4.TextDirection | null | undefined}): upstream2.Shader;
abstract scale(factor: number): Gradient;
abstract withOpacity(opacity: number): Gradient;
}
_flaxDefineProxyBase(Gradient.prototype, _GradientProxy);
export namespace Gradient { export function implement(args: [options: {colors: DartListInput<upstream0.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>; stops?: DartListInput<number, number> | null | undefined; transform?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> | null | undefined}], implementation: {createShader: ((rect: upstream3.Rect, options?: { textDirection?: upstream4.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Shader": readonly [] }>); scale: ((factor: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }>); withOpacity: ((opacity: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }>)}): Gradient {
return constructProxy(_GradientProxy, args, implementation) as Gradient; } }
export namespace Gradient { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null, t: number): Gradient | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:Gradient.lerp", [a, b, t]);
return _flaxResult as Gradient | null;
} }
_flaxBindInstanceType<Gradient, typeof Gradient>(Gradient, "flax.core/sdk_painting#type:Gradient", ["dart:core::Object"]);
