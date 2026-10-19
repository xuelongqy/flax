// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"touchSlop"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeviceGestureSettings extends Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [] }> { readonly __DeviceGestureSettings: unique symbol;
readonly [_flaxDartTypeValue]: DeviceGestureSettings;

}
defineObject("flax.core/sdk_gestures#type:DeviceGestureSettings", ["touchSlop","panSlop"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:DeviceGestureSettings", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _DeviceGestureSettingsProxy = {type: "flax.core/sdk_gestures#type:DeviceGestureSettings", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["touchSlop","panSlop"], setters: [], contextMembers: [], superMembers: ["get:touchSlop","get:panSlop","toString"]} as const;
export interface DeviceGestureSettings {
readonly [_flaxDartTypeValue]: DeviceGestureSettings;

toString(): string;
get touchSlop(): number | null;
get panSlop(): number | null;
}
export abstract class DeviceGestureSettings extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceGestureSettings>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DeviceGestureSettings;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false];
constructor(options?: {touchSlop?: number | null | undefined}) { super(_DeviceGestureSettingsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DeviceGestureSettings.prototype, _DeviceGestureSettingsProxy);
export namespace DeviceGestureSettings { export function implement(args: [options?: {touchSlop?: number | null | undefined}], implementation: {}): DeviceGestureSettings {
return constructProxy(_DeviceGestureSettingsProxy, args, implementation) as DeviceGestureSettings; } }
_flaxBindInstanceType<DeviceGestureSettings, typeof DeviceGestureSettings>(DeviceGestureSettings, "flax.core/sdk_gestures#type:DeviceGestureSettings", ["dart:core::Object"]);
