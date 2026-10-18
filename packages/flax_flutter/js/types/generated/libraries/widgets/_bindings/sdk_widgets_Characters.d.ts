import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_CharacterRange';
import '@flax/flutter/widgets/_bindings/sdk_widgets_CharacterRange';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Characters extends Omit<DartIterable<string>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterable": readonly [string];
}> {
    readonly __Characters: unique symbol;
    readonly [_flaxDartTypeValue]: Characters;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature0;
        map: _FlaxSignature1;
        whereType: _FlaxSignature2;
        expand: _FlaxSignature3;
        fold: _FlaxSignature4;
    };
    readonly string: string;
    readonly iterator: upstream0.CharacterRange;
    readonly iteratorAtEnd: upstream0.CharacterRange;
    readonly length: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    readonly first: string;
    readonly last: string;
    readonly single: string;
    contains(singleCharacterString: string): boolean;
    containsAll(other: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    startsWith(other: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    endsWith(other: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    findFirst(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): upstream0.CharacterRange | null;
    findLast(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): upstream0.CharacterRange | null;
    where(test: ((p0: string) => boolean)): Characters;
    skip(count: number): Characters;
    take(count: number): Characters;
    getRange(start: number, end?: number | null): Characters;
    characterAt(position: number): Characters;
    skipLast(count: number): Characters;
    takeLast(count: number): Characters;
    skipWhile(test: ((p0: string) => boolean)): Characters;
    takeWhile(test: ((p0: string) => boolean)): Characters;
    skipLastWhile(test: ((p0: string) => boolean)): Characters;
    takeLastWhile(test: ((p0: string) => boolean)): Characters;
    replaceAll(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, replacement: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): Characters;
    split(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, maxParts?: number): DartIterable<Characters>;
    replaceFirst(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, replacement: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): Characters;
    toLowerCase(): Characters;
    toUpperCase(): Characters;
    toString(): string;
    cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
    followedBy(other: DartIterableInput<string, string>): DartIterable<string>;
    map<T extends unknown | null = unknown | null>(toElement: ((e: string) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
    whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
    expand<T extends unknown | null = unknown | null>(toElements: ((element: string) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
    forEach(action: ((element: string) => void)): void;
    reduce(combine: ((value: string, element: string) => string)): string;
    fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: string) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
    every(test: ((element: string) => boolean)): boolean;
    join(separator?: string): string;
    any(test: ((element: string) => boolean)): boolean;
    toList(options?: {
        growable?: boolean | undefined;
    }): DartList<string>;
    toSet(): DartSet<string>;
    firstWhere(test: ((element: string) => boolean), options?: {
        orElse?: (() => string) | null | undefined;
    }): string;
    lastWhere(test: ((element: string) => boolean), options?: {
        orElse?: (() => string) | null | undefined;
    }): string;
    singleWhere(test: ((element: string) => boolean), options?: {
        orElse?: (() => string) | null | undefined;
    }): string;
    elementAt(index: number): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): Characters;
}
export declare function _CharactersFactory(string: string): Characters;
export declare namespace _CharactersFactory {
    function implement(args: [], implementation: {
        contains: ((singleCharacterString: string) => boolean);
        containsAll: ((other: Characters) => boolean);
        startsWith: ((other: Characters) => boolean);
        endsWith: ((other: Characters) => boolean);
        findFirst: ((characters: Characters) => (Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>) | null);
        findLast: ((characters: Characters) => (Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>) | null);
        where: ((test: ((p0: string) => boolean)) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        skip: ((count: number) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        take: ((count: number) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        getRange: ((start: number, end?: number | null) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        characterAt: ((position: number) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        skipLast: ((count: number) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        takeLast: ((count: number) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        skipWhile: ((test: ((p0: string) => boolean)) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        takeWhile: ((test: ((p0: string) => boolean)) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        skipLastWhile: ((test: ((p0: string) => boolean)) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        takeLastWhile: ((test: ((p0: string) => boolean)) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        replaceAll: ((pattern: Characters, replacement: Characters) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        split: ((pattern: Characters, maxParts?: number) => DartIterableInput<Characters, Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>>);
        replaceFirst: ((pattern: Characters, replacement: Characters) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        toLowerCase: (() => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        toUpperCase: (() => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        toString: (() => string);
        cast: (<R extends unknown | null>() => DartIterableInput<_FlaxDartOutput<R>, (R | _FlaxDartOutput<R>)>);
        followedBy: ((other: DartIterable<string>) => DartIterableInput<string, string>);
        map: (<T extends unknown | null>(toElement: ((e: string) => _FlaxDartOutput<T>)) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>);
        whereType: (<T extends unknown | null>() => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>);
        expand: (<T extends unknown | null>(toElements: ((element: string) => DartIterable<_FlaxDartOutput<T>>)) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>);
        forEach: ((action: ((element: string) => void)) => void);
        reduce: ((combine: ((value: string, element: string) => string)) => string);
        fold: (<T extends unknown | null>(initialValue: _FlaxDartOutput<T>, combine: ((previousValue: (T | _FlaxDartOutput<T>), element: string) => _FlaxDartOutput<T>)) => (T | _FlaxDartOutput<T>));
        every: ((test: ((element: string) => boolean)) => boolean);
        join: ((separator?: string) => string);
        any: ((test: ((element: string) => boolean)) => boolean);
        toList: ((options?: {
            growable?: boolean | undefined;
        }) => DartListInput<string, string>);
        toSet: (() => DartSetInput<string, string>);
        firstWhere: ((test: ((element: string) => boolean), options?: {
            orElse?: (() => string) | null | undefined;
        }) => string);
        lastWhere: ((test: ((element: string) => boolean), options?: {
            orElse?: (() => string) | null | undefined;
        }) => string);
        singleWhere: ((test: ((element: string) => boolean), options?: {
            orElse?: (() => string) | null | undefined;
        }) => string);
        elementAt: ((index: number) => string);
        operatorAdd: ((other: Characters) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>);
        operatorEquals: ((other: {}) => boolean);
        get string(): string;
        get iterator(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>;
        get iteratorAtEnd(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>;
        get hashCode(): number;
        get length(): number;
        get isEmpty(): boolean;
        get isNotEmpty(): boolean;
        get first(): string;
        get last(): string;
        get single(): string;
    }): Characters;
}
export declare namespace _CharactersFactory {
    const empty: Characters;
}
export declare const Characters: typeof _CharactersFactory & _FlaxInstanceType<Characters> & _FlaxDartType<Characters, readonly ["class", "flax.core/sdk_widgets#type:Characters", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "string" | "iterator" | "iteratorAtEnd" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "contains" | "containsAll" | "startsWith" | "endsWith" | "findFirst" | "findLast" | "where" | "skip" | "take" | "getRange" | "characterAt" | "skipLast" | "takeLast" | "skipWhile" | "takeWhile" | "skipLastWhile" | "takeLastWhile" | "replaceAll" | "split" | "replaceFirst" | "toLowerCase" | "toUpperCase" | "toString" | "cast" | "followedBy" | "map" | "whereType" | "expand" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toList" | "toSet" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "operatorAdd" | "__flaxBound:package:characters/src/characters.dart::Characters" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: string) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: string) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previousValue: _Selected0, element: string) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never;
}
export {};
