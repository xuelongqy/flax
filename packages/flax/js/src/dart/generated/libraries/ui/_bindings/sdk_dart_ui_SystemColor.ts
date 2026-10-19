// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColorPalette';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColorPalette';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemColor extends Readonly<{ "__flaxBound:dart:ui::SystemColor": readonly [] }> { readonly __SystemColor: unique symbol;
readonly [_flaxDartTypeValue]: SystemColor;

readonly name: string;
readonly value: upstream0.Color | null;
readonly isSupported: boolean;
}
defineObject("flax.core/sdk_dart_ui#type:SystemColor", ["name","value","isSupported"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SystemColor", "object", {}, {}), []);
export function _SystemColorFactory(options: { name: string; value?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined }): SystemColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:SystemColor", "", [{"name":"name","required":true},{"name":"value"}], [], options) as SystemColor;
}
export namespace _SystemColorFactory { export declare const platformProvidesSystemColors: boolean; }
export namespace _SystemColorFactory { export declare const light: upstream1.SystemColorPalette; }
export namespace _SystemColorFactory { export declare const dark: upstream1.SystemColorPalette; }
_flaxDefineStaticGetters(_SystemColorFactory, "flax.core/sdk_dart_ui#read:SystemColor.", ["platformProvidesSystemColors","light","dark"]);
export const SystemColor: typeof _SystemColorFactory & _FlaxInstanceType<SystemColor> & _FlaxDartType<SystemColor, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColor", readonly [], false]> = _flaxBindInstanceType<SystemColor, typeof _SystemColorFactory>(_SystemColorFactory, "flax.core/sdk_dart_ui#type:SystemColor", ["dart:core::Object"]) as typeof _SystemColorFactory & _FlaxInstanceType<SystemColor> & _FlaxDartType<SystemColor, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColor", readonly [], false]>;
