import { type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_mergeSort<T extends unknown | null = unknown | null>(list: DartListInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>, options?: {
    compare?: ((p0: _FlaxDartOutput<T>, p1: _FlaxDartOutput<T>) => number) | null | undefined;
    end?: number | null | undefined;
    start?: number | undefined;
}): void;
declare const _flaxGeneric_mergeSort: _FlaxDartCallable<typeof _flaxTopLevel_mergeSort, _FlaxSignature0>;
export { _flaxGeneric_mergeSort as mergeSort };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (list: DartListInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>, options?: {
        compare?: ((p0: _Selected0, p1: _Selected0) => number) | null | undefined;
        end?: number | null | undefined;
        start?: number | undefined;
    }) => void : never : never;
}
