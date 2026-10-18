// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColor';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColor';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemColorPalette extends Readonly<{ "__flaxBound:dart:ui::SystemColorPalette": readonly [] }> { readonly __SystemColorPalette: unique symbol;
readonly [_flaxDartTypeValue]: SystemColorPalette;

readonly brightness: upstream0.Brightness;
readonly accentColor: upstream1.SystemColor;
readonly accentColorText: upstream1.SystemColor;
readonly activeText: upstream1.SystemColor;
readonly buttonBorder: upstream1.SystemColor;
readonly buttonFace: upstream1.SystemColor;
readonly buttonText: upstream1.SystemColor;
readonly canvas: upstream1.SystemColor;
readonly canvasText: upstream1.SystemColor;
readonly field: upstream1.SystemColor;
readonly fieldText: upstream1.SystemColor;
readonly grayText: upstream1.SystemColor;
readonly highlight: upstream1.SystemColor;
readonly highlightText: upstream1.SystemColor;
readonly linkText: upstream1.SystemColor;
readonly mark: upstream1.SystemColor;
readonly markText: upstream1.SystemColor;
readonly selectedItem: upstream1.SystemColor;
readonly selectedItemText: upstream1.SystemColor;
readonly visitedText: upstream1.SystemColor;
}
defineObject("flax.core/sdk_dart_ui#type:SystemColorPalette", ["brightness","accentColor","accentColorText","activeText","buttonBorder","buttonFace","buttonText","canvas","canvasText","field","fieldText","grayText","highlight","highlightText","linkText","mark","markText","selectedItem","selectedItemText","visitedText"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SystemColorPalette", "object", {}, {}), []);
export const SystemColorPalette: object & _FlaxInstanceType<SystemColorPalette> & _FlaxDartType<SystemColorPalette, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColorPalette", readonly [], false]> = _flaxBindInstanceType<SystemColorPalette, object>({}, "flax.core/sdk_dart_ui#type:SystemColorPalette", ["dart:core::Object"]) as object & _FlaxInstanceType<SystemColorPalette> & _FlaxDartType<SystemColorPalette, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColorPalette", readonly [], false]>;
