// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters0, _flaxMemberParameters62, _flaxMemberParameters63, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerEventResampler extends Readonly<{ "__flaxBound:package:flutter/src/gestures/resampler.dart::PointerEventResampler": readonly [] }> { readonly __PointerEventResampler: unique symbol;
readonly [_flaxDartTypeValue]: PointerEventResampler;

}
defineObject("flax.core/sdk_gestures#type:PointerEventResampler", ["hasPendingEvents","isTracked","isDown"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerEventResampler", "object", {"addEvent":_flaxMemberParameters0,"sample":_flaxMemberParameters62,"stop":_flaxMemberParameters63}, {}), []);
const _PointerEventResamplerProxy = {type: "flax.core/sdk_gestures#type:PointerEventResampler", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"addEvent":_flaxMemberParameters0,"sample":_flaxMemberParameters62,"stop":_flaxMemberParameters63}, getters: ["hasPendingEvents","isTracked","isDown"], setters: [], contextMembers: [], superMembers: ["get:hasPendingEvents","get:isTracked","get:isDown","addEvent","sample","stop"]} as const;
export interface PointerEventResampler {
readonly [_flaxDartTypeValue]: PointerEventResampler;

addEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
sample(sampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, nextSampleTime: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, callback: ((event: upstream0.PointerEvent) => void)): void;
stop(callback: ((event: upstream0.PointerEvent) => void)): void;
get hasPendingEvents(): boolean;
get isTracked(): boolean;
get isDown(): boolean;
}
export abstract class PointerEventResampler extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerEventResampler>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerEventResampler;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false];
constructor() { super(_PointerEventResamplerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PointerEventResampler.prototype, _PointerEventResamplerProxy);
export namespace PointerEventResampler { export function implement(args: [], implementation: {}): PointerEventResampler {
return constructProxy(_PointerEventResamplerProxy, args, implementation) as PointerEventResampler; } }
_flaxBindInstanceType<PointerEventResampler, typeof PointerEventResampler>(PointerEventResampler, "flax.core/sdk_gestures#type:PointerEventResampler", ["dart:core::Object"]);
