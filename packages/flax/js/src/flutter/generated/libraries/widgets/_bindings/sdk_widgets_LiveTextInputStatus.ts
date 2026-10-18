// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LiveTextInputStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatus">, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatus": readonly [] }> { readonly __LiveTextInputStatus: unique symbol;
readonly [_flaxDartTypeValue]: LiveTextInputStatus;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:LiveTextInputStatus", ["enabled","unknown","disabled"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_LiveTextInputStatus_api = {
enabled: enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "enabled"),
unknown: enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "unknown"),
disabled: enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "disabled"),
values: Object.freeze([enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "enabled"), enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "unknown"), enumValue<LiveTextInputStatus>("flax.core/sdk_widgets#type:LiveTextInputStatus", "disabled")]),
};
export const LiveTextInputStatus = Object.freeze(_flaxBindInstanceType<LiveTextInputStatus, typeof _flaxEnum_LiveTextInputStatus_api>(_flaxEnum_LiveTextInputStatus_api, "flax.core/sdk_widgets#type:LiveTextInputStatus", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_LiveTextInputStatus_api & _FlaxInstanceType<LiveTextInputStatus> & _FlaxDartType<LiveTextInputStatus, readonly ["class", "flax.core/sdk_widgets#type:LiveTextInputStatus", readonly [], false]>);
