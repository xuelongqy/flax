// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { _flaxMemberParameters0 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidAudioMode extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioMode": readonly [] }> { readonly __AndroidAudioMode: unique symbol;
readonly [_flaxDartTypeValue]: AndroidAudioMode;
readonly name: string;
readonly index: number;

readonly value: number;
}
defineEnum("flax.audio/audio#type:AndroidAudioMode", ["normal","ringtone","inCall","inCommunication","callScreening"], {
get value(): number { return invokeTopLevel("flax.audio/audio#function:AndroidAudioMode.value%3Aget", [this]) as number; },
}, ["value"], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AndroidAudioMode_api = {
normal: enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "normal"),
ringtone: enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "ringtone"),
inCall: enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "inCall"),
inCommunication: enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "inCommunication"),
callScreening: enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "callScreening"),
values: Object.freeze([enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "normal"), enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "ringtone"), enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "inCall"), enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "inCommunication"), enumValue<AndroidAudioMode>("flax.audio/audio#type:AndroidAudioMode", "callScreening")]),
fromInt(value: number): AndroidAudioMode {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AndroidAudioMode.fromInt%3Afactory", [value], _flaxMemberParameters0);
return _flaxResult as AndroidAudioMode;
},
};
export const AndroidAudioMode = Object.freeze(_flaxBindInstanceType<AndroidAudioMode, typeof _flaxEnum_AndroidAudioMode_api>(_flaxEnum_AndroidAudioMode_api, "flax.audio/audio#type:AndroidAudioMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AndroidAudioMode_api & _FlaxInstanceType<AndroidAudioMode> & _FlaxDartType<AndroidAudioMode, readonly ["class", "flax.audio/audio#type:AndroidAudioMode", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioMode";
