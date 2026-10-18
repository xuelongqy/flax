import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PathMetrics extends Omit<DartIterable<upstream0.PathMetric>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::PathMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterable": readonly [upstream0.PathMetric];
}> {
    readonly __PathMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: PathMetrics;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature0;
        map: _FlaxSignature1;
        whereType: _FlaxSignature2;
        expand: _FlaxSignature3;
        fold: _FlaxSignature4;
    };
    readonly iterator: upstream1.Iterator<upstream0.PathMetric>;
    readonly length: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    readonly first: upstream0.PathMetric;
    readonly last: upstream0.PathMetric;
    readonly single: upstream0.PathMetric;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<upstream0.PathMetric, Readonly<{
        "__flaxBound:dart:ui::PathMetric": readonly [];
    }>>): DartIterable<upstream0.PathMetric>;
    map<T extends unknown | null = unknown | null>(toElement: ((e: upstream0.PathMetric) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: upstream0.PathMetric) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    contains(element: unknown | null): boolean;
    forEach(action: ((element: upstream0.PathMetric) => void)): void;
    reduce(combine: ((value: upstream0.PathMetric, element: upstream0.PathMetric) => Readonly<{
        "__flaxBound:dart:ui::PathMetric": readonly [];
    }>)): upstream0.PathMetric;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: upstream0.PathMetric) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: upstream0.PathMetric) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: upstream0.PathMetric) => boolean)): boolean;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<upstream0.PathMetric>;
    toSet(): DartSet<upstream0.PathMetric>;
    take(count: number): DartIterable<upstream0.PathMetric>;
    takeWhile(test: ((value: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
    skip(count: number): DartIterable<upstream0.PathMetric>;
    skipWhile(test: ((value: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
    firstWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {
        orElse?: (() => Readonly<{
            "__flaxBound:dart:ui::PathMetric": readonly [];
        }>) | null | undefined;
    }): upstream0.PathMetric;
    lastWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {
        orElse?: (() => Readonly<{
            "__flaxBound:dart:ui::PathMetric": readonly [];
        }>) | null | undefined;
    }): upstream0.PathMetric;
    singleWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {
        orElse?: (() => Readonly<{
            "__flaxBound:dart:ui::PathMetric": readonly [];
        }>) | null | undefined;
    }): upstream0.PathMetric;
    elementAt(index: number): upstream0.PathMetric;
}
export declare const PathMetrics: object & _FlaxInstanceType<PathMetrics> & _FlaxDartType<PathMetrics, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toList" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:dart:ui::PathMetrics" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: upstream0.PathMetric) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: upstream0.PathMetric) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: upstream0.PathMetric) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
export {};
