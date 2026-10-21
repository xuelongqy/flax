// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_GrowthDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_GrowthDirection';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { _flaxMemberParameters349, _flaxMemberParameters350, _flaxMemberParameters1, _flaxMemberParameters351, _flaxMemberParameters38 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverConstraints extends Omit<upstream0.Constraints, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __SliverConstraints: unique symbol;
readonly [_flaxDartTypeValue]: SliverConstraints;

readonly isTight: boolean;
readonly isNormalized: boolean;
readonly axisDirection: upstream1.AxisDirection;
readonly growthDirection: upstream2.GrowthDirection;
readonly userScrollDirection: upstream3.ScrollDirection;
readonly scrollOffset: number;
readonly precedingScrollExtent: number;
readonly overlap: number;
readonly remainingPaintExtent: number;
readonly crossAxisExtent: number;
readonly crossAxisDirection: upstream1.AxisDirection;
readonly viewportMainAxisExtent: number;
readonly cacheOrigin: number;
readonly remainingCacheExtent: number;
readonly axis: upstream4.Axis;
readonly normalizedGrowthDirection: upstream2.GrowthDirection;
debugAssertIsValid(options?: {informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; isAppliedConstraint?: boolean | undefined}): boolean;
copyWith(options?: {axisDirection?: upstream1.AxisDirection | null | undefined; cacheOrigin?: number | null | undefined; crossAxisDirection?: upstream1.AxisDirection | null | undefined; crossAxisExtent?: number | null | undefined; growthDirection?: upstream2.GrowthDirection | null | undefined; overlap?: number | null | undefined; precedingScrollExtent?: number | null | undefined; remainingCacheExtent?: number | null | undefined; remainingPaintExtent?: number | null | undefined; scrollOffset?: number | null | undefined; userScrollDirection?: upstream3.ScrollDirection | null | undefined; viewportMainAxisExtent?: number | null | undefined}): SliverConstraints;
asBoxConstraints(options?: {crossAxisExtent?: number | null | undefined; maxExtent?: number | undefined; minExtent?: number | undefined}): upstream6.BoxConstraints;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:SliverConstraints", ["isTight","isNormalized","axisDirection","growthDirection","userScrollDirection","scrollOffset","precedingScrollExtent","overlap","remainingPaintExtent","crossAxisExtent","crossAxisDirection","viewportMainAxisExtent","cacheOrigin","remainingCacheExtent","axis","normalizedGrowthDirection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverConstraints", "object", {"copyWith":_flaxMemberParameters349,"asBoxConstraints":_flaxMemberParameters350,"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_rendering#type:Constraints");
export function _SliverConstraintsFactory(options: { axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number }): SliverConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverConstraints", "", [{"name":"axisDirection","required":true},{"name":"growthDirection","required":true},{"name":"userScrollDirection","required":true},{"name":"scrollOffset","required":true},{"name":"precedingScrollExtent","required":true},{"name":"overlap","required":true},{"name":"remainingPaintExtent","required":true},{"name":"crossAxisExtent","required":true},{"name":"crossAxisDirection","required":true},{"name":"viewportMainAxisExtent","required":true},{"name":"remainingCacheExtent","required":true},{"name":"cacheOrigin","required":true}], [], options) as SliverConstraints;
}
const _SliverConstraintsProxy = {type: "flax.core/sdk_rendering#type:SliverConstraints", parameters: _flaxMemberParameters351, constructors: {"": _flaxMemberParameters351}, methods: {"debugAssertIsValid":_flaxMemberParameters38,"copyWith":_flaxMemberParameters349,"asBoxConstraints":_flaxMemberParameters350,"toString":_flaxMemberParameters1}, getters: ["axisDirection","growthDirection","userScrollDirection","scrollOffset","precedingScrollExtent","overlap","remainingPaintExtent","crossAxisExtent","crossAxisDirection","viewportMainAxisExtent","cacheOrigin","remainingCacheExtent","axis","normalizedGrowthDirection","isTight","isNormalized"], setters: [], contextMembers: [], superMembers: ["get:axisDirection","get:growthDirection","get:userScrollDirection","get:scrollOffset","get:precedingScrollExtent","get:overlap","get:remainingPaintExtent","get:crossAxisExtent","get:crossAxisDirection","get:viewportMainAxisExtent","get:cacheOrigin","get:remainingCacheExtent","get:axis","get:normalizedGrowthDirection","get:isTight","get:isNormalized","debugAssertIsValid","copyWith","asBoxConstraints","toString"]} as const;
export interface _SliverConstraintsNative extends SliverConstraints {
readonly [_flaxDartTypeValue]: _SliverConstraintsNative;

debugAssertIsValid(options?: {isAppliedConstraint?: boolean | undefined; informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}): boolean;
copyWith(options?: {axisDirection?: upstream1.AxisDirection | null | undefined; growthDirection?: upstream2.GrowthDirection | null | undefined; userScrollDirection?: upstream3.ScrollDirection | null | undefined; scrollOffset?: number | null | undefined; precedingScrollExtent?: number | null | undefined; overlap?: number | null | undefined; remainingPaintExtent?: number | null | undefined; crossAxisExtent?: number | null | undefined; crossAxisDirection?: upstream1.AxisDirection | null | undefined; viewportMainAxisExtent?: number | null | undefined; remainingCacheExtent?: number | null | undefined; cacheOrigin?: number | null | undefined}): SliverConstraints;
asBoxConstraints(options?: {minExtent?: number | undefined; maxExtent?: number | undefined; crossAxisExtent?: number | null | undefined}): upstream6.BoxConstraints;
toString(): string;
get axisDirection(): upstream1.AxisDirection;
get growthDirection(): upstream2.GrowthDirection;
get userScrollDirection(): upstream3.ScrollDirection;
get scrollOffset(): number;
get precedingScrollExtent(): number;
get overlap(): number;
get remainingPaintExtent(): number;
get crossAxisExtent(): number;
get crossAxisDirection(): upstream1.AxisDirection;
get viewportMainAxisExtent(): number;
get cacheOrigin(): number;
get remainingCacheExtent(): number;
get axis(): upstream4.Axis;
get normalizedGrowthDirection(): upstream2.GrowthDirection;
get isTight(): boolean;
get isNormalized(): boolean;
}
export abstract class _SliverConstraintsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverConstraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverConstraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverConstraints", readonly [], false];
constructor(options: {axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number}) { super(_SliverConstraintsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverConstraintsNative.prototype, _SliverConstraintsProxy);
export namespace _SliverConstraintsFactory { export function implement(args: [options: {axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number}], implementation: {}): SliverConstraints {
return constructProxy(_SliverConstraintsProxy, args, implementation) as SliverConstraints; } }
const _SliverConstraintsBinding = _flaxProxyFactory(_SliverConstraintsFactory, _SliverConstraintsNative) as unknown as typeof _SliverConstraintsFactory & (new(options: {axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number}) => _SliverConstraintsNative);
export const SliverConstraints: typeof _SliverConstraintsBinding & _FlaxInstanceType<SliverConstraints> & _FlaxDartType<SliverConstraints, readonly ["class", "flax.core/sdk_rendering#type:SliverConstraints", readonly [], false]> = _flaxBindInstanceType<SliverConstraints, typeof _SliverConstraintsBinding>(_SliverConstraintsBinding, "flax.core/sdk_rendering#type:SliverConstraints", ["flax.core/sdk_rendering#type:Constraints","dart:core::Object"]) as typeof _SliverConstraintsBinding & _FlaxInstanceType<SliverConstraints> & _FlaxDartType<SliverConstraints, readonly ["class", "flax.core/sdk_rendering#type:SliverConstraints", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isTight" | "isNormalized" | "axisDirection" | "growthDirection" | "userScrollDirection" | "scrollOffset" | "precedingScrollExtent" | "overlap" | "remainingPaintExtent" | "crossAxisExtent" | "crossAxisDirection" | "viewportMainAxisExtent" | "cacheOrigin" | "remainingCacheExtent" | "axis" | "normalizedGrowthDirection" | "debugAssertIsValid" | "copyWith" | "asBoxConstraints" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints" | "__flaxBound:package:flutter/src/rendering/object.dart::Constraints";
