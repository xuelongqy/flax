import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import type * as upstream1 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberParserBase';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberParserBase';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NumberFormat extends Readonly<{
    "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
}> {
    readonly __NumberFormat: unique symbol;
    readonly [_flaxDartTypeValue]: NumberFormat;
    readonly [_flaxDartMethodCases]?: {
        parseWith: _FlaxSignature0;
        tryParseWith: _FlaxSignature1;
    };
    readonly negativePrefix: string;
    readonly positivePrefix: string;
    readonly negativeSuffix: string;
    readonly positiveSuffix: string;
    get maximumIntegerDigits(): number;
    get minimumIntegerDigits(): number;
    get maximumFractionDigits(): number;
    get minimumFractionDigits(): number;
    get minimumExponentDigits(): number;
    get maximumSignificantDigits(): number | null;
    get minimumSignificantDigitsStrict(): boolean;
    get minimumSignificantDigits(): number | null;
    get significantDigits(): number | null;
    get significantDigitsInUse(): boolean;
    readonly multiplier: number;
    get currencyName(): string | null;
    readonly currencySymbol: string;
    readonly decimalDigits: number | null;
    readonly locale: string;
    readonly symbols: upstream0.NumberSymbols;
    readonly localeZero: number;
    simpleCurrencySymbol(currencyCode: string): string;
    format(number: unknown | null): string;
    parse(text: string): number;
    parseWith<R extends unknown | null = unknown | null, P extends upstream1.NumberParserBase<R> = upstream1.NumberParserBase<R>>(parserGenerator: ((p0: NumberFormat, p1: string) => (P | DartInput<P>)), text: string): _FlaxDartOutput<R>;
    tryParse(text: string): number | null;
    tryParseWith<R extends unknown | null = unknown | null, P extends upstream1.NumberParserBase<R> = upstream1.NumberParserBase<R>>(parserGenerator: ((p0: NumberFormat, p1: string) => (P | DartInput<P>)), text: string): _FlaxDartOutput<R> | null;
    turnOffGrouping(): void;
    toString(): string;
    set maximumIntegerDigits(value: number);
    set minimumIntegerDigits(value: number);
    set maximumFractionDigits(value: number);
    set minimumFractionDigits(value: number);
    set minimumExponentDigits(value: number);
    set maximumSignificantDigits(value: number | null);
    set minimumSignificantDigitsStrict(value: boolean);
    set minimumSignificantDigits(value: number | null);
    set significantDigits(value: number | null);
    set significantDigitsInUse(value: boolean);
    set currencyName(value: string | null);
}
export declare function _NumberFormatFactory(newPattern?: string | null, locale?: string | null): NumberFormat;
export declare namespace _NumberFormatFactory {
    function decimalPattern(locale?: string | null): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function decimalPatternDigits(options?: {
        locale?: string | null | undefined;
        decimalDigits?: number | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function percentPattern(locale?: string | null): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function decimalPercentPattern(options?: {
        locale?: string | null | undefined;
        decimalDigits?: number | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function scientificPattern(locale?: string | null): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function currencyPattern(locale?: string | null, currencyNameOrSymbol?: string | null): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function currency(options?: {
        locale?: string | null | undefined;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        decimalDigits?: number | null | undefined;
        customPattern?: string | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function simpleCurrency(options?: {
        locale?: string | null | undefined;
        name?: string | null | undefined;
        decimalDigits?: number | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function compact(options?: {
        locale?: string | null | undefined;
        explicitSign?: boolean | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function compactLong(options?: {
        locale?: string | null | undefined;
        explicitSign?: boolean | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function compactSimpleCurrency(options?: {
        locale?: string | null | undefined;
        name?: string | null | undefined;
        decimalDigits?: number | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function compactCurrency(options?: {
        locale?: string | null | undefined;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        decimalDigits?: number | null | undefined;
    }): NumberFormat;
}
export declare namespace _NumberFormatFactory {
    function localeExists(localeName: string | null): boolean;
}
export declare namespace _NumberFormatFactory {
    function numberOfIntegerDigits(number: unknown | null): number;
}
export declare const NumberFormat: typeof _NumberFormatFactory & _FlaxInstanceType<NumberFormat> & _FlaxDartType<NumberFormat, readonly ["class", "flax.cupertino/dependency_intl#type:NumberFormat", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream1.NumberParserBase<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream1.NumberParserBase<_Selected0>] ? (parserGenerator: ((p0: NumberFormat, p1: string) => (_Selected1 | DartInput<_Selected1>)), text: string) => _Selected0 : never : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream1.NumberParserBase<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream1.NumberParserBase<_Selected0>] ? (parserGenerator: ((p0: NumberFormat, p1: string) => (_Selected1 | DartInput<_Selected1>)), text: string) => _Selected0 | null : never : never : never;
}
export {};
