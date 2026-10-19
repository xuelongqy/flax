// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters158, _flaxMemberParameters2, _flaxMemberParameters190, _flaxMemberParameters191, _flaxMemberParameters192 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorderTween extends Omit<upstream0.Tween<upstream1.ShapeBorder | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.ShapeBorder | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.ShapeBorder | null>>, Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::ShapeBorderTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.ShapeBorder | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.ShapeBorder | null] }> { readonly __ShapeBorderTween: unique symbol;
readonly [_flaxDartTypeValue]: ShapeBorderTween;

}
defineObject("flax.core/sdk_material#type:ShapeBorderTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_material#type:ShapeBorderTween", "object", {"lerp":_flaxMemberParameters158,"transform":_flaxMemberParameters158,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters190,"animate":_flaxMemberParameters191,"chain":_flaxMemberParameters191}, {}), []);
const _ShapeBorderTweenProxy = {type: "flax.core/sdk_material#type:ShapeBorderTween", parameters: _flaxMemberParameters192, constructors: {"": _flaxMemberParameters192}, methods: {"lerp":_flaxMemberParameters158,"transform":_flaxMemberParameters158,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters190,"animate":_flaxMemberParameters191,"chain":_flaxMemberParameters191}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface ShapeBorderTween {
readonly [_flaxDartTypeValue]: ShapeBorderTween;

lerp(t: number): upstream1.ShapeBorder | null;
transform(t: number): upstream1.ShapeBorder | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.ShapeBorder | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.ShapeBorder | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.ShapeBorder | null>;
get begin(): upstream1.ShapeBorder | null;
get end(): upstream1.ShapeBorder | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class ShapeBorderTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapeBorderTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ShapeBorderTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}) { super(_ShapeBorderTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShapeBorderTween.prototype, _ShapeBorderTweenProxy);
export namespace ShapeBorderTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}], implementation: {}): ShapeBorderTween {
return constructProxy(_ShapeBorderTweenProxy, args, implementation) as ShapeBorderTween; } }
_flaxBindInstanceType<ShapeBorderTween, typeof ShapeBorderTween>(ShapeBorderTween, "flax.core/sdk_material#type:ShapeBorderTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/material/material.dart::ShapeBorderTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
