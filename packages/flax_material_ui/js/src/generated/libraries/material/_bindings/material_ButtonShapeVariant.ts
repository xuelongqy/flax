// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonShapeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::ButtonShapeVariant">, Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonShapeVariant": readonly [] }> { readonly __ButtonShapeVariant: unique symbol;
readonly [_flaxDartTypeValue]: ButtonShapeVariant;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:ButtonShapeVariant", ["round","square"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ButtonShapeVariant_api = {
round: enumValue<ButtonShapeVariant>("flax.material/material#type:ButtonShapeVariant", "round"),
square: enumValue<ButtonShapeVariant>("flax.material/material#type:ButtonShapeVariant", "square"),
values: Object.freeze([enumValue<ButtonShapeVariant>("flax.material/material#type:ButtonShapeVariant", "round"), enumValue<ButtonShapeVariant>("flax.material/material#type:ButtonShapeVariant", "square")]),
};
export const ButtonShapeVariant = Object.freeze(_flaxBindInstanceType<ButtonShapeVariant, typeof _flaxEnum_ButtonShapeVariant_api>(_flaxEnum_ButtonShapeVariant_api, "flax.material/material#type:ButtonShapeVariant", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ButtonShapeVariant_api & _FlaxInstanceType<ButtonShapeVariant> & _FlaxDartType<ButtonShapeVariant, readonly ["class", "flax.material/material#type:ButtonShapeVariant", readonly [], false]>);
