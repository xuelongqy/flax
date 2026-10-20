// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomNavigationBarType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/bottom_navigation_bar.dart::BottomNavigationBarType">, Readonly<{ "__flaxBound:package:material_ui/src/bottom_navigation_bar.dart::BottomNavigationBarType": readonly [] }> { readonly __BottomNavigationBarType: unique symbol;
readonly [_flaxDartTypeValue]: BottomNavigationBarType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:BottomNavigationBarType", ["fixed","shifting"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_BottomNavigationBarType_api = {
fixed: enumValue<BottomNavigationBarType>("flax.material/material#type:BottomNavigationBarType", "fixed"),
shifting: enumValue<BottomNavigationBarType>("flax.material/material#type:BottomNavigationBarType", "shifting"),
values: Object.freeze([enumValue<BottomNavigationBarType>("flax.material/material#type:BottomNavigationBarType", "fixed"), enumValue<BottomNavigationBarType>("flax.material/material#type:BottomNavigationBarType", "shifting")]),
};
export const BottomNavigationBarType = Object.freeze(_flaxBindInstanceType<BottomNavigationBarType, typeof _flaxEnum_BottomNavigationBarType_api>(_flaxEnum_BottomNavigationBarType_api, "flax.material/material#type:BottomNavigationBarType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_BottomNavigationBarType_api & _FlaxInstanceType<BottomNavigationBarType> & _FlaxDartType<BottomNavigationBarType, readonly ["class", "flax.material/material#type:BottomNavigationBarType", readonly [], false]>);
