// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { _flaxMemberParameters0 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidAudioFocus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioFocus": readonly [] }> { readonly __AndroidAudioFocus: unique symbol;
readonly [_flaxDartTypeValue]: AndroidAudioFocus;
readonly name: string;
readonly index: number;

readonly value: number;
}
defineEnum("flax.audio/audio#type:AndroidAudioFocus", ["none","gain","gainTransient","gainTransientMayDuck","gainTransientExclusive"], {
get value(): number { return invokeTopLevel("flax.audio/audio#function:AndroidAudioFocus.value%3Aget", [this]) as number; },
}, ["value"], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AndroidAudioFocus_api = {
none: enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "none"),
gain: enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gain"),
gainTransient: enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransient"),
gainTransientMayDuck: enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransientMayDuck"),
gainTransientExclusive: enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransientExclusive"),
values: Object.freeze([enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "none"), enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gain"), enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransient"), enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransientMayDuck"), enumValue<AndroidAudioFocus>("flax.audio/audio#type:AndroidAudioFocus", "gainTransientExclusive")]),
fromInt(value: number): AndroidAudioFocus {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AndroidAudioFocus.fromInt%3Afactory", [value], _flaxMemberParameters0);
return _flaxResult as AndroidAudioFocus;
},
};
export const AndroidAudioFocus = Object.freeze(_flaxBindInstanceType<AndroidAudioFocus, typeof _flaxEnum_AndroidAudioFocus_api>(_flaxEnum_AndroidAudioFocus_api, "flax.audio/audio#type:AndroidAudioFocus", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AndroidAudioFocus_api & _FlaxInstanceType<AndroidAudioFocus> & _FlaxDartType<AndroidAudioFocus, readonly ["class", "flax.audio/audio#type:AndroidAudioFocus", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioFocus";
