// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioEventType';
import '@flax/audioplayers/_bindings/audio_AudioEventType';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters1, _flaxMemberParameters13 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioEvent extends Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEvent": readonly [] }> { readonly __AudioEvent: unique symbol;
readonly [_flaxDartTypeValue]: AudioEvent;

readonly eventType: upstream0.AudioEventType;
readonly duration: upstream1.Duration | null;
readonly logMessage: string | null;
readonly isPrepared: boolean | null;
toString(): string;
}
defineObject("flax.audio/audio#type:AudioEvent", ["eventType","duration","logMessage","isPrepared"], [], _flaxBindingMethods("flax.audio/audio#type:AudioEvent", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _AudioEventFactory(options: { eventType: upstream0.AudioEventType; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null | undefined; logMessage?: string | null | undefined; isPrepared?: boolean | null | undefined }): AudioEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioEvent", "", [{"name":"eventType","required":true},{"name":"duration"},{"name":"logMessage"},{"name":"isPrepared"}], [], options) as AudioEvent;
}
const _AudioEventProxy = {type: "flax.audio/audio#type:AudioEvent", parameters: _flaxMemberParameters13, constructors: {"": _flaxMemberParameters13}, methods: {"toString":_flaxMemberParameters1}, getters: ["eventType","duration","logMessage","isPrepared"], setters: [], contextMembers: [], superMembers: ["get:eventType","get:duration","get:logMessage","get:isPrepared","toString"]} as const;
export interface _AudioEventNative extends AudioEvent {
readonly [_flaxDartTypeValue]: _AudioEventNative;

toString(): string;
get eventType(): upstream0.AudioEventType;
get duration(): upstream1.Duration | null;
get logMessage(): string | null;
get isPrepared(): boolean | null;
}
export abstract class _AudioEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioEvent", readonly [], false];
constructor(options: {eventType: upstream0.AudioEventType; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null | undefined; logMessage?: string | null | undefined; isPrepared?: boolean | null | undefined}) { super(_AudioEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioEventNative.prototype, _AudioEventProxy);
export namespace _AudioEventFactory { export function implement(args: [options: {eventType: upstream0.AudioEventType; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null | undefined; logMessage?: string | null | undefined; isPrepared?: boolean | null | undefined}], implementation: {}): AudioEvent {
return constructProxy(_AudioEventProxy, args, implementation) as AudioEvent; } }
const _AudioEventBinding = _flaxProxyFactory(_AudioEventFactory, _AudioEventNative) as unknown as typeof _AudioEventFactory & (new(options: {eventType: upstream0.AudioEventType; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null | undefined; logMessage?: string | null | undefined; isPrepared?: boolean | null | undefined}) => _AudioEventNative);
export const AudioEvent: typeof _AudioEventBinding & _FlaxInstanceType<AudioEvent> & _FlaxDartType<AudioEvent, readonly ["class", "flax.audio/audio#type:AudioEvent", readonly [], false]> = _flaxBindInstanceType<AudioEvent, typeof _AudioEventBinding>(_AudioEventBinding, "flax.audio/audio#type:AudioEvent", ["dart:core::Object"]) as typeof _AudioEventBinding & _FlaxInstanceType<AudioEvent> & _FlaxDartType<AudioEvent, readonly ["class", "flax.audio/audio#type:AudioEvent", readonly [], false]>;
