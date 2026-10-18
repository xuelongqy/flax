// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerDeviceKind extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointerDeviceKind">, Readonly<{ "__flaxBound:dart:ui::PointerDeviceKind": readonly [] }> { readonly __PointerDeviceKind: unique symbol;
readonly [_flaxDartTypeValue]: PointerDeviceKind;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PointerDeviceKind", ["touch","mouse","stylus","invertedStylus","trackpad","unknown"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PointerDeviceKind_api = {
touch: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "touch"),
mouse: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "mouse"),
stylus: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "stylus"),
invertedStylus: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "invertedStylus"),
trackpad: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "trackpad"),
unknown: enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "unknown"),
values: Object.freeze([enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "touch"), enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "mouse"), enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "stylus"), enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "invertedStylus"), enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "trackpad"), enumValue<PointerDeviceKind>("flax.core/sdk_dart_ui#type:PointerDeviceKind", "unknown")]),
};
export const PointerDeviceKind = Object.freeze(_flaxBindInstanceType<PointerDeviceKind, typeof _flaxEnum_PointerDeviceKind_api>(_flaxEnum_PointerDeviceKind_api, "flax.core/sdk_dart_ui#type:PointerDeviceKind", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PointerDeviceKind_api & _FlaxInstanceType<PointerDeviceKind> & _FlaxDartType<PointerDeviceKind, readonly ["class", "flax.core/sdk_dart_ui#type:PointerDeviceKind", readonly [], false]>);
