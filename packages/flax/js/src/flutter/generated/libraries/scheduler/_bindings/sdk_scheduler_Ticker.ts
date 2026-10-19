// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import { _flaxMemberParameters0, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Ticker extends Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [] }> { readonly __Ticker: unique symbol;
readonly [_flaxDartTypeValue]: Ticker;

}
defineObject("flax.core/sdk_scheduler#type:Ticker", ["forceFrames","muted","isTicking","isActive","scheduled","shouldScheduleTick","debugLabel"], ["forceFrames","muted"], _flaxBindingMethods("flax.core/sdk_scheduler#type:Ticker", "object", {"start":_flaxMemberParameters0,"describeForError":_flaxMemberParameters2,"stop":_flaxMemberParameters3,"scheduleTick":_flaxMemberParameters4,"unscheduleTick":_flaxMemberParameters0,"absorbTicker":_flaxMemberParameters5,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters6}, {}), []);
const _TickerProxy = {type: "flax.core/sdk_scheduler#type:Ticker", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"start":_flaxMemberParameters0,"describeForError":_flaxMemberParameters2,"stop":_flaxMemberParameters3,"scheduleTick":_flaxMemberParameters4,"unscheduleTick":_flaxMemberParameters0,"absorbTicker":_flaxMemberParameters5,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters6}, getters: ["forceFrames","muted","isTicking","isActive","scheduled","shouldScheduleTick","debugLabel"], setters: ["forceFrames","muted"], contextMembers: [], superMembers: ["get:forceFrames","get:muted","get:isTicking","get:isActive","get:scheduled","get:shouldScheduleTick","get:debugLabel","set:forceFrames","set:muted","start","describeForError","stop","scheduleTick","unscheduleTick","absorbTicker","dispose","toString"]} as const;
export interface Ticker {
readonly [_flaxDartTypeValue]: Ticker;

start(): upstream1.TickerFuture;
describeForError(name: string): upstream2.DiagnosticsNode;
stop(options?: {canceled?: boolean | undefined}): void;
scheduleTick(options?: {rescheduling?: boolean | undefined}): void;
unscheduleTick(): void;
absorbTicker(originalTicker: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [] }>): void;
dispose(): void;
toString(options?: {debugIncludeStack?: boolean | undefined}): string;
get forceFrames(): boolean;
get muted(): boolean;
get isTicking(): boolean;
get isActive(): boolean;
get scheduled(): boolean;
get shouldScheduleTick(): boolean;
get debugLabel(): string | null;
set forceFrames(value: boolean);
set muted(value: boolean);
}
export abstract class Ticker extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Ticker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Ticker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:Ticker", readonly [], false];
constructor(_onTick: ((elapsed: upstream0.Duration) => void), options?: {debugLabel?: string | null | undefined}) { super(_TickerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Ticker.prototype, _TickerProxy);
export namespace Ticker { export function implement(args: [_onTick: ((elapsed: upstream0.Duration) => void), options?: {debugLabel?: string | null | undefined}], implementation: {}): Ticker {
return constructProxy(_TickerProxy, args, implementation) as Ticker; } }
_flaxBindInstanceType<Ticker, typeof Ticker>(Ticker, "flax.core/sdk_scheduler#type:Ticker", ["dart:core::Object"]);
