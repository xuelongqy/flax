// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliderInteraction extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/slider.dart::SliderInteraction">, Readonly<{ "__flaxBound:package:flutter/src/material/slider.dart::SliderInteraction": readonly [] }> { readonly __SliderInteraction: unique symbol;
readonly [_flaxDartTypeValue]: SliderInteraction;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:SliderInteraction", ["tapAndSlide","tapOnly","slideOnly","slideThumb"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SliderInteraction_api = {
tapAndSlide: enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "tapAndSlide"),
tapOnly: enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "tapOnly"),
slideOnly: enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "slideOnly"),
slideThumb: enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "slideThumb"),
values: Object.freeze([enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "tapAndSlide"), enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "tapOnly"), enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "slideOnly"), enumValue<SliderInteraction>("flax.core/sdk_material#type:SliderInteraction", "slideThumb")]),
};
export const SliderInteraction = Object.freeze(_flaxBindInstanceType<SliderInteraction, typeof _flaxEnum_SliderInteraction_api>(_flaxEnum_SliderInteraction_api, "flax.core/sdk_material#type:SliderInteraction", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SliderInteraction_api & _FlaxInstanceType<SliderInteraction> & _FlaxDartType<SliderInteraction, readonly ["class", "flax.core/sdk_material#type:SliderInteraction", readonly [], false]>);
