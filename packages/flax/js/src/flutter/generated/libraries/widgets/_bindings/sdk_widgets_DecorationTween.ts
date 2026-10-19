// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters42, _flaxMemberParameters2, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DecorationTween extends Omit<upstream0.Tween<upstream1.Decoration>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.Decoration>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.Decoration>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::DecorationTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Decoration] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Decoration] }> { readonly __DecorationTween: unique symbol;
readonly [_flaxDartTypeValue]: DecorationTween;

}
defineObject("flax.core/sdk_widgets#type:DecorationTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:DecorationTween", "object", {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, {}), []);
const _DecorationTweenProxy = {type: "flax.core/sdk_widgets#type:DecorationTween", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface DecorationTween {
readonly [_flaxDartTypeValue]: DecorationTween;

lerp(t: number): upstream1.Decoration;
transform(t: number): upstream1.Decoration;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Decoration;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Decoration>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Decoration>;
get begin(): upstream1.Decoration | null;
get end(): upstream1.Decoration | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class DecorationTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DecorationTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DecorationTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DecorationTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_DecorationTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DecorationTween.prototype, _DecorationTweenProxy);
export namespace DecorationTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): DecorationTween {
return constructProxy(_DecorationTweenProxy, args, implementation) as DecorationTween; } }
_flaxBindInstanceType<DecorationTween, typeof DecorationTween>(DecorationTween, "flax.core/sdk_widgets#type:DecorationTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::DecorationTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
