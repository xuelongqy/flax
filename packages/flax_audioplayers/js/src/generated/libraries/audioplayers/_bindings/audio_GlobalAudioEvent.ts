// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_GlobalAudioEventType';
import '@flax/audioplayers/_bindings/audio_GlobalAudioEventType';
import { _flaxMemberParameters1, _flaxMemberParameters37 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlobalAudioEvent extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [] }> { readonly __GlobalAudioEvent: unique symbol;
readonly [_flaxDartTypeValue]: GlobalAudioEvent;

readonly eventType: upstream0.GlobalAudioEventType;
readonly logMessage: string | null;
toString(): string;
}
defineObject("flax.audio/audio#type:GlobalAudioEvent", ["eventType","logMessage"], [], _flaxBindingMethods("flax.audio/audio#type:GlobalAudioEvent", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _GlobalAudioEventFactory(options: { eventType: upstream0.GlobalAudioEventType; logMessage?: string | null | undefined }): GlobalAudioEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:GlobalAudioEvent", "", [{"name":"eventType","required":true},{"name":"logMessage"}], [], options) as GlobalAudioEvent;
}
const _GlobalAudioEventProxy = {type: "flax.audio/audio#type:GlobalAudioEvent", parameters: _flaxMemberParameters37, constructors: {"": _flaxMemberParameters37}, methods: {"toString":_flaxMemberParameters1}, getters: ["eventType","logMessage"], setters: [], contextMembers: [], superMembers: ["get:eventType","get:logMessage","toString"]} as const;
export interface _GlobalAudioEventNative extends GlobalAudioEvent {
readonly [_flaxDartTypeValue]: _GlobalAudioEventNative;

toString(): string;
get eventType(): upstream0.GlobalAudioEventType;
get logMessage(): string | null;
}
export abstract class _GlobalAudioEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalAudioEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GlobalAudioEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:GlobalAudioEvent", readonly [], false];
constructor(options: {eventType: upstream0.GlobalAudioEventType; logMessage?: string | null | undefined}) { super(_GlobalAudioEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GlobalAudioEventNative.prototype, _GlobalAudioEventProxy);
export namespace _GlobalAudioEventFactory { export function implement(args: [options: {eventType: upstream0.GlobalAudioEventType; logMessage?: string | null | undefined}], implementation: {}): GlobalAudioEvent {
return constructProxy(_GlobalAudioEventProxy, args, implementation) as GlobalAudioEvent; } }
const _GlobalAudioEventBinding = _flaxProxyFactory(_GlobalAudioEventFactory, _GlobalAudioEventNative) as unknown as typeof _GlobalAudioEventFactory & (new(options: {eventType: upstream0.GlobalAudioEventType; logMessage?: string | null | undefined}) => _GlobalAudioEventNative);
export const GlobalAudioEvent: typeof _GlobalAudioEventBinding & _FlaxInstanceType<GlobalAudioEvent> & _FlaxDartType<GlobalAudioEvent, readonly ["class", "flax.audio/audio#type:GlobalAudioEvent", readonly [], false]> = _flaxBindInstanceType<GlobalAudioEvent, typeof _GlobalAudioEventBinding>(_GlobalAudioEventBinding, "flax.audio/audio#type:GlobalAudioEvent", ["dart:core::Object"]) as typeof _GlobalAudioEventBinding & _FlaxInstanceType<GlobalAudioEvent> & _FlaxDartType<GlobalAudioEvent, readonly ["class", "flax.audio/audio#type:GlobalAudioEvent", readonly [], false]>;
