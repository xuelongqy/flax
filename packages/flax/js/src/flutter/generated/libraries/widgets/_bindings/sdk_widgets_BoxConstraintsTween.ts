// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters42, _flaxMemberParameters2, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxConstraintsTween extends Omit<upstream0.Tween<upstream1.BoxConstraints>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.BoxConstraints>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.BoxConstraints>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::BoxConstraintsTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.BoxConstraints] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.BoxConstraints] }> { readonly __BoxConstraintsTween: unique symbol;
readonly [_flaxDartTypeValue]: BoxConstraintsTween;

get begin(): upstream1.BoxConstraints | null;
get end(): upstream1.BoxConstraints | null;
lerp(t: number): upstream1.BoxConstraints;
transform(t: number): upstream1.BoxConstraints;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.BoxConstraints;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.BoxConstraints>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.BoxConstraints>;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null);
}
defineObject("flax.core/sdk_widgets#type:BoxConstraintsTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:BoxConstraintsTween", "object", {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, {}), []);
export function _BoxConstraintsTweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined } = {}): BoxConstraintsTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:BoxConstraintsTween", "", [{"name":"begin"},{"name":"end"}], [], options) as BoxConstraintsTween;
}
const _BoxConstraintsTweenProxy = {type: "flax.core/sdk_widgets#type:BoxConstraintsTween", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _BoxConstraintsTweenNative extends BoxConstraintsTween {
readonly [_flaxDartTypeValue]: _BoxConstraintsTweenNative;

lerp(t: number): upstream1.BoxConstraints;
transform(t: number): upstream1.BoxConstraints;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.BoxConstraints;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.BoxConstraints>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.BoxConstraints>;
get begin(): upstream1.BoxConstraints | null;
get end(): upstream1.BoxConstraints | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null);
}
export abstract class _BoxConstraintsTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxConstraintsTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxConstraintsTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BoxConstraintsTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}) { super(_BoxConstraintsTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BoxConstraintsTweenNative.prototype, _BoxConstraintsTweenProxy);
export namespace _BoxConstraintsTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}], implementation: {}): BoxConstraintsTween {
return constructProxy(_BoxConstraintsTweenProxy, args, implementation) as BoxConstraintsTween; } }
const _BoxConstraintsTweenBinding = _flaxProxyFactory(_BoxConstraintsTweenFactory, _BoxConstraintsTweenNative) as unknown as typeof _BoxConstraintsTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}) => _BoxConstraintsTweenNative);
export const BoxConstraintsTween: typeof _BoxConstraintsTweenBinding & _FlaxInstanceType<BoxConstraintsTween> & _FlaxDartType<BoxConstraintsTween, readonly ["class", "flax.core/sdk_widgets#type:BoxConstraintsTween", readonly [], false]> = _flaxBindInstanceType<BoxConstraintsTween, typeof _BoxConstraintsTweenBinding>(_BoxConstraintsTweenBinding, "flax.core/sdk_widgets#type:BoxConstraintsTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _BoxConstraintsTweenBinding & _FlaxInstanceType<BoxConstraintsTween> & _FlaxDartType<BoxConstraintsTween, readonly ["class", "flax.core/sdk_widgets#type:BoxConstraintsTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::BoxConstraintsTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
