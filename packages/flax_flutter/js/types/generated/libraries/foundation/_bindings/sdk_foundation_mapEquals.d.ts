import { type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_mapEquals<T extends unknown | null = unknown | null, U extends unknown | null = unknown | null>(a: DartMapInput<_FlaxDartOutput<T>, _FlaxDartOutput<U>, (T | _FlaxDartOutput<T>), (U | _FlaxDartOutput<U>)> | null, b: DartMapInput<_FlaxDartOutput<T>, _FlaxDartOutput<U>, (T | _FlaxDartOutput<T>), (U | _FlaxDartOutput<U>)> | null): boolean;
declare const _flaxGeneric_mapEquals: _FlaxDartCallable<typeof _flaxTopLevel_mapEquals, _FlaxSignature0>;
export { _flaxGeneric_mapEquals as mapEquals };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (a: DartMapInput<_Selected0, _Selected1, (_Selected0 | DartInput<_Selected0>), (_Selected1 | DartInput<_Selected1>)> | null, b: DartMapInput<_Selected0, _Selected1, (_Selected0 | DartInput<_Selected0>), (_Selected1 | DartInput<_Selected1>)> | null) => boolean : never : never : never;
}
