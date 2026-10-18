// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AccessibilityFocusBlockType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/semantics/semantics.dart::AccessibilityFocusBlockType">, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AccessibilityFocusBlockType": readonly [] }> { readonly __AccessibilityFocusBlockType: unique symbol;
readonly [_flaxDartTypeValue]: AccessibilityFocusBlockType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", ["none","blockSubtree","blockNode"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AccessibilityFocusBlockType_api = {
none: enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "none"),
blockSubtree: enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "blockSubtree"),
blockNode: enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "blockNode"),
values: Object.freeze([enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "none"), enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "blockSubtree"), enumValue<AccessibilityFocusBlockType>("flax.core/sdk_semantics#type:AccessibilityFocusBlockType", "blockNode")]),
};
export const AccessibilityFocusBlockType = Object.freeze(_flaxBindInstanceType<AccessibilityFocusBlockType, typeof _flaxEnum_AccessibilityFocusBlockType_api>(_flaxEnum_AccessibilityFocusBlockType_api, "flax.core/sdk_semantics#type:AccessibilityFocusBlockType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AccessibilityFocusBlockType_api & _FlaxInstanceType<AccessibilityFocusBlockType> & _FlaxDartType<AccessibilityFocusBlockType, readonly ["class", "flax.core/sdk_semantics#type:AccessibilityFocusBlockType", readonly [], false]>);
