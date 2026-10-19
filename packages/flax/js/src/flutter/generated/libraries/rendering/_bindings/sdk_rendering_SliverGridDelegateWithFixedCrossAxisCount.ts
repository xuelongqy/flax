// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"crossAxisCount","required":true},{"name":"mainAxisSpacing"},{"name":"crossAxisSpacing"},{"name":"childAspectRatio"},{"name":"mainAxisExtent"}] as const;
const _flaxMemberParameters2 = [{"name":"constraints","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridDelegateWithFixedCrossAxisCount extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }> { readonly __SliverGridDelegateWithFixedCrossAxisCount: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;

}
defineObject("flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", ["crossAxisCount","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", "object", {"shouldRelayout":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverGridDelegate");
const _SliverGridDelegateWithFixedCrossAxisCountProxy = {type: "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getLayout":_flaxMemberParameters2,"shouldRelayout":_flaxMemberParameters0}, getters: ["crossAxisCount","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:crossAxisCount","get:mainAxisSpacing","get:crossAxisSpacing","get:childAspectRatio","get:mainAxisExtent","getLayout","shouldRelayout"]} as const;
export interface SliverGridDelegateWithFixedCrossAxisCount {
readonly [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;

getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
get crossAxisCount(): number;
get mainAxisSpacing(): number;
get crossAxisSpacing(): number;
get childAspectRatio(): number;
get mainAxisExtent(): number | null;
}
export abstract class SliverGridDelegateWithFixedCrossAxisCount extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false];
constructor(options: {crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) { super(_SliverGridDelegateWithFixedCrossAxisCountProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverGridDelegateWithFixedCrossAxisCount.prototype, _SliverGridDelegateWithFixedCrossAxisCountProxy);
export namespace SliverGridDelegateWithFixedCrossAxisCount { export function implement(args: [options: {crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}], implementation: {}): SliverGridDelegateWithFixedCrossAxisCount {
return constructProxy(_SliverGridDelegateWithFixedCrossAxisCountProxy, args, implementation) as SliverGridDelegateWithFixedCrossAxisCount; } }
_flaxBindInstanceType<SliverGridDelegateWithFixedCrossAxisCount, typeof SliverGridDelegateWithFixedCrossAxisCount>(SliverGridDelegateWithFixedCrossAxisCount, "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", ["flax.core/sdk_rendering#type:SliverGridDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "crossAxisCount" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
