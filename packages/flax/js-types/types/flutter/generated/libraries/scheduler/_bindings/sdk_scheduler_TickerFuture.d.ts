import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TickerFuture extends Omit<Promise<void>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture": readonly [];
}>, Readonly<{
    "__flaxBound:dart:async::Future": readonly [void];
}> {
    readonly __TickerFuture: unique symbol;
    readonly [_flaxDartTypeValue]: TickerFuture;
}
export interface TickerFuture {
    readonly [_flaxDartTypeValue]: TickerFuture;
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
export declare abstract class TickerFuture extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerFuture>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerFuture;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerFuture", readonly [], false];
    constructor();
}
export declare namespace TickerFuture {
    function implement(args: [], implementation: {}): TickerFuture;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "orCancel" | "whenCompleteOrCancel" | "asStream" | "catchError" | "then" | "timeout" | "whenComplete" | "toString" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerFuture" | "__flaxBound:dart:async::Future";
export {};
