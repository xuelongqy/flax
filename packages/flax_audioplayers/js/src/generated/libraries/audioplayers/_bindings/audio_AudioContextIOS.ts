// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AVAudioSessionCategory';
import '@flax/audioplayers/_bindings/audio_AVAudioSessionCategory';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AVAudioSessionOptions';
import '@flax/audioplayers/_bindings/audio_AVAudioSessionOptions';
import { _flaxMemberParameters12, _flaxMemberParameters1 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContextIOS extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> { readonly __AudioContextIOS: unique symbol;
readonly [_flaxDartTypeValue]: AudioContextIOS;

readonly category: upstream0.AVAudioSessionCategory;
readonly options: DartSet<upstream1.AVAudioSessionOptions>;
copy(options?: {category?: upstream0.AVAudioSessionCategory | null | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | null | undefined}): AudioContextIOS;
toJson(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.audio/audio#type:AudioContextIOS", ["category","options"], [], _flaxBindingMethods("flax.audio/audio#type:AudioContextIOS", "object", {"copy":_flaxMemberParameters12,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
export function _AudioContextIOSFactory(options: { category?: upstream0.AVAudioSessionCategory | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined } = {}): AudioContextIOS {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioContextIOS", "", _flaxMemberParameters12, [], options) as AudioContextIOS;
}
const _AudioContextIOSProxy = {type: "flax.audio/audio#type:AudioContextIOS", parameters: _flaxMemberParameters12, constructors: {"": _flaxMemberParameters12}, methods: {"copy":_flaxMemberParameters12,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["category","options"], setters: [], contextMembers: [], superMembers: ["get:category","get:options","copy","toJson","toString"]} as const;
export interface _AudioContextIOSNative extends AudioContextIOS {
readonly [_flaxDartTypeValue]: _AudioContextIOSNative;

copy(options?: {category?: upstream0.AVAudioSessionCategory | null | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | null | undefined}): AudioContextIOS;
toJson(): DartMap<string, unknown | null>;
toString(): string;
get category(): upstream0.AVAudioSessionCategory;
get options(): DartSet<upstream1.AVAudioSessionOptions>;
}
export abstract class _AudioContextIOSNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextIOS>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioContextIOS;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextIOS", readonly [], false];
constructor(options?: {category?: upstream0.AVAudioSessionCategory | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined}) { super(_AudioContextIOSProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioContextIOSNative.prototype, _AudioContextIOSProxy);
export namespace _AudioContextIOSFactory { export function implement(args: [options?: {category?: upstream0.AVAudioSessionCategory | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined}], implementation: {}): AudioContextIOS {
return constructProxy(_AudioContextIOSProxy, args, implementation) as AudioContextIOS; } }
const _AudioContextIOSBinding = _flaxProxyFactory(_AudioContextIOSFactory, _AudioContextIOSNative) as unknown as typeof _AudioContextIOSFactory & (new(options?: {category?: upstream0.AVAudioSessionCategory | undefined; options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined}) => _AudioContextIOSNative);
export const AudioContextIOS: typeof _AudioContextIOSBinding & _FlaxInstanceType<AudioContextIOS> & _FlaxDartType<AudioContextIOS, readonly ["class", "flax.audio/audio#type:AudioContextIOS", readonly [], false]> = _flaxBindInstanceType<AudioContextIOS, typeof _AudioContextIOSBinding>(_AudioContextIOSBinding, "flax.audio/audio#type:AudioContextIOS", ["dart:core::Object"]) as typeof _AudioContextIOSBinding & _FlaxInstanceType<AudioContextIOS> & _FlaxDartType<AudioContextIOS, readonly ["class", "flax.audio/audio#type:AudioContextIOS", readonly [], false]>;
