// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
const _flaxMemberParameters0 = [{"name":"scrollOffset","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"childCount","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridLayout extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout": readonly [] }> { readonly __SliverGridLayout: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridLayout;

getMinChildIndexForScrollOffset(scrollOffset: number): number;
getMaxChildIndexForScrollOffset(scrollOffset: number): number;
getGeometryForChildIndex(index: number): upstream0.SliverGridGeometry;
computeMaxScrollOffset(childCount: number): number;
}
defineObject("flax.core/sdk_rendering#type:SliverGridLayout", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridLayout", "object", {"getMinChildIndexForScrollOffset":_flaxMemberParameters0,"getMaxChildIndexForScrollOffset":_flaxMemberParameters0,"getGeometryForChildIndex":_flaxMemberParameters1,"computeMaxScrollOffset":_flaxMemberParameters2}, {}), []);
const _SliverGridLayoutProxy = {type: "flax.core/sdk_rendering#type:SliverGridLayout", parameters: [], constructors: {}, methods: {"getMinChildIndexForScrollOffset":_flaxMemberParameters0,"getMaxChildIndexForScrollOffset":_flaxMemberParameters0,"getGeometryForChildIndex":_flaxMemberParameters1,"computeMaxScrollOffset":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SliverGridLayoutFactory { export function implement(args: [], implementation: {getMinChildIndexForScrollOffset: ((scrollOffset: number) => number); getMaxChildIndexForScrollOffset: ((scrollOffset: number) => number); getGeometryForChildIndex: ((index: number) => Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridGeometry": readonly [] }>); computeMaxScrollOffset: ((childCount: number) => number)}): SliverGridLayout {
return constructProxy(_SliverGridLayoutProxy, args, implementation) as SliverGridLayout; } }
export const SliverGridLayout: typeof _SliverGridLayoutFactory & _FlaxInstanceType<SliverGridLayout> & _FlaxDartType<SliverGridLayout, readonly ["class", "flax.core/sdk_rendering#type:SliverGridLayout", readonly [], false]> = _flaxBindInstanceType<SliverGridLayout, typeof _SliverGridLayoutFactory>(_SliverGridLayoutFactory, "flax.core/sdk_rendering#type:SliverGridLayout", ["dart:core::Object"]) as typeof _SliverGridLayoutFactory & _FlaxInstanceType<SliverGridLayout> & _FlaxDartType<SliverGridLayout, readonly ["class", "flax.core/sdk_rendering#type:SliverGridLayout", readonly [], false]>;
