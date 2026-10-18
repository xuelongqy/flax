// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PerformanceOverlayOption extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/performance_overlay.dart::PerformanceOverlayOption">, Readonly<{ "__flaxBound:package:flutter/src/rendering/performance_overlay.dart::PerformanceOverlayOption": readonly [] }> { readonly __PerformanceOverlayOption: unique symbol;
readonly [_flaxDartTypeValue]: PerformanceOverlayOption;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:PerformanceOverlayOption", ["displayRasterizerStatistics","visualizeRasterizerStatistics","displayEngineStatistics","visualizeEngineStatistics"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PerformanceOverlayOption_api = {
displayRasterizerStatistics: enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "displayRasterizerStatistics"),
visualizeRasterizerStatistics: enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "visualizeRasterizerStatistics"),
displayEngineStatistics: enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "displayEngineStatistics"),
visualizeEngineStatistics: enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "visualizeEngineStatistics"),
values: Object.freeze([enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "displayRasterizerStatistics"), enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "visualizeRasterizerStatistics"), enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "displayEngineStatistics"), enumValue<PerformanceOverlayOption>("flax.core/sdk_rendering#type:PerformanceOverlayOption", "visualizeEngineStatistics")]),
};
export const PerformanceOverlayOption = Object.freeze(_flaxBindInstanceType<PerformanceOverlayOption, typeof _flaxEnum_PerformanceOverlayOption_api>(_flaxEnum_PerformanceOverlayOption_api, "flax.core/sdk_rendering#type:PerformanceOverlayOption", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PerformanceOverlayOption_api & _FlaxInstanceType<PerformanceOverlayOption> & _FlaxDartType<PerformanceOverlayOption, readonly ["class", "flax.core/sdk_rendering#type:PerformanceOverlayOption", readonly [], false]>);
