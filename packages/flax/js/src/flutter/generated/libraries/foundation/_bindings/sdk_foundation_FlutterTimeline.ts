// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimings';
import '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterTimeline extends Readonly<{ "__flaxBound:package:flutter/src/foundation/timeline.dart::FlutterTimeline": readonly [] }> { readonly __FlutterTimeline: unique symbol;
readonly [_flaxDartTypeValue]: FlutterTimeline;

}
defineObject("flax.core/sdk_foundation#type:FlutterTimeline", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlutterTimeline", "object", {}, {}), []);
export namespace _FlutterTimelineFactory { export function setDebugCollectionEnabled(value: boolean): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.debugCollectionEnabled%3D", [value]);
} }
export namespace _FlutterTimelineFactory { export declare const debugCollectionEnabled: boolean; }
export namespace _FlutterTimelineFactory { export declare const now: number; }
_flaxDefineStaticGetters(_FlutterTimelineFactory, "flax.core/sdk_foundation#read:FlutterTimeline.", ["debugCollectionEnabled","now"]);
export namespace _FlutterTimelineFactory { export function startSync(name: string, options: { arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined } = {}): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.startSync", [name, options.arguments]);
} }
export namespace _FlutterTimelineFactory { export function finishSync(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.finishSync", []);
} }
export namespace _FlutterTimelineFactory { export function instantSync(name: string, options: { arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined } = {}): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.instantSync", [name, options.arguments]);
} }
export namespace _FlutterTimelineFactory { function _flaxDefault_timeSync<T extends unknown | null = unknown | null>(name: string, _flaxArg_66756e6374696f6e: (() => (T | _FlaxDartOutput<T>)), options: { arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined } = {}): _FlaxDartOutput<T> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.timeSync", [name, _flaxArg_66756e6374696f6e, options.arguments]);
return _flaxResult as _FlaxDartOutput<T>;
}
export const timeSync = _flaxDefineDartCallTypes(_flaxDefault_timeSync, {"id":"flax.core/sdk_foundation#function:FlutterTimeline.timeSync","parameters":[{"name":"name","required":true,"positional":true},{"name":"function","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_timeSync, _FlaxSignature0>;
}
export namespace _FlutterTimelineFactory { export function debugCollect(): upstream0.AggregatedTimings {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.debugCollect", []);
return _flaxResult as upstream0.AggregatedTimings;
} }
export namespace _FlutterTimelineFactory { export function debugReset(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterTimeline.debugReset", []);
} }
export const FlutterTimeline: typeof _FlutterTimelineFactory & _FlaxInstanceType<FlutterTimeline> & _FlaxDartType<FlutterTimeline, readonly ["class", "flax.core/sdk_foundation#type:FlutterTimeline", readonly [], false]> = _flaxBindInstanceType<FlutterTimeline, typeof _FlutterTimelineFactory>(_FlutterTimelineFactory, "flax.core/sdk_foundation#type:FlutterTimeline", ["dart:core::Object"]) as typeof _FlutterTimelineFactory & _FlaxInstanceType<FlutterTimeline> & _FlaxDartType<FlutterTimeline, readonly ["class", "flax.core/sdk_foundation#type:FlutterTimeline", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string,_flaxArg_66756e6374696f6e: (() => (_Selected0 | DartInput<_Selected0>)),options?: {arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined}) => _Selected0 : never : never; }
