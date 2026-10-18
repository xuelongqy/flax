// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TileMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TileMode">, Readonly<{ "__flaxBound:dart:ui::TileMode": readonly [] }> { readonly __TileMode: unique symbol;
readonly [_flaxDartTypeValue]: TileMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:TileMode", ["clamp","repeated","mirror","decal"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TileMode_api = {
clamp: enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "clamp"),
repeated: enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "repeated"),
mirror: enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "mirror"),
decal: enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "decal"),
values: Object.freeze([enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "clamp"), enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "repeated"), enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "mirror"), enumValue<TileMode>("flax.core/sdk_dart_ui#type:TileMode", "decal")]),
};
export const TileMode = Object.freeze(_flaxBindInstanceType<TileMode, typeof _flaxEnum_TileMode_api>(_flaxEnum_TileMode_api, "flax.core/sdk_dart_ui#type:TileMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TileMode_api & _FlaxInstanceType<TileMode> & _FlaxDartType<TileMode, readonly ["class", "flax.core/sdk_dart_ui#type:TileMode", readonly [], false]>);
