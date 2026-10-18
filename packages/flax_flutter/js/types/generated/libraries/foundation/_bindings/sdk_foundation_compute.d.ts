import { type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_compute<M extends unknown | null = unknown | null, R extends unknown | null = unknown | null>(callback: ((message: _FlaxDartOutput<M>) => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>), message: (M | _FlaxDartOutput<M>), options?: {
    debugLabel?: string | null | undefined;
}): Promise<_FlaxDartOutput<R>>;
declare const _flaxGeneric_compute: _FlaxDartCallable<typeof _flaxTopLevel_compute, _FlaxSignature0>;
export { _flaxGeneric_compute as compute };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (callback: ((message: _Selected0) => (_Selected1 | DartInput<_Selected1>) | Promise<(_Selected1 | DartInput<_Selected1>)>), message: (_Selected0 | DartInput<_Selected0>), options?: {
        debugLabel?: string | null | undefined;
    }) => Promise<_Selected1> : never : never : never;
}
