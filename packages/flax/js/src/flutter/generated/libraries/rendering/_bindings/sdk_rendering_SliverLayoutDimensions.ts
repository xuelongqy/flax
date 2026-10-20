// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters1, _flaxMemberParameters346 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLayoutDimensions extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [] }> { readonly __SliverLayoutDimensions: unique symbol;
readonly [_flaxDartTypeValue]: SliverLayoutDimensions;

readonly scrollOffset: number;
readonly precedingScrollExtent: number;
readonly viewportMainAxisExtent: number;
readonly crossAxisExtent: number;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:SliverLayoutDimensions", ["scrollOffset","precedingScrollExtent","viewportMainAxisExtent","crossAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverLayoutDimensions", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _SliverLayoutDimensionsFactory(options: { scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number }): SliverLayoutDimensions {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverLayoutDimensions", "", [{"name":"scrollOffset","required":true},{"name":"precedingScrollExtent","required":true},{"name":"viewportMainAxisExtent","required":true},{"name":"crossAxisExtent","required":true}], [], options) as SliverLayoutDimensions;
}
const _SliverLayoutDimensionsProxy = {type: "flax.core/sdk_rendering#type:SliverLayoutDimensions", parameters: _flaxMemberParameters346, constructors: {"": _flaxMemberParameters346}, methods: {"toString":_flaxMemberParameters1}, getters: ["scrollOffset","precedingScrollExtent","viewportMainAxisExtent","crossAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:scrollOffset","get:precedingScrollExtent","get:viewportMainAxisExtent","get:crossAxisExtent","toString"]} as const;
export interface _SliverLayoutDimensionsNative extends SliverLayoutDimensions {
readonly [_flaxDartTypeValue]: _SliverLayoutDimensionsNative;

toString(): string;
get scrollOffset(): number;
get precedingScrollExtent(): number;
get viewportMainAxisExtent(): number;
get crossAxisExtent(): number;
}
export abstract class _SliverLayoutDimensionsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLayoutDimensions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverLayoutDimensions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false];
constructor(options: {scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number}) { super(_SliverLayoutDimensionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverLayoutDimensionsNative.prototype, _SliverLayoutDimensionsProxy);
export namespace _SliverLayoutDimensionsFactory { export function implement(args: [options: {scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number}], implementation: {}): SliverLayoutDimensions {
return constructProxy(_SliverLayoutDimensionsProxy, args, implementation) as SliverLayoutDimensions; } }
const _SliverLayoutDimensionsBinding = _flaxProxyFactory(_SliverLayoutDimensionsFactory, _SliverLayoutDimensionsNative) as unknown as typeof _SliverLayoutDimensionsFactory & (new(options: {scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number}) => _SliverLayoutDimensionsNative);
export const SliverLayoutDimensions: typeof _SliverLayoutDimensionsBinding & _FlaxInstanceType<SliverLayoutDimensions> & _FlaxDartType<SliverLayoutDimensions, readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false]> = _flaxBindInstanceType<SliverLayoutDimensions, typeof _SliverLayoutDimensionsBinding>(_SliverLayoutDimensionsBinding, "flax.core/sdk_rendering#type:SliverLayoutDimensions", ["dart:core::Object"]) as typeof _SliverLayoutDimensionsBinding & _FlaxInstanceType<SliverLayoutDimensions> & _FlaxDartType<SliverLayoutDimensions, readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false]>;
