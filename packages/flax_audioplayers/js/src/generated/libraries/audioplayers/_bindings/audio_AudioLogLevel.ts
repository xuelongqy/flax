// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioLogLevel extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "level" | "compareTo" | "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel">, Omit<upstream1.Comparable<AudioLogLevel>, typeof _flaxDartTypeValue | "level" | "compareTo" | "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel" | keyof upstream0.Enum>, Readonly<{ "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel": readonly [] }> { readonly __AudioLogLevel: unique symbol;
readonly [_flaxDartTypeValue]: AudioLogLevel;
readonly name: string;
readonly index: number;

readonly level: number;
compareTo(other: AudioLogLevel): number;
}
defineEnum("flax.audio/audio#type:AudioLogLevel", ["none","error","info"], {
get level(): number { return invokeTopLevel("flax.audio/audio#function:AudioLogLevel.level%3Aget", [this]) as number; },
compareTo(this: object, other: AudioLogLevel): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogLevel.compareTo%3Acall", [this, other], _flaxMemberParameters15);
return _flaxResult as number;
},
}, ["level"], ["flax.core/flutter#type:Enum","dart:core::Object","flax.core/flutter#type:Comparable"]);
const _flaxEnum_AudioLogLevel_api = {
none: enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "none"),
error: enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "error"),
info: enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "info"),
values: Object.freeze([enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "none"), enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "error"), enumValue<AudioLogLevel>("flax.audio/audio#type:AudioLogLevel", "info")]),
fromInt(level: number): AudioLogLevel {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogLevel.fromInt%3Afactory", [level], _flaxMemberParameters16);
return _flaxResult as AudioLogLevel;
},
};
export const AudioLogLevel = Object.freeze(_flaxBindInstanceType<AudioLogLevel, typeof _flaxEnum_AudioLogLevel_api>(_flaxEnum_AudioLogLevel_api, "flax.audio/audio#type:AudioLogLevel", ["flax.core/flutter#type:Enum","dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _flaxEnum_AudioLogLevel_api & _FlaxInstanceType<AudioLogLevel> & _FlaxDartType<AudioLogLevel, readonly ["class", "flax.audio/audio#type:AudioLogLevel", readonly [], false]>);
