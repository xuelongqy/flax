// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
const _flaxMemberParameters0 = [{"name":"crossAxisCount","required":true},{"name":"mainAxisStride","required":true},{"name":"crossAxisStride","required":true},{"name":"childMainAxisExtent","required":true},{"name":"childCrossAxisExtent","required":true},{"name":"reverseCrossAxis","required":true}] as const;
const _flaxMemberParameters1 = [{"name":"scrollOffset","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"childCount","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridRegularTileLayout extends Omit<upstream0.SliverGridLayout, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridRegularTileLayout": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout": readonly [] }> { readonly __SliverGridRegularTileLayout: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridRegularTileLayout;

}
defineObject("flax.core/sdk_rendering#type:SliverGridRegularTileLayout", ["crossAxisCount","mainAxisStride","crossAxisStride","childMainAxisExtent","childCrossAxisExtent","reverseCrossAxis"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridRegularTileLayout", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverGridLayout");
const _SliverGridRegularTileLayoutProxy = {type: "flax.core/sdk_rendering#type:SliverGridRegularTileLayout", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getMinChildIndexForScrollOffset":_flaxMemberParameters1,"getMaxChildIndexForScrollOffset":_flaxMemberParameters1,"getGeometryForChildIndex":_flaxMemberParameters2,"computeMaxScrollOffset":_flaxMemberParameters3}, getters: ["crossAxisCount","mainAxisStride","crossAxisStride","childMainAxisExtent","childCrossAxisExtent","reverseCrossAxis"], setters: [], contextMembers: [], superMembers: ["get:crossAxisCount","get:mainAxisStride","get:crossAxisStride","get:childMainAxisExtent","get:childCrossAxisExtent","get:reverseCrossAxis","getMinChildIndexForScrollOffset","getMaxChildIndexForScrollOffset","getGeometryForChildIndex","computeMaxScrollOffset"]} as const;
export interface SliverGridRegularTileLayout {
readonly [_flaxDartTypeValue]: SliverGridRegularTileLayout;

getMinChildIndexForScrollOffset(scrollOffset: number): number;
getMaxChildIndexForScrollOffset(scrollOffset: number): number;
getGeometryForChildIndex(index: number): upstream1.SliverGridGeometry;
computeMaxScrollOffset(childCount: number): number;
get crossAxisCount(): number;
get mainAxisStride(): number;
get crossAxisStride(): number;
get childMainAxisExtent(): number;
get childCrossAxisExtent(): number;
get reverseCrossAxis(): boolean;
}
export abstract class SliverGridRegularTileLayout extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridRegularTileLayout>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridRegularTileLayout;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridRegularTileLayout", readonly [], false];
constructor(options: {crossAxisCount: number; mainAxisStride: number; crossAxisStride: number; childMainAxisExtent: number; childCrossAxisExtent: number; reverseCrossAxis: boolean}) { super(_SliverGridRegularTileLayoutProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverGridRegularTileLayout.prototype, _SliverGridRegularTileLayoutProxy);
export namespace SliverGridRegularTileLayout { export function implement(args: [options: {crossAxisCount: number; mainAxisStride: number; crossAxisStride: number; childMainAxisExtent: number; childCrossAxisExtent: number; reverseCrossAxis: boolean}], implementation: {}): SliverGridRegularTileLayout {
return constructProxy(_SliverGridRegularTileLayoutProxy, args, implementation) as SliverGridRegularTileLayout; } }
_flaxBindInstanceType<SliverGridRegularTileLayout, typeof SliverGridRegularTileLayout>(SliverGridRegularTileLayout, "flax.core/sdk_rendering#type:SliverGridRegularTileLayout", ["flax.core/sdk_rendering#type:SliverGridLayout","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "crossAxisCount" | "mainAxisStride" | "crossAxisStride" | "childMainAxisExtent" | "childCrossAxisExtent" | "reverseCrossAxis" | "getMinChildIndexForScrollOffset" | "getMaxChildIndexForScrollOffset" | "getGeometryForChildIndex" | "computeMaxScrollOffset" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridRegularTileLayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout";
