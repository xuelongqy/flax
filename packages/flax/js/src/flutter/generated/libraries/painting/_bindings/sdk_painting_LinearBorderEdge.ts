// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"size"},{"name":"alignment"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LinearBorderEdge extends Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> { readonly __LinearBorderEdge: unique symbol;
readonly [_flaxDartTypeValue]: LinearBorderEdge;

}
defineObject("flax.core/sdk_painting#type:LinearBorderEdge", ["size","alignment"], [], _flaxBindingMethods("flax.core/sdk_painting#type:LinearBorderEdge", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _LinearBorderEdgeProxy = {type: "flax.core/sdk_painting#type:LinearBorderEdge", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["size","alignment"], setters: [], contextMembers: [], superMembers: ["get:size","get:alignment","toString"]} as const;
export interface LinearBorderEdge {
readonly [_flaxDartTypeValue]: LinearBorderEdge;

toString(): string;
get size(): number;
get alignment(): number;
}
export abstract class LinearBorderEdge extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorderEdge>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LinearBorderEdge;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false];
constructor(options?: {size?: number | undefined; alignment?: number | undefined}) { super(_LinearBorderEdgeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LinearBorderEdge.prototype, _LinearBorderEdgeProxy);
export namespace LinearBorderEdge { export function implement(args: [options?: {size?: number | undefined; alignment?: number | undefined}], implementation: {}): LinearBorderEdge {
return constructProxy(_LinearBorderEdgeProxy, args, implementation) as LinearBorderEdge; } }
export namespace LinearBorderEdge { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null, t: number): LinearBorderEdge | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:LinearBorderEdge.lerp", [a, b, t]);
return _flaxResult as LinearBorderEdge | null;
} }
_flaxBindInstanceType<LinearBorderEdge, typeof LinearBorderEdge>(LinearBorderEdge, "flax.core/sdk_painting#type:LinearBorderEdge", ["dart:core::Object"]);
