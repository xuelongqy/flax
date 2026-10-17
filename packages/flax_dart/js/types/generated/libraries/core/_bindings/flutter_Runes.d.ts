import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_RuneIterator';
import '@flax/dart/core/_bindings/flutter_RuneIterator';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Runes extends Readonly<{
    "__flaxBound:dart:core::Runes": readonly [];
}>, Omit<DartIterable<number>, typeof _flaxDartTypeValue | "string" | "iterator" | "last" | "length" | "isEmpty" | "isNotEmpty" | "first" | "single" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toList" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt"> {
    readonly __Runes: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature0;
        map: _FlaxSignature1;
        whereType: _FlaxSignature2;
        expand: _FlaxSignature3;
        fold: _FlaxSignature4;
    };
    readonly string: string;
    readonly iterator: upstream0.RuneIterator;
    readonly last: number;
    readonly length: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    readonly first: number;
    readonly single: number;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<number, number>): DartIterable<number>;
    map<T extends unknown | null = unknown | null>(toElement: ((e: number) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: number) => boolean)): DartIterable<number>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: number) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    contains(element: unknown | null): boolean;
    forEach(action: ((element: number) => void)): void;
    reduce(combine: ((value: number, element: number) => number)): number;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: number) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: number) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: number) => boolean)): boolean;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<number>;
    toSet(): DartSet<number>;
    take(count: number): DartIterable<number>;
    takeWhile(test: ((value: number) => boolean)): DartIterable<number>;
    skip(count: number): DartIterable<number>;
    skipWhile(test: ((value: number) => boolean)): DartIterable<number>;
    firstWhere(test: ((element: number) => boolean), options?: {
        orElse?: (() => number) | null | undefined;
    }): number;
    lastWhere(test: ((element: number) => boolean), options?: {
        orElse?: (() => number) | null | undefined;
    }): number;
    singleWhere(test: ((element: number) => boolean), options?: {
        orElse?: (() => number) | null | undefined;
    }): number;
    elementAt(index: number): number;
}
export declare function _RunesFactory(string: string): Runes;
export declare const Runes: typeof _RunesFactory & _FlaxInstanceType<Runes> & _FlaxDartType<Runes, readonly ["class", "flax.core/flutter#type:Runes", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: number) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: number) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: number) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
export {};
