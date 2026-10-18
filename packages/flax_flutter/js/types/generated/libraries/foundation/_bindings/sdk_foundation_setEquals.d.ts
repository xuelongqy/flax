import { type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_setEquals<T extends unknown | null = unknown | null>(a: DartSetInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null, b: DartSetInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null): boolean;
declare const _flaxGeneric_setEquals: _FlaxDartCallable<typeof _flaxTopLevel_setEquals, _FlaxSignature0>;
export { _flaxGeneric_setEquals as setEquals };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null, b: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null) => boolean : never : never;
}
