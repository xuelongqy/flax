import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends upstream0.StreamTransformer<S, T>, Readonly<{
    "__flaxBound:dart:async::StreamTransformerBase": readonly [S, T];
}> {
    readonly __StreamTransformerBase: unique symbol;
}
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> {
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): upstream0.StreamTransformer<_FlaxDartOutput<RS>, _FlaxDartOutput<RT>>;
}
export declare abstract class StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StreamTransformerBase<unknown | null, unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StreamTransformerBase<unknown | null, unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:StreamTransformerBase", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false];
    static [_flaxDartTypeCases]: {
        arguments: readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]];
        value: (abstract new () => StreamTransformerBase<unknown | null, unknown | null>) & {
            readonly prototype: StreamTransformerBase<unknown | null, unknown | null>;
            implement(args: [], implementation: {
                bind: ((stream: upstream1.Stream<unknown | null>) => upstream1.Stream<unknown | null>);
            }): StreamTransformerBase<unknown | null, unknown | null>;
        } & _FlaxInstanceType<StreamTransformerBase<unknown | null, unknown | null>> & _FlaxDartType<StreamTransformerBase<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:StreamTransformerBase", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]>;
    };
    constructor();
    abstract bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
}
export declare namespace StreamTransformerBase {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>);
    }): StreamTransformerBase<S, T>;
}
