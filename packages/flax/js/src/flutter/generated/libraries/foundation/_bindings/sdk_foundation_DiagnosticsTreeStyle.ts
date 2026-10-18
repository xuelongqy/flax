// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsTreeStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsTreeStyle">, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsTreeStyle": readonly [] }> { readonly __DiagnosticsTreeStyle: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsTreeStyle;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", ["none","sparse","offstage","dense","transition","error","whitespace","flat","singleLine","errorProperty","shallow","truncateChildren"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DiagnosticsTreeStyle_api = {
none: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "none"),
sparse: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "sparse"),
offstage: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "offstage"),
dense: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "dense"),
transition: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "transition"),
error: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "error"),
whitespace: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "whitespace"),
flat: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "flat"),
singleLine: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "singleLine"),
errorProperty: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "errorProperty"),
shallow: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "shallow"),
truncateChildren: enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "truncateChildren"),
values: Object.freeze([enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "none"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "sparse"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "offstage"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "dense"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "transition"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "error"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "whitespace"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "flat"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "singleLine"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "errorProperty"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "shallow"), enumValue<DiagnosticsTreeStyle>("flax.core/sdk_foundation#type:DiagnosticsTreeStyle", "truncateChildren")]),
};
export const DiagnosticsTreeStyle = Object.freeze(_flaxBindInstanceType<DiagnosticsTreeStyle, typeof _flaxEnum_DiagnosticsTreeStyle_api>(_flaxEnum_DiagnosticsTreeStyle_api, "flax.core/sdk_foundation#type:DiagnosticsTreeStyle", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DiagnosticsTreeStyle_api & _FlaxInstanceType<DiagnosticsTreeStyle> & _FlaxDartType<DiagnosticsTreeStyle, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsTreeStyle", readonly [], false]>);
