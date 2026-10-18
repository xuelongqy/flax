// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DebugSemanticsDumpOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/semantics/semantics.dart::DebugSemanticsDumpOrder">, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::DebugSemanticsDumpOrder": readonly [] }> { readonly __DebugSemanticsDumpOrder: unique symbol;
readonly [_flaxDartTypeValue]: DebugSemanticsDumpOrder;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", ["inverseHitTest","traversalOrder"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DebugSemanticsDumpOrder_api = {
inverseHitTest: enumValue<DebugSemanticsDumpOrder>("flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", "inverseHitTest"),
traversalOrder: enumValue<DebugSemanticsDumpOrder>("flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", "traversalOrder"),
values: Object.freeze([enumValue<DebugSemanticsDumpOrder>("flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", "inverseHitTest"), enumValue<DebugSemanticsDumpOrder>("flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", "traversalOrder")]),
};
export const DebugSemanticsDumpOrder = Object.freeze(_flaxBindInstanceType<DebugSemanticsDumpOrder, typeof _flaxEnum_DebugSemanticsDumpOrder_api>(_flaxEnum_DebugSemanticsDumpOrder_api, "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DebugSemanticsDumpOrder_api & _FlaxInstanceType<DebugSemanticsDumpOrder> & _FlaxDartType<DebugSemanticsDumpOrder, readonly ["class", "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", readonly [], false]>);
