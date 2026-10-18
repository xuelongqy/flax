// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PathOperation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PathOperation">, Readonly<{ "__flaxBound:dart:ui::PathOperation": readonly [] }> { readonly __PathOperation: unique symbol;
readonly [_flaxDartTypeValue]: PathOperation;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PathOperation", ["difference","intersect","union","xor","reverseDifference"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PathOperation_api = {
difference: enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "difference"),
intersect: enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "intersect"),
union: enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "union"),
xor: enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "xor"),
reverseDifference: enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "reverseDifference"),
values: Object.freeze([enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "difference"), enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "intersect"), enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "union"), enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "xor"), enumValue<PathOperation>("flax.core/sdk_dart_ui#type:PathOperation", "reverseDifference")]),
};
export const PathOperation = Object.freeze(_flaxBindInstanceType<PathOperation, typeof _flaxEnum_PathOperation_api>(_flaxEnum_PathOperation_api, "flax.core/sdk_dart_ui#type:PathOperation", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PathOperation_api & _FlaxInstanceType<PathOperation> & _FlaxDartType<PathOperation, readonly ["class", "flax.core/sdk_dart_ui#type:PathOperation", readonly [], false]>);
