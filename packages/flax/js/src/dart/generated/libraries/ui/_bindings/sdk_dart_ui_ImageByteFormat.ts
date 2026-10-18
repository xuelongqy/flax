// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageByteFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::ImageByteFormat">, Readonly<{ "__flaxBound:dart:ui::ImageByteFormat": readonly [] }> { readonly __ImageByteFormat: unique symbol;
readonly [_flaxDartTypeValue]: ImageByteFormat;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:ImageByteFormat", ["rawRgba","rawStraightRgba","rawUnmodified","rawExtendedRgba128","png"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ImageByteFormat_api = {
rawRgba: enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawRgba"),
rawStraightRgba: enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawStraightRgba"),
rawUnmodified: enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawUnmodified"),
rawExtendedRgba128: enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawExtendedRgba128"),
png: enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "png"),
values: Object.freeze([enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawRgba"), enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawStraightRgba"), enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawUnmodified"), enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "rawExtendedRgba128"), enumValue<ImageByteFormat>("flax.core/sdk_dart_ui#type:ImageByteFormat", "png")]),
};
export const ImageByteFormat = Object.freeze(_flaxBindInstanceType<ImageByteFormat, typeof _flaxEnum_ImageByteFormat_api>(_flaxEnum_ImageByteFormat_api, "flax.core/sdk_dart_ui#type:ImageByteFormat", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ImageByteFormat_api & _FlaxInstanceType<ImageByteFormat> & _FlaxDartType<ImageByteFormat, readonly ["class", "flax.core/sdk_dart_ui#type:ImageByteFormat", readonly [], false]>);
