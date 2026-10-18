// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlaceholderAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PlaceholderAlignment">, Readonly<{ "__flaxBound:dart:ui::PlaceholderAlignment": readonly [] }> { readonly __PlaceholderAlignment: unique symbol;
readonly [_flaxDartTypeValue]: PlaceholderAlignment;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PlaceholderAlignment", ["baseline","aboveBaseline","belowBaseline","top","bottom","middle"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PlaceholderAlignment_api = {
baseline: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "baseline"),
aboveBaseline: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "aboveBaseline"),
belowBaseline: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "belowBaseline"),
top: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "top"),
bottom: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "bottom"),
middle: enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "middle"),
values: Object.freeze([enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "baseline"), enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "aboveBaseline"), enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "belowBaseline"), enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "top"), enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "bottom"), enumValue<PlaceholderAlignment>("flax.core/sdk_dart_ui#type:PlaceholderAlignment", "middle")]),
};
export const PlaceholderAlignment = Object.freeze(_flaxBindInstanceType<PlaceholderAlignment, typeof _flaxEnum_PlaceholderAlignment_api>(_flaxEnum_PlaceholderAlignment_api, "flax.core/sdk_dart_ui#type:PlaceholderAlignment", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PlaceholderAlignment_api & _FlaxInstanceType<PlaceholderAlignment> & _FlaxDartType<PlaceholderAlignment, readonly ["class", "flax.core/sdk_dart_ui#type:PlaceholderAlignment", readonly [], false]>);
