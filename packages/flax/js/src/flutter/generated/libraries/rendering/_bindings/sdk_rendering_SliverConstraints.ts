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
import { _flaxMemberParameters336, _flaxMemberParameters337, _flaxMemberParameters1, _flaxMemberParameters338, _flaxMemberParameters32 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverConstraints extends Omit<upstream0.Constraints, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __SliverConstraints: unique symbol;
readonly [_flaxDartTypeValue]: SliverConstraints;

}
defineObject("flax.core/sdk_rendering#type:SliverConstraints", ["isTight","isNormalized","axisDirection","growthDirection","userScrollDirection","scrollOffset","precedingScrollExtent","overlap","remainingPaintExtent","crossAxisExtent","crossAxisDirection","viewportMainAxisExtent","cacheOrigin","remainingCacheExtent","axis","normalizedGrowthDirection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverConstraints", "object", {"copyWith":_flaxMemberParameters336,"asBoxConstraints":_flaxMemberParameters337,"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_rendering#type:Constraints");
const _SliverConstraintsProxy = {type: "flax.core/sdk_rendering#type:SliverConstraints", parameters: _flaxMemberParameters338, constructors: {"": _flaxMemberParameters338}, methods: {"debugAssertIsValid":_flaxMemberParameters32,"copyWith":_flaxMemberParameters336,"asBoxConstraints":_flaxMemberParameters337,"toString":_flaxMemberParameters1}, getters: ["axisDirection","growthDirection","userScrollDirection","scrollOffset","precedingScrollExtent","overlap","remainingPaintExtent","crossAxisExtent","crossAxisDirection","viewportMainAxisExtent","cacheOrigin","remainingCacheExtent","axis","normalizedGrowthDirection","isTight","isNormalized"], setters: [], contextMembers: [], superMembers: ["get:axisDirection","get:growthDirection","get:userScrollDirection","get:scrollOffset","get:precedingScrollExtent","get:overlap","get:remainingPaintExtent","get:crossAxisExtent","get:crossAxisDirection","get:viewportMainAxisExtent","get:cacheOrigin","get:remainingCacheExtent","get:axis","get:normalizedGrowthDirection","get:isTight","get:isNormalized","debugAssertIsValid","copyWith","asBoxConstraints","toString"]} as const;
export interface SliverConstraints {
readonly [_flaxDartTypeValue]: SliverConstraints;

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
export abstract class SliverConstraints extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverConstraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverConstraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverConstraints", readonly [], false];
constructor(options: {axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number}) { super(_SliverConstraintsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverConstraints.prototype, _SliverConstraintsProxy);
export namespace SliverConstraints { export function implement(args: [options: {axisDirection: upstream1.AxisDirection; growthDirection: upstream2.GrowthDirection; userScrollDirection: upstream3.ScrollDirection; scrollOffset: number; precedingScrollExtent: number; overlap: number; remainingPaintExtent: number; crossAxisExtent: number; crossAxisDirection: upstream1.AxisDirection; viewportMainAxisExtent: number; remainingCacheExtent: number; cacheOrigin: number}], implementation: {}): SliverConstraints {
return constructProxy(_SliverConstraintsProxy, args, implementation) as SliverConstraints; } }
_flaxBindInstanceType<SliverConstraints, typeof SliverConstraints>(SliverConstraints, "flax.core/sdk_rendering#type:SliverConstraints", ["flax.core/sdk_rendering#type:Constraints","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isTight" | "isNormalized" | "axisDirection" | "growthDirection" | "userScrollDirection" | "scrollOffset" | "precedingScrollExtent" | "overlap" | "remainingPaintExtent" | "crossAxisExtent" | "crossAxisDirection" | "viewportMainAxisExtent" | "cacheOrigin" | "remainingCacheExtent" | "axis" | "normalizedGrowthDirection" | "debugAssertIsValid" | "copyWith" | "asBoxConstraints" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints" | "__flaxBound:package:flutter/src/rendering/object.dart::Constraints";
