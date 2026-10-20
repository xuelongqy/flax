// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_StandardFabLocation';
import '@flax/material-ui/_bindings/material_StandardFabLocation';
import type * as upstream1 from '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import type * as upstream2 from '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FabDockedOffsetY extends Omit<upstream0.StandardFabLocation, _flaxOwnMembers0>, Omit<upstream1.FloatingActionButtonLocation, _flaxOwnMembers0 | keyof upstream0.StandardFabLocation>, Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabDockedOffsetY": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [] }> { readonly __FabDockedOffsetY: unique symbol;
readonly [_flaxDartTypeValue]: FabDockedOffsetY;

getOffsetX(scaffoldGeometry: Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>, adjustment: number): number;
getOffsetY(scaffoldGeometry: Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>, adjustment: number): number;
isMini(): boolean;
getOffset(scaffoldGeometry: Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>): upstream3.Offset;
toString(): string;
}
defineObject("flax.material/material#type:FabDockedOffsetY", [], [], _flaxBindingMethods("flax.material/material#type:FabDockedOffsetY", "object", {}, {}), [], undefined, "flax.material/material#type:StandardFabLocation");
export const FabDockedOffsetY: object & _FlaxInstanceType<FabDockedOffsetY> & _FlaxDartType<FabDockedOffsetY, readonly ["class", "flax.material/material#type:FabDockedOffsetY", readonly [], false]> = _flaxBindInstanceType<FabDockedOffsetY, object>({}, "flax.material/material#type:FabDockedOffsetY", ["flax.material/material#type:StandardFabLocation","flax.material/material#type:FloatingActionButtonLocation","dart:core::Object"]) as object & _FlaxInstanceType<FabDockedOffsetY> & _FlaxDartType<FabDockedOffsetY, readonly ["class", "flax.material/material#type:FabDockedOffsetY", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffsetX" | "getOffsetY" | "isMini" | "getOffset" | "toString" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabDockedOffsetY" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation";
