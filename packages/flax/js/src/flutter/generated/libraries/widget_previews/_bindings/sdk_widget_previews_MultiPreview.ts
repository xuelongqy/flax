// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widget_previews/_bindings/sdk_widget_previews.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultiPreview extends Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::MultiPreview": readonly [] }> { readonly __MultiPreview: unique symbol;
readonly [_flaxDartTypeValue]: MultiPreview;

}
defineObject("flax.core/sdk_widget_previews#type:MultiPreview", ["previews"], [], _flaxBindingMethods("flax.core/sdk_widget_previews#type:MultiPreview", "object", {"transform":_flaxMemberParameters0}, {}), []);
const _MultiPreviewProxy = {type: "flax.core/sdk_widget_previews#type:MultiPreview", parameters: [], constructors: {"":[]}, methods: {"transform":_flaxMemberParameters0}, getters: ["previews"], setters: [], contextMembers: [], superMembers: ["transform"]} as const;
export interface MultiPreview {
readonly [_flaxDartTypeValue]: MultiPreview;

transform(): DartList<upstream0.Preview>;
}
export abstract class MultiPreview extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiPreview>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MultiPreview;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:MultiPreview", readonly [], false];
constructor() { super(_MultiPreviewProxy, Array.from(arguments)); }
abstract get previews(): DartList<upstream0.Preview>;
}
_flaxDefineProxyBase(MultiPreview.prototype, _MultiPreviewProxy);
export namespace MultiPreview { export function implement(args: [], implementation: {get previews(): DartListInput<upstream0.Preview, Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::Preview": readonly [] }>>}): MultiPreview {
return constructProxy(_MultiPreviewProxy, args, implementation) as MultiPreview; } }
_flaxBindInstanceType<MultiPreview, typeof MultiPreview>(MultiPreview, "flax.core/sdk_widget_previews#type:MultiPreview", ["dart:core::Object"]);
