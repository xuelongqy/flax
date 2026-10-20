import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CachingIterable<E extends unknown | null = unknown | null> extends Omit<DartIterable<E>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable": readonly [E];
}>, Readonly<{
    "__flaxBound:dart:core::Iterable": readonly [E];
}> {
    readonly __CachingIterable: unique symbol;
    readonly [_flaxDartTypeValue]: CachingIterable<E>;
    readonly [_flaxDartMethodCases]?: {
        map: _FlaxSignature1<E>;
        expand: _FlaxSignature2<E>;
        cast: _FlaxSignature3<E>;
        whereType: _FlaxSignature4<E>;
        fold: _FlaxSignature5<E>;
    };
    readonly iterator: upstream0.Iterator<E>;
    readonly length: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    readonly first: E;
    readonly last: E;
    readonly single: E;
    map<T extends unknown | null = unknown | null>(toElement: ((e: E) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: E) => boolean)): DartIterable<E>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: E) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    take(count: number): DartIterable<E>;
    takeWhile(test: ((value: E) => boolean)): DartIterable<E>;
    skip(count: number): DartIterable<E>;
    skipWhile(test: ((value: E) => boolean)): DartIterable<E>;
    elementAt(index: number): E;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<E>;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<E, (E | DartInput<E>)>): DartIterable<E>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    contains(element: unknown | null): boolean;
    forEach(action: ((element: E) => void)): void;
    reduce(combine: ((value: E, element: E) => (E | DartInput<E>))): E;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: E) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: E) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: E) => boolean)): boolean;
    toSet(): DartSet<E>;
    firstWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
    lastWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
    singleWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
}
export declare function _CachingIterableFactory<E extends unknown | null = unknown | null>(_prefillIterator: Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [_FlaxDartOutput<E>];
}>): CachingIterable<E>;
export declare function _CachingIterableFactory(_prefillIterator: Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [unknown | null];
}>): CachingIterable<unknown | null>;
export interface _CachingIterableNative<E extends unknown | null = unknown | null> extends CachingIterable<E> {
    readonly [_flaxDartTypeValue]: _CachingIterableNative<E>;
    readonly [_flaxDartMethodCases]?: {
        map: _FlaxSignature6<E>;
        expand: _FlaxSignature7<E>;
        cast: _FlaxSignature8<E>;
        whereType: _FlaxSignature9<E>;
        fold: _FlaxSignature10<E>;
    };
    map<T extends unknown | null = unknown | null>(toElement: ((e: E) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: E) => boolean)): DartIterable<E>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: E) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    take(count: number): DartIterable<E>;
    takeWhile(test: ((value: E) => boolean)): DartIterable<E>;
    skip(count: number): DartIterable<E>;
    skipWhile(test: ((value: E) => boolean)): DartIterable<E>;
    elementAt(index: number): E;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<E>;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<E, (E | DartInput<E>)>): DartIterable<E>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    contains(element: unknown | null): boolean;
    forEach(action: ((element: E) => void)): void;
    reduce(combine: ((value: E, element: E) => (E | DartInput<E>))): E;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: E) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: E) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: E) => boolean)): boolean;
    toSet(): DartSet<E>;
    firstWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
    lastWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
    singleWhere(test: ((element: E) => boolean), options?: {
        orElse?: (() => (E | DartInput<E>)) | null | undefined;
    }): E;
    get iterator(): upstream0.Iterator<E>;
    get length(): number;
    get isEmpty(): boolean;
    get isNotEmpty(): boolean;
    get first(): E;
    get last(): E;
    get single(): E;
}
export declare abstract class _CachingIterableNative<E extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CachingIterable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CachingIterable<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature11;
    constructor(_prefillIterator: Readonly<{
        "__flaxBound:dart:core::Iterator": readonly [unknown | null];
    }>);
}
export declare namespace _CachingIterableFactory {
    function implement<E extends unknown | null = unknown | null>(args: [_prefillIterator: Readonly<{
        "__flaxBound:dart:core::Iterator": readonly [unknown | null];
    }>], implementation: {}): CachingIterable<E>;
}
declare const _CachingIterableBinding: typeof _CachingIterableFactory & (new <E extends unknown | null = unknown | null>(_prefillIterator: Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [unknown | null];
}>) => _CachingIterableNative<E>);
export declare const CachingIterable: typeof _CachingIterableBinding & _FlaxInstanceType<CachingIterable<unknown | null>> & _FlaxDartType<CachingIterable<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "map" | "where" | "expand" | "take" | "takeWhile" | "skip" | "skipWhile" | "elementAt" | "toList" | "cast" | "followedBy" | "whereType" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "firstWhere" | "lastWhere" | "singleWhere" | "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_prefillIterator: Readonly<{
        "__flaxBound:dart:core::Iterator": readonly [unknown | null];
    }>) => _CachingIterableNative<_Selected0>) & {
        (_prefillIterator: Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [_Selected0];
        }>): _CachingIterableNative<_Selected0>;
        readonly prototype: _CachingIterableNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [unknown | null];
        }>], implementation: Partial<_CachingIterableNative<_Selected0>>): _CachingIterableNative<_Selected0>;
    } & _FlaxInstanceType<_CachingIterableNative<_Selected0>> & _FlaxDartType<_CachingIterableNative<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature10<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
interface _FlaxSignature11 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_prefillIterator: Readonly<{
        "__flaxBound:dart:core::Iterator": readonly [unknown | null];
    }>) => _CachingIterableNative<_Selected0>) & {
        (_prefillIterator: Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [_Selected0];
        }>): _CachingIterableNative<_Selected0>;
        readonly prototype: _CachingIterableNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [unknown | null];
        }>], implementation: Partial<_CachingIterableNative<_Selected0>>): _CachingIterableNative<_Selected0>;
    } & _FlaxInstanceType<_CachingIterableNative<_Selected0>> & _FlaxDartType<_CachingIterableNative<_Selected0>> : never : never;
}
export {};
