// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultitouchDragStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/gestures/recognizer.dart::MultitouchDragStrategy">, Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::MultitouchDragStrategy": readonly [] }> { readonly __MultitouchDragStrategy: unique symbol;
readonly [_flaxDartTypeValue]: MultitouchDragStrategy;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_gestures#type:MultitouchDragStrategy", ["latestPointer","averageBoundaryPointers","sumAllPointers"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_MultitouchDragStrategy_api = {
latestPointer: enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "latestPointer"),
averageBoundaryPointers: enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "averageBoundaryPointers"),
sumAllPointers: enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "sumAllPointers"),
values: Object.freeze([enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "latestPointer"), enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "averageBoundaryPointers"), enumValue<MultitouchDragStrategy>("flax.core/sdk_gestures#type:MultitouchDragStrategy", "sumAllPointers")]),
};
export const MultitouchDragStrategy = Object.freeze(_flaxBindInstanceType<MultitouchDragStrategy, typeof _flaxEnum_MultitouchDragStrategy_api>(_flaxEnum_MultitouchDragStrategy_api, "flax.core/sdk_gestures#type:MultitouchDragStrategy", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_MultitouchDragStrategy_api & _FlaxInstanceType<MultitouchDragStrategy> & _FlaxDartType<MultitouchDragStrategy, readonly ["class", "flax.core/sdk_gestures#type:MultitouchDragStrategy", readonly [], false]>);
