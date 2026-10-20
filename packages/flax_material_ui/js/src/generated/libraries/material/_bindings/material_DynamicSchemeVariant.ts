// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DynamicSchemeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/color_scheme.dart::DynamicSchemeVariant">, Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::DynamicSchemeVariant": readonly [] }> { readonly __DynamicSchemeVariant: unique symbol;
readonly [_flaxDartTypeValue]: DynamicSchemeVariant;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:DynamicSchemeVariant", ["tonalSpot","fidelity","monochrome","neutral","vibrant","expressive","content","rainbow","fruitSalad"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DynamicSchemeVariant_api = {
tonalSpot: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "tonalSpot"),
fidelity: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "fidelity"),
monochrome: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "monochrome"),
neutral: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "neutral"),
vibrant: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "vibrant"),
expressive: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "expressive"),
content: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "content"),
rainbow: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "rainbow"),
fruitSalad: enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "fruitSalad"),
values: Object.freeze([enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "tonalSpot"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "fidelity"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "monochrome"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "neutral"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "vibrant"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "expressive"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "content"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "rainbow"), enumValue<DynamicSchemeVariant>("flax.material/material#type:DynamicSchemeVariant", "fruitSalad")]),
};
export const DynamicSchemeVariant = Object.freeze(_flaxBindInstanceType<DynamicSchemeVariant, typeof _flaxEnum_DynamicSchemeVariant_api>(_flaxEnum_DynamicSchemeVariant_api, "flax.material/material#type:DynamicSchemeVariant", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DynamicSchemeVariant_api & _FlaxInstanceType<DynamicSchemeVariant> & _FlaxDartType<DynamicSchemeVariant, readonly ["class", "flax.material/material#type:DynamicSchemeVariant", readonly [], false]>);
