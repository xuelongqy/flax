// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PixelFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PixelFormat">, Readonly<{ "__flaxBound:dart:ui::PixelFormat": readonly [] }> { readonly __PixelFormat: unique symbol;
readonly [_flaxDartTypeValue]: PixelFormat;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PixelFormat", ["rgba8888","bgra8888","rgbaFloat32","rFloat32"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PixelFormat_api = {
rgba8888: enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rgba8888"),
bgra8888: enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "bgra8888"),
rgbaFloat32: enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rgbaFloat32"),
rFloat32: enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rFloat32"),
values: Object.freeze([enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rgba8888"), enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "bgra8888"), enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rgbaFloat32"), enumValue<PixelFormat>("flax.core/sdk_dart_ui#type:PixelFormat", "rFloat32")]),
};
export const PixelFormat = Object.freeze(_flaxBindInstanceType<PixelFormat, typeof _flaxEnum_PixelFormat_api>(_flaxEnum_PixelFormat_api, "flax.core/sdk_dart_ui#type:PixelFormat", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PixelFormat_api & _FlaxInstanceType<PixelFormat> & _FlaxDartType<PixelFormat, readonly ["class", "flax.core/sdk_dart_ui#type:PixelFormat", readonly [], false]>);
