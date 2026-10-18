// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BackgroundIsolateBinaryMessenger extends Omit<upstream0.BinaryMessenger, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/_background_isolate_binary_messenger_io.dart::BackgroundIsolateBinaryMessenger": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [] }> { readonly __BackgroundIsolateBinaryMessenger: unique symbol;
readonly [_flaxDartTypeValue]: BackgroundIsolateBinaryMessenger;

handlePlatformMessage(channel: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null): Promise<void>;
send(channel: string, message: globalThis.DataView | null): Promise<globalThis.DataView | null> | null;
setMessageHandler(channel: string, handler: ((message: globalThis.DataView | null) => Promise<globalThis.DataView | null> | null) | null): void;
}
defineObject("flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", [], [], _flaxBindingMethods("flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:BinaryMessenger");
export namespace _BackgroundIsolateBinaryMessengerFactory { export declare const instance: upstream0.BinaryMessenger; }
_flaxDefineStaticGetters(_BackgroundIsolateBinaryMessengerFactory, "flax.core/sdk_services#read:BackgroundIsolateBinaryMessenger.", ["instance"]);
export namespace _BackgroundIsolateBinaryMessengerFactory { export function ensureInitialized(token: Readonly<{ "__flaxBound:dart:ui::RootIsolateToken": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:BackgroundIsolateBinaryMessenger.ensureInitialized", [token]);
} }
export const BackgroundIsolateBinaryMessenger: typeof _BackgroundIsolateBinaryMessengerFactory & _FlaxInstanceType<BackgroundIsolateBinaryMessenger> & _FlaxDartType<BackgroundIsolateBinaryMessenger, readonly ["class", "flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", readonly [], false]> = _flaxBindInstanceType<BackgroundIsolateBinaryMessenger, typeof _BackgroundIsolateBinaryMessengerFactory>(_BackgroundIsolateBinaryMessengerFactory, "flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", ["flax.core/sdk_services#type:BinaryMessenger","dart:core::Object"]) as typeof _BackgroundIsolateBinaryMessengerFactory & _FlaxInstanceType<BackgroundIsolateBinaryMessenger> & _FlaxDartType<BackgroundIsolateBinaryMessenger, readonly ["class", "flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "handlePlatformMessage" | "send" | "setMessageHandler" | "__flaxBound:package:flutter/src/services/_background_isolate_binary_messenger_io.dart::BackgroundIsolateBinaryMessenger" | "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger";
