// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"bottomNavigationBarTop","required":false,"positional":false},{"name":"floatingActionButtonArea","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaffoldGeometry extends Readonly<{ "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldGeometry": readonly [] }> { readonly __ScaffoldGeometry: unique symbol;
readonly [_flaxDartTypeValue]: ScaffoldGeometry;

}
defineObject("flax.core/sdk_material#type:ScaffoldGeometry", ["bottomNavigationBarTop","floatingActionButtonArea"], [], _flaxBindingMethods("flax.core/sdk_material#type:ScaffoldGeometry", "object", {"copyWith":_flaxMemberParameters0}, {}), []);
const _ScaffoldGeometryProxy = {type: "flax.core/sdk_material#type:ScaffoldGeometry", parameters: [{"name":"bottomNavigationBarTop","required":false,"positional":false},{"name":"floatingActionButtonArea","required":false,"positional":false}], constructors: {"":[{"name":"bottomNavigationBarTop","required":false,"positional":false},{"name":"floatingActionButtonArea","required":false,"positional":false}]}, methods: {"copyWith":_flaxMemberParameters0}, getters: ["bottomNavigationBarTop","floatingActionButtonArea"], setters: [], contextMembers: [], superMembers: ["get:bottomNavigationBarTop","get:floatingActionButtonArea","copyWith"]} as const;
export interface ScaffoldGeometry {
readonly [_flaxDartTypeValue]: ScaffoldGeometry;

copyWith(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}): ScaffoldGeometry;
get bottomNavigationBarTop(): number | null;
get floatingActionButtonArea(): upstream0.Rect | null;
}
export abstract class ScaffoldGeometry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaffoldGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScaffoldGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ScaffoldGeometry", readonly [], false];
constructor(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_ScaffoldGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScaffoldGeometry.prototype, _ScaffoldGeometryProxy);
export namespace ScaffoldGeometry { export function implement(args: [options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): ScaffoldGeometry {
return constructProxy(_ScaffoldGeometryProxy, args, implementation) as ScaffoldGeometry; } }
_flaxBindInstanceType<ScaffoldGeometry, typeof ScaffoldGeometry>(ScaffoldGeometry, "flax.core/sdk_material#type:ScaffoldGeometry", ["dart:core::Object"]);
