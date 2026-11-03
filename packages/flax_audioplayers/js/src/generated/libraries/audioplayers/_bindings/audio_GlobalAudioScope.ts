// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_GlobalAudioEvent';
import '@flax/audioplayers/_bindings/audio_GlobalAudioEvent';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AudioContext';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import { _flaxMemberParameters1, _flaxMemberParameters21 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlobalAudioScope extends Readonly<{ "__flaxBound:package:audioplayers/src/global_audio_scope.dart::GlobalAudioScope": readonly [] }> { readonly __GlobalAudioScope: unique symbol;
readonly [_flaxDartTypeValue]: GlobalAudioScope;

get eventStream(): upstream0.Stream<upstream1.GlobalAudioEvent>;
readonly onLog: upstream0.Stream<string>;
ensureInitialized(): Promise<void>;
setAudioContext(ctx: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }>): Promise<void>;
set eventStream(value: (upstream0.Stream<upstream1.GlobalAudioEvent> | upstream0.Stream<Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [] }>>));
}
defineObject("flax.audio/audio#type:GlobalAudioScope", ["eventStream","onLog"], ["eventStream"], _flaxBindingMethods("flax.audio/audio#type:GlobalAudioScope", "object", {"ensureInitialized":_flaxMemberParameters1,"setAudioContext":_flaxMemberParameters21}, {}), []);
export function _GlobalAudioScopeFactory(): GlobalAudioScope {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:GlobalAudioScope", "", _flaxMemberParameters1, [], {}) as GlobalAudioScope;
}
const _GlobalAudioScopeProxy = {type: "flax.audio/audio#type:GlobalAudioScope", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"ensureInitialized":_flaxMemberParameters1,"setAudioContext":_flaxMemberParameters21}, getters: ["eventStream","onLog"], setters: ["eventStream"], contextMembers: [], superMembers: ["get:eventStream","get:onLog","set:eventStream","ensureInitialized","setAudioContext"]} as const;
export interface _GlobalAudioScopeNative extends GlobalAudioScope {
readonly [_flaxDartTypeValue]: _GlobalAudioScopeNative;

ensureInitialized(): Promise<void>;
setAudioContext(ctx: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }>): Promise<void>;
get eventStream(): upstream0.Stream<upstream1.GlobalAudioEvent>;
get onLog(): upstream0.Stream<string>;
set eventStream(value: (upstream0.Stream<upstream1.GlobalAudioEvent> | upstream0.Stream<Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [] }>>));
}
export abstract class _GlobalAudioScopeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalAudioScope>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GlobalAudioScope;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:GlobalAudioScope", readonly [], false];
constructor() { super(_GlobalAudioScopeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GlobalAudioScopeNative.prototype, _GlobalAudioScopeProxy);
export namespace _GlobalAudioScopeFactory { export function implement(args: [], implementation: {}): GlobalAudioScope {
return constructProxy(_GlobalAudioScopeProxy, args, implementation) as GlobalAudioScope; } }
const _GlobalAudioScopeBinding = _flaxProxyFactory(_GlobalAudioScopeFactory, _GlobalAudioScopeNative) as unknown as typeof _GlobalAudioScopeFactory & (new() => _GlobalAudioScopeNative);
export const GlobalAudioScope: typeof _GlobalAudioScopeBinding & _FlaxInstanceType<GlobalAudioScope> & _FlaxDartType<GlobalAudioScope, readonly ["class", "flax.audio/audio#type:GlobalAudioScope", readonly [], false]> = _flaxBindInstanceType<GlobalAudioScope, typeof _GlobalAudioScopeBinding>(_GlobalAudioScopeBinding, "flax.audio/audio#type:GlobalAudioScope", ["dart:core::Object"]) as typeof _GlobalAudioScopeBinding & _FlaxInstanceType<GlobalAudioScope> & _FlaxDartType<GlobalAudioScope, readonly ["class", "flax.audio/audio#type:GlobalAudioScope", readonly [], false]>;
