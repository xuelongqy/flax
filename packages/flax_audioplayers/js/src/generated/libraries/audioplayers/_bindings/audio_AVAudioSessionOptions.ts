// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AVAudioSessionOptions extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionOptions": readonly [] }> { readonly __AVAudioSessionOptions: unique symbol;
readonly [_flaxDartTypeValue]: AVAudioSessionOptions;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:AVAudioSessionOptions", ["mixWithOthers","duckOthers","interruptSpokenAudioAndMixWithOthers","allowBluetooth","allowBluetoothA2DP","allowAirPlay","defaultToSpeaker","overrideMutedMicrophoneInterruption"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AVAudioSessionOptions_api = {
mixWithOthers: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "mixWithOthers"),
duckOthers: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "duckOthers"),
interruptSpokenAudioAndMixWithOthers: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "interruptSpokenAudioAndMixWithOthers"),
allowBluetooth: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowBluetooth"),
allowBluetoothA2DP: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowBluetoothA2DP"),
allowAirPlay: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowAirPlay"),
defaultToSpeaker: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "defaultToSpeaker"),
overrideMutedMicrophoneInterruption: enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "overrideMutedMicrophoneInterruption"),
values: Object.freeze([enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "mixWithOthers"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "duckOthers"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "interruptSpokenAudioAndMixWithOthers"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowBluetooth"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowBluetoothA2DP"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "allowAirPlay"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "defaultToSpeaker"), enumValue<AVAudioSessionOptions>("flax.audio/audio#type:AVAudioSessionOptions", "overrideMutedMicrophoneInterruption")]),
};
export const AVAudioSessionOptions = Object.freeze(_flaxBindInstanceType<AVAudioSessionOptions, typeof _flaxEnum_AVAudioSessionOptions_api>(_flaxEnum_AVAudioSessionOptions_api, "flax.audio/audio#type:AVAudioSessionOptions", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AVAudioSessionOptions_api & _FlaxInstanceType<AVAudioSessionOptions> & _FlaxDartType<AVAudioSessionOptions, readonly ["class", "flax.audio/audio#type:AVAudioSessionOptions", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionOptions";
