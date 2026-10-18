// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_UndoManagerClient';
import '@flax/flutter/services/_bindings/sdk_services_UndoManagerClient';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UndoManager extends Readonly<{ "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManager": readonly [] }> { readonly __UndoManager: unique symbol;
readonly [_flaxDartTypeValue]: UndoManager;

}
defineObject("flax.core/sdk_services#type:UndoManager", [], [], _flaxBindingMethods("flax.core/sdk_services#type:UndoManager", "object", {}, {}), []);
export namespace _UndoManagerFactory { export function setClient(value: Readonly<{ "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManagerClient": readonly [] }> | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:UndoManager.client%3D", [value]);
} }
export namespace _UndoManagerFactory { export declare const client: upstream0.UndoManagerClient | null; }
_flaxDefineStaticGetters(_UndoManagerFactory, "flax.core/sdk_services#read:UndoManager.", ["client"]);
export namespace _UndoManagerFactory { export function setUndoState(options: { canRedo?: boolean | undefined; canUndo?: boolean | undefined } = {}): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["canRedo","canUndo"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:UndoManager.setUndoState", [options.canRedo, options.canUndo]);
} }
export const UndoManager: typeof _UndoManagerFactory & _FlaxInstanceType<UndoManager> & _FlaxDartType<UndoManager, readonly ["class", "flax.core/sdk_services#type:UndoManager", readonly [], false]> = _flaxBindInstanceType<UndoManager, typeof _UndoManagerFactory>(_UndoManagerFactory, "flax.core/sdk_services#type:UndoManager", ["dart:core::Object"]) as typeof _UndoManagerFactory & _FlaxInstanceType<UndoManager> & _FlaxDartType<UndoManager, readonly ["class", "flax.core/sdk_services#type:UndoManager", readonly [], false]>;
