// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaskFilter extends Readonly<{ "__flaxBound:dart:ui::MaskFilter": readonly [] }> { readonly __MaskFilter: unique symbol;
readonly [_flaxDartTypeValue]: MaskFilter;

}
defineObject("flax.core/sdk_dart_ui#type:MaskFilter", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:MaskFilter", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _MaskFilterProxy = {type: "flax.core/sdk_dart_ui#type:MaskFilter", parameters: [{"name":"_style","required":true,"positional":true},{"name":"_sigma","required":true,"positional":true}], constructors: {"blur":[{"name":"_style","required":true,"positional":true},{"name":"_sigma","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["toString"]} as const;
export interface MaskFilter {
readonly [_flaxDartTypeValue]: MaskFilter;

toString(): string;
}
export abstract class MaskFilter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaskFilter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaskFilter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:MaskFilter", readonly [], false];
constructor(_style: upstream0.BlurStyle, _sigma: number) { super(_MaskFilterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaskFilter.prototype, _MaskFilterProxy);
export namespace MaskFilter { export function implement(args: [_style: upstream0.BlurStyle, _sigma: number], implementation: {}): MaskFilter {
return constructProxy(_MaskFilterProxy, args, implementation) as MaskFilter; } }
_flaxBindInstanceType<MaskFilter, typeof MaskFilter>(MaskFilter, "flax.core/sdk_dart_ui#type:MaskFilter", ["dart:core::Object"]);
