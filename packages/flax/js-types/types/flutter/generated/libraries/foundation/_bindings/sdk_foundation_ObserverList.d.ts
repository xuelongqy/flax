import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObserverList<T extends unknown | null = unknown | null> extends Omit<DartIterable<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/observer_list.dart::ObserverList": readonly [T];
}>, Readonly<{
    "__flaxBound:dart:core::Iterable": readonly [T];
}> {
    readonly __ObserverList: unique symbol;
    readonly [_flaxDartTypeValue]: ObserverList<T>;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature1<T>;
        map: _FlaxSignature2<T>;
        whereType: _FlaxSignature3<T>;
        expand: _FlaxSignature4<T>;
        fold: _FlaxSignature5<T>;
    };
    readonly iterator: upstream0.Iterator<T>;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    readonly length: number;
    readonly first: T;
    readonly last: T;
    readonly single: T;
    add(item: (T | DartInput<T>)): void;
    remove(item: (T | DartInput<T>)): boolean;
    clear(): void;
    contains(element: unknown | null): boolean;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<T>;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<T, (T | DartInput<T>)>): DartIterable<T>;
    map<T extends unknown | null = unknown | null>(toElement: ((e: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: T) => boolean)): DartIterable<T>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: _FlaxDartOutput<T>) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    forEach(action: ((element: T) => void)): void;
    reduce(combine: ((value: T, element: T) => (T | DartInput<T>))): T;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: T) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: T) => boolean)): boolean;
    toSet(): DartSet<T>;
    take(count: number): DartIterable<T>;
    takeWhile(test: ((value: T) => boolean)): DartIterable<T>;
    skip(count: number): DartIterable<T>;
    skipWhile(test: ((value: T) => boolean)): DartIterable<T>;
    firstWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    lastWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    singleWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    elementAt(index: number): T;
}
export declare function _ObserverListFactory<T extends unknown | null = unknown | null>(): ObserverList<T>;
export declare function _ObserverListFactory(): ObserverList<unknown | null>;
export interface _ObserverListNative<T extends unknown | null = unknown | null> extends ObserverList<T> {
    readonly [_flaxDartTypeValue]: _ObserverListNative<T>;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature6<T>;
        map: _FlaxSignature7<T>;
        whereType: _FlaxSignature8<T>;
        expand: _FlaxSignature9<T>;
        fold: _FlaxSignature10<T>;
    };
    add(item: (T | DartInput<T>)): void;
    remove(item: (T | DartInput<T>)): boolean;
    clear(): void;
    contains(element: unknown | null): boolean;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<T>;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<T, (T | DartInput<T>)>): DartIterable<T>;
    map<T extends unknown | null = unknown | null>(toElement: ((e: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    where(test: ((element: T) => boolean)): DartIterable<T>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: _FlaxDartOutput<T>) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    forEach(action: ((element: T) => void)): void;
    reduce(combine: ((value: T, element: T) => (T | DartInput<T>))): T;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: T) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: T) => boolean)): boolean;
    toSet(): DartSet<T>;
    take(count: number): DartIterable<T>;
    takeWhile(test: ((value: T) => boolean)): DartIterable<T>;
    skip(count: number): DartIterable<T>;
    skipWhile(test: ((value: T) => boolean)): DartIterable<T>;
    firstWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    lastWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    singleWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): T;
    elementAt(index: number): T;
    get iterator(): upstream0.Iterator<T>;
    get isEmpty(): boolean;
    get isNotEmpty(): boolean;
    get length(): number;
    get first(): T;
    get last(): T;
    get single(): T;
}
export declare abstract class _ObserverListNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObserverList<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObserverList<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObserverList", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature11;
    constructor();
}
export declare namespace _ObserverListFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): ObserverList<T>;
}
declare const _ObserverListBinding: typeof _ObserverListFactory & (new <T extends unknown | null = unknown | null>() => _ObserverListNative<T>);
export declare const ObserverList: typeof _ObserverListBinding & _FlaxInstanceType<ObserverList<unknown | null>> & _FlaxDartType<ObserverList<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ObserverList", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "isEmpty" | "isNotEmpty" | "length" | "first" | "last" | "single" | "add" | "remove" | "clear" | "contains" | "toList" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:package:flutter/src/foundation/observer_list.dart::ObserverList" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _ObserverListNative<_Selected0>) & {
        (): _ObserverListNative<_Selected0>;
        readonly prototype: _ObserverListNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_ObserverListNative<_Selected0>>): _ObserverListNative<_Selected0>;
    } & _FlaxInstanceType<_ObserverListNative<_Selected0>> & _FlaxDartType<_ObserverListNative<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature10<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
interface _FlaxSignature11 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _ObserverListNative<_Selected0>) & {
        (): _ObserverListNative<_Selected0>;
        readonly prototype: _ObserverListNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_ObserverListNative<_Selected0>>): _ObserverListNative<_Selected0>;
    } & _FlaxInstanceType<_ObserverListNative<_Selected0>> & _FlaxDartType<_ObserverListNative<_Selected0>> : never : never;
}
export {};
