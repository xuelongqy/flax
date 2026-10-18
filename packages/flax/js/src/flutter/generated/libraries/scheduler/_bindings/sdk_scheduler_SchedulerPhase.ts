// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SchedulerPhase extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerPhase">, Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerPhase": readonly [] }> { readonly __SchedulerPhase: unique symbol;
readonly [_flaxDartTypeValue]: SchedulerPhase;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_scheduler#type:SchedulerPhase", ["idle","transientCallbacks","midFrameMicrotasks","persistentCallbacks","postFrameCallbacks"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SchedulerPhase_api = {
idle: enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "idle"),
transientCallbacks: enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "transientCallbacks"),
midFrameMicrotasks: enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "midFrameMicrotasks"),
persistentCallbacks: enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "persistentCallbacks"),
postFrameCallbacks: enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "postFrameCallbacks"),
values: Object.freeze([enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "idle"), enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "transientCallbacks"), enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "midFrameMicrotasks"), enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "persistentCallbacks"), enumValue<SchedulerPhase>("flax.core/sdk_scheduler#type:SchedulerPhase", "postFrameCallbacks")]),
};
export const SchedulerPhase = Object.freeze(_flaxBindInstanceType<SchedulerPhase, typeof _flaxEnum_SchedulerPhase_api>(_flaxEnum_SchedulerPhase_api, "flax.core/sdk_scheduler#type:SchedulerPhase", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SchedulerPhase_api & _FlaxInstanceType<SchedulerPhase> & _FlaxDartType<SchedulerPhase, readonly ["class", "flax.core/sdk_scheduler#type:SchedulerPhase", readonly [], false]>);
