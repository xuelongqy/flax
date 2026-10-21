// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters0, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerEventResampler extends Readonly<{ "__flaxBound:package:flutter/src/gestures/resampler.dart::PointerEventResampler": readonly [] }> { readonly __PointerEventResampler: unique symbol;
readonly [_flaxDartTypeValue]: PointerEventResampler;

readonly hasPendingEvents: boolean;
readonly isTracked: boolean;
readonly isDown: boolean;
addEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
sample(sampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, nextSampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, callback: ((event: upstream0.PointerEvent) => void)): void;
stop(callback: ((event: upstream0.PointerEvent) => void)): void;
}
defineObject("flax.core/sdk_gestures#type:PointerEventResampler", ["hasPendingEvents","isTracked","isDown"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerEventResampler", "object", {"addEvent":_flaxMemberParameters0,"sample":_flaxMemberParameters64,"stop":_flaxMemberParameters65}, {}), []);
export function _PointerEventResamplerFactory(): PointerEventResampler {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:PointerEventResampler", "", [], [], {}) as PointerEventResampler;
}
const _PointerEventResamplerProxy = {type: "flax.core/sdk_gestures#type:PointerEventResampler", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"addEvent":_flaxMemberParameters0,"sample":_flaxMemberParameters64,"stop":_flaxMemberParameters65}, getters: ["hasPendingEvents","isTracked","isDown"], setters: [], contextMembers: [], superMembers: ["get:hasPendingEvents","get:isTracked","get:isDown","addEvent","sample","stop"]} as const;
export interface _PointerEventResamplerNative extends PointerEventResampler {
readonly [_flaxDartTypeValue]: _PointerEventResamplerNative;

addEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
sample(sampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, nextSampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, callback: ((event: upstream0.PointerEvent) => void)): void;
stop(callback: ((event: upstream0.PointerEvent) => void)): void;
get hasPendingEvents(): boolean;
get isTracked(): boolean;
get isDown(): boolean;
}
export abstract class _PointerEventResamplerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerEventResampler>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerEventResampler;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false];
constructor() { super(_PointerEventResamplerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerEventResamplerNative.prototype, _PointerEventResamplerProxy);
export namespace _PointerEventResamplerFactory { export function implement(args: [], implementation: {}): PointerEventResampler {
return constructProxy(_PointerEventResamplerProxy, args, implementation) as PointerEventResampler; } }
const _PointerEventResamplerBinding = _flaxProxyFactory(_PointerEventResamplerFactory, _PointerEventResamplerNative) as unknown as typeof _PointerEventResamplerFactory & (new() => _PointerEventResamplerNative);
export const PointerEventResampler: typeof _PointerEventResamplerBinding & _FlaxInstanceType<PointerEventResampler> & _FlaxDartType<PointerEventResampler, readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false]> = _flaxBindInstanceType<PointerEventResampler, typeof _PointerEventResamplerBinding>(_PointerEventResamplerBinding, "flax.core/sdk_gestures#type:PointerEventResampler", ["dart:core::Object"]) as typeof _PointerEventResamplerBinding & _FlaxInstanceType<PointerEventResampler> & _FlaxDartType<PointerEventResampler, readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false]>;
