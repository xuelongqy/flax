// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { _flaxMemberParameters0 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidUsageType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidUsageType": readonly [] }> { readonly __AndroidUsageType: unique symbol;
readonly [_flaxDartTypeValue]: AndroidUsageType;
readonly name: string;
readonly index: number;

readonly value: number;
}
defineEnum("flax.audio/audio#type:AndroidUsageType", ["unknown","media","voiceCommunication","voiceCommunicationSignalling","alarm","notification","notificationRingtone","notificationCommunicationRequest","notificationCommunicationInstant","notificationCommunicationDelayed","notificationEvent","assistanceAccessibility","assistanceNavigationGuidance","assistanceSonification","game","virtualSource","assistant"], {
get value(): number { return invokeTopLevel("flax.audio/audio#function:AndroidUsageType.value%3Aget", [this]) as number; },
}, ["value"], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AndroidUsageType_api = {
unknown: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "unknown"),
media: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "media"),
voiceCommunication: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "voiceCommunication"),
voiceCommunicationSignalling: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "voiceCommunicationSignalling"),
alarm: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "alarm"),
notification: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notification"),
notificationRingtone: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationRingtone"),
notificationCommunicationRequest: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationRequest"),
notificationCommunicationInstant: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationInstant"),
notificationCommunicationDelayed: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationDelayed"),
notificationEvent: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationEvent"),
assistanceAccessibility: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceAccessibility"),
assistanceNavigationGuidance: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceNavigationGuidance"),
assistanceSonification: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceSonification"),
game: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "game"),
virtualSource: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "virtualSource"),
assistant: enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistant"),
values: Object.freeze([enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "unknown"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "media"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "voiceCommunication"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "voiceCommunicationSignalling"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "alarm"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notification"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationRingtone"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationRequest"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationInstant"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationCommunicationDelayed"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "notificationEvent"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceAccessibility"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceNavigationGuidance"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistanceSonification"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "game"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "virtualSource"), enumValue<AndroidUsageType>("flax.audio/audio#type:AndroidUsageType", "assistant")]),
fromInt(value: number): AndroidUsageType {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AndroidUsageType.fromInt%3Afactory", [value], _flaxMemberParameters0);
return _flaxResult as AndroidUsageType;
},
};
export const AndroidUsageType = Object.freeze(_flaxBindInstanceType<AndroidUsageType, typeof _flaxEnum_AndroidUsageType_api>(_flaxEnum_AndroidUsageType_api, "flax.audio/audio#type:AndroidUsageType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AndroidUsageType_api & _FlaxInstanceType<AndroidUsageType> & _FlaxDartType<AndroidUsageType, readonly ["class", "flax.audio/audio#type:AndroidUsageType", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidUsageType";
