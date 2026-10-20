// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidPointerProperties';
import '@flax/flutter/services/_bindings/sdk_services_AndroidPointerProperties';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AndroidPointerCoords';
import '@flax/flutter/services/_bindings/sdk_services_AndroidPointerCoords';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidMotionEvent extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidMotionEvent": readonly [] }> { readonly __AndroidMotionEvent: unique symbol;
readonly [_flaxDartTypeValue]: AndroidMotionEvent;

readonly downTime: number;
readonly eventTime: number;
readonly action: number;
readonly pointerCount: number;
readonly pointerProperties: DartList<upstream0.AndroidPointerProperties>;
readonly pointerCoords: DartList<upstream1.AndroidPointerCoords>;
readonly metaState: number;
readonly buttonState: number;
readonly xPrecision: number;
readonly yPrecision: number;
readonly deviceId: number;
readonly edgeFlags: number;
readonly source: number;
readonly flags: number;
readonly motionEventId: number;
toString(): string;
}
defineObject("flax.core/sdk_services#type:AndroidMotionEvent", ["downTime","eventTime","action","pointerCount","pointerProperties","pointerCoords","metaState","buttonState","xPrecision","yPrecision","deviceId","edgeFlags","source","flags","motionEventId"], [], _flaxBindingMethods("flax.core/sdk_services#type:AndroidMotionEvent", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _AndroidMotionEventFactory(options: { downTime: number; eventTime: number; action: number; pointerCount: number; pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }>>; pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [] }>>; metaState: number; buttonState: number; xPrecision: number; yPrecision: number; deviceId: number; edgeFlags: number; source: number; flags: number; motionEventId: number }): AndroidMotionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:AndroidMotionEvent", "", [{"name":"downTime","required":true},{"name":"eventTime","required":true},{"name":"action","required":true},{"name":"pointerCount","required":true},{"name":"pointerProperties","required":true},{"name":"pointerCoords","required":true},{"name":"metaState","required":true},{"name":"buttonState","required":true},{"name":"xPrecision","required":true},{"name":"yPrecision","required":true},{"name":"deviceId","required":true},{"name":"edgeFlags","required":true},{"name":"source","required":true},{"name":"flags","required":true},{"name":"motionEventId","required":true}], [], options) as AndroidMotionEvent;
}
const _AndroidMotionEventProxy = {type: "flax.core/sdk_services#type:AndroidMotionEvent", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["downTime","eventTime","action","pointerCount","pointerProperties","pointerCoords","metaState","buttonState","xPrecision","yPrecision","deviceId","edgeFlags","source","flags","motionEventId"], setters: [], contextMembers: [], superMembers: ["get:downTime","get:eventTime","get:action","get:pointerCount","get:pointerProperties","get:pointerCoords","get:metaState","get:buttonState","get:xPrecision","get:yPrecision","get:deviceId","get:edgeFlags","get:source","get:flags","get:motionEventId","toString"]} as const;
export interface _AndroidMotionEventNative extends AndroidMotionEvent {
readonly [_flaxDartTypeValue]: _AndroidMotionEventNative;

toString(): string;
get downTime(): number;
get eventTime(): number;
get action(): number;
get pointerCount(): number;
get pointerProperties(): DartList<upstream0.AndroidPointerProperties>;
get pointerCoords(): DartList<upstream1.AndroidPointerCoords>;
get metaState(): number;
get buttonState(): number;
get xPrecision(): number;
get yPrecision(): number;
get deviceId(): number;
get edgeFlags(): number;
get source(): number;
get flags(): number;
get motionEventId(): number;
}
export abstract class _AndroidMotionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidMotionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AndroidMotionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidMotionEvent", readonly [], false];
constructor(options: {downTime: number; eventTime: number; action: number; pointerCount: number; pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }>>; pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [] }>>; metaState: number; buttonState: number; xPrecision: number; yPrecision: number; deviceId: number; edgeFlags: number; source: number; flags: number; motionEventId: number}) { super(_AndroidMotionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AndroidMotionEventNative.prototype, _AndroidMotionEventProxy);
export namespace _AndroidMotionEventFactory { export function implement(args: [options: {downTime: number; eventTime: number; action: number; pointerCount: number; pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }>>; pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [] }>>; metaState: number; buttonState: number; xPrecision: number; yPrecision: number; deviceId: number; edgeFlags: number; source: number; flags: number; motionEventId: number}], implementation: {}): AndroidMotionEvent {
return constructProxy(_AndroidMotionEventProxy, args, implementation) as AndroidMotionEvent; } }
const _AndroidMotionEventBinding = _flaxProxyFactory(_AndroidMotionEventFactory, _AndroidMotionEventNative) as unknown as typeof _AndroidMotionEventFactory & (new(options: {downTime: number; eventTime: number; action: number; pointerCount: number; pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }>>; pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [] }>>; metaState: number; buttonState: number; xPrecision: number; yPrecision: number; deviceId: number; edgeFlags: number; source: number; flags: number; motionEventId: number}) => _AndroidMotionEventNative);
export const AndroidMotionEvent: typeof _AndroidMotionEventBinding & _FlaxInstanceType<AndroidMotionEvent> & _FlaxDartType<AndroidMotionEvent, readonly ["class", "flax.core/sdk_services#type:AndroidMotionEvent", readonly [], false]> = _flaxBindInstanceType<AndroidMotionEvent, typeof _AndroidMotionEventBinding>(_AndroidMotionEventBinding, "flax.core/sdk_services#type:AndroidMotionEvent", ["dart:core::Object"]) as typeof _AndroidMotionEventBinding & _FlaxInstanceType<AndroidMotionEvent> & _FlaxDartType<AndroidMotionEvent, readonly ["class", "flax.core/sdk_services#type:AndroidMotionEvent", readonly [], false]>;
