// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyEventDeviceType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "label" | "__flaxBound:dart:ui::KeyEventDeviceType">, Readonly<{ "__flaxBound:dart:ui::KeyEventDeviceType": readonly [] }> { readonly __KeyEventDeviceType: unique symbol;
readonly [_flaxDartTypeValue]: KeyEventDeviceType;
readonly name: string;
readonly index: number;

readonly label: string;
}
defineEnum("flax.core/sdk_dart_ui#type:KeyEventDeviceType", ["keyboard","directionalPad","gamepad","joystick","hdmi"], {
get label(): string { return invokeTopLevel("flax.core/sdk_dart_ui#function:KeyEventDeviceType.label%3Aget", [this]) as string; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_KeyEventDeviceType_api = {
keyboard: enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "keyboard"),
directionalPad: enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "directionalPad"),
gamepad: enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "gamepad"),
joystick: enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "joystick"),
hdmi: enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "hdmi"),
values: Object.freeze([enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "keyboard"), enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "directionalPad"), enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "gamepad"), enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "joystick"), enumValue<KeyEventDeviceType>("flax.core/sdk_dart_ui#type:KeyEventDeviceType", "hdmi")]),
};
export const KeyEventDeviceType = Object.freeze(_flaxBindInstanceType<KeyEventDeviceType, typeof _flaxEnum_KeyEventDeviceType_api>(_flaxEnum_KeyEventDeviceType_api, "flax.core/sdk_dart_ui#type:KeyEventDeviceType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_KeyEventDeviceType_api & _FlaxInstanceType<KeyEventDeviceType> & _FlaxDartType<KeyEventDeviceType, readonly ["class", "flax.core/sdk_dart_ui#type:KeyEventDeviceType", readonly [], false]>);
