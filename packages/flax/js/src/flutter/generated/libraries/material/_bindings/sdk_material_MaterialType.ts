// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/material.dart::MaterialType">, Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialType": readonly [] }> { readonly __MaterialType: unique symbol;
readonly [_flaxDartTypeValue]: MaterialType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:MaterialType", ["canvas","card","circle","button","transparency"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_MaterialType_api = {
canvas: enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "canvas"),
card: enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "card"),
circle: enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "circle"),
button: enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "button"),
transparency: enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "transparency"),
values: Object.freeze([enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "canvas"), enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "card"), enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "circle"), enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "button"), enumValue<MaterialType>("flax.core/sdk_material#type:MaterialType", "transparency")]),
};
export const MaterialType = Object.freeze(_flaxBindInstanceType<MaterialType, typeof _flaxEnum_MaterialType_api>(_flaxEnum_MaterialType_api, "flax.core/sdk_material#type:MaterialType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_MaterialType_api & _FlaxInstanceType<MaterialType> & _FlaxDartType<MaterialType, readonly ["class", "flax.core/sdk_material#type:MaterialType", readonly [], false]>);
