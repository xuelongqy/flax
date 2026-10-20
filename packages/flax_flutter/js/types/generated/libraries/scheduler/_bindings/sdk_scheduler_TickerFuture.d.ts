import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TickerFuture extends Omit<Promise<void>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture": readonly [];
}>, Readonly<{
    "__flaxBound:dart:async::Future": readonly [void];
}> {
    readonly __TickerFuture: unique symbol;
    readonly [_flaxDartTypeValue]: TickerFuture;
    readonly orCancel: Promise<void>;
    whenCompleteOrCancel(callback: (() => void)): void;
    asStream(): upstream0.Stream<void>;
    catchError(onError: _FlaxDartFunction, options?: {
        test?: ((p0: {}) => boolean) | null | undefined;
    }): Promise<void>;
    then<R extends unknown | null = unknown | null>(onValue: ((value: void) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {
        onError?: _FlaxDartFunction | null | undefined;
    }): Promise<_FlaxDartOutput<R>>;
    then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    timeout(timeLimit: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, options?: {
        onTimeout?: (() => void | Promise<void>) | null | undefined;
    }): Promise<void>;
    whenComplete(action: (() => unknown | null)): Promise<void>;
    toString(): string;
}
export declare namespace _TickerFutureFactory {
    function complete(): TickerFuture;
}
export interface _TickerFutureNative extends TickerFuture {
    readonly [_flaxDartTypeValue]: _TickerFutureNative;
    readonly [_flaxDartConstructors]?: {
        "complete": () => void;
    };
    whenCompleteOrCancel(callback: (() => void)): void;
    asStream(): upstream0.Stream<void>;
    catchError(onError: _FlaxDartFunction, options?: {
        test?: ((p0: {}) => boolean) | null | undefined;
    }): Promise<void>;
    then<R extends unknown | null = unknown | null>(onValue: ((value: void) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), options?: {
        onError?: _FlaxDartFunction | null | undefined;
    }): Promise<_FlaxDartOutput<R>>;
    then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    timeout(timeLimit: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, options?: {
        onTimeout?: (() => void | Promise<void>) | null | undefined;
    }): Promise<void>;
    whenComplete(action: (() => unknown | null)): Promise<void>;
    toString(): string;
    get orCancel(): Promise<void>;
}
export declare abstract class _TickerFutureNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerFuture>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerFuture;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false];
    constructor();
    constructor(call: _FlaxProxySuper<_TickerFutureNative>);
}
export declare namespace _TickerFutureFactory {
    function implement(args: [], implementation: {}): TickerFuture;
}
declare const _TickerFutureBinding: typeof _TickerFutureFactory & (new () => _TickerFutureNative) & (new (call: _FlaxProxySuper<_TickerFutureNative>) => _TickerFutureNative);
export declare const TickerFuture: typeof _TickerFutureBinding & _FlaxInstanceType<TickerFuture> & _FlaxDartType<TickerFuture, readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "orCancel" | "whenCompleteOrCancel" | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "toString" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture" | "__flaxBound:dart:async::Future";
export {};
