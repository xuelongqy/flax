// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters40, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThreePointCubic extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ThreePointCubic": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __ThreePointCubic: unique symbol;
readonly [_flaxDartTypeValue]: ThreePointCubic;

readonly flipped: upstream0.Curve;
readonly a1: upstream2.Offset;
readonly b1: upstream2.Offset;
readonly midpoint: upstream2.Offset;
readonly a2: upstream2.Offset;
readonly b2: upstream2.Offset;
transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:ThreePointCubic", ["flipped","a1","b1","midpoint","a2","b2"], [], _flaxBindingMethods("flax.core/sdk_animation#type:ThreePointCubic", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
export function _ThreePointCubicFactory(a1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, midpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, a2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): ThreePointCubic {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ThreePointCubic", "", [{"name":"a1","required":true,"positional":true},{"name":"b1","required":true,"positional":true},{"name":"midpoint","required":true,"positional":true},{"name":"a2","required":true,"positional":true},{"name":"b2","required":true,"positional":true}], [a1, b1, midpoint, a2, b2], {}) as ThreePointCubic;
}
const _ThreePointCubicProxy = {type: "flax.core/sdk_animation#type:ThreePointCubic", parameters: _flaxMemberParameters40, constructors: {"": _flaxMemberParameters40}, methods: {"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["a1","b1","midpoint","a2","b2","flipped"], setters: [], contextMembers: [], superMembers: ["get:a1","get:b1","get:midpoint","get:a2","get:b2","get:flipped","transform","transformInternal","toString"]} as const;
export interface _ThreePointCubicNative extends ThreePointCubic {
readonly [_flaxDartTypeValue]: _ThreePointCubicNative;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get a1(): upstream2.Offset;
get b1(): upstream2.Offset;
get midpoint(): upstream2.Offset;
get a2(): upstream2.Offset;
get b2(): upstream2.Offset;
get flipped(): upstream0.Curve;
}
export abstract class _ThreePointCubicNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ThreePointCubic>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ThreePointCubic;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ThreePointCubic", readonly [], false];
constructor(a1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, midpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, a2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) { super(_ThreePointCubicProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ThreePointCubicNative.prototype, _ThreePointCubicProxy);
export namespace _ThreePointCubicFactory { export function implement(args: [a1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, midpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, a2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>], implementation: {}): ThreePointCubic {
return constructProxy(_ThreePointCubicProxy, args, implementation) as ThreePointCubic; } }
const _ThreePointCubicBinding = _flaxProxyFactory(_ThreePointCubicFactory, _ThreePointCubicNative) as unknown as typeof _ThreePointCubicFactory & (new(a1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, midpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, a2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, b2: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _ThreePointCubicNative);
export const ThreePointCubic: typeof _ThreePointCubicBinding & _FlaxInstanceType<ThreePointCubic> & _FlaxDartType<ThreePointCubic, readonly ["class", "flax.core/sdk_animation#type:ThreePointCubic", readonly [], false]> = _flaxBindInstanceType<ThreePointCubic, typeof _ThreePointCubicBinding>(_ThreePointCubicBinding, "flax.core/sdk_animation#type:ThreePointCubic", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _ThreePointCubicBinding & _FlaxInstanceType<ThreePointCubic> & _FlaxDartType<ThreePointCubic, readonly ["class", "flax.core/sdk_animation#type:ThreePointCubic", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "a1" | "b1" | "midpoint" | "a2" | "b2" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ThreePointCubic" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
