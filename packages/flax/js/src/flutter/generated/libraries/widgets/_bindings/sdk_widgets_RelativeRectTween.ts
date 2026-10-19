// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"begin"},{"name":"end"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RelativeRectTween extends Omit<upstream0.Tween<upstream1.RelativeRect>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.RelativeRect>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.RelativeRect>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.RelativeRect] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.RelativeRect] }> { readonly __RelativeRectTween: unique symbol;
readonly [_flaxDartTypeValue]: RelativeRectTween;

}
defineObject("flax.core/sdk_widgets#type:RelativeRectTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:RelativeRectTween", "object", {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, {}), []);
const _RelativeRectTweenProxy = {type: "flax.core/sdk_widgets#type:RelativeRectTween", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface RelativeRectTween {
readonly [_flaxDartTypeValue]: RelativeRectTween;

lerp(t: number): upstream1.RelativeRect;
transform(t: number): upstream1.RelativeRect;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.RelativeRect;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.RelativeRect>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.RelativeRect>;
get begin(): upstream1.RelativeRect | null;
get end(): upstream1.RelativeRect | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
}
export abstract class RelativeRectTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RelativeRectTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RelativeRectTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RelativeRectTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined}) { super(_RelativeRectTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RelativeRectTween.prototype, _RelativeRectTweenProxy);
export namespace RelativeRectTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined}], implementation: {}): RelativeRectTween {
return constructProxy(_RelativeRectTweenProxy, args, implementation) as RelativeRectTween; } }
_flaxBindInstanceType<RelativeRectTween, typeof RelativeRectTween>(RelativeRectTween, "flax.core/sdk_widgets#type:RelativeRectTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
