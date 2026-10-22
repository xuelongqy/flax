// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { _flaxMemberParameters41, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Split extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Split": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __Split: unique symbol;
readonly [_flaxDartTypeValue]: Split;

readonly flipped: upstream0.Curve;
readonly split: number;
readonly beginCurve: upstream0.Curve;
readonly endCurve: upstream0.Curve;
transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:Split", ["flipped","split","beginCurve","endCurve"], [], _flaxBindingMethods("flax.core/sdk_animation#type:Split", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
export function _SplitFactory(split: number, options: { beginCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; endCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined } = {}): Split {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:Split", "", [{"name":"split","required":true,"positional":true},{"name":"beginCurve"},{"name":"endCurve"}], [split], options) as Split;
}
const _SplitProxy = {type: "flax.core/sdk_animation#type:Split", parameters: _flaxMemberParameters41, constructors: {"": _flaxMemberParameters41}, methods: {"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["split","beginCurve","endCurve","flipped"], setters: [], contextMembers: [], superMembers: ["get:split","get:beginCurve","get:endCurve","get:flipped","transform","transformInternal","toString"]} as const;
export interface _SplitNative extends Split {
readonly [_flaxDartTypeValue]: _SplitNative;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get split(): number;
get beginCurve(): upstream0.Curve;
get endCurve(): upstream0.Curve;
get flipped(): upstream0.Curve;
}
export abstract class _SplitNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Split>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Split;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Split", readonly [], false];
constructor(split: number, options?: {beginCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; endCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}) { super(_SplitProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SplitNative.prototype, _SplitProxy);
export namespace _SplitFactory { export function implement(args: [split: number, options?: {beginCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; endCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}], implementation: {}): Split {
return constructProxy(_SplitProxy, args, implementation) as Split; } }
const _SplitBinding = _flaxProxyFactory(_SplitFactory, _SplitNative) as unknown as typeof _SplitFactory & (new(split: number, options?: {beginCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; endCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}) => _SplitNative);
export const Split: typeof _SplitBinding & _FlaxInstanceType<Split> & _FlaxDartType<Split, readonly ["class", "flax.core/sdk_animation#type:Split", readonly [], false]> = _flaxBindInstanceType<Split, typeof _SplitBinding>(_SplitBinding, "flax.core/sdk_animation#type:Split", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _SplitBinding & _FlaxInstanceType<Split> & _FlaxDartType<Split, readonly ["class", "flax.core/sdk_animation#type:Split", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "split" | "beginCurve" | "endCurve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Split" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
