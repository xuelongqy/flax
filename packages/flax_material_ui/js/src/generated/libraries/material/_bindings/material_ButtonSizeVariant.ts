// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonSizeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::ButtonSizeVariant">, Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonSizeVariant": readonly [] }> { readonly __ButtonSizeVariant: unique symbol;
readonly [_flaxDartTypeValue]: ButtonSizeVariant;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:ButtonSizeVariant", ["xSmall","small","medium","large","xLarge"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ButtonSizeVariant_api = {
xSmall: enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "xSmall"),
small: enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "small"),
medium: enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "medium"),
large: enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "large"),
xLarge: enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "xLarge"),
values: Object.freeze([enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "xSmall"), enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "small"), enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "medium"), enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "large"), enumValue<ButtonSizeVariant>("flax.material/material#type:ButtonSizeVariant", "xLarge")]),
};
export const ButtonSizeVariant = Object.freeze(_flaxBindInstanceType<ButtonSizeVariant, typeof _flaxEnum_ButtonSizeVariant_api>(_flaxEnum_ButtonSizeVariant_api, "flax.material/material#type:ButtonSizeVariant", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ButtonSizeVariant_api & _FlaxInstanceType<ButtonSizeVariant> & _FlaxDartType<ButtonSizeVariant, readonly ["class", "flax.material/material#type:ButtonSizeVariant", readonly [], false]>);
