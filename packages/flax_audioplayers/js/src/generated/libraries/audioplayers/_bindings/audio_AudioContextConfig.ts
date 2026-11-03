// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioContextConfigRoute';
import '@flax/audioplayers/_bindings/audio_AudioContextConfigRoute';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioContextConfigFocus';
import '@flax/audioplayers/_bindings/audio_AudioContextConfigFocus';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AudioContext';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import type * as upstream4 from '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import { _flaxMemberParameters10, _flaxMemberParameters1, _flaxMemberParameters11 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContextConfig extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfig": readonly [] }> { readonly __AudioContextConfig: unique symbol;
readonly [_flaxDartTypeValue]: AudioContextConfig;

readonly route: upstream0.AudioContextConfigRoute;
readonly focus: upstream1.AudioContextConfigFocus;
readonly respectSilence: boolean;
readonly stayAwake: boolean;
copy(options?: {focus?: upstream1.AudioContextConfigFocus | null | undefined; respectSilence?: boolean | null | undefined; route?: upstream0.AudioContextConfigRoute | null | undefined; stayAwake?: boolean | null | undefined}): AudioContextConfig;
build(): upstream2.AudioContext;
buildAndroid(): upstream3.AudioContextAndroid;
buildIOS(): upstream4.AudioContextIOS | null;
validateIOS(): void;
toString(): string;
}
defineObject("flax.audio/audio#type:AudioContextConfig", ["route","focus","respectSilence","stayAwake"], [], _flaxBindingMethods("flax.audio/audio#type:AudioContextConfig", "object", {"copy":_flaxMemberParameters10,"build":_flaxMemberParameters1,"buildAndroid":_flaxMemberParameters1,"buildIOS":_flaxMemberParameters1,"validateIOS":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
export function _AudioContextConfigFactory(options: { route?: upstream0.AudioContextConfigRoute | undefined; focus?: upstream1.AudioContextConfigFocus | undefined; respectSilence?: boolean | undefined; stayAwake?: boolean | undefined } = {}): AudioContextConfig {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioContextConfig", "", [{"name":"route"},{"name":"focus"},{"name":"respectSilence"},{"name":"stayAwake"}], [], options) as AudioContextConfig;
}
const _AudioContextConfigProxy = {type: "flax.audio/audio#type:AudioContextConfig", parameters: _flaxMemberParameters11, constructors: {"": _flaxMemberParameters11}, methods: {"copy":_flaxMemberParameters10,"build":_flaxMemberParameters1,"buildAndroid":_flaxMemberParameters1,"buildIOS":_flaxMemberParameters1,"validateIOS":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["route","focus","respectSilence","stayAwake"], setters: [], contextMembers: [], superMembers: ["get:route","get:focus","get:respectSilence","get:stayAwake","copy","build","buildAndroid","buildIOS","validateIOS","toString"]} as const;
export interface _AudioContextConfigNative extends AudioContextConfig {
readonly [_flaxDartTypeValue]: _AudioContextConfigNative;

copy(options?: {route?: upstream0.AudioContextConfigRoute | null | undefined; focus?: upstream1.AudioContextConfigFocus | null | undefined; respectSilence?: boolean | null | undefined; stayAwake?: boolean | null | undefined}): AudioContextConfig;
build(): upstream2.AudioContext;
buildAndroid(): upstream3.AudioContextAndroid;
buildIOS(): upstream4.AudioContextIOS | null;
validateIOS(): void;
toString(): string;
get route(): upstream0.AudioContextConfigRoute;
get focus(): upstream1.AudioContextConfigFocus;
get respectSilence(): boolean;
get stayAwake(): boolean;
}
export abstract class _AudioContextConfigNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextConfig>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioContextConfig;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextConfig", readonly [], false];
constructor(options?: {route?: upstream0.AudioContextConfigRoute | undefined; focus?: upstream1.AudioContextConfigFocus | undefined; respectSilence?: boolean | undefined; stayAwake?: boolean | undefined}) { super(_AudioContextConfigProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioContextConfigNative.prototype, _AudioContextConfigProxy);
export namespace _AudioContextConfigFactory { export function implement(args: [options?: {route?: upstream0.AudioContextConfigRoute | undefined; focus?: upstream1.AudioContextConfigFocus | undefined; respectSilence?: boolean | undefined; stayAwake?: boolean | undefined}], implementation: {}): AudioContextConfig {
return constructProxy(_AudioContextConfigProxy, args, implementation) as AudioContextConfig; } }
const _AudioContextConfigBinding = _flaxProxyFactory(_AudioContextConfigFactory, _AudioContextConfigNative) as unknown as typeof _AudioContextConfigFactory & (new(options?: {route?: upstream0.AudioContextConfigRoute | undefined; focus?: upstream1.AudioContextConfigFocus | undefined; respectSilence?: boolean | undefined; stayAwake?: boolean | undefined}) => _AudioContextConfigNative);
export const AudioContextConfig: typeof _AudioContextConfigBinding & _FlaxInstanceType<AudioContextConfig> & _FlaxDartType<AudioContextConfig, readonly ["class", "flax.audio/audio#type:AudioContextConfig", readonly [], false]> = _flaxBindInstanceType<AudioContextConfig, typeof _AudioContextConfigBinding>(_AudioContextConfigBinding, "flax.audio/audio#type:AudioContextConfig", ["dart:core::Object"]) as typeof _AudioContextConfigBinding & _FlaxInstanceType<AudioContextConfig> & _FlaxDartType<AudioContextConfig, readonly ["class", "flax.audio/audio#type:AudioContextConfig", readonly [], false]>;
