// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_DateSymbols';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_DateSymbols';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6 } from "@flax/material-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateFormat extends Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }> { readonly __DateFormat: unique symbol;
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
format(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
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
set dateTimeConstructor(value: ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>));
set useNativeDigits(value: boolean);
}
defineObject("flax.material/dependency_intl#type:DateFormat", ["dateTimeConstructor","dateOnly","locale","pattern","dateSymbols","useNativeDigits","digitMatcher","localeZeroCodeUnit","localeZero","usesNativeDigits","usesAsciiDigits"], ["dateTimeConstructor","useNativeDigits"], _flaxBindingMethods("flax.material/dependency_intl#type:DateFormat", "object", {"format":_flaxMemberParameters0,"parse":_flaxMemberParameters1,"tryParse":_flaxMemberParameters1,"parseLoose":_flaxMemberParameters1,"tryParseLoose":_flaxMemberParameters1,"parseStrict":_flaxMemberParameters1,"tryParseStrict":_flaxMemberParameters1,"parseUTC":_flaxMemberParameters2,"parseUtc":_flaxMemberParameters2,"tryParseUtc":_flaxMemberParameters2,"add_d":_flaxMemberParameters3,"add_E":_flaxMemberParameters3,"add_EEEE":_flaxMemberParameters3,"add_LLL":_flaxMemberParameters3,"add_LLLL":_flaxMemberParameters3,"add_M":_flaxMemberParameters3,"add_Md":_flaxMemberParameters3,"add_MEd":_flaxMemberParameters3,"add_MMM":_flaxMemberParameters3,"add_MMMd":_flaxMemberParameters3,"add_MMMEd":_flaxMemberParameters3,"add_MMMM":_flaxMemberParameters3,"add_MMMMd":_flaxMemberParameters3,"add_MMMMEEEEd":_flaxMemberParameters3,"add_QQQ":_flaxMemberParameters3,"add_QQQQ":_flaxMemberParameters3,"add_y":_flaxMemberParameters3,"add_yM":_flaxMemberParameters3,"add_yMd":_flaxMemberParameters3,"add_yMEd":_flaxMemberParameters3,"add_yMMM":_flaxMemberParameters3,"add_yMMMd":_flaxMemberParameters3,"add_yMMMEd":_flaxMemberParameters3,"add_yMMMM":_flaxMemberParameters3,"add_yMMMMd":_flaxMemberParameters3,"add_yMMMMEEEEd":_flaxMemberParameters3,"add_yQQQ":_flaxMemberParameters3,"add_yQQQQ":_flaxMemberParameters3,"add_H":_flaxMemberParameters3,"add_Hm":_flaxMemberParameters3,"add_Hms":_flaxMemberParameters3,"add_j":_flaxMemberParameters3,"add_jm":_flaxMemberParameters3,"add_jms":_flaxMemberParameters3,"add_jmv":_flaxMemberParameters3,"add_jmz":_flaxMemberParameters3,"add_jv":_flaxMemberParameters3,"add_jz":_flaxMemberParameters3,"add_m":_flaxMemberParameters3,"add_ms":_flaxMemberParameters3,"add_s":_flaxMemberParameters3,"addPattern":_flaxMemberParameters4}, {}), []);
export function _DateFormatFactory(newPattern?: string | null, locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
if (newPattern === undefined && (locale !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "", [{"name":"newPattern","positional":true},{"name":"locale","positional":true}], [newPattern, locale], {}) as DateFormat;
}
export namespace _DateFormatFactory {
export function d(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "d", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function E(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "E", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function EEEE(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "EEEE", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function EEEEE(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "EEEEE", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function LLL(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "LLL", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function LLLL(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "LLLL", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function M(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "M", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function Md(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "Md", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMM(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMM", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMMd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMMd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMMEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMMEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMMM(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMMM", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMMMd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMMMd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function MMMMEEEEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "MMMMEEEEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function QQQ(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "QQQ", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function QQQQ(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "QQQQ", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function y(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "y", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yM(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yM", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMM(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMM", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMMd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMMd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMMEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMMEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMMM(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMMM", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMMMd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMMMd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yMMMMEEEEd(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yMMMMEEEEd", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yQQQ(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yQQQ", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function yQQQQ(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "yQQQQ", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function H(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "H", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function Hm(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "Hm", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function Hms(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "Hms", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function j(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "j", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jm(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jm", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jms(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jms", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jmv(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jmv", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jmz(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jmz", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jv(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jv", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function jz(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "jz", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function m(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "m", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function ms(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "ms", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
export namespace _DateFormatFactory {
export function s(locale?: string | null): DateFormat {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:DateFormat", "s", [{"name":"locale","positional":true}], [locale], {}) as DateFormat;
}
}
const _DateFormatProxy = {type: "flax.material/dependency_intl#type:DateFormat", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5,"d": _flaxMemberParameters6,"E": _flaxMemberParameters6,"EEEE": _flaxMemberParameters6,"EEEEE": _flaxMemberParameters6,"LLL": _flaxMemberParameters6,"LLLL": _flaxMemberParameters6,"M": _flaxMemberParameters6,"Md": _flaxMemberParameters6,"MEd": _flaxMemberParameters6,"MMM": _flaxMemberParameters6,"MMMd": _flaxMemberParameters6,"MMMEd": _flaxMemberParameters6,"MMMM": _flaxMemberParameters6,"MMMMd": _flaxMemberParameters6,"MMMMEEEEd": _flaxMemberParameters6,"QQQ": _flaxMemberParameters6,"QQQQ": _flaxMemberParameters6,"y": _flaxMemberParameters6,"yM": _flaxMemberParameters6,"yMd": _flaxMemberParameters6,"yMEd": _flaxMemberParameters6,"yMMM": _flaxMemberParameters6,"yMMMd": _flaxMemberParameters6,"yMMMEd": _flaxMemberParameters6,"yMMMM": _flaxMemberParameters6,"yMMMMd": _flaxMemberParameters6,"yMMMMEEEEd": _flaxMemberParameters6,"yQQQ": _flaxMemberParameters6,"yQQQQ": _flaxMemberParameters6,"H": _flaxMemberParameters6,"Hm": _flaxMemberParameters6,"Hms": _flaxMemberParameters6,"j": _flaxMemberParameters6,"jm": _flaxMemberParameters6,"jms": _flaxMemberParameters6,"jmv": _flaxMemberParameters6,"jmz": _flaxMemberParameters6,"jv": _flaxMemberParameters6,"jz": _flaxMemberParameters6,"m": _flaxMemberParameters6,"ms": _flaxMemberParameters6,"s": _flaxMemberParameters6}, methods: {"format":_flaxMemberParameters0,"parse":_flaxMemberParameters1,"tryParse":_flaxMemberParameters1,"parseLoose":_flaxMemberParameters1,"tryParseLoose":_flaxMemberParameters1,"parseStrict":_flaxMemberParameters1,"tryParseStrict":_flaxMemberParameters1,"parseUTC":_flaxMemberParameters2,"parseUtc":_flaxMemberParameters2,"tryParseUtc":_flaxMemberParameters2,"add_d":_flaxMemberParameters3,"add_E":_flaxMemberParameters3,"add_EEEE":_flaxMemberParameters3,"add_LLL":_flaxMemberParameters3,"add_LLLL":_flaxMemberParameters3,"add_M":_flaxMemberParameters3,"add_Md":_flaxMemberParameters3,"add_MEd":_flaxMemberParameters3,"add_MMM":_flaxMemberParameters3,"add_MMMd":_flaxMemberParameters3,"add_MMMEd":_flaxMemberParameters3,"add_MMMM":_flaxMemberParameters3,"add_MMMMd":_flaxMemberParameters3,"add_MMMMEEEEd":_flaxMemberParameters3,"add_QQQ":_flaxMemberParameters3,"add_QQQQ":_flaxMemberParameters3,"add_y":_flaxMemberParameters3,"add_yM":_flaxMemberParameters3,"add_yMd":_flaxMemberParameters3,"add_yMEd":_flaxMemberParameters3,"add_yMMM":_flaxMemberParameters3,"add_yMMMd":_flaxMemberParameters3,"add_yMMMEd":_flaxMemberParameters3,"add_yMMMM":_flaxMemberParameters3,"add_yMMMMd":_flaxMemberParameters3,"add_yMMMMEEEEd":_flaxMemberParameters3,"add_yQQQ":_flaxMemberParameters3,"add_yQQQQ":_flaxMemberParameters3,"add_H":_flaxMemberParameters3,"add_Hm":_flaxMemberParameters3,"add_Hms":_flaxMemberParameters3,"add_j":_flaxMemberParameters3,"add_jm":_flaxMemberParameters3,"add_jms":_flaxMemberParameters3,"add_jmv":_flaxMemberParameters3,"add_jmz":_flaxMemberParameters3,"add_jv":_flaxMemberParameters3,"add_jz":_flaxMemberParameters3,"add_m":_flaxMemberParameters3,"add_ms":_flaxMemberParameters3,"add_s":_flaxMemberParameters3,"addPattern":_flaxMemberParameters4}, getters: ["dateTimeConstructor","dateOnly","locale","pattern","dateSymbols","useNativeDigits","digitMatcher","localeZeroCodeUnit","localeZero","usesNativeDigits","usesAsciiDigits"], setters: ["dateTimeConstructor","useNativeDigits"], contextMembers: [], superMembers: ["get:dateTimeConstructor","get:dateOnly","get:locale","get:pattern","get:dateSymbols","get:useNativeDigits","get:digitMatcher","get:localeZeroCodeUnit","get:localeZero","get:usesNativeDigits","get:usesAsciiDigits","set:dateTimeConstructor","set:useNativeDigits","format","parse","tryParse","parseLoose","tryParseLoose","parseStrict","tryParseStrict","parseUTC","parseUtc","tryParseUtc","add_d","add_E","add_EEEE","add_LLL","add_LLLL","add_M","add_Md","add_MEd","add_MMM","add_MMMd","add_MMMEd","add_MMMM","add_MMMMd","add_MMMMEEEEd","add_QQQ","add_QQQQ","add_y","add_yM","add_yMd","add_yMEd","add_yMMM","add_yMMMd","add_yMMMEd","add_yMMMM","add_yMMMMd","add_yMMMMEEEEd","add_yQQQ","add_yQQQQ","add_H","add_Hm","add_Hms","add_j","add_jm","add_jms","add_jmv","add_jmz","add_jv","add_jz","add_m","add_ms","add_s","addPattern"]} as const;
export interface _DateFormatNative extends DateFormat {
readonly [_flaxDartTypeValue]: _DateFormatNative;
readonly [_flaxDartConstructors]?: {"": (newPattern?: string | null, locale?: string | null) => void;"d": (locale?: string | null) => void;"E": (locale?: string | null) => void;"EEEE": (locale?: string | null) => void;"EEEEE": (locale?: string | null) => void;"LLL": (locale?: string | null) => void;"LLLL": (locale?: string | null) => void;"M": (locale?: string | null) => void;"Md": (locale?: string | null) => void;"MEd": (locale?: string | null) => void;"MMM": (locale?: string | null) => void;"MMMd": (locale?: string | null) => void;"MMMEd": (locale?: string | null) => void;"MMMM": (locale?: string | null) => void;"MMMMd": (locale?: string | null) => void;"MMMMEEEEd": (locale?: string | null) => void;"QQQ": (locale?: string | null) => void;"QQQQ": (locale?: string | null) => void;"y": (locale?: string | null) => void;"yM": (locale?: string | null) => void;"yMd": (locale?: string | null) => void;"yMEd": (locale?: string | null) => void;"yMMM": (locale?: string | null) => void;"yMMMd": (locale?: string | null) => void;"yMMMEd": (locale?: string | null) => void;"yMMMM": (locale?: string | null) => void;"yMMMMd": (locale?: string | null) => void;"yMMMMEEEEd": (locale?: string | null) => void;"yQQQ": (locale?: string | null) => void;"yQQQQ": (locale?: string | null) => void;"H": (locale?: string | null) => void;"Hm": (locale?: string | null) => void;"Hms": (locale?: string | null) => void;"j": (locale?: string | null) => void;"jm": (locale?: string | null) => void;"jms": (locale?: string | null) => void;"jmv": (locale?: string | null) => void;"jmz": (locale?: string | null) => void;"jv": (locale?: string | null) => void;"jz": (locale?: string | null) => void;"m": (locale?: string | null) => void;"ms": (locale?: string | null) => void;"s": (locale?: string | null) => void;};

format(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
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
set dateTimeConstructor(value: ((year: number, month: number, day: number, hour24: number, minute: number, second: number, fractionalSecond: number, utc: boolean) => DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>));
set useNativeDigits(value: boolean);
}
export abstract class _DateFormatNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateFormat>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DateFormat;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/dependency_intl#type:DateFormat", readonly [], false];
constructor(newPattern?: string | null, locale?: string | null); constructor(call: _FlaxProxySuper<_DateFormatNative>); constructor(...args: unknown[]) { super(_DateFormatProxy, args); }
}
_flaxDefineProxyBase(_DateFormatNative.prototype, _DateFormatProxy);
export namespace _DateFormatFactory { export function implement(args: [newPattern?: string | null, locale?: string | null], implementation: {}): DateFormat {
return constructProxy(_DateFormatProxy, args, implementation) as DateFormat; } }
const _DateFormatBinding = _flaxProxyFactory(_DateFormatFactory, _DateFormatNative) as unknown as typeof _DateFormatFactory & (new(newPattern?: string | null, locale?: string | null) => _DateFormatNative) & (new(call: _FlaxProxySuper<_DateFormatNative>) => _DateFormatNative);
export namespace _DateFormatFactory { export declare const ABBR_MONTH: string; }
export namespace _DateFormatFactory { export declare const DAY: string; }
export namespace _DateFormatFactory { export declare const ABBR_WEEKDAY: string; }
export namespace _DateFormatFactory { export declare const WEEKDAY: string; }
export namespace _DateFormatFactory { export declare const ABBR_STANDALONE_MONTH: string; }
export namespace _DateFormatFactory { export declare const STANDALONE_MONTH: string; }
export namespace _DateFormatFactory { export declare const NUM_MONTH: string; }
export namespace _DateFormatFactory { export declare const NUM_MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const NUM_MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const ABBR_MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const ABBR_MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const MONTH: string; }
export namespace _DateFormatFactory { export declare const MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const ABBR_QUARTER: string; }
export namespace _DateFormatFactory { export declare const QUARTER: string; }
export namespace _DateFormatFactory { export declare const YEAR: string; }
export namespace _DateFormatFactory { export declare const YEAR_NUM_MONTH: string; }
export namespace _DateFormatFactory { export declare const YEAR_NUM_MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_NUM_MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_ABBR_MONTH: string; }
export namespace _DateFormatFactory { export declare const YEAR_ABBR_MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_ABBR_MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_MONTH: string; }
export namespace _DateFormatFactory { export declare const YEAR_MONTH_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_MONTH_WEEKDAY_DAY: string; }
export namespace _DateFormatFactory { export declare const YEAR_ABBR_QUARTER: string; }
export namespace _DateFormatFactory { export declare const YEAR_QUARTER: string; }
export namespace _DateFormatFactory { export declare const HOUR24: string; }
export namespace _DateFormatFactory { export declare const HOUR24_MINUTE: string; }
export namespace _DateFormatFactory { export declare const HOUR24_MINUTE_SECOND: string; }
export namespace _DateFormatFactory { export declare const HOUR: string; }
export namespace _DateFormatFactory { export declare const HOUR_MINUTE: string; }
export namespace _DateFormatFactory { export declare const HOUR_MINUTE_SECOND: string; }
export namespace _DateFormatFactory { export declare const HOUR_MINUTE_GENERIC_TZ: string; }
export namespace _DateFormatFactory { export declare const HOUR_MINUTE_TZ: string; }
export namespace _DateFormatFactory { export declare const HOUR_GENERIC_TZ: string; }
export namespace _DateFormatFactory { export declare const HOUR_TZ: string; }
export namespace _DateFormatFactory { export declare const MINUTE: string; }
export namespace _DateFormatFactory { export declare const MINUTE_SECOND: string; }
export namespace _DateFormatFactory { export declare const SECOND: string; }
_flaxDefineStaticGetters(_DateFormatFactory, "flax.material/dependency_intl#read:DateFormat.", ["ABBR_MONTH","DAY","ABBR_WEEKDAY","WEEKDAY","ABBR_STANDALONE_MONTH","STANDALONE_MONTH","NUM_MONTH","NUM_MONTH_DAY","NUM_MONTH_WEEKDAY_DAY","ABBR_MONTH_DAY","ABBR_MONTH_WEEKDAY_DAY","MONTH","MONTH_DAY","MONTH_WEEKDAY_DAY","ABBR_QUARTER","QUARTER","YEAR","YEAR_NUM_MONTH","YEAR_NUM_MONTH_DAY","YEAR_NUM_MONTH_WEEKDAY_DAY","YEAR_ABBR_MONTH","YEAR_ABBR_MONTH_DAY","YEAR_ABBR_MONTH_WEEKDAY_DAY","YEAR_MONTH","YEAR_MONTH_DAY","YEAR_MONTH_WEEKDAY_DAY","YEAR_ABBR_QUARTER","YEAR_QUARTER","HOUR24","HOUR24_MINUTE","HOUR24_MINUTE_SECOND","HOUR","HOUR_MINUTE","HOUR_MINUTE_SECOND","HOUR_MINUTE_GENERIC_TZ","HOUR_MINUTE_TZ","HOUR_GENERIC_TZ","HOUR_TZ","MINUTE","MINUTE_SECOND","SECOND"]);
export namespace _DateFormatFactory { export function allLocalesWithSymbols(): DartList<string> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/dependency_intl#function:DateFormat.allLocalesWithSymbols", []);
return _flaxResult as DartList<string>;
} }
export namespace _DateFormatFactory { export function shouldUseNativeDigitsByDefaultFor(locale: string): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/dependency_intl#function:DateFormat.shouldUseNativeDigitsByDefaultFor", [locale]);
return _flaxResult as boolean;
} }
export namespace _DateFormatFactory { export function useNativeDigitsByDefaultFor(locale: string, value: boolean): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/dependency_intl#function:DateFormat.useNativeDigitsByDefaultFor", [locale, value]);
} }
export namespace _DateFormatFactory { export function localeExists(localeName: string | null): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/dependency_intl#function:DateFormat.localeExists", [localeName]);
return _flaxResult as boolean;
} }
export const DateFormat: typeof _DateFormatBinding & _FlaxInstanceType<DateFormat> & _FlaxDartType<DateFormat, readonly ["class", "flax.material/dependency_intl#type:DateFormat", readonly [], false]> = _flaxBindInstanceType<DateFormat, typeof _DateFormatBinding>(_DateFormatBinding, "flax.material/dependency_intl#type:DateFormat", ["dart:core::Object"]) as typeof _DateFormatBinding & _FlaxInstanceType<DateFormat> & _FlaxDartType<DateFormat, readonly ["class", "flax.material/dependency_intl#type:DateFormat", readonly [], false]>;
