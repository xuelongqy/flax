// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomNavigationBarLandscapeLayout extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/bottom_navigation_bar.dart::BottomNavigationBarLandscapeLayout": readonly [] }> { readonly __BottomNavigationBarLandscapeLayout: unique symbol;
readonly [_flaxDartTypeValue]: BottomNavigationBarLandscapeLayout;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", ["spread","centered","linear"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_BottomNavigationBarLandscapeLayout_api = {
spread: enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "spread"),
centered: enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "centered"),
linear: enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "linear"),
values: Object.freeze([enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "spread"), enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "centered"), enumValue<BottomNavigationBarLandscapeLayout>("flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", "linear")]),
};
export const BottomNavigationBarLandscapeLayout = Object.freeze(_flaxBindInstanceType<BottomNavigationBarLandscapeLayout, typeof _flaxEnum_BottomNavigationBarLandscapeLayout_api>(_flaxEnum_BottomNavigationBarLandscapeLayout_api, "flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_BottomNavigationBarLandscapeLayout_api & _FlaxInstanceType<BottomNavigationBarLandscapeLayout> & _FlaxDartType<BottomNavigationBarLandscapeLayout, readonly ["class", "flax.core/sdk_material#type:BottomNavigationBarLandscapeLayout", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/bottom_navigation_bar.dart::BottomNavigationBarLandscapeLayout";
