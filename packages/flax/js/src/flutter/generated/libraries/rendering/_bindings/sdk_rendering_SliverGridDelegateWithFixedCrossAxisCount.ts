// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { _flaxMemberParameters59, _flaxMemberParameters355, _flaxMemberParameters76 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridDelegateWithFixedCrossAxisCount extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }> { readonly __SliverGridDelegateWithFixedCrossAxisCount: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;

readonly crossAxisCount: number;
readonly mainAxisSpacing: number;
readonly crossAxisSpacing: number;
readonly childAspectRatio: number;
readonly mainAxisExtent: number | null;
getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", ["crossAxisCount","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", "object", {"shouldRelayout":_flaxMemberParameters59}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverGridDelegate");
export function _SliverGridDelegateWithFixedCrossAxisCountFactory(options: { crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined }): SliverGridDelegateWithFixedCrossAxisCount {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", "", [{"name":"crossAxisCount","required":true},{"name":"mainAxisSpacing"},{"name":"crossAxisSpacing"},{"name":"childAspectRatio"},{"name":"mainAxisExtent"}], [], options) as SliverGridDelegateWithFixedCrossAxisCount;
}
const _SliverGridDelegateWithFixedCrossAxisCountProxy = {type: "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", parameters: _flaxMemberParameters355, constructors: {"": _flaxMemberParameters355}, methods: {"getLayout":_flaxMemberParameters76,"shouldRelayout":_flaxMemberParameters59}, getters: ["crossAxisCount","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:crossAxisCount","get:mainAxisSpacing","get:crossAxisSpacing","get:childAspectRatio","get:mainAxisExtent","getLayout","shouldRelayout"]} as const;
export interface _SliverGridDelegateWithFixedCrossAxisCountNative extends SliverGridDelegateWithFixedCrossAxisCount {
readonly [_flaxDartTypeValue]: _SliverGridDelegateWithFixedCrossAxisCountNative;

getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
get crossAxisCount(): number;
get mainAxisSpacing(): number;
get crossAxisSpacing(): number;
get childAspectRatio(): number;
get mainAxisExtent(): number | null;
}
export abstract class _SliverGridDelegateWithFixedCrossAxisCountNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false];
constructor(options: {crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) { super(_SliverGridDelegateWithFixedCrossAxisCountProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverGridDelegateWithFixedCrossAxisCountNative.prototype, _SliverGridDelegateWithFixedCrossAxisCountProxy);
export namespace _SliverGridDelegateWithFixedCrossAxisCountFactory { export function implement(args: [options: {crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}], implementation: {}): SliverGridDelegateWithFixedCrossAxisCount {
return constructProxy(_SliverGridDelegateWithFixedCrossAxisCountProxy, args, implementation) as SliverGridDelegateWithFixedCrossAxisCount; } }
const _SliverGridDelegateWithFixedCrossAxisCountBinding = _flaxProxyFactory(_SliverGridDelegateWithFixedCrossAxisCountFactory, _SliverGridDelegateWithFixedCrossAxisCountNative) as unknown as typeof _SliverGridDelegateWithFixedCrossAxisCountFactory & (new(options: {crossAxisCount: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) => _SliverGridDelegateWithFixedCrossAxisCountNative);
export const SliverGridDelegateWithFixedCrossAxisCount: typeof _SliverGridDelegateWithFixedCrossAxisCountBinding & _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount> & _FlaxDartType<SliverGridDelegateWithFixedCrossAxisCount, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false]> = _flaxBindInstanceType<SliverGridDelegateWithFixedCrossAxisCount, typeof _SliverGridDelegateWithFixedCrossAxisCountBinding>(_SliverGridDelegateWithFixedCrossAxisCountBinding, "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", ["flax.core/sdk_rendering#type:SliverGridDelegate","dart:core::Object"]) as typeof _SliverGridDelegateWithFixedCrossAxisCountBinding & _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount> & _FlaxDartType<SliverGridDelegateWithFixedCrossAxisCount, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "crossAxisCount" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
