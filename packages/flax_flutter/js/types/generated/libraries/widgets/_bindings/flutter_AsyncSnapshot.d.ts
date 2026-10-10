import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
export interface AsyncSnapshot<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/async.dart::AsyncSnapshot": readonly [T];
}> {
    readonly __AsyncSnapshot: unique symbol;
    readonly connectionState: upstream0.ConnectionState;
    readonly data: T | null;
    readonly error: unknown | null;
    readonly stackTrace: upstream1.StackTrace | null;
    readonly hasData: boolean;
    readonly hasError: boolean;
    readonly requireData: T;
    inState(state: upstream0.ConnectionState): AsyncSnapshot<T>;
}
declare namespace _AsyncSnapshotFactory {
    function nothing<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
}
declare namespace _AsyncSnapshotFactory {
    function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
}
declare namespace _AsyncSnapshotFactory {
    function withData<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, data: T): AsyncSnapshot<T>;
}
declare namespace _AsyncSnapshotFactory {
    function withError<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): AsyncSnapshot<T>;
}
export declare const AsyncSnapshot: typeof _AsyncSnapshotFactory & _FlaxInstanceType<AsyncSnapshot<any>>;
export {};
