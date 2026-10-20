// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { _flaxMemberParameters54, _flaxMemberParameters340, _flaxMemberParameters71 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridDelegateWithMaxCrossAxisExtent extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }> { readonly __SliverGridDelegateWithMaxCrossAxisExtent: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;

readonly maxCrossAxisExtent: number;
readonly mainAxisSpacing: number;
readonly crossAxisSpacing: number;
readonly childAspectRatio: number;
readonly mainAxisExtent: number | null;
getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", ["maxCrossAxisExtent","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", "object", {"shouldRelayout":_flaxMemberParameters54}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverGridDelegate");
export function _SliverGridDelegateWithMaxCrossAxisExtentFactory(options: { maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined }): SliverGridDelegateWithMaxCrossAxisExtent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", "", [{"name":"maxCrossAxisExtent","required":true},{"name":"mainAxisSpacing"},{"name":"crossAxisSpacing"},{"name":"childAspectRatio"},{"name":"mainAxisExtent"}], [], options) as SliverGridDelegateWithMaxCrossAxisExtent;
}
const _SliverGridDelegateWithMaxCrossAxisExtentProxy = {type: "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", parameters: _flaxMemberParameters340, constructors: {"": _flaxMemberParameters340}, methods: {"getLayout":_flaxMemberParameters71,"shouldRelayout":_flaxMemberParameters54}, getters: ["maxCrossAxisExtent","mainAxisSpacing","crossAxisSpacing","childAspectRatio","mainAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:maxCrossAxisExtent","get:mainAxisSpacing","get:crossAxisSpacing","get:childAspectRatio","get:mainAxisExtent","getLayout","shouldRelayout"]} as const;
export interface _SliverGridDelegateWithMaxCrossAxisExtentNative extends SliverGridDelegateWithMaxCrossAxisExtent {
readonly [_flaxDartTypeValue]: _SliverGridDelegateWithMaxCrossAxisExtentNative;

getLayout(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.SliverGridLayout;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>): boolean;
get maxCrossAxisExtent(): number;
get mainAxisSpacing(): number;
get crossAxisSpacing(): number;
get childAspectRatio(): number;
get mainAxisExtent(): number | null;
}
export abstract class _SliverGridDelegateWithMaxCrossAxisExtentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false];
constructor(options: {maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) { super(_SliverGridDelegateWithMaxCrossAxisExtentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverGridDelegateWithMaxCrossAxisExtentNative.prototype, _SliverGridDelegateWithMaxCrossAxisExtentProxy);
export namespace _SliverGridDelegateWithMaxCrossAxisExtentFactory { export function implement(args: [options: {maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}], implementation: {}): SliverGridDelegateWithMaxCrossAxisExtent {
return constructProxy(_SliverGridDelegateWithMaxCrossAxisExtentProxy, args, implementation) as SliverGridDelegateWithMaxCrossAxisExtent; } }
const _SliverGridDelegateWithMaxCrossAxisExtentBinding = _flaxProxyFactory(_SliverGridDelegateWithMaxCrossAxisExtentFactory, _SliverGridDelegateWithMaxCrossAxisExtentNative) as unknown as typeof _SliverGridDelegateWithMaxCrossAxisExtentFactory & (new(options: {maxCrossAxisExtent: number; mainAxisSpacing?: number | undefined; crossAxisSpacing?: number | undefined; childAspectRatio?: number | undefined; mainAxisExtent?: number | null | undefined}) => _SliverGridDelegateWithMaxCrossAxisExtentNative);
export const SliverGridDelegateWithMaxCrossAxisExtent: typeof _SliverGridDelegateWithMaxCrossAxisExtentBinding & _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent> & _FlaxDartType<SliverGridDelegateWithMaxCrossAxisExtent, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false]> = _flaxBindInstanceType<SliverGridDelegateWithMaxCrossAxisExtent, typeof _SliverGridDelegateWithMaxCrossAxisExtentBinding>(_SliverGridDelegateWithMaxCrossAxisExtentBinding, "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", ["flax.core/sdk_rendering#type:SliverGridDelegate","dart:core::Object"]) as typeof _SliverGridDelegateWithMaxCrossAxisExtentBinding & _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent> & _FlaxDartType<SliverGridDelegateWithMaxCrossAxisExtent, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "maxCrossAxisExtent" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
