// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEventType">, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEventType": readonly [] }> { readonly __SelectionEventType: unique symbol;
readonly [_flaxDartTypeValue]: SelectionEventType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:SelectionEventType", ["startEdgeUpdate","endEdgeUpdate","clear","selectAll","selectWord","selectParagraph","granularlyExtendSelection","directionallyExtendSelection"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SelectionEventType_api = {
startEdgeUpdate: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "startEdgeUpdate"),
endEdgeUpdate: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "endEdgeUpdate"),
clear: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "clear"),
selectAll: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectAll"),
selectWord: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectWord"),
selectParagraph: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectParagraph"),
granularlyExtendSelection: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "granularlyExtendSelection"),
directionallyExtendSelection: enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "directionallyExtendSelection"),
values: Object.freeze([enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "startEdgeUpdate"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "endEdgeUpdate"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "clear"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectAll"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectWord"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "selectParagraph"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "granularlyExtendSelection"), enumValue<SelectionEventType>("flax.core/sdk_rendering#type:SelectionEventType", "directionallyExtendSelection")]),
};
export const SelectionEventType = Object.freeze(_flaxBindInstanceType<SelectionEventType, typeof _flaxEnum_SelectionEventType_api>(_flaxEnum_SelectionEventType_api, "flax.core/sdk_rendering#type:SelectionEventType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SelectionEventType_api & _FlaxInstanceType<SelectionEventType> & _FlaxDartType<SelectionEventType, readonly ["class", "flax.core/sdk_rendering#type:SelectionEventType", readonly [], false]>);
