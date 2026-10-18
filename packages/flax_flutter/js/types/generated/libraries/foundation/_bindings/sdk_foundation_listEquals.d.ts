import { type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_listEquals<T extends unknown | null = unknown | null>(a: DartListInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null, b: DartListInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null): boolean;
declare const _flaxGeneric_listEquals: _FlaxDartCallable<typeof _flaxTopLevel_listEquals, _FlaxSignature0>;
export { _flaxGeneric_listEquals as listEquals };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: DartListInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null, b: DartListInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null) => boolean : never : never;
}
