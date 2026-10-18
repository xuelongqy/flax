import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExpMatch';
import '@flax/dart/core/_bindings/flutter_RegExpMatch';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RegExp extends Omit<upstream0.Pattern, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:core::RegExp": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Pattern": readonly [];
}> {
    readonly __RegExp: unique symbol;
    readonly [_flaxDartTypeValue]: RegExp;
    readonly pattern: string;
    readonly isMultiLine: boolean;
    readonly isCaseSensitive: boolean;
    readonly isUnicode: boolean;
    readonly isDotAll: boolean;
    allMatches(input: string, start?: number): DartIterable<upstream1.RegExpMatch>;
    matchAsPrefix(string: string, start?: number): upstream2.Match | null;
    firstMatch(input: string): upstream1.RegExpMatch | null;
    hasMatch(input: string): boolean;
    stringMatch(input: string): string | null;
}
export declare function _RegExpFactory(source: string, options?: {
    multiLine?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    unicode?: boolean | undefined;
    dotAll?: boolean | undefined;
}): RegExp;
export declare namespace _RegExpFactory {
    function escape(text: string): string;
}
export declare const RegExp: typeof _RegExpFactory & _FlaxInstanceType<RegExp> & _FlaxDartType<RegExp, readonly ["class", "flax.core/flutter#type:RegExp", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "pattern" | "isMultiLine" | "isCaseSensitive" | "isUnicode" | "isDotAll" | "allMatches" | "matchAsPrefix" | "firstMatch" | "hasMatch" | "stringMatch" | "__flaxBound:dart:core::RegExp" | "__flaxBound:dart:core::Pattern";
export {};
