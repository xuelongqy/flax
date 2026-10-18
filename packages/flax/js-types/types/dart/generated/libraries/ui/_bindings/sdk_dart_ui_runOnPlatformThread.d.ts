import { type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_runOnPlatformThread<R extends unknown | null = unknown | null>(computation: (() => (R | _FlaxDartOutput<R>) | Promise<(R | _FlaxDartOutput<R>)>)): Promise<_FlaxDartOutput<R>>;
declare const _flaxGeneric_runOnPlatformThread: _FlaxDartCallable<typeof _flaxTopLevel_runOnPlatformThread, _FlaxSignature0>;
export { _flaxGeneric_runOnPlatformThread as runOnPlatformThread };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (computation: (() => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
