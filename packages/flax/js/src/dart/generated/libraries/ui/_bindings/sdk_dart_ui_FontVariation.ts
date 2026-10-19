// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"axis","required":true,"positional":true},{"name":"value","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontVariation extends Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> { readonly __FontVariation: unique symbol;
readonly [_flaxDartTypeValue]: FontVariation;

}
defineObject("flax.core/sdk_dart_ui#type:FontVariation", ["axis","value"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FontVariation", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _FontVariationProxy = {type: "flax.core/sdk_dart_ui#type:FontVariation", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["axis","value"], setters: [], contextMembers: [], superMembers: ["get:axis","get:value","toString"]} as const;
export interface FontVariation {
readonly [_flaxDartTypeValue]: FontVariation;

toString(): string;
get axis(): string;
get value(): number;
}
export abstract class FontVariation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontVariation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FontVariation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false];
constructor(axis: string, value: number) { super(_FontVariationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FontVariation.prototype, _FontVariationProxy);
export namespace FontVariation { export function implement(args: [axis: string, value: number], implementation: {}): FontVariation {
return constructProxy(_FontVariationProxy, args, implementation) as FontVariation; } }
export namespace FontVariation { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::FontVariation": readonly [] }> | null, t: number): FontVariation | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:FontVariation.lerp", [a, b, t]);
return _flaxResult as FontVariation | null;
} }
_flaxBindInstanceType<FontVariation, typeof FontVariation>(FontVariation, "flax.core/sdk_dart_ui#type:FontVariation", ["dart:core::Object"]);
