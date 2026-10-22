// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters51, _flaxMemberParameters0, _flaxMemberParameters52, _flaxMemberParameters48 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontVariation extends Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> { readonly __FontVariation: unique symbol;
readonly [_flaxDartTypeValue]: FontVariation;

readonly axis: string;
readonly value: number;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:FontVariation", ["axis","value"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FontVariation", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _FontVariationFactory(axis: string, value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "", [{"name":"axis","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [axis, value], {}) as FontVariation;
}
export namespace _FontVariationFactory {
export function italic(value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "italic", [{"name":"value","required":true,"positional":true}], [value], {}) as FontVariation;
}
}
export namespace _FontVariationFactory {
export function opticalSize(value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "opticalSize", [{"name":"value","required":true,"positional":true}], [value], {}) as FontVariation;
}
}
export namespace _FontVariationFactory {
export function slant(value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "slant", [{"name":"value","required":true,"positional":true}], [value], {}) as FontVariation;
}
}
export namespace _FontVariationFactory {
export function width(value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "width", [{"name":"value","required":true,"positional":true}], [value], {}) as FontVariation;
}
}
export namespace _FontVariationFactory {
export function weight(value: number): FontVariation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontVariation", "weight", [{"name":"value","required":true,"positional":true}], [value], {}) as FontVariation;
}
}
const _FontVariationProxy = {type: "flax.core/sdk_dart_ui#type:FontVariation", parameters: _flaxMemberParameters52, constructors: {"": _flaxMemberParameters52,"italic": _flaxMemberParameters48,"opticalSize": _flaxMemberParameters48,"slant": _flaxMemberParameters48,"width": _flaxMemberParameters48,"weight": _flaxMemberParameters48}, methods: {"toString":_flaxMemberParameters0}, getters: ["axis","value"], setters: [], contextMembers: [], superMembers: ["get:axis","get:value","toString"]} as const;
export interface _FontVariationNative extends FontVariation {
readonly [_flaxDartTypeValue]: _FontVariationNative;
readonly [_flaxDartConstructors]?: {"": (axis: string, value: number) => void;"italic": (value: number) => void;"opticalSize": (value: number) => void;"slant": (value: number) => void;"width": (value: number) => void;"weight": (value: number) => void;};

toString(): string;
get axis(): string;
get value(): number;
}
export abstract class _FontVariationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontVariation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FontVariation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false];
constructor(axis: string, value: number); constructor(call: _FlaxProxySuper<_FontVariationNative>); constructor(...args: unknown[]) { super(_FontVariationProxy, args); }
}
_flaxDefineProxyBase(_FontVariationNative.prototype, _FontVariationProxy);
export namespace _FontVariationFactory { export function implement(args: [axis: string, value: number], implementation: {}): FontVariation {
return constructProxy(_FontVariationProxy, args, implementation) as FontVariation; } }
const _FontVariationBinding = _flaxProxyFactory(_FontVariationFactory, _FontVariationNative) as unknown as typeof _FontVariationFactory & (new(axis: string, value: number) => _FontVariationNative) & (new(call: _FlaxProxySuper<_FontVariationNative>) => _FontVariationNative);
export namespace _FontVariationFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> | null, t: number): FontVariation | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:FontVariation.lerp", [a, b, t], _flaxMemberParameters51);
return _flaxResult as FontVariation | null;
} }
export const FontVariation: typeof _FontVariationBinding & _FlaxInstanceType<FontVariation> & _FlaxDartType<FontVariation, readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false]> = _flaxBindInstanceType<FontVariation, typeof _FontVariationBinding>(_FontVariationBinding, "flax.core/sdk_dart_ui#type:FontVariation", ["dart:core::Object"]) as typeof _FontVariationBinding & _FlaxInstanceType<FontVariation> & _FlaxDartType<FontVariation, readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false]>;
