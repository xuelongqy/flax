// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StrokeCap extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::StrokeCap">, Readonly<{ "__flaxBound:dart:ui::StrokeCap": readonly [] }> { readonly __StrokeCap: unique symbol;
readonly [_flaxDartTypeValue]: StrokeCap;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:StrokeCap", ["butt","round","square"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_StrokeCap_api = {
butt: enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "butt"),
round: enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "round"),
square: enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "square"),
values: Object.freeze([enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "butt"), enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "round"), enumValue<StrokeCap>("flax.core/sdk_dart_ui#type:StrokeCap", "square")]),
};
export const StrokeCap = Object.freeze(_flaxBindInstanceType<StrokeCap, typeof _flaxEnum_StrokeCap_api>(_flaxEnum_StrokeCap_api, "flax.core/sdk_dart_ui#type:StrokeCap", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_StrokeCap_api & _FlaxInstanceType<StrokeCap> & _FlaxDartType<StrokeCap, readonly ["class", "flax.core/sdk_dart_ui#type:StrokeCap", readonly [], false]>);
