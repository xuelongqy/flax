// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import type * as upstream1 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberParserBase';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberParserBase';
import { _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters3 } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NumberFormat extends Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }> { readonly __NumberFormat: unique symbol;
readonly [_flaxDartTypeValue]: NumberFormat;
readonly [_flaxDartMethodCases]?: {parseWith: _FlaxSignature0;tryParseWith: _FlaxSignature1;};
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
defineObject("flax.cupertino/dependency_intl#type:NumberFormat", ["negativePrefix","positivePrefix","negativeSuffix","positiveSuffix","maximumIntegerDigits","minimumIntegerDigits","maximumFractionDigits","minimumFractionDigits","minimumExponentDigits","maximumSignificantDigits","minimumSignificantDigitsStrict","minimumSignificantDigits","significantDigits","significantDigitsInUse","multiplier","currencyName","currencySymbol","decimalDigits","locale","symbols","localeZero"], ["maximumIntegerDigits","minimumIntegerDigits","maximumFractionDigits","minimumFractionDigits","minimumExponentDigits","maximumSignificantDigits","minimumSignificantDigitsStrict","minimumSignificantDigits","significantDigits","significantDigitsInUse","currencyName"], _flaxBindingMethods("flax.cupertino/dependency_intl#type:NumberFormat", "object", {"simpleCurrencySymbol":_flaxMemberParameters8,"format":_flaxMemberParameters9,"parse":_flaxMemberParameters10,"parseWith":_flaxMemberParameters11,"tryParse":_flaxMemberParameters10,"tryParseWith":_flaxMemberParameters11,"turnOffGrouping":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, {"parseWith":{"id":"parseWith","parameters":[{"name":"parserGenerator","required":true,"positional":true},{"name":"text","required":true,"positional":true}]},"tryParseWith":{"id":"tryParseWith","parameters":[{"name":"parserGenerator","required":true,"positional":true},{"name":"text","required":true,"positional":true}]}}), []);
export function _NumberFormatFactory(newPattern?: string | null, locale?: string | null): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
if (newPattern === undefined && (locale !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "", [{"name":"newPattern","positional":true},{"name":"locale","positional":true}], [newPattern, locale], {}) as NumberFormat;
}
export namespace _NumberFormatFactory {
export function decimalPattern(locale?: string | null): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "decimalPattern", [{"name":"locale","positional":true}], [locale], {}) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function decimalPatternDigits(options: { locale?: string | null | undefined; decimalDigits?: number | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "decimalPatternDigits", [{"name":"locale"},{"name":"decimalDigits"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function percentPattern(locale?: string | null): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "percentPattern", [{"name":"locale","positional":true}], [locale], {}) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function decimalPercentPattern(options: { locale?: string | null | undefined; decimalDigits?: number | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "decimalPercentPattern", [{"name":"locale"},{"name":"decimalDigits"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function scientificPattern(locale?: string | null): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "scientificPattern", [{"name":"locale","positional":true}], [locale], {}) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function currencyPattern(locale?: string | null, currencyNameOrSymbol?: string | null): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
if (locale === undefined && (currencyNameOrSymbol !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "currencyPattern", [{"name":"locale","positional":true},{"name":"currencyNameOrSymbol","positional":true}], [locale, currencyNameOrSymbol], {}) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function currency(options: { locale?: string | null | undefined; name?: string | null | undefined; symbol?: string | null | undefined; decimalDigits?: number | null | undefined; customPattern?: string | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "currency", [{"name":"locale"},{"name":"name"},{"name":"symbol"},{"name":"decimalDigits"},{"name":"customPattern"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function simpleCurrency(options: { locale?: string | null | undefined; name?: string | null | undefined; decimalDigits?: number | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "simpleCurrency", [{"name":"locale"},{"name":"name"},{"name":"decimalDigits"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function compact(options: { locale?: string | null | undefined; explicitSign?: boolean | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "compact", [{"name":"locale"},{"name":"explicitSign"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function compactLong(options: { locale?: string | null | undefined; explicitSign?: boolean | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "compactLong", [{"name":"locale"},{"name":"explicitSign"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function compactSimpleCurrency(options: { locale?: string | null | undefined; name?: string | null | undefined; decimalDigits?: number | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "compactSimpleCurrency", [{"name":"locale"},{"name":"name"},{"name":"decimalDigits"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory {
export function compactCurrency(options: { locale?: string | null | undefined; name?: string | null | undefined; symbol?: string | null | undefined; decimalDigits?: number | null | undefined } = {}): NumberFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:NumberFormat", "compactCurrency", [{"name":"locale"},{"name":"name"},{"name":"symbol"},{"name":"decimalDigits"}], [], options) as NumberFormat;
}
}
export namespace _NumberFormatFactory { export function localeExists(localeName: string | null): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/dependency_intl#function:NumberFormat.localeExists", [localeName]);
return _flaxResult as boolean;
} }
export namespace _NumberFormatFactory { export function numberOfIntegerDigits(number: unknown | null): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/dependency_intl#function:NumberFormat.numberOfIntegerDigits", [number]);
return _flaxResult as number;
} }
export const NumberFormat: typeof _NumberFormatFactory & _FlaxInstanceType<NumberFormat> & _FlaxDartType<NumberFormat, readonly ["class", "flax.cupertino/dependency_intl#type:NumberFormat", readonly [], false]> = _flaxBindInstanceType<NumberFormat, typeof _NumberFormatFactory>(_NumberFormatFactory, "flax.cupertino/dependency_intl#type:NumberFormat", ["dart:core::Object"]) as typeof _NumberFormatFactory & _FlaxInstanceType<NumberFormat> & _FlaxDartType<NumberFormat, readonly ["class", "flax.cupertino/dependency_intl#type:NumberFormat", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream1.NumberParserBase<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream1.NumberParserBase<_Selected0>] ? (parserGenerator: ((p0: NumberFormat, p1: string) => (_Selected1 | DartInput<_Selected1>)),text: string) => _Selected0 : never : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream1.NumberParserBase<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream1.NumberParserBase<_Selected0>] ? (parserGenerator: ((p0: NumberFormat, p1: string) => (_Selected1 | DartInput<_Selected1>)),text: string) => _Selected0 | null : never : never : never; }
