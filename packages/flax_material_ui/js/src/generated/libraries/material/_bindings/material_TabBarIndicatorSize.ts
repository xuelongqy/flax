// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TabBarIndicatorSize extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/tabs.dart::TabBarIndicatorSize">, Readonly<{ "__flaxBound:package:material_ui/src/tabs.dart::TabBarIndicatorSize": readonly [] }> { readonly __TabBarIndicatorSize: unique symbol;
readonly [_flaxDartTypeValue]: TabBarIndicatorSize;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:TabBarIndicatorSize", ["tab","label"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TabBarIndicatorSize_api = {
tab: enumValue<TabBarIndicatorSize>("flax.material/material#type:TabBarIndicatorSize", "tab"),
label: enumValue<TabBarIndicatorSize>("flax.material/material#type:TabBarIndicatorSize", "label"),
values: Object.freeze([enumValue<TabBarIndicatorSize>("flax.material/material#type:TabBarIndicatorSize", "tab"), enumValue<TabBarIndicatorSize>("flax.material/material#type:TabBarIndicatorSize", "label")]),
};
export const TabBarIndicatorSize = Object.freeze(_flaxBindInstanceType<TabBarIndicatorSize, typeof _flaxEnum_TabBarIndicatorSize_api>(_flaxEnum_TabBarIndicatorSize_api, "flax.material/material#type:TabBarIndicatorSize", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TabBarIndicatorSize_api & _FlaxInstanceType<TabBarIndicatorSize> & _FlaxDartType<TabBarIndicatorSize, readonly ["class", "flax.material/material#type:TabBarIndicatorSize", readonly [], false]>);
