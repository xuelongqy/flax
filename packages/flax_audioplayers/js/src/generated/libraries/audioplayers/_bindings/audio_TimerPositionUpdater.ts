// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_PositionUpdater';
import '@flax/audioplayers/_bindings/audio_PositionUpdater';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters38, _flaxMemberParameters1 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimerPositionUpdater extends Omit<upstream0.PositionUpdater, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers/src/position_updater.dart::TimerPositionUpdater": readonly [] }>, Readonly<{ "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [] }> { readonly __TimerPositionUpdater: unique symbol;
readonly [_flaxDartTypeValue]: TimerPositionUpdater;

readonly getPosition: (() => Promise<upstream1.Duration | null>);
readonly positionStream: upstream2.Stream<upstream1.Duration>;
readonly interval: upstream1.Duration;
update(): Promise<void>;
start(): void;
stop(): void;
stopAndUpdate(): Promise<void>;
dispose(): Promise<void>;
}
defineObject("flax.audio/audio#type:TimerPositionUpdater", ["getPosition","positionStream","interval"], [], _flaxBindingMethods("flax.audio/audio#type:TimerPositionUpdater", "object", {}, {}), [], undefined, "flax.audio/audio#type:PositionUpdater");
export function _TimerPositionUpdaterFactory(options: { getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null>); interval: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> }): TimerPositionUpdater {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:TimerPositionUpdater", "", [{"name":"getPosition","required":true},{"name":"interval","required":true}], [], options) as TimerPositionUpdater;
}
const _TimerPositionUpdaterProxy = {type: "flax.audio/audio#type:TimerPositionUpdater", parameters: _flaxMemberParameters38, constructors: {"": _flaxMemberParameters38}, methods: {"update":_flaxMemberParameters1,"start":_flaxMemberParameters1,"stop":_flaxMemberParameters1,"stopAndUpdate":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, getters: ["interval","getPosition","positionStream"], setters: [], contextMembers: [], superMembers: ["get:interval","get:getPosition","get:positionStream","update","start","stop","stopAndUpdate","dispose"]} as const;
export interface _TimerPositionUpdaterNative extends TimerPositionUpdater {
readonly [_flaxDartTypeValue]: _TimerPositionUpdaterNative;

update(): Promise<void>;
start(): void;
stop(): void;
stopAndUpdate(): Promise<void>;
dispose(): Promise<void>;
get interval(): upstream1.Duration;
get getPosition(): (() => Promise<upstream1.Duration | null>);
get positionStream(): upstream2.Stream<upstream1.Duration>;
}
export abstract class _TimerPositionUpdaterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimerPositionUpdater>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TimerPositionUpdater;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:TimerPositionUpdater", readonly [], false];
constructor(options: {getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null>); interval: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>}) { super(_TimerPositionUpdaterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TimerPositionUpdaterNative.prototype, _TimerPositionUpdaterProxy);
export namespace _TimerPositionUpdaterFactory { export function implement(args: [options: {getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null>); interval: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>}], implementation: {}): TimerPositionUpdater {
return constructProxy(_TimerPositionUpdaterProxy, args, implementation) as TimerPositionUpdater; } }
const _TimerPositionUpdaterBinding = _flaxProxyFactory(_TimerPositionUpdaterFactory, _TimerPositionUpdaterNative) as unknown as typeof _TimerPositionUpdaterFactory & (new(options: {getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null>); interval: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>}) => _TimerPositionUpdaterNative);
export const TimerPositionUpdater: typeof _TimerPositionUpdaterBinding & _FlaxInstanceType<TimerPositionUpdater> & _FlaxDartType<TimerPositionUpdater, readonly ["class", "flax.audio/audio#type:TimerPositionUpdater", readonly [], false]> = _flaxBindInstanceType<TimerPositionUpdater, typeof _TimerPositionUpdaterBinding>(_TimerPositionUpdaterBinding, "flax.audio/audio#type:TimerPositionUpdater", ["flax.audio/audio#type:PositionUpdater","dart:core::Object"]) as typeof _TimerPositionUpdaterBinding & _FlaxInstanceType<TimerPositionUpdater> & _FlaxDartType<TimerPositionUpdater, readonly ["class", "flax.audio/audio#type:TimerPositionUpdater", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPosition" | "positionStream" | "interval" | "update" | "start" | "stop" | "stopAndUpdate" | "dispose" | "__flaxBound:package:audioplayers/src/position_updater.dart::TimerPositionUpdater" | "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater";
