// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StepState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/stepper.dart::StepState">, Readonly<{ "__flaxBound:package:flutter/src/material/stepper.dart::StepState": readonly [] }> { readonly __StepState: unique symbol;
readonly [_flaxDartTypeValue]: StepState;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:StepState", ["indexed","editing","complete","disabled","error"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_StepState_api = {
indexed: enumValue<StepState>("flax.core/sdk_material#type:StepState", "indexed"),
editing: enumValue<StepState>("flax.core/sdk_material#type:StepState", "editing"),
complete: enumValue<StepState>("flax.core/sdk_material#type:StepState", "complete"),
disabled: enumValue<StepState>("flax.core/sdk_material#type:StepState", "disabled"),
error: enumValue<StepState>("flax.core/sdk_material#type:StepState", "error"),
values: Object.freeze([enumValue<StepState>("flax.core/sdk_material#type:StepState", "indexed"), enumValue<StepState>("flax.core/sdk_material#type:StepState", "editing"), enumValue<StepState>("flax.core/sdk_material#type:StepState", "complete"), enumValue<StepState>("flax.core/sdk_material#type:StepState", "disabled"), enumValue<StepState>("flax.core/sdk_material#type:StepState", "error")]),
};
export const StepState = Object.freeze(_flaxBindInstanceType<StepState, typeof _flaxEnum_StepState_api>(_flaxEnum_StepState_api, "flax.core/sdk_material#type:StepState", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_StepState_api & _FlaxInstanceType<StepState> & _FlaxDartType<StepState, readonly ["class", "flax.core/sdk_material#type:StepState", readonly [], false]>);
