// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsRole extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::SemanticsRole">, Readonly<{ "__flaxBound:dart:ui::SemanticsRole": readonly [] }> { readonly __SemanticsRole: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsRole;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:SemanticsRole", ["none","tab","tabBar","tabPanel","dialog","alertDialog","table","cell","row","columnHeader","dragHandle","spinButton","comboBox","menuBar","menu","menuItem","menuItemCheckbox","menuItemRadio","list","listItem","form","tooltip","loadingSpinner","progressBar","hotKey","radioGroup","status","alert","complementary","contentInfo","main","navigation","region"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SemanticsRole_api = {
none: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "none"),
tab: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tab"),
tabBar: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tabBar"),
tabPanel: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tabPanel"),
dialog: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "dialog"),
alertDialog: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "alertDialog"),
table: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "table"),
cell: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "cell"),
row: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "row"),
columnHeader: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "columnHeader"),
dragHandle: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "dragHandle"),
spinButton: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "spinButton"),
comboBox: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "comboBox"),
menuBar: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuBar"),
menu: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menu"),
menuItem: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItem"),
menuItemCheckbox: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItemCheckbox"),
menuItemRadio: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItemRadio"),
list: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "list"),
listItem: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "listItem"),
form: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "form"),
tooltip: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tooltip"),
loadingSpinner: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "loadingSpinner"),
progressBar: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "progressBar"),
hotKey: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "hotKey"),
radioGroup: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "radioGroup"),
status: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "status"),
alert: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "alert"),
complementary: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "complementary"),
contentInfo: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "contentInfo"),
main: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "main"),
navigation: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "navigation"),
region: enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "region"),
values: Object.freeze([enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "none"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tab"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tabBar"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tabPanel"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "dialog"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "alertDialog"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "table"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "cell"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "row"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "columnHeader"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "dragHandle"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "spinButton"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "comboBox"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuBar"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menu"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItem"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItemCheckbox"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "menuItemRadio"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "list"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "listItem"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "form"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "tooltip"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "loadingSpinner"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "progressBar"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "hotKey"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "radioGroup"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "status"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "alert"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "complementary"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "contentInfo"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "main"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "navigation"), enumValue<SemanticsRole>("flax.core/sdk_dart_ui#type:SemanticsRole", "region")]),
};
export const SemanticsRole = Object.freeze(_flaxBindInstanceType<SemanticsRole, typeof _flaxEnum_SemanticsRole_api>(_flaxEnum_SemanticsRole_api, "flax.core/sdk_dart_ui#type:SemanticsRole", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SemanticsRole_api & _FlaxInstanceType<SemanticsRole> & _FlaxDartType<SemanticsRole, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsRole", readonly [], false]>);
