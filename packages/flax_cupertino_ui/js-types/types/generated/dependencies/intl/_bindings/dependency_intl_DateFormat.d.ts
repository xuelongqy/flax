import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_DateSymbols';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_DateSymbols';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DateFormat extends Readonly<{
    "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
}> {
    readonly __DateFormat: unique symbol;
    readonly [_flaxDartTypeValue]: DateFormat;
    get dateTimeConstructor(): ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => upstream0.DateTime);
    readonly dateOnly: boolean;
    readonly locale: string;
    readonly pattern: string | null;
    readonly dateSymbols: upstream1.DateSymbols;
    get useNativeDigits(): boolean;
    readonly digitMatcher: upstream2.RegExp;
    readonly localeZeroCodeUnit: number;
    readonly localeZero: string;
    readonly usesNativeDigits: boolean;
    readonly usesAsciiDigits: boolean;
    format(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    parse(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParse(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseLoose(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParseLoose(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseStrict(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParseStrict(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseUTC(inputString: string): upstream0.DateTime;
    parseUtc(inputString: string): upstream0.DateTime;
    tryParseUtc(inputString: string): upstream0.DateTime | null;
    add_d(): DateFormat;
    add_E(): DateFormat;
    add_EEEE(): DateFormat;
    add_LLL(): DateFormat;
    add_LLLL(): DateFormat;
    add_M(): DateFormat;
    add_Md(): DateFormat;
    add_MEd(): DateFormat;
    add_MMM(): DateFormat;
    add_MMMd(): DateFormat;
    add_MMMEd(): DateFormat;
    add_MMMM(): DateFormat;
    add_MMMMd(): DateFormat;
    add_MMMMEEEEd(): DateFormat;
    add_QQQ(): DateFormat;
    add_QQQQ(): DateFormat;
    add_y(): DateFormat;
    add_yM(): DateFormat;
    add_yMd(): DateFormat;
    add_yMEd(): DateFormat;
    add_yMMM(): DateFormat;
    add_yMMMd(): DateFormat;
    add_yMMMEd(): DateFormat;
    add_yMMMM(): DateFormat;
    add_yMMMMd(): DateFormat;
    add_yMMMMEEEEd(): DateFormat;
    add_yQQQ(): DateFormat;
    add_yQQQQ(): DateFormat;
    add_H(): DateFormat;
    add_Hm(): DateFormat;
    add_Hms(): DateFormat;
    add_j(): DateFormat;
    add_jm(): DateFormat;
    add_jms(): DateFormat;
    add_jmv(): DateFormat;
    add_jmz(): DateFormat;
    add_jv(): DateFormat;
    add_jz(): DateFormat;
    add_m(): DateFormat;
    add_ms(): DateFormat;
    add_s(): DateFormat;
    addPattern(inputPattern: string | null, separator?: string): DateFormat;
    set dateTimeConstructor(value: ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>));
    set useNativeDigits(value: boolean);
}
export declare function _DateFormatFactory(newPattern?: string | null, locale?: string | null): DateFormat;
export declare namespace _DateFormatFactory {
    function d(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function E(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function EEEE(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function EEEEE(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function LLL(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function LLLL(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function M(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function Md(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMM(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMMd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMMEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMMM(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMMMd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function MMMMEEEEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function QQQ(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function QQQQ(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function y(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yM(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMM(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMMd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMMEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMMM(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMMMd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yMMMMEEEEd(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yQQQ(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function yQQQQ(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function H(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function Hm(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function Hms(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function j(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jm(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jms(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jmv(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jmz(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jv(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function jz(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function m(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function ms(locale?: string | null): DateFormat;
}
export declare namespace _DateFormatFactory {
    function s(locale?: string | null): DateFormat;
}
export interface _DateFormatNative extends DateFormat {
    readonly [_flaxDartTypeValue]: _DateFormatNative;
    readonly [_flaxDartConstructors]?: {
        "": (newPattern?: string | null, locale?: string | null) => void;
        "d": (locale?: string | null) => void;
        "E": (locale?: string | null) => void;
        "EEEE": (locale?: string | null) => void;
        "EEEEE": (locale?: string | null) => void;
        "LLL": (locale?: string | null) => void;
        "LLLL": (locale?: string | null) => void;
        "M": (locale?: string | null) => void;
        "Md": (locale?: string | null) => void;
        "MEd": (locale?: string | null) => void;
        "MMM": (locale?: string | null) => void;
        "MMMd": (locale?: string | null) => void;
        "MMMEd": (locale?: string | null) => void;
        "MMMM": (locale?: string | null) => void;
        "MMMMd": (locale?: string | null) => void;
        "MMMMEEEEd": (locale?: string | null) => void;
        "QQQ": (locale?: string | null) => void;
        "QQQQ": (locale?: string | null) => void;
        "y": (locale?: string | null) => void;
        "yM": (locale?: string | null) => void;
        "yMd": (locale?: string | null) => void;
        "yMEd": (locale?: string | null) => void;
        "yMMM": (locale?: string | null) => void;
        "yMMMd": (locale?: string | null) => void;
        "yMMMEd": (locale?: string | null) => void;
        "yMMMM": (locale?: string | null) => void;
        "yMMMMd": (locale?: string | null) => void;
        "yMMMMEEEEd": (locale?: string | null) => void;
        "yQQQ": (locale?: string | null) => void;
        "yQQQQ": (locale?: string | null) => void;
        "H": (locale?: string | null) => void;
        "Hm": (locale?: string | null) => void;
        "Hms": (locale?: string | null) => void;
        "j": (locale?: string | null) => void;
        "jm": (locale?: string | null) => void;
        "jms": (locale?: string | null) => void;
        "jmv": (locale?: string | null) => void;
        "jmz": (locale?: string | null) => void;
        "jv": (locale?: string | null) => void;
        "jz": (locale?: string | null) => void;
        "m": (locale?: string | null) => void;
        "ms": (locale?: string | null) => void;
        "s": (locale?: string | null) => void;
    };
    format(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    parse(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParse(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseLoose(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParseLoose(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseStrict(inputString: string, utc?: boolean): upstream0.DateTime;
    tryParseStrict(inputString: string, utc?: boolean): upstream0.DateTime | null;
    parseUTC(inputString: string): upstream0.DateTime;
    parseUtc(inputString: string): upstream0.DateTime;
    tryParseUtc(inputString: string): upstream0.DateTime | null;
    add_d(): DateFormat;
    add_E(): DateFormat;
    add_EEEE(): DateFormat;
    add_LLL(): DateFormat;
    add_LLLL(): DateFormat;
    add_M(): DateFormat;
    add_Md(): DateFormat;
    add_MEd(): DateFormat;
    add_MMM(): DateFormat;
    add_MMMd(): DateFormat;
    add_MMMEd(): DateFormat;
    add_MMMM(): DateFormat;
    add_MMMMd(): DateFormat;
    add_MMMMEEEEd(): DateFormat;
    add_QQQ(): DateFormat;
    add_QQQQ(): DateFormat;
    add_y(): DateFormat;
    add_yM(): DateFormat;
    add_yMd(): DateFormat;
    add_yMEd(): DateFormat;
    add_yMMM(): DateFormat;
    add_yMMMd(): DateFormat;
    add_yMMMEd(): DateFormat;
    add_yMMMM(): DateFormat;
    add_yMMMMd(): DateFormat;
    add_yMMMMEEEEd(): DateFormat;
    add_yQQQ(): DateFormat;
    add_yQQQQ(): DateFormat;
    add_H(): DateFormat;
    add_Hm(): DateFormat;
    add_Hms(): DateFormat;
    add_j(): DateFormat;
    add_jm(): DateFormat;
    add_jms(): DateFormat;
    add_jmv(): DateFormat;
    add_jmz(): DateFormat;
    add_jv(): DateFormat;
    add_jz(): DateFormat;
    add_m(): DateFormat;
    add_ms(): DateFormat;
    add_s(): DateFormat;
    addPattern(inputPattern: string | null, separator?: string): DateFormat;
    get dateTimeConstructor(): ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => upstream0.DateTime);
    get dateOnly(): boolean;
    get locale(): string;
    get pattern(): string | null;
    get dateSymbols(): upstream1.DateSymbols;
    get useNativeDigits(): boolean;
    get digitMatcher(): upstream2.RegExp;
    get localeZeroCodeUnit(): number;
    get localeZero(): string;
    get usesNativeDigits(): boolean;
    get usesAsciiDigits(): boolean;
    set dateTimeConstructor(value: ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>));
    set useNativeDigits(value: boolean);
}
export declare abstract class _DateFormatNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateFormat>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DateFormat;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/dependency_intl#type:DateFormat", readonly [], false];
    constructor(newPattern?: string | null, locale?: string | null);
    constructor(call: _FlaxProxySuper<_DateFormatNative>);
}
export declare namespace _DateFormatFactory {
    function implement(args: [newPattern?: string | null, locale?: string | null], implementation: {}): DateFormat;
}
declare const _DateFormatBinding: typeof _DateFormatFactory & (new (newPattern?: string | null, locale?: string | null) => _DateFormatNative) & (new (call: _FlaxProxySuper<_DateFormatNative>) => _DateFormatNative);
export declare namespace _DateFormatFactory {
    const ABBR_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const DAY: string;
}
export declare namespace _DateFormatFactory {
    const ABBR_WEEKDAY: string;
}
export declare namespace _DateFormatFactory {
    const WEEKDAY: string;
}
export declare namespace _DateFormatFactory {
    const ABBR_STANDALONE_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const STANDALONE_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const NUM_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const NUM_MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const NUM_MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const ABBR_MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const ABBR_MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const MONTH: string;
}
export declare namespace _DateFormatFactory {
    const MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const ABBR_QUARTER: string;
}
export declare namespace _DateFormatFactory {
    const QUARTER: string;
}
export declare namespace _DateFormatFactory {
    const YEAR: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_NUM_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_NUM_MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_NUM_MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_ABBR_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_ABBR_MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_ABBR_MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_MONTH: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_MONTH_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_MONTH_WEEKDAY_DAY: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_ABBR_QUARTER: string;
}
export declare namespace _DateFormatFactory {
    const YEAR_QUARTER: string;
}
export declare namespace _DateFormatFactory {
    const HOUR24: string;
}
export declare namespace _DateFormatFactory {
    const HOUR24_MINUTE: string;
}
export declare namespace _DateFormatFactory {
    const HOUR24_MINUTE_SECOND: string;
}
export declare namespace _DateFormatFactory {
    const HOUR: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_MINUTE: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_MINUTE_SECOND: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_MINUTE_GENERIC_TZ: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_MINUTE_TZ: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_GENERIC_TZ: string;
}
export declare namespace _DateFormatFactory {
    const HOUR_TZ: string;
}
export declare namespace _DateFormatFactory {
    const MINUTE: string;
}
export declare namespace _DateFormatFactory {
    const MINUTE_SECOND: string;
}
export declare namespace _DateFormatFactory {
    const SECOND: string;
}
export declare namespace _DateFormatFactory {
    function allLocalesWithSymbols(): DartList<string>;
}
export declare namespace _DateFormatFactory {
    function shouldUseNativeDigitsByDefaultFor(locale: string): boolean;
}
export declare namespace _DateFormatFactory {
    function useNativeDigitsByDefaultFor(locale: string, value: boolean): void;
}
export declare namespace _DateFormatFactory {
    function localeExists(localeName: string | null): boolean;
}
export declare const DateFormat: typeof _DateFormatBinding & _FlaxInstanceType<DateFormat> & _FlaxDartType<DateFormat, readonly ["class", "flax.cupertino/dependency_intl#type:DateFormat", readonly [], false]>;
export {};
