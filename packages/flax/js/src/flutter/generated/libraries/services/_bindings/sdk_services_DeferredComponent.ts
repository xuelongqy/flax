// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters36 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeferredComponent extends Readonly<{ "__flaxBound:package:flutter/src/services/deferred_component.dart::DeferredComponent": readonly [] }> { readonly __DeferredComponent: unique symbol;
readonly [_flaxDartTypeValue]: DeferredComponent;

}
defineObject("flax.core/sdk_services#type:DeferredComponent", [], [], _flaxBindingMethods("flax.core/sdk_services#type:DeferredComponent", "object", {}, {}), []);
export namespace _DeferredComponentFactory { export function installDeferredComponent(options: { componentName: string }): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["componentName"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:DeferredComponent.installDeferredComponent", [options.componentName], _flaxMemberParameters36);
return _flaxResult as Promise<void>;
} }
export namespace _DeferredComponentFactory { export function uninstallDeferredComponent(options: { componentName: string }): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["componentName"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:DeferredComponent.uninstallDeferredComponent", [options.componentName], _flaxMemberParameters36);
return _flaxResult as Promise<void>;
} }
export const DeferredComponent: typeof _DeferredComponentFactory & _FlaxInstanceType<DeferredComponent> & _FlaxDartType<DeferredComponent, readonly ["class", "flax.core/sdk_services#type:DeferredComponent", readonly [], false]> = _flaxBindInstanceType<DeferredComponent, typeof _DeferredComponentFactory>(_DeferredComponentFactory, "flax.core/sdk_services#type:DeferredComponent", ["dart:core::Object"]) as typeof _DeferredComponentFactory & _FlaxInstanceType<DeferredComponent> & _FlaxDartType<DeferredComponent, readonly ["class", "flax.core/sdk_services#type:DeferredComponent", readonly [], false]>;
