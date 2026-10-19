// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface X509Certificate extends Readonly<{ "__flaxBound:dart:io::X509Certificate": readonly [] }> { readonly __X509Certificate: unique symbol;
readonly [_flaxDartTypeValue]: X509Certificate;

readonly der: globalThis.Uint8Array;
readonly pem: string;
readonly sha1: globalThis.Uint8Array;
readonly subject: string;
readonly issuer: string;
readonly startValidity: upstream0.DateTime;
readonly endValidity: upstream0.DateTime;
}
defineObject("flax.core/sdk_dependencies#type:X509Certificate", ["der","pem","sha1","subject","issuer","startValidity","endValidity"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:X509Certificate", "object", {}, {}), []);
export const X509Certificate: object & _FlaxInstanceType<X509Certificate> & _FlaxDartType<X509Certificate, readonly ["class", "flax.core/sdk_dependencies#type:X509Certificate", readonly [], false]> = _flaxBindInstanceType<X509Certificate, object>({}, "flax.core/sdk_dependencies#type:X509Certificate", ["dart:core::Object"]) as object & _FlaxInstanceType<X509Certificate> & _FlaxDartType<X509Certificate, readonly ["class", "flax.core/sdk_dependencies#type:X509Certificate", readonly [], false]>;
