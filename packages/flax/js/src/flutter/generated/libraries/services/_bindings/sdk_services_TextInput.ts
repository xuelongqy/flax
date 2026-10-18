// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_ScribbleClient';
import '@flax/flutter/services/_bindings/sdk_services_ScribbleClient';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInput extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInput": readonly [] }> { readonly __TextInput: unique symbol;
readonly [_flaxDartTypeValue]: TextInput;

readonly scribbleInProgress: boolean;
}
defineObject("flax.core/sdk_services#type:TextInput", ["scribbleInProgress"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInput", "object", {}, {}), []);
export namespace _TextInputFactory { export function setInputControl(newControl: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [] }> | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.setInputControl", [newControl]);
} }
export namespace _TextInputFactory { export function restorePlatformInputControl(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.restorePlatformInputControl", []);
} }
export namespace _TextInputFactory { export function ensureInitialized(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.ensureInitialized", []);
} }
export namespace _TextInputFactory { export function attach(client: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): upstream1.TextInputConnection {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.attach", [client, configuration]);
return _flaxResult as upstream1.TextInputConnection;
} }
export namespace _TextInputFactory { export function updateEditingValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.updateEditingValue", [value]);
} }
export namespace _TextInputFactory { export function finishAutofillContext(options: { shouldSave?: boolean | undefined } = {}): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["shouldSave"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.finishAutofillContext", [options.shouldSave]);
} }
export namespace _TextInputFactory { export function registerScribbleElement(elementIdentifier: string, scribbleClient: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::ScribbleClient": readonly [] }>): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.registerScribbleElement", [elementIdentifier, scribbleClient]);
} }
export namespace _TextInputFactory { export function unregisterScribbleElement(elementIdentifier: string): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextInput.unregisterScribbleElement", [elementIdentifier]);
} }
export const TextInput: typeof _TextInputFactory & _FlaxInstanceType<TextInput> & _FlaxDartType<TextInput, readonly ["class", "flax.core/sdk_services#type:TextInput", readonly [], false]> = _flaxBindInstanceType<TextInput, typeof _TextInputFactory>(_TextInputFactory, "flax.core/sdk_services#type:TextInput", ["dart:core::Object"]) as typeof _TextInputFactory & _FlaxInstanceType<TextInput> & _FlaxDartType<TextInput, readonly ["class", "flax.core/sdk_services#type:TextInput", readonly [], false]>;
