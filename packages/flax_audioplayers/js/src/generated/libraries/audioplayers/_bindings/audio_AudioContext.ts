// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import { _flaxMemberParameters7, _flaxMemberParameters1 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContext extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }> { readonly __AudioContext: unique symbol;
readonly [_flaxDartTypeValue]: AudioContext;

readonly android: upstream0.AudioContextAndroid;
get iOS(): upstream1.AudioContextIOS;
copy(options?: {android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined}): AudioContext;
toJson(): DartMap<string, unknown | null>;
toString(): string;
set iOS(value: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }>);
}
defineObject("flax.audio/audio#type:AudioContext", ["android","iOS"], ["iOS"], _flaxBindingMethods("flax.audio/audio#type:AudioContext", "object", {"copy":_flaxMemberParameters7,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
export function _AudioContextFactory(options: { android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined } = {}): AudioContext {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioContext", "", _flaxMemberParameters7, [], options) as AudioContext;
}
const _AudioContextProxy = {type: "flax.audio/audio#type:AudioContext", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"copy":_flaxMemberParameters7,"toJson":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["android","iOS"], setters: ["iOS"], contextMembers: [], superMembers: ["get:android","get:iOS","set:iOS","copy","toJson","toString"]} as const;
export interface _AudioContextNative extends AudioContext {
readonly [_flaxDartTypeValue]: _AudioContextNative;

copy(options?: {android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined}): AudioContext;
toJson(): DartMap<string, unknown | null>;
toString(): string;
get android(): upstream0.AudioContextAndroid;
get iOS(): upstream1.AudioContextIOS;
set iOS(value: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }>);
}
export abstract class _AudioContextNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContext", readonly [], false];
constructor(options?: {android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined}) { super(_AudioContextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioContextNative.prototype, _AudioContextProxy);
export namespace _AudioContextFactory { export function implement(args: [options?: {android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined}], implementation: {}): AudioContext {
return constructProxy(_AudioContextProxy, args, implementation) as AudioContext; } }
const _AudioContextBinding = _flaxProxyFactory(_AudioContextFactory, _AudioContextNative) as unknown as typeof _AudioContextFactory & (new(options?: {android?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [] }> | null | undefined; iOS?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [] }> | null | undefined}) => _AudioContextNative);
export const AudioContext: typeof _AudioContextBinding & _FlaxInstanceType<AudioContext> & _FlaxDartType<AudioContext, readonly ["class", "flax.audio/audio#type:AudioContext", readonly [], false]> = _flaxBindInstanceType<AudioContext, typeof _AudioContextBinding>(_AudioContextBinding, "flax.audio/audio#type:AudioContext", ["dart:core::Object"]) as typeof _AudioContextBinding & _FlaxInstanceType<AudioContext> & _FlaxDartType<AudioContext, readonly ["class", "flax.audio/audio#type:AudioContext", readonly [], false]>;
