// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"onError","required":true,"positional":true},{"name":"test"}] as const;
const _flaxMemberParameters2 = [{"name":"onValue","required":true,"positional":true},{"name":"onError"}] as const;
const _flaxMemberParameters3 = [{"name":"timeLimit","required":true,"positional":true},{"name":"onTimeout"}] as const;
const _flaxMemberParameters4 = [{"name":"action","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"_value","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SynchronousFuture<T extends unknown | null = unknown | null> extends Omit<Promise<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::Future": readonly [T] }> { readonly __SynchronousFuture: unique symbol;
readonly [_flaxDartTypeValue]: SynchronousFuture<T>;

}
defineObject("flax.core/sdk_foundation#type:SynchronousFuture", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:SynchronousFuture", "object", {"asStream":_flaxMemberParameters0,"catchError":_flaxMemberParameters1,"then":_flaxMemberParameters2,"timeout":_flaxMemberParameters3,"whenComplete":_flaxMemberParameters4}, {"then":{"id":"then","parameters":[{"name":"onValue","required":true,"positional":true},{"name":"onError"}]}}), []);
const _SynchronousFutureProxy = {type: "flax.core/sdk_foundation#type:SynchronousFuture", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5}, methods: {"asStream":_flaxMemberParameters0,"catchError":_flaxMemberParameters1,"then":_flaxMemberParameters2,"timeout":_flaxMemberParameters3,"whenComplete":_flaxMemberParameters4}, getters: [], setters: [], contextMembers: ["then"], superMembers: ["asStream","catchError","then","timeout","whenComplete"]} as const;
export interface SynchronousFuture<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: SynchronousFuture<T>;

asStream(): upstream0.Stream<T>;
catchError(onError: _FlaxDartFunction, options?: {test?: ((error: {}) => boolean) | null | undefined}): Promise<T>;
then<R extends unknown | null = unknown | null>(onValue: ((value: T) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {onError?: _FlaxDartFunction | null | undefined}): Promise<_FlaxDartOutput<R>>; then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, options?: {onTimeout?: (() => (T | DartInput<T>) | Promise<(T | DartInput<T>)>) | null | undefined}): Promise<T>;
whenComplete(action: (() => unknown | null | Promise<unknown | null>)): Promise<T>;
}
export abstract class SynchronousFuture<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SynchronousFuture<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SynchronousFuture<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(_value: unknown | null) { super(_SynchronousFutureProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SynchronousFuture.prototype, _SynchronousFutureProxy);
export namespace SynchronousFuture { export function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): SynchronousFuture<T> {
return constructProxy(_SynchronousFutureProxy, args, implementation) as SynchronousFuture<T>; } }
_flaxBindInstanceType<SynchronousFuture<unknown | null>, typeof SynchronousFuture>(SynchronousFuture, "flax.core/sdk_foundation#type:SynchronousFuture", ["dart:core::Object","dart:async::Future"]);
_flaxDefineDartTypes(SynchronousFuture, "flax.core/sdk_foundation#type:SynchronousFuture", {...{"category":"object","constructors":{}}, proxy: _SynchronousFutureProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture" | "__flaxBound:dart:async::Future";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_value: unknown | null) => SynchronousFuture<_Selected0>) & {readonly prototype: SynchronousFuture<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<SynchronousFuture<_Selected0>>): SynchronousFuture<_Selected0>;} & _FlaxInstanceType<SynchronousFuture<_Selected0>> & _FlaxDartType<SynchronousFuture<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_value: unknown | null) => SynchronousFuture<_Selected0>) & {readonly prototype: SynchronousFuture<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<SynchronousFuture<_Selected0>>): SynchronousFuture<_Selected0>;} & _FlaxInstanceType<SynchronousFuture<_Selected0>> & _FlaxDartType<SynchronousFuture<_Selected0>> : never : never; }
