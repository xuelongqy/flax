// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import { _flaxMemberParameters7, _flaxMemberParameters19 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeviceGestureSettings extends Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [] }> { readonly __DeviceGestureSettings: unique symbol;
readonly [_flaxDartTypeValue]: DeviceGestureSettings;

readonly touchSlop: number | null;
readonly panSlop: number | null;
toString(): string;
}
defineObject("flax.core/sdk_gestures#type:DeviceGestureSettings", ["touchSlop","panSlop"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:DeviceGestureSettings", "object", {"toString":_flaxMemberParameters7}, {}), []);
export function _DeviceGestureSettingsFactory(options: { touchSlop?: number | null | undefined } = {}): DeviceGestureSettings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:DeviceGestureSettings", "", [{"name":"touchSlop"}], [], options) as DeviceGestureSettings;
}
export namespace _DeviceGestureSettingsFactory {
export function fromView(view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>): DeviceGestureSettings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:DeviceGestureSettings", "fromView", [{"name":"view","required":true,"positional":true}], [view], {}) as DeviceGestureSettings;
}
}
const _DeviceGestureSettingsProxy = {type: "flax.core/sdk_gestures#type:DeviceGestureSettings", parameters: _flaxMemberParameters19, constructors: {"": _flaxMemberParameters19}, methods: {"toString":_flaxMemberParameters7}, getters: ["touchSlop","panSlop"], setters: [], contextMembers: [], superMembers: ["get:touchSlop","get:panSlop","toString"]} as const;
export interface _DeviceGestureSettingsNative extends DeviceGestureSettings {
readonly [_flaxDartTypeValue]: _DeviceGestureSettingsNative;

toString(): string;
get touchSlop(): number | null;
get panSlop(): number | null;
}
export abstract class _DeviceGestureSettingsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceGestureSettings>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DeviceGestureSettings;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false];
constructor(options?: {touchSlop?: number | null | undefined}) { super(_DeviceGestureSettingsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DeviceGestureSettingsNative.prototype, _DeviceGestureSettingsProxy);
export namespace _DeviceGestureSettingsFactory { export function implement(args: [options?: {touchSlop?: number | null | undefined}], implementation: {}): DeviceGestureSettings {
return constructProxy(_DeviceGestureSettingsProxy, args, implementation) as DeviceGestureSettings; } }
const _DeviceGestureSettingsBinding = _flaxProxyFactory(_DeviceGestureSettingsFactory, _DeviceGestureSettingsNative) as unknown as typeof _DeviceGestureSettingsFactory & (new(options?: {touchSlop?: number | null | undefined}) => _DeviceGestureSettingsNative);
export const DeviceGestureSettings: typeof _DeviceGestureSettingsBinding & _FlaxInstanceType<DeviceGestureSettings> & _FlaxDartType<DeviceGestureSettings, readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false]> = _flaxBindInstanceType<DeviceGestureSettings, typeof _DeviceGestureSettingsBinding>(_DeviceGestureSettingsBinding, "flax.core/sdk_gestures#type:DeviceGestureSettings", ["dart:core::Object"]) as typeof _DeviceGestureSettingsBinding & _FlaxInstanceType<DeviceGestureSettings> & _FlaxDartType<DeviceGestureSettings, readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false]>;
