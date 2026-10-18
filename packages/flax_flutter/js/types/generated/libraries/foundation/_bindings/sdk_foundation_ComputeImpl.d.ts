import { type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
export type ComputeImpl = _FlaxDartCallable<(<M extends unknown | null, R extends unknown | null>(callback: ((message: _FlaxDartOutput<M>) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), message: (M | _FlaxDartOutput<M>), options?: {
    debugLabel?: string | null | undefined;
}) => Promise<_FlaxDartOutput<R>>), _FlaxSignature0>;
export type ComputeImplInput = (<M extends unknown | null, R extends unknown | null>(callback: ((message: (M | _FlaxDartOutput<M>)) => _FlaxDartOutput<R> | Promise<_FlaxDartOutput<R>>), message: _FlaxDartOutput<M>, options?: {
    debugLabel?: string | null | undefined;
}) => Promise<(R | _FlaxDartOutput<R>)>);
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (callback: ((message: _Selected0) => (_Selected1 | DartInput<_Selected1>) | Promise<(_Selected1 | DartInput<_Selected1>)>), message: (_Selected0 | DartInput<_Selected0>), options?: {
        debugLabel?: string | null | undefined;
    }) => Promise<_Selected1> : never : never : never;
}
export {};
