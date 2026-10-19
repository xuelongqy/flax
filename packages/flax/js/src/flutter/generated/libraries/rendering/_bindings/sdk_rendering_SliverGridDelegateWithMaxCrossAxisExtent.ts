// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { _flaxMemberParameters53, _flaxMemberParameters343, _flaxMemberParameters70 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridDelegateWithMaxCrossAxisExtent extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }> { readonly __SliverGridDelegateWithMaxCrossAxisExtent: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;

}
defineObject("flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", ["maxCrossAxisExtent","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", "object", {"shouldRelayout":_flaxMemberParameters53}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverGridDelegate");
const _SliverGridDelegateWithMaxCrossAxisExtentProxy = {type: "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", parameters: _flaxMemberParameters343, constructors: {"": _flaxMemberParameters343}, methods: {"getLayout":_flaxMemberParameters70,"shouldRelayout":_flaxMemberParameters53}, getters: ["maxCrossAxisExtent","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:maxCrossAxisExtent","get:mainAxisSpacing","get:crossAxisSpacing","get:childAspectRatio","get:mainAxisExtent","getLayout","shouldRelayout"]} as const;
export interface SliverGridDelegateWithMaxCrossAxisExtent {
readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;

getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
get maxCrossAxisExtent(): number;
get mainAxisSpacing(): number;
get crossAxisSpacing(): number;
get childAspectRatio(): number;
get mainAxisExtent(): number | null;
}
export abstract class SliverGridDelegateWithMaxCrossAxisExtent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false];
constructor(options: {maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) { super(_SliverGridDelegateWithMaxCrossAxisExtentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverGridDelegateWithMaxCrossAxisExtent.prototype, _SliverGridDelegateWithMaxCrossAxisExtentProxy);
export namespace SliverGridDelegateWithMaxCrossAxisExtent { export function implement(args: [options: {maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}], implementation: {}): SliverGridDelegateWithMaxCrossAxisExtent {
return constructProxy(_SliverGridDelegateWithMaxCrossAxisExtentProxy, args, implementation) as SliverGridDelegateWithMaxCrossAxisExtent; } }
_flaxBindInstanceType<SliverGridDelegateWithMaxCrossAxisExtent, typeof SliverGridDelegateWithMaxCrossAxisExtent>(SliverGridDelegateWithMaxCrossAxisExtent, "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", ["flax.core/sdk_rendering#type:SliverGridDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "maxCrossAxisExtent" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
