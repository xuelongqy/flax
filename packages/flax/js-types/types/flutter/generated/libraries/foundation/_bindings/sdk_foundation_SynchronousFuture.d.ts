import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SynchronousFuture<T extends unknown | null = unknown | null> extends Omit<Promise<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture": readonly [T];
}>, Readonly<{
    "__flaxBound:dart:async::Future": readonly [T];
}> {
    readonly __SynchronousFuture: unique symbol;
    readonly [_flaxDartTypeValue]: SynchronousFuture<T>;
    asStream(): upstream0.Stream<T>;
    catchError(onError: _FlaxDartFunction, options?: {
        test?: ((error: {}) => boolean) | null | undefined;
    }): Promise<T>;
    then<R extends unknown | null = unknown | null>(onValue: ((value: T) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {
        onError?: _FlaxDartFunction | null | undefined;
    }): Promise<_FlaxDartOutput<R>>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    timeout(timeLimit: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, options?: {
        onTimeout?: (() => (T | DartInput<T>) | Promise<(T | DartInput<T>)>) | null | undefined;
    }): Promise<T>;
    whenComplete(action: (() => unknown | null | Promise<unknown | null>)): Promise<T>;
}
export declare function _SynchronousFutureFactory<T extends unknown | null = unknown | null>(_value: (T | _FlaxDartOutput<T>)): SynchronousFuture<T>;
export declare function _SynchronousFutureFactory(_value: unknown | null): SynchronousFuture<unknown | null>;
export interface _SynchronousFutureNative<T extends unknown | null = unknown | null> extends SynchronousFuture<T> {
    readonly [_flaxDartTypeValue]: _SynchronousFutureNative<T>;
    asStream(): upstream0.Stream<T>;
    catchError(onError: _FlaxDartFunction, options?: {
        test?: ((error: {}) => boolean) | null | undefined;
    }): Promise<T>;
    then<R extends unknown | null = unknown | null>(onValue: ((value: T) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {
        onError?: _FlaxDartFunction | null | undefined;
    }): Promise<_FlaxDartOutput<R>>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    timeout(timeLimit: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, options?: {
        onTimeout?: (() => (T | DartInput<T>) | Promise<(T | DartInput<T>)>) | null | undefined;
    }): Promise<T>;
    whenComplete(action: (() => unknown | null | Promise<unknown | null>)): Promise<T>;
}
export declare abstract class _SynchronousFutureNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SynchronousFuture<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SynchronousFuture<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_value: unknown | null);
}
export declare namespace _SynchronousFutureFactory {
    function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): SynchronousFuture<T>;
}
declare const _SynchronousFutureBinding: typeof _SynchronousFutureFactory & (new <T extends unknown | null = unknown | null>(_value: unknown | null) => _SynchronousFutureNative<T>);
export declare const SynchronousFuture: typeof _SynchronousFutureBinding & _FlaxInstanceType<SynchronousFuture<unknown | null>> & _FlaxDartType<SynchronousFuture<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:SynchronousFuture", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "__flaxBound:package:flutter/src/foundation/synchronous_future.dart::SynchronousFuture" | "__flaxBound:dart:async::Future";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _SynchronousFutureNative<_Selected0>) & {
        (_value: (_Selected0 | DartInput<_Selected0>)): _SynchronousFutureNative<_Selected0>;
        readonly prototype: _SynchronousFutureNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_SynchronousFutureNative<_Selected0>>): _SynchronousFutureNative<_Selected0>;
    } & _FlaxInstanceType<_SynchronousFutureNative<_Selected0>> & _FlaxDartType<_SynchronousFutureNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _SynchronousFutureNative<_Selected0>) & {
        (_value: (_Selected0 | DartInput<_Selected0>)): _SynchronousFutureNative<_Selected0>;
        readonly prototype: _SynchronousFutureNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_SynchronousFutureNative<_Selected0>>): _SynchronousFutureNative<_Selected0>;
    } & _FlaxInstanceType<_SynchronousFutureNative<_Selected0>> & _FlaxDartType<_SynchronousFutureNative<_Selected0>> : never : never;
}
export {};
