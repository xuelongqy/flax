// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonTextTheme extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_theme.dart::ButtonTextTheme">, Readonly<{ "__flaxBound:package:material_ui/src/button_theme.dart::ButtonTextTheme": readonly [] }> { readonly __ButtonTextTheme: unique symbol;
readonly [_flaxDartTypeValue]: ButtonTextTheme;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:ButtonTextTheme", ["normal","accent","primary"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ButtonTextTheme_api = {
normal: enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "normal"),
accent: enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "accent"),
primary: enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "primary"),
values: Object.freeze([enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "normal"), enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "accent"), enumValue<ButtonTextTheme>("flax.material/material#type:ButtonTextTheme", "primary")]),
};
export const ButtonTextTheme = Object.freeze(_flaxBindInstanceType<ButtonTextTheme, typeof _flaxEnum_ButtonTextTheme_api>(_flaxEnum_ButtonTextTheme_api, "flax.material/material#type:ButtonTextTheme", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ButtonTextTheme_api & _FlaxInstanceType<ButtonTextTheme> & _FlaxDartType<ButtonTextTheme, readonly ["class", "flax.material/material#type:ButtonTextTheme", readonly [], false]>);
