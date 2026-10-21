// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { _flaxMemberParameters76, _flaxMemberParameters1, _flaxMemberParameters357 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGridGeometry extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridGeometry": readonly [] }> { readonly __SliverGridGeometry: unique symbol;
readonly [_flaxDartTypeValue]: SliverGridGeometry;

readonly scrollOffset: number;
readonly crossAxisOffset: number;
readonly mainAxisExtent: number;
readonly crossAxisExtent: number;
readonly trailingScrollOffset: number;
getBoxConstraints(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream0.BoxConstraints;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:SliverGridGeometry", ["scrollOffset","crossAxisOffset","mainAxisExtent","crossAxisExtent","trailingScrollOffset"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGridGeometry", "object", {"getBoxConstraints":_flaxMemberParameters76,"toString":_flaxMemberParameters1}, {}), []);
export function _SliverGridGeometryFactory(options: { scrollOffset: number; crossAxisOffset: number; mainAxisExtent: number; crossAxisExtent: number }): SliverGridGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverGridGeometry", "", [{"name":"scrollOffset","required":true},{"name":"crossAxisOffset","required":true},{"name":"mainAxisExtent","required":true},{"name":"crossAxisExtent","required":true}], [], options) as SliverGridGeometry;
}
const _SliverGridGeometryProxy = {type: "flax.core/sdk_rendering#type:SliverGridGeometry", parameters: _flaxMemberParameters357, constructors: {"": _flaxMemberParameters357}, methods: {"getBoxConstraints":_flaxMemberParameters76,"toString":_flaxMemberParameters1}, getters: ["scrollOffset","crossAxisOffset","mainAxisExtent","crossAxisExtent","trailingScrollOffset"], setters: [], contextMembers: [], superMembers: ["get:scrollOffset","get:crossAxisOffset","get:mainAxisExtent","get:crossAxisExtent","get:trailingScrollOffset","getBoxConstraints","toString"]} as const;
export interface _SliverGridGeometryNative extends SliverGridGeometry {
readonly [_flaxDartTypeValue]: _SliverGridGeometryNative;

getBoxConstraints(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream0.BoxConstraints;
toString(): string;
get scrollOffset(): number;
get crossAxisOffset(): number;
get mainAxisExtent(): number;
get crossAxisExtent(): number;
get trailingScrollOffset(): number;
}
export abstract class _SliverGridGeometryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGridGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridGeometry", readonly [], false];
constructor(options: {scrollOffset: number; crossAxisOffset: number; mainAxisExtent: number; crossAxisExtent: number}) { super(_SliverGridGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverGridGeometryNative.prototype, _SliverGridGeometryProxy);
export namespace _SliverGridGeometryFactory { export function implement(args: [options: {scrollOffset: number; crossAxisOffset: number; mainAxisExtent: number; crossAxisExtent: number}], implementation: {}): SliverGridGeometry {
return constructProxy(_SliverGridGeometryProxy, args, implementation) as SliverGridGeometry; } }
const _SliverGridGeometryBinding = _flaxProxyFactory(_SliverGridGeometryFactory, _SliverGridGeometryNative) as unknown as typeof _SliverGridGeometryFactory & (new(options: {scrollOffset: number; crossAxisOffset: number; mainAxisExtent: number; crossAxisExtent: number}) => _SliverGridGeometryNative);
export const SliverGridGeometry: typeof _SliverGridGeometryBinding & _FlaxInstanceType<SliverGridGeometry> & _FlaxDartType<SliverGridGeometry, readonly ["class", "flax.core/sdk_rendering#type:SliverGridGeometry", readonly [], false]> = _flaxBindInstanceType<SliverGridGeometry, typeof _SliverGridGeometryBinding>(_SliverGridGeometryBinding, "flax.core/sdk_rendering#type:SliverGridGeometry", ["dart:core::Object"]) as typeof _SliverGridGeometryBinding & _FlaxInstanceType<SliverGridGeometry> & _FlaxDartType<SliverGridGeometry, readonly ["class", "flax.core/sdk_rendering#type:SliverGridGeometry", readonly [], false]>;
