// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters24, _flaxMemberParameters2, _flaxMemberParameters102 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LinearBorderEdge extends Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> { readonly __LinearBorderEdge: unique symbol;
readonly [_flaxDartTypeValue]: LinearBorderEdge;

readonly size: number;
readonly alignment: number;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:LinearBorderEdge", ["size","alignment"], [], _flaxBindingMethods("flax.core/sdk_painting#type:LinearBorderEdge", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _LinearBorderEdgeFactory(options: { size?: number | undefined; alignment?: number | undefined } = {}): LinearBorderEdge {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorderEdge", "", [{"name":"size"},{"name":"alignment"}], [], options) as LinearBorderEdge;
}
const _LinearBorderEdgeProxy = {type: "flax.core/sdk_painting#type:LinearBorderEdge", parameters: _flaxMemberParameters102, constructors: {"": _flaxMemberParameters102}, methods: {"toString":_flaxMemberParameters2}, getters: ["size","alignment"], setters: [], contextMembers: [], superMembers: ["get:size","get:alignment","toString"]} as const;
export interface _LinearBorderEdgeNative extends LinearBorderEdge {
readonly [_flaxDartTypeValue]: _LinearBorderEdgeNative;

toString(): string;
get size(): number;
get alignment(): number;
}
export abstract class _LinearBorderEdgeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorderEdge>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LinearBorderEdge;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false];
constructor(options?: {size?: number | undefined; alignment?: number | undefined}) { super(_LinearBorderEdgeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LinearBorderEdgeNative.prototype, _LinearBorderEdgeProxy);
export namespace _LinearBorderEdgeFactory { export function implement(args: [options?: {size?: number | undefined; alignment?: number | undefined}], implementation: {}): LinearBorderEdge {
return constructProxy(_LinearBorderEdgeProxy, args, implementation) as LinearBorderEdge; } }
const _LinearBorderEdgeBinding = _flaxProxyFactory(_LinearBorderEdgeFactory, _LinearBorderEdgeNative) as unknown as typeof _LinearBorderEdgeFactory & (new(options?: {size?: number | undefined; alignment?: number | undefined}) => _LinearBorderEdgeNative);
export namespace _LinearBorderEdgeFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null, t: number): LinearBorderEdge | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:LinearBorderEdge.lerp", [a, b, t], _flaxMemberParameters24);
return _flaxResult as LinearBorderEdge | null;
} }
export const LinearBorderEdge: typeof _LinearBorderEdgeBinding & _FlaxInstanceType<LinearBorderEdge> & _FlaxDartType<LinearBorderEdge, readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false]> = _flaxBindInstanceType<LinearBorderEdge, typeof _LinearBorderEdgeBinding>(_LinearBorderEdgeBinding, "flax.core/sdk_painting#type:LinearBorderEdge", ["dart:core::Object"]) as typeof _LinearBorderEdgeBinding & _FlaxInstanceType<LinearBorderEdge> & _FlaxDartType<LinearBorderEdge, readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false]>;
