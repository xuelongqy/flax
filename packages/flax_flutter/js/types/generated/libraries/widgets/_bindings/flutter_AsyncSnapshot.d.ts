import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
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
export declare namespace AsyncSnapshot {
    function nothing<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
}
export declare namespace AsyncSnapshot {
    function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
}
export declare namespace AsyncSnapshot {
    function withData<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, data: T): AsyncSnapshot<T>;
}
export declare namespace AsyncSnapshot {
    function withError<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, error: {}, stackTrace?: upstream1.StackTrace): AsyncSnapshot<T>;
}
