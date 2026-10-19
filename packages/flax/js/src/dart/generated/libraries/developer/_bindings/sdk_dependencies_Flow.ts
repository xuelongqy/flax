// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Flow extends Readonly<{ "__flaxBound:dart:developer::Flow": readonly [] }> { readonly __Flow: unique symbol;
readonly [_flaxDartTypeValue]: Flow;

readonly id: number;
}
defineObject("flax.core/sdk_dependencies#type:Flow", ["id"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Flow", "object", {}, {}), []);
export namespace _FlowFactory { export function begin(options: { id?: number | null | undefined } = {}): Flow {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["id"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Flow.begin", [options.id]);
return _flaxResult as Flow;
} }
export namespace _FlowFactory { export function step(id: number): Flow {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Flow.step", [id]);
return _flaxResult as Flow;
} }
export namespace _FlowFactory { export function end(id: number): Flow {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Flow.end", [id]);
return _flaxResult as Flow;
} }
export const Flow: typeof _FlowFactory & _FlaxInstanceType<Flow> & _FlaxDartType<Flow, readonly ["class", "flax.core/sdk_dependencies#type:Flow", readonly [], false]> = _flaxBindInstanceType<Flow, typeof _FlowFactory>(_FlowFactory, "flax.core/sdk_dependencies#type:Flow", ["dart:core::Object"]) as typeof _FlowFactory & _FlaxInstanceType<Flow> & _FlaxDartType<Flow, readonly ["class", "flax.core/sdk_dependencies#type:Flow", readonly [], false]>;
