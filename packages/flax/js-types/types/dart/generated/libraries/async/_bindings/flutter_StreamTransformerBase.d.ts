import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends upstream0.StreamTransformer<S, T>, Readonly<{
    "__flaxBound:dart:async::StreamTransformerBase": readonly [S, T];
}> {
    readonly __StreamTransformerBase: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature1<S, T>;
    };
}
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: StreamTransformerBase<S, T>;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature2<S, T>;
    };
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): upstream0.StreamTransformer<_FlaxDartOutput<RS>, _FlaxDartOutput<RT>>;
}
export declare abstract class StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StreamTransformerBase<unknown | null, unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StreamTransformerBase<unknown | null, unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:StreamTransformerBase", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature3;
    constructor();
    abstract bind(stream: (upstream1.Stream<S> | upstream1.Stream<(S | DartInput<S>)>)): upstream1.Stream<T>;
}
export declare namespace StreamTransformerBase {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => (upstream1.Stream<T> | upstream1.Stream<(T | DartInput<T>)>));
    }): StreamTransformerBase<S, T>;
}
interface _FlaxSignature1<_OwnerType0 extends unknown | null, _OwnerType1 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? () => upstream0.StreamTransformer<_Selected0, _Selected1> : never : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null, _OwnerType1 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? () => upstream0.StreamTransformer<_Selected0, _Selected1> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (abstract new () => StreamTransformerBase<_Selected0, _Selected1>) & {
        readonly prototype: StreamTransformerBase<_Selected0, _Selected1>;
        implement(args: readonly [], implementation: Partial<StreamTransformerBase<_Selected0, _Selected1>>): StreamTransformerBase<_Selected0, _Selected1>;
    } & _FlaxInstanceType<StreamTransformerBase<_Selected0, _Selected1>> & _FlaxDartType<StreamTransformerBase<_Selected0, _Selected1>> : never : never : never;
}
export {};
