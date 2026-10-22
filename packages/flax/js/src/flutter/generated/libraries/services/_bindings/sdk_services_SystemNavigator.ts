// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters120, _flaxMemberParameters121, _flaxMemberParameters0, _flaxMemberParameters122 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemNavigator extends Readonly<{ "__flaxBound:package:flutter/src/services/system_navigator.dart::SystemNavigator": readonly [] }> { readonly __SystemNavigator: unique symbol;
readonly [_flaxDartTypeValue]: SystemNavigator;

}
defineObject("flax.core/sdk_services#type:SystemNavigator", [], [], _flaxBindingMethods("flax.core/sdk_services#type:SystemNavigator", "object", {}, {}), []);
export namespace _SystemNavigatorFactory { export function setFrameworkHandlesBack(frameworkHandlesBack: boolean): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemNavigator.setFrameworkHandlesBack", [frameworkHandlesBack], _flaxMemberParameters120);
return _flaxResult as Promise<void>;
} }
export namespace _SystemNavigatorFactory { export function pop(options: { animated?: boolean | null | undefined } = {}): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["animated"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemNavigator.pop", [options.animated], _flaxMemberParameters121);
return _flaxResult as Promise<void>;
} }
export namespace _SystemNavigatorFactory { export function selectSingleEntryHistory(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemNavigator.selectSingleEntryHistory", [], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export namespace _SystemNavigatorFactory { export function selectMultiEntryHistory(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemNavigator.selectMultiEntryHistory", [], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export namespace _SystemNavigatorFactory { export function routeInformationUpdated(options: { location?: string | null | undefined; replace?: boolean | undefined; state?: unknown | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined } = {}): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["location","replace","state","uri"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemNavigator.routeInformationUpdated", [options.location, options.replace, options.state, options.uri], _flaxMemberParameters122);
return _flaxResult as Promise<void>;
} }
export const SystemNavigator: typeof _SystemNavigatorFactory & _FlaxInstanceType<SystemNavigator> & _FlaxDartType<SystemNavigator, readonly ["class", "flax.core/sdk_services#type:SystemNavigator", readonly [], false]> = _flaxBindInstanceType<SystemNavigator, typeof _SystemNavigatorFactory>(_SystemNavigatorFactory, "flax.core/sdk_services#type:SystemNavigator", ["dart:core::Object"]) as typeof _SystemNavigatorFactory & _FlaxInstanceType<SystemNavigator> & _FlaxDartType<SystemNavigator, readonly ["class", "flax.core/sdk_services#type:SystemNavigator", readonly [], false]>;
