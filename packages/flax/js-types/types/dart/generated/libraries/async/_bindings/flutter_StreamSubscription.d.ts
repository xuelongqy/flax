import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamSubscription<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamSubscription": readonly [T];
}> {
    readonly __StreamSubscription: unique symbol;
    readonly [_flaxDartTypeValue]: StreamSubscription<T>;
    readonly [_flaxDartMethodCases]?: {
        asFuture: _FlaxSignature1<T>;
    };
    readonly isPaused: boolean;
    cancel(): Promise<void>;
    onData(handleData: ((data: T) => void) | null): void;
    onError(handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void;
    onDone(handleDone: (() => void) | null): void;
    pause(resumeSignal?: Promise<unknown> | null): void;
    resume(): void;
    asFuture<E extends unknown | null = unknown | null>(futureValue?: (E | _FlaxDartOutput<E>) | null): Promise<_FlaxDartOutput<E>>;
}
export declare const StreamSubscription: object & _FlaxInstanceType<StreamSubscription<unknown | null>> & _FlaxDartType<StreamSubscription<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSubscription", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: StreamSubscription<_Selected0>;
    } & _FlaxInstanceType<StreamSubscription<_Selected0>> & _FlaxDartType<StreamSubscription<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
