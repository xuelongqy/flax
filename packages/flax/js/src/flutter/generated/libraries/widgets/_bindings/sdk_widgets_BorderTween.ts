// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Border';
import '@flax/flutter/painting/_bindings/flutter_Border';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters42, _flaxMemberParameters2, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderTween extends Omit<upstream0.Tween<upstream1.Border | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.Border | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.Border | null>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::BorderTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Border | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Border | null] }> { readonly __BorderTween: unique symbol;
readonly [_flaxDartTypeValue]: BorderTween;

}
defineObject("flax.core/sdk_widgets#type:BorderTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:BorderTween", "object", {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, {}), []);
const _BorderTweenProxy = {type: "flax.core/sdk_widgets#type:BorderTween", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {"lerp":_flaxMemberParameters42,"transform":_flaxMemberParameters42,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters43,"animate":_flaxMemberParameters44,"chain":_flaxMemberParameters44}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface BorderTween {
readonly [_flaxDartTypeValue]: BorderTween;

lerp(t: number): upstream1.Border | null;
transform(t: number): upstream1.Border | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Border | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Border | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Border | null>;
get begin(): upstream1.Border | null;
get end(): upstream1.Border | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class BorderTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BorderTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BorderTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BorderTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}) { super(_BorderTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BorderTween.prototype, _BorderTweenProxy);
export namespace BorderTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}], implementation: {}): BorderTween {
return constructProxy(_BorderTweenProxy, args, implementation) as BorderTween; } }
_flaxBindInstanceType<BorderTween, typeof BorderTween>(BorderTween, "flax.core/sdk_widgets#type:BorderTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::BorderTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
