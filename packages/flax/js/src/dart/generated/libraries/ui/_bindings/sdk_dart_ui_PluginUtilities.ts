// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_CallbackHandle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_CallbackHandle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PluginUtilities extends Readonly<{ "__flaxBound:dart:ui::PluginUtilities": readonly [] }> { readonly __PluginUtilities: unique symbol;
readonly [_flaxDartTypeValue]: PluginUtilities;

}
defineObject("flax.core/sdk_dart_ui#type:PluginUtilities", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PluginUtilities", "object", {}, {}), []);
export namespace _PluginUtilitiesFactory { export function getCallbackHandle(callback: _FlaxDartFunction): upstream0.CallbackHandle | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:PluginUtilities.getCallbackHandle", [callback]);
return _flaxResult as upstream0.CallbackHandle | null;
} }
export const PluginUtilities: typeof _PluginUtilitiesFactory & _FlaxInstanceType<PluginUtilities> & _FlaxDartType<PluginUtilities, readonly ["class", "flax.core/sdk_dart_ui#type:PluginUtilities", readonly [], false]> = _flaxBindInstanceType<PluginUtilities, typeof _PluginUtilitiesFactory>(_PluginUtilitiesFactory, "flax.core/sdk_dart_ui#type:PluginUtilities", ["dart:core::Object"]) as typeof _PluginUtilitiesFactory & _FlaxInstanceType<PluginUtilities> & _FlaxDartType<PluginUtilities, readonly ["class", "flax.core/sdk_dart_ui#type:PluginUtilities", readonly [], false]>;
