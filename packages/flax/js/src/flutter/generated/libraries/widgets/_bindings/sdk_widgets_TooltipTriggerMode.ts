// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TooltipTriggerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipTriggerMode">, Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipTriggerMode": readonly [] }> { readonly __TooltipTriggerMode: unique symbol;
readonly [_flaxDartTypeValue]: TooltipTriggerMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:TooltipTriggerMode", ["manual","longPress","tap"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TooltipTriggerMode_api = {
manual: enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "manual"),
longPress: enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "longPress"),
tap: enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "tap"),
values: Object.freeze([enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "manual"), enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "longPress"), enumValue<TooltipTriggerMode>("flax.core/sdk_widgets#type:TooltipTriggerMode", "tap")]),
};
export const TooltipTriggerMode = Object.freeze(_flaxBindInstanceType<TooltipTriggerMode, typeof _flaxEnum_TooltipTriggerMode_api>(_flaxEnum_TooltipTriggerMode_api, "flax.core/sdk_widgets#type:TooltipTriggerMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TooltipTriggerMode_api & _FlaxInstanceType<TooltipTriggerMode> & _FlaxDartType<TooltipTriggerMode, readonly ["class", "flax.core/sdk_widgets#type:TooltipTriggerMode", readonly [], false]>);
