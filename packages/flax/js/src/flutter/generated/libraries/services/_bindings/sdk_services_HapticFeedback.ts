// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HapticFeedback extends Readonly<{ "__flaxBound:package:flutter/src/services/haptic_feedback.dart::HapticFeedback": readonly [] }> { readonly __HapticFeedback: unique symbol;
readonly [_flaxDartTypeValue]: HapticFeedback;

}
defineObject("flax.core/sdk_services#type:HapticFeedback", [], [], _flaxBindingMethods("flax.core/sdk_services#type:HapticFeedback", "object", {}, {}), []);
export namespace _HapticFeedbackFactory { export function vibrate(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.vibrate", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function lightImpact(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.lightImpact", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function mediumImpact(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.mediumImpact", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function heavyImpact(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.heavyImpact", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function selectionClick(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.selectionClick", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function successNotification(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.successNotification", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function warningNotification(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.warningNotification", []);
return _flaxResult as Promise<void>;
} }
export namespace _HapticFeedbackFactory { export function errorNotification(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:HapticFeedback.errorNotification", []);
return _flaxResult as Promise<void>;
} }
export const HapticFeedback: typeof _HapticFeedbackFactory & _FlaxInstanceType<HapticFeedback> & _FlaxDartType<HapticFeedback, readonly ["class", "flax.core/sdk_services#type:HapticFeedback", readonly [], false]> = _flaxBindInstanceType<HapticFeedback, typeof _HapticFeedbackFactory>(_HapticFeedbackFactory, "flax.core/sdk_services#type:HapticFeedback", ["dart:core::Object"]) as typeof _HapticFeedbackFactory & _FlaxInstanceType<HapticFeedback> & _FlaxDartType<HapticFeedback, readonly ["class", "flax.core/sdk_services#type:HapticFeedback", readonly [], false]>;
