// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scribe extends Readonly<{ "__flaxBound:package:flutter/src/services/scribe.dart::Scribe": readonly [] }> { readonly __Scribe: unique symbol;
readonly [_flaxDartTypeValue]: Scribe;

}
defineObject("flax.core/sdk_services#type:Scribe", [], [], _flaxBindingMethods("flax.core/sdk_services#type:Scribe", "object", {}, {}), []);
export namespace _ScribeFactory { export function isFeatureAvailable(): Promise<boolean> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Scribe.isFeatureAvailable", []);
return _flaxResult as Promise<boolean>;
} }
export namespace _ScribeFactory { export function isStylusHandwritingAvailable(): Promise<boolean> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Scribe.isStylusHandwritingAvailable", []);
return _flaxResult as Promise<boolean>;
} }
export namespace _ScribeFactory { export function startStylusHandwriting(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Scribe.startStylusHandwriting", []);
return _flaxResult as Promise<void>;
} }
export const Scribe: typeof _ScribeFactory & _FlaxInstanceType<Scribe> & _FlaxDartType<Scribe, readonly ["class", "flax.core/sdk_services#type:Scribe", readonly [], false]> = _flaxBindInstanceType<Scribe, typeof _ScribeFactory>(_ScribeFactory, "flax.core/sdk_services#type:Scribe", ["dart:core::Object"]) as typeof _ScribeFactory & _FlaxInstanceType<Scribe> & _FlaxDartType<Scribe, readonly ["class", "flax.core/sdk_services#type:Scribe", readonly [], false]>;
