// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters9, _flaxMemberParameters0, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters13 } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerFuture extends Omit<Promise<void>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture": readonly [] }>, Readonly<{ "__flaxBound:dart:async::Future": readonly [void] }> { readonly __TickerFuture: unique symbol;
readonly [_flaxDartTypeValue]: TickerFuture;

readonly orCancel: Promise<void>;
whenCompleteOrCancel(callback: (() => void)): void;
asStream(): upstream0.Stream<void>;
catchError(onError: _FlaxDartFunction, options?: {test?: ((p0: {}) => boolean) | null | undefined}): Promise<void>;
then<R extends unknown | null = unknown | null>(onValue: ((value: void) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {onError?: _FlaxDartFunction | null | undefined}): Promise<_FlaxDartOutput<R>>; then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, options?: {onTimeout?: (() => void | Promise<void>) | null | undefined}): Promise<void>;
whenComplete(action: (() => unknown | null)): Promise<void>;
toString(): string;
}
defineObject("flax.core/sdk_scheduler#type:TickerFuture", ["orCancel"], [], _flaxBindingMethods("flax.core/sdk_scheduler#type:TickerFuture", "object", {"whenCompleteOrCancel":_flaxMemberParameters9,"asStream":_flaxMemberParameters0,"catchError":_flaxMemberParameters10,"then":_flaxMemberParameters11,"timeout":_flaxMemberParameters12,"whenComplete":_flaxMemberParameters13,"toString":_flaxMemberParameters0}, {"then":{"id":"then","parameters":[{"name":"onValue","required":true,"positional":true},{"name":"onError"}]}}), []);
export namespace _TickerFutureFactory {
export function complete(): TickerFuture {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_scheduler#type:TickerFuture", "complete", _flaxMemberParameters0, [], {}) as TickerFuture;
}
}
const _TickerFutureProxy = {type: "flax.core/sdk_scheduler#type:TickerFuture", parameters: _flaxMemberParameters0, constructors: {"complete": _flaxMemberParameters0}, methods: {"whenCompleteOrCancel":_flaxMemberParameters9,"asStream":_flaxMemberParameters0,"catchError":_flaxMemberParameters10,"then":_flaxMemberParameters11,"timeout":_flaxMemberParameters12,"whenComplete":_flaxMemberParameters13,"toString":_flaxMemberParameters0}, getters: ["orCancel"], setters: [], contextMembers: ["then"], superMembers: ["get:orCancel","whenCompleteOrCancel","asStream","catchError","then","timeout","whenComplete","toString"]} as const;
export interface _TickerFutureNative extends TickerFuture {
readonly [_flaxDartTypeValue]: _TickerFutureNative;
readonly [_flaxDartConstructors]?: {"complete": () => void;};

whenCompleteOrCancel(callback: (() => void)): void;
asStream(): upstream0.Stream<void>;
catchError(onError: _FlaxDartFunction, options?: {test?: ((p0: {}) => boolean) | null | undefined}): Promise<void>;
then<R extends unknown | null = unknown | null>(onValue: ((value: void) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {onError?: _FlaxDartFunction | null | undefined}): Promise<_FlaxDartOutput<R>>; then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, options?: {onTimeout?: (() => void | Promise<void>) | null | undefined}): Promise<void>;
whenComplete(action: (() => unknown | null)): Promise<void>;
toString(): string;
get orCancel(): Promise<void>;
}
export abstract class _TickerFutureNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerFuture>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TickerFuture;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false];
constructor(); constructor(call: _FlaxProxySuper<_TickerFutureNative>); constructor(...args: unknown[]) { super(_TickerFutureProxy, args); }
}
_flaxDefineProxyBase(_TickerFutureNative.prototype, _TickerFutureProxy);
export namespace _TickerFutureFactory { export function implement(args: [], implementation: {}): TickerFuture {
return constructProxy(_TickerFutureProxy, args, implementation) as TickerFuture; } }
const _TickerFutureBinding = _flaxProxyFactory(_TickerFutureFactory, _TickerFutureNative) as unknown as typeof _TickerFutureFactory & (new() => _TickerFutureNative) & (new(call: _FlaxProxySuper<_TickerFutureNative>) => _TickerFutureNative);
export const TickerFuture: typeof _TickerFutureBinding & _FlaxInstanceType<TickerFuture> & _FlaxDartType<TickerFuture, readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false]> = _flaxBindInstanceType<TickerFuture, typeof _TickerFutureBinding>(_TickerFutureBinding, "flax.core/sdk_scheduler#type:TickerFuture", ["dart:core::Object","dart:async::Future"]) as typeof _TickerFutureBinding & _FlaxInstanceType<TickerFuture> & _FlaxDartType<TickerFuture, readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "orCancel" | "whenCompleteOrCancel" | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "toString" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture" | "__flaxBound:dart:async::Future";
