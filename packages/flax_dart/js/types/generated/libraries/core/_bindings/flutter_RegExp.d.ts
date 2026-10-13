import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExpMatch';
import '@flax/dart/core/_bindings/flutter_RegExpMatch';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
export interface RegExp extends upstream0.Pattern, Readonly<{
    "__flaxBound:dart:core::RegExp": readonly [];
}> {
    readonly __RegExp: unique symbol;
    readonly pattern: string;
    readonly isMultiLine: boolean;
    readonly isCaseSensitive: boolean;
    readonly isUnicode: boolean;
    readonly isDotAll: boolean;
    allMatches(input: string, start?: number): DartIterable<upstream1.RegExpMatch>;
    matchAsPrefix(string: string, start?: number): upstream2.Match | null;
    hasMatch(input: string): boolean;
    firstMatch(input: string): upstream1.RegExpMatch | null;
    stringMatch(input: string): string | null;
}
declare function _RegExpFactory(source: string, options?: {
    multiLine?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    unicode?: boolean | undefined;
    dotAll?: boolean | undefined;
}): RegExp;
declare namespace _RegExpFactory {
    function escape(text: string): string;
}
export declare const RegExp: typeof _RegExpFactory & _FlaxInstanceType<RegExp>;
export {};
