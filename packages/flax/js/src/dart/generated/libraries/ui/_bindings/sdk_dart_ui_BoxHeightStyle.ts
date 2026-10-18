// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxHeightStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BoxHeightStyle">, Readonly<{ "__flaxBound:dart:ui::BoxHeightStyle": readonly [] }> { readonly __BoxHeightStyle: unique symbol;
readonly [_flaxDartTypeValue]: BoxHeightStyle;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:BoxHeightStyle", ["tight","max","includeLineSpacingMiddle","includeLineSpacingTop","includeLineSpacingBottom","strut"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_BoxHeightStyle_api = {
tight: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "tight"),
max: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "max"),
includeLineSpacingMiddle: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingMiddle"),
includeLineSpacingTop: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingTop"),
includeLineSpacingBottom: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingBottom"),
strut: enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "strut"),
values: Object.freeze([enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "tight"), enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "max"), enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingMiddle"), enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingTop"), enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "includeLineSpacingBottom"), enumValue<BoxHeightStyle>("flax.core/sdk_dart_ui#type:BoxHeightStyle", "strut")]),
};
export const BoxHeightStyle = Object.freeze(_flaxBindInstanceType<BoxHeightStyle, typeof _flaxEnum_BoxHeightStyle_api>(_flaxEnum_BoxHeightStyle_api, "flax.core/sdk_dart_ui#type:BoxHeightStyle", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_BoxHeightStyle_api & _FlaxInstanceType<BoxHeightStyle> & _FlaxDartType<BoxHeightStyle, readonly ["class", "flax.core/sdk_dart_ui#type:BoxHeightStyle", readonly [], false]>);
