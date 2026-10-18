// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonBarLayoutBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonBarLayoutBehavior">, Readonly<{ "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonBarLayoutBehavior": readonly [] }> { readonly __ButtonBarLayoutBehavior: unique symbol;
readonly [_flaxDartTypeValue]: ButtonBarLayoutBehavior;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:ButtonBarLayoutBehavior", ["constrained","padded"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ButtonBarLayoutBehavior_api = {
constrained: enumValue<ButtonBarLayoutBehavior>("flax.core/sdk_material#type:ButtonBarLayoutBehavior", "constrained"),
padded: enumValue<ButtonBarLayoutBehavior>("flax.core/sdk_material#type:ButtonBarLayoutBehavior", "padded"),
values: Object.freeze([enumValue<ButtonBarLayoutBehavior>("flax.core/sdk_material#type:ButtonBarLayoutBehavior", "constrained"), enumValue<ButtonBarLayoutBehavior>("flax.core/sdk_material#type:ButtonBarLayoutBehavior", "padded")]),
};
export const ButtonBarLayoutBehavior = Object.freeze(_flaxBindInstanceType<ButtonBarLayoutBehavior, typeof _flaxEnum_ButtonBarLayoutBehavior_api>(_flaxEnum_ButtonBarLayoutBehavior_api, "flax.core/sdk_material#type:ButtonBarLayoutBehavior", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ButtonBarLayoutBehavior_api & _FlaxInstanceType<ButtonBarLayoutBehavior> & _FlaxDartType<ButtonBarLayoutBehavior, readonly ["class", "flax.core/sdk_material#type:ButtonBarLayoutBehavior", readonly [], false]>);
