// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Endian extends Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> { readonly __Endian: unique symbol;
readonly [_flaxDartTypeValue]: Endian;

}
defineObject("flax.core/sdk_foundation#type:Endian", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Endian", "object", {}, {}), []);
const _EndianFactory = {} as {readonly big: Endian;readonly little: Endian;readonly host: Endian};
_flaxDefineStaticGetters(_EndianFactory, "flax.core/sdk_foundation#read:Endian.", ["big","little","host"]);
export const Endian: typeof _EndianFactory & _FlaxInstanceType<Endian> & _FlaxDartType<Endian, readonly ["class", "flax.core/sdk_foundation#type:Endian", readonly [], false]> = _flaxBindInstanceType<Endian, typeof _EndianFactory>(_EndianFactory, "flax.core/sdk_foundation#type:Endian", ["dart:core::Object"]) as typeof _EndianFactory & _FlaxInstanceType<Endian> & _FlaxDartType<Endian, readonly ["class", "flax.core/sdk_foundation#type:Endian", readonly [], false]>;
