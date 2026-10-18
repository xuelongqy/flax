// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FloatingCursorDragState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::FloatingCursorDragState">, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::FloatingCursorDragState": readonly [] }> { readonly __FloatingCursorDragState: unique symbol;
readonly [_flaxDartTypeValue]: FloatingCursorDragState;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:FloatingCursorDragState", ["Start","Update","End"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_FloatingCursorDragState_api = {
Start: enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "Start"),
Update: enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "Update"),
End: enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "End"),
values: Object.freeze([enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "Start"), enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "Update"), enumValue<FloatingCursorDragState>("flax.core/sdk_services#type:FloatingCursorDragState", "End")]),
};
export const FloatingCursorDragState = Object.freeze(_flaxBindInstanceType<FloatingCursorDragState, typeof _flaxEnum_FloatingCursorDragState_api>(_flaxEnum_FloatingCursorDragState_api, "flax.core/sdk_services#type:FloatingCursorDragState", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_FloatingCursorDragState_api & _FlaxInstanceType<FloatingCursorDragState> & _FlaxDartType<FloatingCursorDragState, readonly ["class", "flax.core/sdk_services#type:FloatingCursorDragState", readonly [], false]>);
