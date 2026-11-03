// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AndroidAudioMode';
import '@flax/audioplayers/_bindings/audio_AndroidAudioMode';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AndroidContentType';
import '@flax/audioplayers/_bindings/audio_AndroidContentType';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AndroidUsageType';
import '@flax/audioplayers/_bindings/audio_AndroidUsageType';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_AndroidAudioFocus';
import '@flax/audioplayers/_bindings/audio_AndroidAudioFocus';
import { _flaxMemberParameters8, _flaxMemberParameters1, _flaxMemberParameters9 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContextAndroid extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> { readonly __AudioContextAndroid: unique symbol;
readonly [_flaxDartTypeValue]: AudioContextAndroid;

readonly isSpeakerphoneOn: boolean;
readonly audioMode: upstream0.AndroidAudioMode;
readonly stayAwake: boolean;
readonly contentType: upstream1.AndroidContentType;
readonly usageType: upstream2.AndroidUsageType;
readonly audioFocus: upstream3.AndroidAudioFocus;
copy(options?: {audioFocus?: upstream3.AndroidAudioFocus | null | undefined; audioMode?: upstream0.AndroidAudioMode | null | undefined; contentType?: upstream1.AndroidContentType | null | undefined; isSpeakerphoneOn?: boolean | null | undefined; stayAwake?: boolean | null | undefined; usageType?: upstream2.AndroidUsageType | null | undefined}): AudioContextAndroid;
toJson(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.audio/audio#type:AudioContextAndroid", ["isSpeakerphoneOn","audioMode","stayAwake","contentType","usageType","audioFocus"], [], _flaxBindingMethods("flax.audio/audio#type:AudioContextAndroid", "object", {"copy":_flaxMemberParameters8,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
export function _AudioContextAndroidFactory(options: { isSpeakerphoneOn?: boolean | undefined; audioMode?: upstream0.AndroidAudioMode | undefined; stayAwake?: boolean | undefined; contentType?: upstream1.AndroidContentType | undefined; usageType?: upstream2.AndroidUsageType | undefined; audioFocus?: upstream3.AndroidAudioFocus | undefined } = {}): AudioContextAndroid {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioContextAndroid", "", [{"name":"isSpeakerphoneOn"},{"name":"audioMode"},{"name":"stayAwake"},{"name":"contentType"},{"name":"usageType"},{"name":"audioFocus"}], [], options) as AudioContextAndroid;
}
const _AudioContextAndroidProxy = {type: "flax.audio/audio#type:AudioContextAndroid", parameters: _flaxMemberParameters9, constructors: {"": _flaxMemberParameters9}, methods: {"copy":_flaxMemberParameters8,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["isSpeakerphoneOn","audioMode","stayAwake","contentType","usageType","audioFocus"], setters: [], contextMembers: [], superMembers: ["get:isSpeakerphoneOn","get:audioMode","get:stayAwake","get:contentType","get:usageType","get:audioFocus","copy","toJson","toString"]} as const;
export interface _AudioContextAndroidNative extends AudioContextAndroid {
readonly [_flaxDartTypeValue]: _AudioContextAndroidNative;

copy(options?: {isSpeakerphoneOn?: boolean | null | undefined; audioMode?: upstream0.AndroidAudioMode | null | undefined; stayAwake?: boolean | null | undefined; contentType?: upstream1.AndroidContentType | null | undefined; usageType?: upstream2.AndroidUsageType | null | undefined; audioFocus?: upstream3.AndroidAudioFocus | null | undefined}): AudioContextAndroid;
toJson(): DartMap<string, unknown | null>;
toString(): string;
get isSpeakerphoneOn(): boolean;
get audioMode(): upstream0.AndroidAudioMode;
get stayAwake(): boolean;
get contentType(): upstream1.AndroidContentType;
get usageType(): upstream2.AndroidUsageType;
get audioFocus(): upstream3.AndroidAudioFocus;
}
export abstract class _AudioContextAndroidNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextAndroid>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioContextAndroid;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextAndroid", readonly [], false];
constructor(options?: {isSpeakerphoneOn?: boolean | undefined; audioMode?: upstream0.AndroidAudioMode | undefined; stayAwake?: boolean | undefined; contentType?: upstream1.AndroidContentType | undefined; usageType?: upstream2.AndroidUsageType | undefined; audioFocus?: upstream3.AndroidAudioFocus | undefined}) { super(_AudioContextAndroidProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioContextAndroidNative.prototype, _AudioContextAndroidProxy);
export namespace _AudioContextAndroidFactory { export function implement(args: [options?: {isSpeakerphoneOn?: boolean | undefined; audioMode?: upstream0.AndroidAudioMode | undefined; stayAwake?: boolean | undefined; contentType?: upstream1.AndroidContentType | undefined; usageType?: upstream2.AndroidUsageType | undefined; audioFocus?: upstream3.AndroidAudioFocus | undefined}], implementation: {}): AudioContextAndroid {
return constructProxy(_AudioContextAndroidProxy, args, implementation) as AudioContextAndroid; } }
const _AudioContextAndroidBinding = _flaxProxyFactory(_AudioContextAndroidFactory, _AudioContextAndroidNative) as unknown as typeof _AudioContextAndroidFactory & (new(options?: {isSpeakerphoneOn?: boolean | undefined; audioMode?: upstream0.AndroidAudioMode | undefined; stayAwake?: boolean | undefined; contentType?: upstream1.AndroidContentType | undefined; usageType?: upstream2.AndroidUsageType | undefined; audioFocus?: upstream3.AndroidAudioFocus | undefined}) => _AudioContextAndroidNative);
export const AudioContextAndroid: typeof _AudioContextAndroidBinding & _FlaxInstanceType<AudioContextAndroid> & _FlaxDartType<AudioContextAndroid, readonly ["class", "flax.audio/audio#type:AudioContextAndroid", readonly [], false]> = _flaxBindInstanceType<AudioContextAndroid, typeof _AudioContextAndroidBinding>(_AudioContextAndroidBinding, "flax.audio/audio#type:AudioContextAndroid", ["dart:core::Object"]) as typeof _AudioContextAndroidBinding & _FlaxInstanceType<AudioContextAndroid> & _FlaxDartType<AudioContextAndroid, readonly ["class", "flax.audio/audio#type:AudioContextAndroid", readonly [], false]>;
