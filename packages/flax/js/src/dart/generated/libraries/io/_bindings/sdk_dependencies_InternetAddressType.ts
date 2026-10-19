// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InternetAddressType extends Readonly<{ "__flaxBound:dart:io::InternetAddressType": readonly [] }> { readonly __InternetAddressType: unique symbol;
readonly [_flaxDartTypeValue]: InternetAddressType;

readonly name: string;
toString(): string;
}
defineObject("flax.core/sdk_dependencies#type:InternetAddressType", ["name"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:InternetAddressType", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _InternetAddressTypeFactory = {} as {readonly IPv4: InternetAddressType;readonly IPv6: InternetAddressType;readonly unix: InternetAddressType;readonly any: InternetAddressType};
_flaxDefineStaticGetters(_InternetAddressTypeFactory, "flax.core/sdk_dependencies#read:InternetAddressType.", ["IPv4","IPv6","unix","any"]);
export const InternetAddressType: typeof _InternetAddressTypeFactory & _FlaxInstanceType<InternetAddressType> & _FlaxDartType<InternetAddressType, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddressType", readonly [], false]> = _flaxBindInstanceType<InternetAddressType, typeof _InternetAddressTypeFactory>(_InternetAddressTypeFactory, "flax.core/sdk_dependencies#type:InternetAddressType", ["dart:core::Object"]) as typeof _InternetAddressTypeFactory & _FlaxInstanceType<InternetAddressType> & _FlaxDartType<InternetAddressType, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddressType", readonly [], false]>;
