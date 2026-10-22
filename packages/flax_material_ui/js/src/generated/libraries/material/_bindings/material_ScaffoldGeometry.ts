// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters277 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaffoldGeometry extends Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldGeometry": readonly [] }> { readonly __ScaffoldGeometry: unique symbol;
readonly [_flaxDartTypeValue]: ScaffoldGeometry;

readonly bottomNavigationBarTop: number | null;
readonly floatingActionButtonArea: upstream0.Rect | null;
copyWith(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}): ScaffoldGeometry;
}
defineObject("flax.material/material#type:ScaffoldGeometry", ["bottomNavigationBarTop","floatingActionButtonArea"], [], _flaxBindingMethods("flax.material/material#type:ScaffoldGeometry", "object", {"copyWith":_flaxMemberParameters277}, {}), []);
export function _ScaffoldGeometryFactory(options: { bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined } = {}): ScaffoldGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ScaffoldGeometry", "", _flaxMemberParameters277, [], options) as ScaffoldGeometry;
}
const _ScaffoldGeometryProxy = {type: "flax.material/material#type:ScaffoldGeometry", parameters: _flaxMemberParameters277, constructors: {"": _flaxMemberParameters277}, methods: {"copyWith":_flaxMemberParameters277}, getters: ["bottomNavigationBarTop","floatingActionButtonArea"], setters: [], contextMembers: [], superMembers: ["get:bottomNavigationBarTop","get:floatingActionButtonArea","copyWith"]} as const;
export interface _ScaffoldGeometryNative extends ScaffoldGeometry {
readonly [_flaxDartTypeValue]: _ScaffoldGeometryNative;

copyWith(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}): ScaffoldGeometry;
get bottomNavigationBarTop(): number | null;
get floatingActionButtonArea(): upstream0.Rect | null;
}
export abstract class _ScaffoldGeometryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaffoldGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScaffoldGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ScaffoldGeometry", readonly [], false];
constructor(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_ScaffoldGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScaffoldGeometryNative.prototype, _ScaffoldGeometryProxy);
export namespace _ScaffoldGeometryFactory { export function implement(args: [options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): ScaffoldGeometry {
return constructProxy(_ScaffoldGeometryProxy, args, implementation) as ScaffoldGeometry; } }
const _ScaffoldGeometryBinding = _flaxProxyFactory(_ScaffoldGeometryFactory, _ScaffoldGeometryNative) as unknown as typeof _ScaffoldGeometryFactory & (new(options?: {bottomNavigationBarTop?: number | null | undefined; floatingActionButtonArea?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) => _ScaffoldGeometryNative);
export const ScaffoldGeometry: typeof _ScaffoldGeometryBinding & _FlaxInstanceType<ScaffoldGeometry> & _FlaxDartType<ScaffoldGeometry, readonly ["class", "flax.material/material#type:ScaffoldGeometry", readonly [], false]> = _flaxBindInstanceType<ScaffoldGeometry, typeof _ScaffoldGeometryBinding>(_ScaffoldGeometryBinding, "flax.material/material#type:ScaffoldGeometry", ["dart:core::Object"]) as typeof _ScaffoldGeometryBinding & _FlaxInstanceType<ScaffoldGeometry> & _FlaxDartType<ScaffoldGeometry, readonly ["class", "flax.material/material#type:ScaffoldGeometry", readonly [], false]>;
