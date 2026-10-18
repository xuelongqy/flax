import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Characters';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Characters';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Runes';
import '@flax/dart/core/_bindings/flutter_Runes';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CharacterRange extends Omit<upstream0.Iterator<string>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [string];
}> {
    readonly __CharacterRange: unique symbol;
    readonly [_flaxDartTypeValue]: CharacterRange;
    readonly current: string;
    readonly source: upstream1.Characters;
    readonly utf16CodeUnits: DartIterable<number>;
    readonly runes: upstream2.Runes;
    readonly currentCharacters: upstream1.Characters;
    readonly charactersBefore: upstream1.Characters;
    readonly charactersAfter: upstream1.Characters;
    readonly stringBefore: string;
    readonly stringBeforeLength: number;
    readonly stringAfter: string;
    readonly stringAfterLength: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    moveNext(count?: number): boolean;
    copy(): CharacterRange;
    moveNextAll(): void;
    moveTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    moveUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    moveBack(count?: number): boolean;
    moveBackAll(): void;
    moveBackTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    moveBackUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    expandNext(count?: number): boolean;
    expandTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    expandUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    expandWhile(test: ((p0: string) => boolean)): void;
    expandAll(): void;
    expandBack(count?: number): boolean;
    expandBackTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    expandBackUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    expandBackWhile(test: ((p0: string) => boolean)): void;
    expandBackAll(): void;
    collapseToStart(): void;
    collapseToFirst(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    collapseToLast(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    collapseToEnd(): void;
    dropFirst(count?: number): boolean;
    dropTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    dropUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    dropWhile(test: ((p0: string) => boolean)): void;
    dropLast(count?: number): boolean;
    dropBackTo(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    dropBackUntil(target: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    dropBackWhile(test: ((p0: string) => boolean)): void;
    replaceRange(replacement: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): CharacterRange;
    replaceAll(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, replacement: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): CharacterRange | null;
    split(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, maxParts?: number): DartIterable<CharacterRange>;
    replaceFirst(pattern: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>, replacement: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): CharacterRange | null;
    startsWith(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    endsWith(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    isPrecededBy(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
    isFollowedBy(characters: Readonly<{
        "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Iterable": readonly [string];
    }>): boolean;
}
export declare function _CharacterRangeFactory(string: string): CharacterRange;
export declare namespace _CharacterRangeFactory {
    function at(string: string, startIndex: number, endIndex?: number | null): CharacterRange;
}
export declare namespace _CharacterRangeFactory {
    function implement(args: [], implementation: {
        moveNext: ((count?: number) => boolean);
        copy: (() => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>);
        moveNextAll: (() => void);
        moveTo: ((target: upstream1.Characters) => boolean);
        moveUntil: ((target: upstream1.Characters) => boolean);
        moveBack: ((count?: number) => boolean);
        moveBackAll: (() => void);
        moveBackTo: ((target: upstream1.Characters) => boolean);
        moveBackUntil: ((target: upstream1.Characters) => boolean);
        expandNext: ((count?: number) => boolean);
        expandTo: ((target: upstream1.Characters) => boolean);
        expandUntil: ((target: upstream1.Characters) => boolean);
        expandWhile: ((test: ((p0: string) => boolean)) => void);
        expandAll: (() => void);
        expandBack: ((count?: number) => boolean);
        expandBackTo: ((target: upstream1.Characters) => boolean);
        expandBackUntil: ((target: upstream1.Characters) => boolean);
        expandBackWhile: ((test: ((p0: string) => boolean)) => void);
        expandBackAll: (() => void);
        collapseToStart: (() => void);
        collapseToFirst: ((target: upstream1.Characters) => boolean);
        collapseToLast: ((target: upstream1.Characters) => boolean);
        collapseToEnd: (() => void);
        dropFirst: ((count?: number) => boolean);
        dropTo: ((target: upstream1.Characters) => boolean);
        dropUntil: ((target: upstream1.Characters) => boolean);
        dropWhile: ((test: ((p0: string) => boolean)) => void);
        dropLast: ((count?: number) => boolean);
        dropBackTo: ((target: upstream1.Characters) => boolean);
        dropBackUntil: ((target: upstream1.Characters) => boolean);
        dropBackWhile: ((test: ((p0: string) => boolean)) => void);
        replaceRange: ((replacement: upstream1.Characters) => Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>);
        replaceAll: ((pattern: upstream1.Characters, replacement: upstream1.Characters) => (Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>) | null);
        split: ((pattern: upstream1.Characters, maxParts?: number) => DartIterableInput<CharacterRange, Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>>);
        replaceFirst: ((pattern: upstream1.Characters, replacement: upstream1.Characters) => (Readonly<{
            "__flaxBound:package:characters/src/characters.dart::CharacterRange": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterator": readonly [string];
        }>) | null);
        startsWith: ((characters: upstream1.Characters) => boolean);
        endsWith: ((characters: upstream1.Characters) => boolean);
        isPrecededBy: ((characters: upstream1.Characters) => boolean);
        isFollowedBy: ((characters: upstream1.Characters) => boolean);
        get source(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>;
        get utf16CodeUnits(): DartIterableInput<number, number>;
        get runes(): Readonly<{
            "__flaxBound:dart:core::Runes": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [number];
        }>;
        get currentCharacters(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>;
        get charactersBefore(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>;
        get charactersAfter(): Readonly<{
            "__flaxBound:package:characters/src/characters.dart::Characters": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [string];
        }>;
        get stringBefore(): string;
        get stringBeforeLength(): number;
        get stringAfter(): string;
        get stringAfterLength(): number;
        get isEmpty(): boolean;
        get isNotEmpty(): boolean;
        get current(): string;
    }): CharacterRange;
}
export declare const CharacterRange: typeof _CharacterRangeFactory & _FlaxInstanceType<CharacterRange> & _FlaxDartType<CharacterRange, readonly ["class", "flax.core/sdk_widgets#type:CharacterRange", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "source" | "utf16CodeUnits" | "runes" | "currentCharacters" | "charactersBefore" | "charactersAfter" | "stringBefore" | "stringBeforeLength" | "stringAfter" | "stringAfterLength" | "isEmpty" | "isNotEmpty" | "moveNext" | "copy" | "moveNextAll" | "moveTo" | "moveUntil" | "moveBack" | "moveBackAll" | "moveBackTo" | "moveBackUntil" | "expandNext" | "expandTo" | "expandUntil" | "expandWhile" | "expandAll" | "expandBack" | "expandBackTo" | "expandBackUntil" | "expandBackWhile" | "expandBackAll" | "collapseToStart" | "collapseToFirst" | "collapseToLast" | "collapseToEnd" | "dropFirst" | "dropTo" | "dropUntil" | "dropWhile" | "dropLast" | "dropBackTo" | "dropBackUntil" | "dropBackWhile" | "replaceRange" | "replaceAll" | "split" | "replaceFirst" | "startsWith" | "endsWith" | "isPrecededBy" | "isFollowedBy" | "__flaxBound:package:characters/src/characters.dart::CharacterRange" | "__flaxBound:dart:core::Iterator";
export {};
