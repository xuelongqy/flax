// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UiKitViewGestureBlockingPolicy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewGestureBlockingPolicy">, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewGestureBlockingPolicy": readonly [] }> { readonly __UiKitViewGestureBlockingPolicy: unique symbol;
readonly [_flaxDartTypeValue]: UiKitViewGestureBlockingPolicy;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", ["eager","waitUntilTouchesEnded","doNotBlockGesture","fallbackToPluginDefault"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_UiKitViewGestureBlockingPolicy_api = {
eager: enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "eager"),
waitUntilTouchesEnded: enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "waitUntilTouchesEnded"),
doNotBlockGesture: enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "doNotBlockGesture"),
fallbackToPluginDefault: enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "fallbackToPluginDefault"),
values: Object.freeze([enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "eager"), enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "waitUntilTouchesEnded"), enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "doNotBlockGesture"), enumValue<UiKitViewGestureBlockingPolicy>("flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", "fallbackToPluginDefault")]),
};
export const UiKitViewGestureBlockingPolicy = Object.freeze(_flaxBindInstanceType<UiKitViewGestureBlockingPolicy, typeof _flaxEnum_UiKitViewGestureBlockingPolicy_api>(_flaxEnum_UiKitViewGestureBlockingPolicy_api, "flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_UiKitViewGestureBlockingPolicy_api & _FlaxInstanceType<UiKitViewGestureBlockingPolicy> & _FlaxDartType<UiKitViewGestureBlockingPolicy, readonly ["class", "flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", readonly [], false]>);
