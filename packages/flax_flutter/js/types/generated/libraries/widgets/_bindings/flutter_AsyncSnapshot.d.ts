import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
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
    function nothing(): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
    function waiting(): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function withData<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, data: (T | _FlaxDartOutput<T>)): AsyncSnapshot<T>;
    function withData(state: upstream0.ConnectionState, data: unknown | null): AsyncSnapshot<unknown | null>;
}
declare namespace _AsyncSnapshotFactory {
    function withError<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): AsyncSnapshot<T>;
    function withError(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): AsyncSnapshot<unknown | null>;
}
export declare const AsyncSnapshot: typeof _AsyncSnapshotFactory & _FlaxInstanceType<AsyncSnapshot<unknown | null>> & _FlaxDartType<AsyncSnapshot<unknown | null>, readonly ["class", "flax.core/flutter#type:AsyncSnapshot", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        nothing: () => AsyncSnapshot<_Selected0>;
        waiting: () => AsyncSnapshot<_Selected0>;
        withData: (state: upstream0.ConnectionState, data: (_Selected0 | DartInput<_Selected0>)) => AsyncSnapshot<_Selected0>;
        withError: (state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }>) => AsyncSnapshot<_Selected0>;
        readonly prototype: AsyncSnapshot<_Selected0>;
    } & _FlaxInstanceType<AsyncSnapshot<_Selected0>> & _FlaxDartType<AsyncSnapshot<_Selected0>> : never : never;
}
export {};
