import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
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
    function nothing(): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function waiting(): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function withData(state: upstream0.ConnectionState, data: unknown | null): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function withError(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): AsyncSnapshot<unknown | null>;
}
export declare const AsyncSnapshot: typeof _AsyncSnapshotFactory & _FlaxInstanceType<AsyncSnapshot<unknown | null>> & _FlaxDartType<AsyncSnapshot<unknown | null>, readonly ["class", "flax.core/flutter#type:AsyncSnapshot", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        nothing: () => AsyncSnapshot<unknown | null>;
        waiting: () => AsyncSnapshot<unknown | null>;
        withData: (state: upstream0.ConnectionState, data: unknown | null) => AsyncSnapshot<unknown | null>;
        withError: (state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }>) => AsyncSnapshot<unknown | null>;
        readonly prototype: AsyncSnapshot<unknown | null>;
    } & _FlaxInstanceType<AsyncSnapshot<unknown | null>> & _FlaxDartType<AsyncSnapshot<unknown | null>, readonly ["class", "flax.core/flutter#type:AsyncSnapshot", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
export {};
