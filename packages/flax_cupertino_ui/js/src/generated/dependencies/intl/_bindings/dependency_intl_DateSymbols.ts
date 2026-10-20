// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters3, _flaxMemberParameters7 } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateSymbols extends Readonly<{ "__flaxBound:package:intl/date_symbols.dart::DateSymbols": readonly [] }> { readonly __DateSymbols: unique symbol;
readonly [_flaxDartTypeValue]: DateSymbols;

get NAME(): string;
get ERAS(): DartList<string>;
get ERANAMES(): DartList<string>;
get NARROWMONTHS(): DartList<string>;
get STANDALONENARROWMONTHS(): DartList<string>;
get MONTHS(): DartList<string>;
get STANDALONEMONTHS(): DartList<string>;
get SHORTMONTHS(): DartList<string>;
get STANDALONESHORTMONTHS(): DartList<string>;
get WEEKDAYS(): DartList<string>;
get STANDALONEWEEKDAYS(): DartList<string>;
get SHORTWEEKDAYS(): DartList<string>;
get STANDALONESHORTWEEKDAYS(): DartList<string>;
get NARROWWEEKDAYS(): DartList<string>;
get STANDALONENARROWWEEKDAYS(): DartList<string>;
get SHORTQUARTERS(): DartList<string>;
get QUARTERS(): DartList<string>;
get AMPMS(): DartList<string>;
get DATEFORMATS(): DartList<string>;
get TIMEFORMATS(): DartList<string>;
get DATETIMEFORMATS(): DartList<string>;
get AVAILABLEFORMATS(): DartMap<string, string> | null;
get FIRSTDAYOFWEEK(): number;
get WEEKENDRANGE(): DartList<number>;
get FIRSTWEEKCUTOFFDAY(): number;
get ZERODIGIT(): string | null;
serializeToMap(): DartMap<string, unknown | null>;
toString(): string;
set NAME(value: string);
set ERAS(value: DartListInput<string, string>);
set ERANAMES(value: DartListInput<string, string>);
set NARROWMONTHS(value: DartListInput<string, string>);
set STANDALONENARROWMONTHS(value: DartListInput<string, string>);
set MONTHS(value: DartListInput<string, string>);
set STANDALONEMONTHS(value: DartListInput<string, string>);
set SHORTMONTHS(value: DartListInput<string, string>);
set STANDALONESHORTMONTHS(value: DartListInput<string, string>);
set WEEKDAYS(value: DartListInput<string, string>);
set STANDALONEWEEKDAYS(value: DartListInput<string, string>);
set SHORTWEEKDAYS(value: DartListInput<string, string>);
set STANDALONESHORTWEEKDAYS(value: DartListInput<string, string>);
set NARROWWEEKDAYS(value: DartListInput<string, string>);
set STANDALONENARROWWEEKDAYS(value: DartListInput<string, string>);
set SHORTQUARTERS(value: DartListInput<string, string>);
set QUARTERS(value: DartListInput<string, string>);
set AMPMS(value: DartListInput<string, string>);
set DATEFORMATS(value: DartListInput<string, string>);
set TIMEFORMATS(value: DartListInput<string, string>);
set DATETIMEFORMATS(value: DartListInput<string, string>);
set AVAILABLEFORMATS(value: DartMapInput<string, string, string, string> | null);
set FIRSTDAYOFWEEK(value: number);
set WEEKENDRANGE(value: DartListInput<number, number>);
set FIRSTWEEKCUTOFFDAY(value: number);
set ZERODIGIT(value: string | null);
}
defineObject("flax.cupertino/dependency_intl#type:DateSymbols", ["NAME","ERAS","ERANAMES","NARROWMONTHS","STANDALONENARROWMONTHS","MONTHS","STANDALONEMONTHS","SHORTMONTHS","STANDALONESHORTMONTHS","WEEKDAYS","STANDALONEWEEKDAYS","SHORTWEEKDAYS","STANDALONESHORTWEEKDAYS","NARROWWEEKDAYS","STANDALONENARROWWEEKDAYS","SHORTQUARTERS","QUARTERS","AMPMS","DATEFORMATS","TIMEFORMATS","DATETIMEFORMATS","AVAILABLEFORMATS","FIRSTDAYOFWEEK","WEEKENDRANGE","FIRSTWEEKCUTOFFDAY","ZERODIGIT"], ["NAME","ERAS","ERANAMES","NARROWMONTHS","STANDALONENARROWMONTHS","MONTHS","STANDALONEMONTHS","SHORTMONTHS","STANDALONESHORTMONTHS","WEEKDAYS","STANDALONEWEEKDAYS","SHORTWEEKDAYS","STANDALONESHORTWEEKDAYS","NARROWWEEKDAYS","STANDALONENARROWWEEKDAYS","SHORTQUARTERS","QUARTERS","AMPMS","DATEFORMATS","TIMEFORMATS","DATETIMEFORMATS","AVAILABLEFORMATS","FIRSTDAYOFWEEK","WEEKENDRANGE","FIRSTWEEKCUTOFFDAY","ZERODIGIT"], _flaxBindingMethods("flax.cupertino/dependency_intl#type:DateSymbols", "object", {"serializeToMap":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, {}), []);
export function _DateSymbolsFactory(options: { NAME: string; ERAS: DartListInput<string, string>; ERANAMES: DartListInput<string, string>; NARROWMONTHS: DartListInput<string, string>; STANDALONENARROWMONTHS: DartListInput<string, string>; MONTHS: DartListInput<string, string>; STANDALONEMONTHS: DartListInput<string, string>; SHORTMONTHS: DartListInput<string, string>; STANDALONESHORTMONTHS: DartListInput<string, string>; WEEKDAYS: DartListInput<string, string>; STANDALONEWEEKDAYS: DartListInput<string, string>; SHORTWEEKDAYS: DartListInput<string, string>; STANDALONESHORTWEEKDAYS: DartListInput<string, string>; NARROWWEEKDAYS: DartListInput<string, string>; STANDALONENARROWWEEKDAYS: DartListInput<string, string>; SHORTQUARTERS: DartListInput<string, string>; QUARTERS: DartListInput<string, string>; AMPMS: DartListInput<string, string>; ZERODIGIT?: string | null | undefined; DATEFORMATS: DartListInput<string, string>; TIMEFORMATS: DartListInput<string, string>; AVAILABLEFORMATS?: DartMapInput<string, string, string, string> | null | undefined; FIRSTDAYOFWEEK: number; WEEKENDRANGE: DartListInput<number, number>; FIRSTWEEKCUTOFFDAY: number; DATETIMEFORMATS: DartListInput<string, string> }): DateSymbols {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:DateSymbols", "", [{"name":"NAME","required":true},{"name":"ERAS","required":true},{"name":"ERANAMES","required":true},{"name":"NARROWMONTHS","required":true},{"name":"STANDALONENARROWMONTHS","required":true},{"name":"MONTHS","required":true},{"name":"STANDALONEMONTHS","required":true},{"name":"SHORTMONTHS","required":true},{"name":"STANDALONESHORTMONTHS","required":true},{"name":"WEEKDAYS","required":true},{"name":"STANDALONEWEEKDAYS","required":true},{"name":"SHORTWEEKDAYS","required":true},{"name":"STANDALONESHORTWEEKDAYS","required":true},{"name":"NARROWWEEKDAYS","required":true},{"name":"STANDALONENARROWWEEKDAYS","required":true},{"name":"SHORTQUARTERS","required":true},{"name":"QUARTERS","required":true},{"name":"AMPMS","required":true},{"name":"ZERODIGIT"},{"name":"DATEFORMATS","required":true},{"name":"TIMEFORMATS","required":true},{"name":"AVAILABLEFORMATS"},{"name":"FIRSTDAYOFWEEK","required":true},{"name":"WEEKENDRANGE","required":true},{"name":"FIRSTWEEKCUTOFFDAY","required":true},{"name":"DATETIMEFORMATS","required":true}], [], options) as DateSymbols;
}
export namespace _DateSymbolsFactory {
export function deserializeFromMap(map: DartMapInput<unknown | null, unknown | null, unknown | null, unknown | null>): DateSymbols {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/dependency_intl#type:DateSymbols", "deserializeFromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as DateSymbols;
}
}
const _DateSymbolsProxy = {type: "flax.cupertino/dependency_intl#type:DateSymbols", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"serializeToMap":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, getters: ["NAME","ERAS","ERANAMES","NARROWMONTHS","STANDALONENARROWMONTHS","MONTHS","STANDALONEMONTHS","SHORTMONTHS","STANDALONESHORTMONTHS","WEEKDAYS","STANDALONEWEEKDAYS","SHORTWEEKDAYS","STANDALONESHORTWEEKDAYS","NARROWWEEKDAYS","STANDALONENARROWWEEKDAYS","SHORTQUARTERS","QUARTERS","AMPMS","DATEFORMATS","TIMEFORMATS","DATETIMEFORMATS","AVAILABLEFORMATS","FIRSTDAYOFWEEK","WEEKENDRANGE","FIRSTWEEKCUTOFFDAY","ZERODIGIT"], setters: ["NAME","ERAS","ERANAMES","NARROWMONTHS","STANDALONENARROWMONTHS","MONTHS","STANDALONEMONTHS","SHORTMONTHS","STANDALONESHORTMONTHS","WEEKDAYS","STANDALONEWEEKDAYS","SHORTWEEKDAYS","STANDALONESHORTWEEKDAYS","NARROWWEEKDAYS","STANDALONENARROWWEEKDAYS","SHORTQUARTERS","QUARTERS","AMPMS","DATEFORMATS","TIMEFORMATS","DATETIMEFORMATS","AVAILABLEFORMATS","FIRSTDAYOFWEEK","WEEKENDRANGE","FIRSTWEEKCUTOFFDAY","ZERODIGIT"], contextMembers: [], superMembers: ["get:NAME","get:ERAS","get:ERANAMES","get:NARROWMONTHS","get:STANDALONENARROWMONTHS","get:MONTHS","get:STANDALONEMONTHS","get:SHORTMONTHS","get:STANDALONESHORTMONTHS","get:WEEKDAYS","get:STANDALONEWEEKDAYS","get:SHORTWEEKDAYS","get:STANDALONESHORTWEEKDAYS","get:NARROWWEEKDAYS","get:STANDALONENARROWWEEKDAYS","get:SHORTQUARTERS","get:QUARTERS","get:AMPMS","get:DATEFORMATS","get:TIMEFORMATS","get:DATETIMEFORMATS","get:AVAILABLEFORMATS","get:FIRSTDAYOFWEEK","get:WEEKENDRANGE","get:FIRSTWEEKCUTOFFDAY","get:ZERODIGIT","set:NAME","set:ERAS","set:ERANAMES","set:NARROWMONTHS","set:STANDALONENARROWMONTHS","set:MONTHS","set:STANDALONEMONTHS","set:SHORTMONTHS","set:STANDALONESHORTMONTHS","set:WEEKDAYS","set:STANDALONEWEEKDAYS","set:SHORTWEEKDAYS","set:STANDALONESHORTWEEKDAYS","set:NARROWWEEKDAYS","set:STANDALONENARROWWEEKDAYS","set:SHORTQUARTERS","set:QUARTERS","set:AMPMS","set:DATEFORMATS","set:TIMEFORMATS","set:DATETIMEFORMATS","set:AVAILABLEFORMATS","set:FIRSTDAYOFWEEK","set:WEEKENDRANGE","set:FIRSTWEEKCUTOFFDAY","set:ZERODIGIT","serializeToMap","toString"]} as const;
export interface _DateSymbolsNative extends DateSymbols {
readonly [_flaxDartTypeValue]: _DateSymbolsNative;

serializeToMap(): DartMap<string, unknown | null>;
toString(): string;
get NAME(): string;
get ERAS(): DartList<string>;
get ERANAMES(): DartList<string>;
get NARROWMONTHS(): DartList<string>;
get STANDALONENARROWMONTHS(): DartList<string>;
get MONTHS(): DartList<string>;
get STANDALONEMONTHS(): DartList<string>;
get SHORTMONTHS(): DartList<string>;
get STANDALONESHORTMONTHS(): DartList<string>;
get WEEKDAYS(): DartList<string>;
get STANDALONEWEEKDAYS(): DartList<string>;
get SHORTWEEKDAYS(): DartList<string>;
get STANDALONESHORTWEEKDAYS(): DartList<string>;
get NARROWWEEKDAYS(): DartList<string>;
get STANDALONENARROWWEEKDAYS(): DartList<string>;
get SHORTQUARTERS(): DartList<string>;
get QUARTERS(): DartList<string>;
get AMPMS(): DartList<string>;
get DATEFORMATS(): DartList<string>;
get TIMEFORMATS(): DartList<string>;
get DATETIMEFORMATS(): DartList<string>;
get AVAILABLEFORMATS(): DartMap<string, string> | null;
get FIRSTDAYOFWEEK(): number;
get WEEKENDRANGE(): DartList<number>;
get FIRSTWEEKCUTOFFDAY(): number;
get ZERODIGIT(): string | null;
set NAME(value: string);
set ERAS(value: DartListInput<string, string>);
set ERANAMES(value: DartListInput<string, string>);
set NARROWMONTHS(value: DartListInput<string, string>);
set STANDALONENARROWMONTHS(value: DartListInput<string, string>);
set MONTHS(value: DartListInput<string, string>);
set STANDALONEMONTHS(value: DartListInput<string, string>);
set SHORTMONTHS(value: DartListInput<string, string>);
set STANDALONESHORTMONTHS(value: DartListInput<string, string>);
set WEEKDAYS(value: DartListInput<string, string>);
set STANDALONEWEEKDAYS(value: DartListInput<string, string>);
set SHORTWEEKDAYS(value: DartListInput<string, string>);
set STANDALONESHORTWEEKDAYS(value: DartListInput<string, string>);
set NARROWWEEKDAYS(value: DartListInput<string, string>);
set STANDALONENARROWWEEKDAYS(value: DartListInput<string, string>);
set SHORTQUARTERS(value: DartListInput<string, string>);
set QUARTERS(value: DartListInput<string, string>);
set AMPMS(value: DartListInput<string, string>);
set DATEFORMATS(value: DartListInput<string, string>);
set TIMEFORMATS(value: DartListInput<string, string>);
set DATETIMEFORMATS(value: DartListInput<string, string>);
set AVAILABLEFORMATS(value: DartMapInput<string, string, string, string> | null);
set FIRSTDAYOFWEEK(value: number);
set WEEKENDRANGE(value: DartListInput<number, number>);
set FIRSTWEEKCUTOFFDAY(value: number);
set ZERODIGIT(value: string | null);
}
export abstract class _DateSymbolsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateSymbols>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DateSymbols;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/dependency_intl#type:DateSymbols", readonly [], false];
constructor(options: {NAME: string; ERAS: DartListInput<string, string>; ERANAMES: DartListInput<string, string>; NARROWMONTHS: DartListInput<string, string>; STANDALONENARROWMONTHS: DartListInput<string, string>; MONTHS: DartListInput<string, string>; STANDALONEMONTHS: DartListInput<string, string>; SHORTMONTHS: DartListInput<string, string>; STANDALONESHORTMONTHS: DartListInput<string, string>; WEEKDAYS: DartListInput<string, string>; STANDALONEWEEKDAYS: DartListInput<string, string>; SHORTWEEKDAYS: DartListInput<string, string>; STANDALONESHORTWEEKDAYS: DartListInput<string, string>; NARROWWEEKDAYS: DartListInput<string, string>; STANDALONENARROWWEEKDAYS: DartListInput<string, string>; SHORTQUARTERS: DartListInput<string, string>; QUARTERS: DartListInput<string, string>; AMPMS: DartListInput<string, string>; ZERODIGIT?: string | null | undefined; DATEFORMATS: DartListInput<string, string>; TIMEFORMATS: DartListInput<string, string>; AVAILABLEFORMATS?: DartMapInput<string, string, string, string> | null | undefined; FIRSTDAYOFWEEK: number; WEEKENDRANGE: DartListInput<number, number>; FIRSTWEEKCUTOFFDAY: number; DATETIMEFORMATS: DartListInput<string, string>}) { super(_DateSymbolsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DateSymbolsNative.prototype, _DateSymbolsProxy);
export namespace _DateSymbolsFactory { export function implement(args: [options: {NAME: string; ERAS: DartListInput<string, string>; ERANAMES: DartListInput<string, string>; NARROWMONTHS: DartListInput<string, string>; STANDALONENARROWMONTHS: DartListInput<string, string>; MONTHS: DartListInput<string, string>; STANDALONEMONTHS: DartListInput<string, string>; SHORTMONTHS: DartListInput<string, string>; STANDALONESHORTMONTHS: DartListInput<string, string>; WEEKDAYS: DartListInput<string, string>; STANDALONEWEEKDAYS: DartListInput<string, string>; SHORTWEEKDAYS: DartListInput<string, string>; STANDALONESHORTWEEKDAYS: DartListInput<string, string>; NARROWWEEKDAYS: DartListInput<string, string>; STANDALONENARROWWEEKDAYS: DartListInput<string, string>; SHORTQUARTERS: DartListInput<string, string>; QUARTERS: DartListInput<string, string>; AMPMS: DartListInput<string, string>; ZERODIGIT?: string | null | undefined; DATEFORMATS: DartListInput<string, string>; TIMEFORMATS: DartListInput<string, string>; AVAILABLEFORMATS?: DartMapInput<string, string, string, string> | null | undefined; FIRSTDAYOFWEEK: number; WEEKENDRANGE: DartListInput<number, number>; FIRSTWEEKCUTOFFDAY: number; DATETIMEFORMATS: DartListInput<string, string>}], implementation: {}): DateSymbols {
return constructProxy(_DateSymbolsProxy, args, implementation) as DateSymbols; } }
const _DateSymbolsBinding = _flaxProxyFactory(_DateSymbolsFactory, _DateSymbolsNative) as unknown as typeof _DateSymbolsFactory & (new(options: {NAME: string; ERAS: DartListInput<string, string>; ERANAMES: DartListInput<string, string>; NARROWMONTHS: DartListInput<string, string>; STANDALONENARROWMONTHS: DartListInput<string, string>; MONTHS: DartListInput<string, string>; STANDALONEMONTHS: DartListInput<string, string>; SHORTMONTHS: DartListInput<string, string>; STANDALONESHORTMONTHS: DartListInput<string, string>; WEEKDAYS: DartListInput<string, string>; STANDALONEWEEKDAYS: DartListInput<string, string>; SHORTWEEKDAYS: DartListInput<string, string>; STANDALONESHORTWEEKDAYS: DartListInput<string, string>; NARROWWEEKDAYS: DartListInput<string, string>; STANDALONENARROWWEEKDAYS: DartListInput<string, string>; SHORTQUARTERS: DartListInput<string, string>; QUARTERS: DartListInput<string, string>; AMPMS: DartListInput<string, string>; ZERODIGIT?: string | null | undefined; DATEFORMATS: DartListInput<string, string>; TIMEFORMATS: DartListInput<string, string>; AVAILABLEFORMATS?: DartMapInput<string, string, string, string> | null | undefined; FIRSTDAYOFWEEK: number; WEEKENDRANGE: DartListInput<number, number>; FIRSTWEEKCUTOFFDAY: number; DATETIMEFORMATS: DartListInput<string, string>}) => _DateSymbolsNative);
export const DateSymbols: typeof _DateSymbolsBinding & _FlaxInstanceType<DateSymbols> & _FlaxDartType<DateSymbols, readonly ["class", "flax.cupertino/dependency_intl#type:DateSymbols", readonly [], false]> = _flaxBindInstanceType<DateSymbols, typeof _DateSymbolsBinding>(_DateSymbolsBinding, "flax.cupertino/dependency_intl#type:DateSymbols", ["dart:core::Object"]) as typeof _DateSymbolsBinding & _FlaxInstanceType<DateSymbols> & _FlaxDartType<DateSymbols, readonly ["class", "flax.cupertino/dependency_intl#type:DateSymbols", readonly [], false]>;
