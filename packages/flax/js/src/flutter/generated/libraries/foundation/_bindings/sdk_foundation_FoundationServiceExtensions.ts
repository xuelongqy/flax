// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FoundationServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/service_extensions.dart::FoundationServiceExtensions">, Readonly<{ "__flaxBound:package:flutter/src/foundation/service_extensions.dart::FoundationServiceExtensions": readonly [] }> { readonly __FoundationServiceExtensions: unique symbol;
readonly [_flaxDartTypeValue]: FoundationServiceExtensions;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_foundation#type:FoundationServiceExtensions", ["reassemble","exit","connectedVmServiceUri","activeDevToolsServerAddress","platformOverride","brightnessOverride"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_FoundationServiceExtensions_api = {
reassemble: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "reassemble"),
exit: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "exit"),
connectedVmServiceUri: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "connectedVmServiceUri"),
activeDevToolsServerAddress: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "activeDevToolsServerAddress"),
platformOverride: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "platformOverride"),
brightnessOverride: enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "brightnessOverride"),
values: Object.freeze([enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "reassemble"), enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "exit"), enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "connectedVmServiceUri"), enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "activeDevToolsServerAddress"), enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "platformOverride"), enumValue<FoundationServiceExtensions>("flax.core/sdk_foundation#type:FoundationServiceExtensions", "brightnessOverride")]),
};
export const FoundationServiceExtensions = Object.freeze(_flaxBindInstanceType<FoundationServiceExtensions, typeof _flaxEnum_FoundationServiceExtensions_api>(_flaxEnum_FoundationServiceExtensions_api, "flax.core/sdk_foundation#type:FoundationServiceExtensions", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_FoundationServiceExtensions_api & _FlaxInstanceType<FoundationServiceExtensions> & _FlaxDartType<FoundationServiceExtensions, readonly ["class", "flax.core/sdk_foundation#type:FoundationServiceExtensions", readonly [], false]>);
