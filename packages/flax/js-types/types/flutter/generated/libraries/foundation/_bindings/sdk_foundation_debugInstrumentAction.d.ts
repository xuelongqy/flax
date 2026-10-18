import { type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_debugInstrumentAction<T extends unknown | null = unknown | null>(description: string, action: (() => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
declare const _flaxGeneric_debugInstrumentAction: _FlaxDartCallable<typeof _flaxTopLevel_debugInstrumentAction, _FlaxSignature0>;
export { _flaxGeneric_debugInstrumentAction as debugInstrumentAction };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (description: string, action: (() => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
