import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NumberSymbols extends Readonly<{
    "__flaxBound:package:intl/number_symbols.dart::NumberSymbols": readonly [];
}> {
    readonly __NumberSymbols: unique symbol;
    readonly [_flaxDartTypeValue]: NumberSymbols;
    readonly NAME: string;
    readonly DECIMAL_SEP: string;
    readonly GROUP_SEP: string;
    readonly PERCENT: string;
    readonly ZERO_DIGIT: string;
    readonly PLUS_SIGN: string;
    readonly MINUS_SIGN: string;
    readonly EXP_SYMBOL: string;
    readonly PERMILL: string;
    readonly INFINITY: string;
    readonly NAN: string;
    readonly DECIMAL_PATTERN: string;
    readonly SCIENTIFIC_PATTERN: string;
    readonly PERCENT_PATTERN: string;
    readonly CURRENCY_PATTERN: string;
    readonly DEF_CURRENCY_CODE: string;
    toString(): string;
}
export declare function _NumberSymbolsFactory(options: {
    NAME: string;
    DECIMAL_SEP: string;
    GROUP_SEP: string;
    PERCENT: string;
    ZERO_DIGIT: string;
    PLUS_SIGN: string;
    MINUS_SIGN: string;
    EXP_SYMBOL: string;
    PERMILL: string;
    INFINITY: string;
    NAN: string;
    DECIMAL_PATTERN: string;
    SCIENTIFIC_PATTERN: string;
    PERCENT_PATTERN: string;
    CURRENCY_PATTERN: string;
    DEF_CURRENCY_CODE: string;
}): NumberSymbols;
export interface _NumberSymbolsNative extends NumberSymbols {
    readonly [_flaxDartTypeValue]: _NumberSymbolsNative;
    toString(): string;
    get NAME(): string;
    get DECIMAL_SEP(): string;
    get GROUP_SEP(): string;
    get PERCENT(): string;
    get ZERO_DIGIT(): string;
    get PLUS_SIGN(): string;
    get MINUS_SIGN(): string;
    get EXP_SYMBOL(): string;
    get PERMILL(): string;
    get INFINITY(): string;
    get NAN(): string;
    get DECIMAL_PATTERN(): string;
    get SCIENTIFIC_PATTERN(): string;
    get PERCENT_PATTERN(): string;
    get CURRENCY_PATTERN(): string;
    get DEF_CURRENCY_CODE(): string;
}
export declare abstract class _NumberSymbolsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumberSymbols>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NumberSymbols;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/dependency_intl#type:NumberSymbols", readonly [], false];
    constructor(options: {
        NAME: string;
        DECIMAL_SEP: string;
        GROUP_SEP: string;
        PERCENT: string;
        ZERO_DIGIT: string;
        PLUS_SIGN: string;
        MINUS_SIGN: string;
        EXP_SYMBOL: string;
        PERMILL: string;
        INFINITY: string;
        NAN: string;
        DECIMAL_PATTERN: string;
        SCIENTIFIC_PATTERN: string;
        PERCENT_PATTERN: string;
        CURRENCY_PATTERN: string;
        DEF_CURRENCY_CODE: string;
    });
}
export declare namespace _NumberSymbolsFactory {
    function implement(args: [options: {
        NAME: string;
        DECIMAL_SEP: string;
        GROUP_SEP: string;
        PERCENT: string;
        ZERO_DIGIT: string;
        PLUS_SIGN: string;
        MINUS_SIGN: string;
        EXP_SYMBOL: string;
        PERMILL: string;
        INFINITY: string;
        NAN: string;
        DECIMAL_PATTERN: string;
        SCIENTIFIC_PATTERN: string;
        PERCENT_PATTERN: string;
        CURRENCY_PATTERN: string;
        DEF_CURRENCY_CODE: string;
    }], implementation: {}): NumberSymbols;
}
declare const _NumberSymbolsBinding: typeof _NumberSymbolsFactory & (new (options: {
    NAME: string;
    DECIMAL_SEP: string;
    GROUP_SEP: string;
    PERCENT: string;
    ZERO_DIGIT: string;
    PLUS_SIGN: string;
    MINUS_SIGN: string;
    EXP_SYMBOL: string;
    PERMILL: string;
    INFINITY: string;
    NAN: string;
    DECIMAL_PATTERN: string;
    SCIENTIFIC_PATTERN: string;
    PERCENT_PATTERN: string;
    CURRENCY_PATTERN: string;
    DEF_CURRENCY_CODE: string;
}) => _NumberSymbolsNative);
export declare const NumberSymbols: typeof _NumberSymbolsBinding & _FlaxInstanceType<NumberSymbols> & _FlaxDartType<NumberSymbols, readonly ["class", "flax.cupertino/dependency_intl#type:NumberSymbols", readonly [], false]>;
export {};
