// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextDecorationStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TextDecorationStyle">, Readonly<{ "__flaxBound:dart:ui::TextDecorationStyle": readonly [] }> { readonly __TextDecorationStyle: unique symbol;
readonly [_flaxDartTypeValue]: TextDecorationStyle;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:TextDecorationStyle", ["solid","double","dotted","dashed","wavy"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextDecorationStyle_api = {
solid: enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "solid"),
double: enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "double"),
dotted: enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "dotted"),
dashed: enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "dashed"),
wavy: enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "wavy"),
values: Object.freeze([enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "solid"), enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "double"), enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "dotted"), enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "dashed"), enumValue<TextDecorationStyle>("flax.core/sdk_dart_ui#type:TextDecorationStyle", "wavy")]),
};
export const TextDecorationStyle = Object.freeze(_flaxBindInstanceType<TextDecorationStyle, typeof _flaxEnum_TextDecorationStyle_api>(_flaxEnum_TextDecorationStyle_api, "flax.core/sdk_dart_ui#type:TextDecorationStyle", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextDecorationStyle_api & _FlaxInstanceType<TextDecorationStyle> & _FlaxDartType<TextDecorationStyle, readonly ["class", "flax.core/sdk_dart_ui#type:TextDecorationStyle", readonly [], false]>);
