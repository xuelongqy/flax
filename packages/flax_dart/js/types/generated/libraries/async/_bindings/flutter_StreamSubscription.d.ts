import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
export interface StreamSubscription<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamSubscription": readonly [T];
}> {
    readonly __StreamSubscription: unique symbol;
    readonly isPaused: boolean;
    cancel(): Promise<void>;
    onData(handleData: ((data: T) => void) | null): void;
    onError(handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void;
    onDone(handleDone: (() => void) | null): void;
    pause(resumeSignal?: Promise<void> | null): void;
    resume(): void;
    asFuture<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
}
