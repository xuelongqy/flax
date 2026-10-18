import { type DartListInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_binarySearch<T extends upstream0.Comparable<{}> | string | number = upstream0.Comparable<{}> | string | number>(sortedList: DartListInput<T, (T | DartInput<T>)>, value: (T | DartInput<T>)): number;
declare const _flaxGeneric_binarySearch: _FlaxDartCallable<typeof _flaxTopLevel_binarySearch, _FlaxSignature0>;
export { _flaxGeneric_binarySearch as binarySearch };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Comparable<{}> | string | number] ? (sortedList: DartListInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>, value: (_Selected0 | DartInput<_Selected0>)) => number : never : never;
}
