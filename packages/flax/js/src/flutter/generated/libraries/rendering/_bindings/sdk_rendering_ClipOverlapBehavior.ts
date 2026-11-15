// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClipOverlapBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::ClipOverlapBehavior">, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::ClipOverlapBehavior": readonly [] }> { readonly __ClipOverlapBehavior: unique symbol;
readonly [_flaxDartTypeValue]: ClipOverlapBehavior;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:ClipOverlapBehavior", ["none","followEdge","preserveShape"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ClipOverlapBehavior_api = {
none: enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "none"),
followEdge: enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "followEdge"),
preserveShape: enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "preserveShape"),
values: Object.freeze([enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "none"), enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "followEdge"), enumValue<ClipOverlapBehavior>("flax.core/sdk_rendering#type:ClipOverlapBehavior", "preserveShape")]),
};
export const ClipOverlapBehavior = Object.freeze(_flaxBindInstanceType<ClipOverlapBehavior, typeof _flaxEnum_ClipOverlapBehavior_api>(_flaxEnum_ClipOverlapBehavior_api, "flax.core/sdk_rendering#type:ClipOverlapBehavior", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ClipOverlapBehavior_api & _FlaxInstanceType<ClipOverlapBehavior> & _FlaxDartType<ClipOverlapBehavior, readonly ["class", "flax.core/sdk_rendering#type:ClipOverlapBehavior", readonly [], false]>);
