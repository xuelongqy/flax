// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_DeviceOrientation';
import '@flax/flutter/services/_bindings/sdk_services_DeviceOrientation';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ApplicationSwitcherDescription';
import '@flax/flutter/services/_bindings/sdk_services_ApplicationSwitcherDescription';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SystemUiMode';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiMode';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlay';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlay';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import { _flaxMemberParameters110, _flaxMemberParameters111, _flaxMemberParameters112, _flaxMemberParameters103, _flaxMemberParameters0, _flaxMemberParameters113, _flaxMemberParameters114 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemChrome extends Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemChrome": readonly [] }> { readonly __SystemChrome: unique symbol;
readonly [_flaxDartTypeValue]: SystemChrome;

}
defineObject("flax.core/sdk_services#type:SystemChrome", [], [], _flaxBindingMethods("flax.core/sdk_services#type:SystemChrome", "object", {}, {}), []);
export namespace _SystemChromeFactory { export function setPreferredOrientations(orientations: DartListInput<upstream0.DeviceOrientation, upstream0.DeviceOrientation>): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.setPreferredOrientations", [orientations], _flaxMemberParameters110);
return _flaxResult as Promise<void>;
} }
export namespace _SystemChromeFactory { export function setApplicationSwitcherDescription(description: Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [] }>): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.setApplicationSwitcherDescription", [description], _flaxMemberParameters111);
return _flaxResult as Promise<void>;
} }
export namespace _SystemChromeFactory { export function setEnabledSystemUIMode(mode: upstream2.SystemUiMode, options: { overlays?: DartListInput<upstream3.SystemUiOverlay, upstream3.SystemUiOverlay> | null | undefined } = {}): Promise<void> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["overlays"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.setEnabledSystemUIMode", [mode, options.overlays], _flaxMemberParameters112);
return _flaxResult as Promise<void>;
} }
export namespace _SystemChromeFactory { export function setSystemUIChangeCallback(callback: ((systemOverlaysAreVisible: boolean) => Promise<void>) | null): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.setSystemUIChangeCallback", [callback], _flaxMemberParameters103);
return _flaxResult as Promise<void>;
} }
export namespace _SystemChromeFactory { export function restoreSystemUIOverlays(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.restoreSystemUIOverlays", [], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export namespace _SystemChromeFactory { export function setSystemUIOverlayStyle(style: Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.setSystemUIOverlayStyle", [style], _flaxMemberParameters113);
} }
export namespace _SystemChromeFactory { export function handleAppLifecycleStateChanged(state: upstream5.AppLifecycleState): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemChrome.handleAppLifecycleStateChanged", [state], _flaxMemberParameters114);
} }
export const SystemChrome: typeof _SystemChromeFactory & _FlaxInstanceType<SystemChrome> & _FlaxDartType<SystemChrome, readonly ["class", "flax.core/sdk_services#type:SystemChrome", readonly [], false]> = _flaxBindInstanceType<SystemChrome, typeof _SystemChromeFactory>(_SystemChromeFactory, "flax.core/sdk_services#type:SystemChrome", ["dart:core::Object"]) as typeof _SystemChromeFactory & _FlaxInstanceType<SystemChrome> & _FlaxDartType<SystemChrome, readonly ["class", "flax.core/sdk_services#type:SystemChrome", readonly [], false]>;
