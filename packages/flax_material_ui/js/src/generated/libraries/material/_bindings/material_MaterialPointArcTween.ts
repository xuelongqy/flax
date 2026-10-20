// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters160, _flaxMemberParameters193, _flaxMemberParameters194, _flaxMemberParameters2, _flaxMemberParameters195 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPointArcTween extends Omit<upstream0.Tween<upstream1.Offset>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.Offset>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.Offset>>, Readonly<{ "__flaxBound:package:material_ui/src/arc.dart::MaterialPointArcTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Offset] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Offset] }> { readonly __MaterialPointArcTween: unique symbol;
readonly [_flaxDartTypeValue]: MaterialPointArcTween;

get begin(): upstream1.Offset | null;
get end(): upstream1.Offset | null;
readonly center: upstream1.Offset | null;
readonly radius: number | null;
readonly beginAngle: number | null;
readonly endAngle: number | null;
transform(t: number): upstream1.Offset;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Offset;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Offset>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Offset>;
lerp(t: number): upstream1.Offset;
toString(): string;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
}
defineObject("flax.material/material#type:MaterialPointArcTween", ["begin","end","center","radius","beginAngle","endAngle"], ["begin","end"], _flaxBindingMethods("flax.material/material#type:MaterialPointArcTween", "object", {"transform":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194,"lerp":_flaxMemberParameters160,"toString":_flaxMemberParameters2}, {}), []);
export function _MaterialPointArcTweenFactory(options: { begin?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined } = {}): MaterialPointArcTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialPointArcTween", "", [{"name":"begin"},{"name":"end"}], [], options) as MaterialPointArcTween;
}
const _MaterialPointArcTweenProxy = {type: "flax.material/material#type:MaterialPointArcTween", parameters: _flaxMemberParameters195, constructors: {"": _flaxMemberParameters195}, methods: {"transform":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194,"lerp":_flaxMemberParameters160,"toString":_flaxMemberParameters2}, getters: ["center","radius","beginAngle","endAngle","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:center","get:radius","get:beginAngle","get:endAngle","get:begin","get:end","set:begin","set:end","transform","evaluate","animate","chain","lerp","toString"]} as const;
export interface _MaterialPointArcTweenNative extends MaterialPointArcTween {
readonly [_flaxDartTypeValue]: _MaterialPointArcTweenNative;

transform(t: number): upstream1.Offset;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Offset;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Offset>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Offset>;
lerp(t: number): upstream1.Offset;
toString(): string;
get center(): upstream1.Offset | null;
get radius(): number | null;
get beginAngle(): number | null;
get endAngle(): number | null;
get begin(): upstream1.Offset | null;
get end(): upstream1.Offset | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
}
export abstract class _MaterialPointArcTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialPointArcTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialPointArcTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialPointArcTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_MaterialPointArcTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialPointArcTweenNative.prototype, _MaterialPointArcTweenProxy);
export namespace _MaterialPointArcTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): MaterialPointArcTween {
return constructProxy(_MaterialPointArcTweenProxy, args, implementation) as MaterialPointArcTween; } }
const _MaterialPointArcTweenBinding = _flaxProxyFactory(_MaterialPointArcTweenFactory, _MaterialPointArcTweenNative) as unknown as typeof _MaterialPointArcTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => _MaterialPointArcTweenNative);
export const MaterialPointArcTween: typeof _MaterialPointArcTweenBinding & _FlaxInstanceType<MaterialPointArcTween> & _FlaxDartType<MaterialPointArcTween, readonly ["class", "flax.material/material#type:MaterialPointArcTween", readonly [], false]> = _flaxBindInstanceType<MaterialPointArcTween, typeof _MaterialPointArcTweenBinding>(_MaterialPointArcTweenBinding, "flax.material/material#type:MaterialPointArcTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _MaterialPointArcTweenBinding & _FlaxInstanceType<MaterialPointArcTween> & _FlaxDartType<MaterialPointArcTween, readonly ["class", "flax.material/material#type:MaterialPointArcTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "center" | "radius" | "beginAngle" | "endAngle" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:material_ui/src/arc.dart::MaterialPointArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
