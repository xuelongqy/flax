// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"feature","required":true,"positional":true},{"name":"value","positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontFeature extends Readonly<{ "__flaxBound:dart:ui::FontFeature": readonly [] }> { readonly __FontFeature: unique symbol;
readonly [_flaxDartTypeValue]: FontFeature;

}
defineObject("flax.core/sdk_dart_ui#type:FontFeature", ["feature","value"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FontFeature", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _FontFeatureProxy = {type: "flax.core/sdk_dart_ui#type:FontFeature", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["feature","value"], setters: [], contextMembers: [], superMembers: ["get:feature","get:value","toString"]} as const;
export interface FontFeature {
readonly [_flaxDartTypeValue]: FontFeature;

toString(): string;
get feature(): string;
get value(): number;
}
export abstract class FontFeature extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontFeature>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FontFeature;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false];
constructor(feature: string, value?: number) { super(_FontFeatureProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FontFeature.prototype, _FontFeatureProxy);
export namespace FontFeature { export function implement(args: [feature: string, value?: number], implementation: {}): FontFeature {
return constructProxy(_FontFeatureProxy, args, implementation) as FontFeature; } }
_flaxBindInstanceType<FontFeature, typeof FontFeature>(FontFeature, "flax.core/sdk_dart_ui#type:FontFeature", ["dart:core::Object"]);
