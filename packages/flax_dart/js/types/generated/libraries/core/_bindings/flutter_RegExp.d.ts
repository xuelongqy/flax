import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
export interface RegExp extends upstream0.Pattern, Readonly<{
    "__flaxBound:dart:core::RegExp": readonly [];
}> {
    readonly __RegExp: unique symbol;
    readonly pattern: string;
    readonly isMultiLine: boolean;
    readonly isCaseSensitive: boolean;
    readonly isUnicode: boolean;
    readonly isDotAll: boolean;
    hasMatch(input: string): boolean;
}
declare function _RegExpFactory(source: string, options?: {
    multiLine?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    unicode?: boolean | undefined;
    dotAll?: boolean | undefined;
}): RegExp;
export declare const RegExp: typeof _RegExpFactory & _FlaxInstanceType<RegExp>;
export {};
