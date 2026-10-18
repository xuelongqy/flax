// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointMode">, Readonly<{ "__flaxBound:dart:ui::PointMode": readonly [] }> { readonly __PointMode: unique symbol;
readonly [_flaxDartTypeValue]: PointMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PointMode", ["points","lines","polygon"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PointMode_api = {
points: enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "points"),
lines: enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "lines"),
polygon: enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "polygon"),
values: Object.freeze([enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "points"), enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "lines"), enumValue<PointMode>("flax.core/sdk_dart_ui#type:PointMode", "polygon")]),
};
export const PointMode = Object.freeze(_flaxBindInstanceType<PointMode, typeof _flaxEnum_PointMode_api>(_flaxEnum_PointMode_api, "flax.core/sdk_dart_ui#type:PointMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PointMode_api & _FlaxInstanceType<PointMode> & _FlaxDartType<PointMode, readonly ["class", "flax.core/sdk_dart_ui#type:PointMode", readonly [], false]>);
