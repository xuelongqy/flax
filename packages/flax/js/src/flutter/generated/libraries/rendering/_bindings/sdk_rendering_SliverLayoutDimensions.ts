// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters1, _flaxMemberParameters349 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLayoutDimensions extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [] }> { readonly __SliverLayoutDimensions: unique symbol;
readonly [_flaxDartTypeValue]: SliverLayoutDimensions;

}
defineObject("flax.core/sdk_rendering#type:SliverLayoutDimensions", ["scrollOffset","precedingScrollExtent","viewportMainAxisExtent","crossAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverLayoutDimensions", "object", {"toString":_flaxMemberParameters1}, {}), []);
const _SliverLayoutDimensionsProxy = {type: "flax.core/sdk_rendering#type:SliverLayoutDimensions", parameters: _flaxMemberParameters349, constructors: {"": _flaxMemberParameters349}, methods: {"toString":_flaxMemberParameters1}, getters: ["scrollOffset","precedingScrollExtent","viewportMainAxisExtent","crossAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:scrollOffset","get:precedingScrollExtent","get:viewportMainAxisExtent","get:crossAxisExtent","toString"]} as const;
export interface SliverLayoutDimensions {
readonly [_flaxDartTypeValue]: SliverLayoutDimensions;

toString(): string;
get scrollOffset(): number;
get precedingScrollExtent(): number;
get viewportMainAxisExtent(): number;
get crossAxisExtent(): number;
}
export abstract class SliverLayoutDimensions extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLayoutDimensions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverLayoutDimensions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false];
constructor(options: {scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number}) { super(_SliverLayoutDimensionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverLayoutDimensions.prototype, _SliverLayoutDimensionsProxy);
export namespace SliverLayoutDimensions { export function implement(args: [options: {scrollOffset: number; precedingScrollExtent: number; viewportMainAxisExtent: number; crossAxisExtent: number}], implementation: {}): SliverLayoutDimensions {
return constructProxy(_SliverLayoutDimensionsProxy, args, implementation) as SliverLayoutDimensions; } }
_flaxBindInstanceType<SliverLayoutDimensions, typeof SliverLayoutDimensions>(SliverLayoutDimensions, "flax.core/sdk_rendering#type:SliverLayoutDimensions", ["dart:core::Object"]);
