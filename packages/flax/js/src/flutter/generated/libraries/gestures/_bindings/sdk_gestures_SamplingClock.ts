// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/core/_bindings/sdk_dependencies_Stopwatch';
import '@flax/dart/core/_bindings/sdk_dependencies_Stopwatch';
import { _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SamplingClock extends Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::SamplingClock": readonly [] }> { readonly __SamplingClock: unique symbol;
readonly [_flaxDartTypeValue]: SamplingClock;

now(): upstream0.DateTime;
stopwatch(): upstream1.Stopwatch;
}
defineObject("flax.core/sdk_gestures#type:SamplingClock", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:SamplingClock", "object", {"now":_flaxMemberParameters7,"stopwatch":_flaxMemberParameters7}, {}), []);
export function _SamplingClockFactory(): SamplingClock {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:SamplingClock", "", _flaxMemberParameters7, [], {}) as SamplingClock;
}
const _SamplingClockProxy = {type: "flax.core/sdk_gestures#type:SamplingClock", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"now":_flaxMemberParameters7,"stopwatch":_flaxMemberParameters7}, getters: [], setters: [], contextMembers: [], superMembers: ["now","stopwatch"]} as const;
export interface _SamplingClockNative extends SamplingClock {
readonly [_flaxDartTypeValue]: _SamplingClockNative;

now(): upstream0.DateTime;
stopwatch(): upstream1.Stopwatch;
}
export abstract class _SamplingClockNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SamplingClock>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SamplingClock;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:SamplingClock", readonly [], false];
constructor() { super(_SamplingClockProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SamplingClockNative.prototype, _SamplingClockProxy);
export namespace _SamplingClockFactory { export function implement(args: [], implementation: {}): SamplingClock {
return constructProxy(_SamplingClockProxy, args, implementation) as SamplingClock; } }
const _SamplingClockBinding = _flaxProxyFactory(_SamplingClockFactory, _SamplingClockNative) as unknown as typeof _SamplingClockFactory & (new() => _SamplingClockNative);
export const SamplingClock: typeof _SamplingClockBinding & _FlaxInstanceType<SamplingClock> & _FlaxDartType<SamplingClock, readonly ["class", "flax.core/sdk_gestures#type:SamplingClock", readonly [], false]> = _flaxBindInstanceType<SamplingClock, typeof _SamplingClockBinding>(_SamplingClockBinding, "flax.core/sdk_gestures#type:SamplingClock", ["dart:core::Object"]) as typeof _SamplingClockBinding & _FlaxInstanceType<SamplingClock> & _FlaxDartType<SamplingClock, readonly ["class", "flax.core/sdk_gestures#type:SamplingClock", readonly [], false]>;
