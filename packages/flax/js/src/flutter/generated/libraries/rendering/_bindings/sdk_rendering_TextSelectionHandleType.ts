// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionHandleType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::TextSelectionHandleType">, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::TextSelectionHandleType": readonly [] }> { readonly __TextSelectionHandleType: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionHandleType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:TextSelectionHandleType", ["left","right","collapsed"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextSelectionHandleType_api = {
left: enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "left"),
right: enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "right"),
collapsed: enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "collapsed"),
values: Object.freeze([enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "left"), enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "right"), enumValue<TextSelectionHandleType>("flax.core/sdk_rendering#type:TextSelectionHandleType", "collapsed")]),
};
export const TextSelectionHandleType = Object.freeze(_flaxBindInstanceType<TextSelectionHandleType, typeof _flaxEnum_TextSelectionHandleType_api>(_flaxEnum_TextSelectionHandleType_api, "flax.core/sdk_rendering#type:TextSelectionHandleType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextSelectionHandleType_api & _FlaxInstanceType<TextSelectionHandleType> & _FlaxDartType<TextSelectionHandleType, readonly ["class", "flax.core/sdk_rendering#type:TextSelectionHandleType", readonly [], false]>);
