// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContentSensitivity extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/sensitive_content.dart::ContentSensitivity">, Readonly<{ "__flaxBound:package:flutter/src/services/sensitive_content.dart::ContentSensitivity": readonly [] }> { readonly __ContentSensitivity: unique symbol;
readonly [_flaxDartTypeValue]: ContentSensitivity;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:ContentSensitivity", ["autoSensitive","sensitive","notSensitive","_unknown"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ContentSensitivity_api = {
autoSensitive: enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "autoSensitive"),
sensitive: enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "sensitive"),
notSensitive: enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "notSensitive"),
values: Object.freeze([enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "autoSensitive"), enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "sensitive"), enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "notSensitive"), enumValue<ContentSensitivity>("flax.core/sdk_services#type:ContentSensitivity", "_unknown")]),
};
export const ContentSensitivity = Object.freeze(_flaxBindInstanceType<ContentSensitivity, typeof _flaxEnum_ContentSensitivity_api>(_flaxEnum_ContentSensitivity_api, "flax.core/sdk_services#type:ContentSensitivity", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ContentSensitivity_api & _FlaxInstanceType<ContentSensitivity> & _FlaxDartType<ContentSensitivity, readonly ["class", "flax.core/sdk_services#type:ContentSensitivity", readonly [], false]>);
