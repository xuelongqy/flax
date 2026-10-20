// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters1, _flaxMemberParameters86, _flaxMemberParameters87, _flaxMemberParameters88, _flaxMemberParameters19, _flaxMemberParameters89 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SynchronousFuture<T extends unknown | null = unknown | null> extends Omit<Promise<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::Future": readonly [T] }> { readonly __SynchronousFuture: unique symbol;
readonly [_flaxDartTypeValue]: SynchronousFuture<T>;

asStream(): upstream0.Stream<T>;
catchError(onError: _FlaxDartFunction, options?: {test?: ((error: {}) => boolean) | null | undefined}): Promise<T>;
then<R extends unknown | null = unknown | null>(onValue: ((value: T) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {onError?: _FlaxDartFunction | null | undefined}): Promise<_FlaxDartOutput<R>>; then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, options?: {onTimeout?: (() => (T | DartInput<T>) | Promise<(T | DartInput<T>)>) | null | undefined}): Promise<T>;
whenComplete(action: (() => unknown | null | Promise<unknown | null>)): Promise<T>;
}
defineObject("flax.core/sdk_foundation#type:SynchronousFuture", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:SynchronousFuture", "object", {"asStream":_flaxMemberParameters1,"catchError":_flaxMemberParameters86,"then":_flaxMemberParameters87,"timeout":_flaxMemberParameters88,"whenComplete":_flaxMemberParameters19}, {"then":{"id":"then","parameters":[{"name":"onValue","required":true,"positional":true},{"name":"onError"}]}}), []);
export function _SynchronousFutureFactory<T extends unknown | null = unknown | null>(_value: (T | _FlaxDartOutput<T>)): SynchronousFuture<T>;
export function _SynchronousFutureFactory(_value: unknown | null): SynchronousFuture<unknown | null>;
export function _SynchronousFutureFactory(_value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:SynchronousFuture", "", [{"name":"_value","required":true,"positional":true}], [_value], {}) as SynchronousFuture<unknown | null>;
}
const _SynchronousFutureProxy = {type: "flax.core/sdk_foundation#type:SynchronousFuture", parameters: _flaxMemberParameters89, constructors: {"": _flaxMemberParameters89}, methods: {"asStream":_flaxMemberParameters1,"catchError":_flaxMemberParameters86,"then":_flaxMemberParameters87,"timeout":_flaxMemberParameters88,"whenComplete":_flaxMemberParameters19}, getters: [], setters: [], contextMembers: ["then"], superMembers: ["asStream","catchError","then","timeout","whenComplete"]} as const;
export interface _SynchronousFutureNative<T extends unknown | null = unknown | null> extends SynchronousFuture<T> {
readonly [_flaxDartTypeValue]: _SynchronousFutureNative<T>;

asStream(): upstream0.Stream<T>;
catchError(onError: _FlaxDartFunction, options?: {test?: ((error: {}) => boolean) | null | undefined}): Promise<T>;
then<R extends unknown | null = unknown | null>(onValue: ((value: T) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {onError?: _FlaxDartFunction | null | undefined}): Promise<_FlaxDartOutput<R>>; then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, options?: {onTimeout?: (() => (T | DartInput<T>) | Promise<(T | DartInput<T>)>) | null | undefined}): Promise<T>;
whenComplete(action: (() => unknown | null | Promise<unknown | null>)): Promise<T>;
}
export abstract class _SynchronousFutureNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SynchronousFuture<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SynchronousFuture<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(_value: unknown | null) { super(_SynchronousFutureProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SynchronousFutureNative.prototype, _SynchronousFutureProxy);
export namespace _SynchronousFutureFactory { export function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): SynchronousFuture<T> {
return constructProxy(_SynchronousFutureProxy, args, implementation) as SynchronousFuture<T>; } }
const _SynchronousFutureBinding = _flaxProxyFactory(_SynchronousFutureFactory, _SynchronousFutureNative) as unknown as typeof _SynchronousFutureFactory & (new<T extends unknown | null = unknown | null>(_value: unknown | null) => _SynchronousFutureNative<T>);
export const SynchronousFuture: typeof _SynchronousFutureBinding & _FlaxInstanceType<SynchronousFuture<unknown | null>> & _FlaxDartType<SynchronousFuture<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<SynchronousFuture<unknown | null>, typeof _SynchronousFutureBinding>(_SynchronousFutureBinding, "flax.core/sdk_foundation#type:SynchronousFuture", ["dart:core::Object","dart:async::Future"]) as typeof _SynchronousFutureBinding & _FlaxInstanceType<SynchronousFuture<unknown | null>> & _FlaxDartType<SynchronousFuture<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(SynchronousFuture, "flax.core/sdk_foundation#type:SynchronousFuture", {...{"category":"object","constructors":{"":[{"name":"_value","required":true,"positional":true}]}}, proxy: _SynchronousFutureProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture" | "__flaxBound:dart:async::Future";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _SynchronousFutureNative<_Selected0>) & {(_value: (_Selected0 | DartInput<_Selected0>)): _SynchronousFutureNative<_Selected0>;readonly prototype: _SynchronousFutureNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_SynchronousFutureNative<_Selected0>>): _SynchronousFutureNative<_Selected0>;} & _FlaxInstanceType<_SynchronousFutureNative<_Selected0>> & _FlaxDartType<_SynchronousFutureNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _SynchronousFutureNative<_Selected0>) & {(_value: (_Selected0 | DartInput<_Selected0>)): _SynchronousFutureNative<_Selected0>;readonly prototype: _SynchronousFutureNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_SynchronousFutureNative<_Selected0>>): _SynchronousFutureNative<_Selected0>;} & _FlaxInstanceType<_SynchronousFutureNative<_Selected0>> & _FlaxDartType<_SynchronousFutureNative<_Selected0>> : never : never; }
