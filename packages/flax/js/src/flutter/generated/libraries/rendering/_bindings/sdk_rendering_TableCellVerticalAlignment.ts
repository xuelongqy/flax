// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TableCellVerticalAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/table.dart::TableCellVerticalAlignment">, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableCellVerticalAlignment": readonly [] }> { readonly __TableCellVerticalAlignment: unique symbol;
readonly [_flaxDartTypeValue]: TableCellVerticalAlignment;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:TableCellVerticalAlignment", ["top","middle","bottom","baseline","fill","intrinsicHeight"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TableCellVerticalAlignment_api = {
top: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "top"),
middle: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "middle"),
bottom: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "bottom"),
baseline: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "baseline"),
fill: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "fill"),
intrinsicHeight: enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "intrinsicHeight"),
values: Object.freeze([enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "top"), enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "middle"), enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "bottom"), enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "baseline"), enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "fill"), enumValue<TableCellVerticalAlignment>("flax.core/sdk_rendering#type:TableCellVerticalAlignment", "intrinsicHeight")]),
};
export const TableCellVerticalAlignment = Object.freeze(_flaxBindInstanceType<TableCellVerticalAlignment, typeof _flaxEnum_TableCellVerticalAlignment_api>(_flaxEnum_TableCellVerticalAlignment_api, "flax.core/sdk_rendering#type:TableCellVerticalAlignment", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TableCellVerticalAlignment_api & _FlaxInstanceType<TableCellVerticalAlignment> & _FlaxDartType<TableCellVerticalAlignment, readonly ["class", "flax.core/sdk_rendering#type:TableCellVerticalAlignment", readonly [], false]>);
