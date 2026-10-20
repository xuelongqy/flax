// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters3, _flaxMemberParameters17 } from "@flax/material-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NumberSymbols extends Readonly<{ "__flaxBound:package:intl/number_symbols.dart::NumberSymbols": readonly [] }> { readonly __NumberSymbols: unique symbol;
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
defineObject("flax.material/dependency_intl#type:NumberSymbols", ["NAME","DECIMAL_SEP","GROUP_SEP","PERCENT","ZERO_DIGIT","PLUS_SIGN","MINUS_SIGN","EXP_SYMBOL","PERMILL","INFINITY","NAN","DECIMAL_PATTERN","SCIENTIFIC_PATTERN","PERCENT_PATTERN","CURRENCY_PATTERN","DEF_CURRENCY_CODE"], [], _flaxBindingMethods("flax.material/dependency_intl#type:NumberSymbols", "object", {"toString":_flaxMemberParameters3}, {}), []);
export function _NumberSymbolsFactory(options: { NAME: string; DECIMAL_SEP: string; GROUP_SEP: string; PERCENT: string; ZERO_DIGIT: string; PLUS_SIGN: string; MINUS_SIGN: string; EXP_SYMBOL: string; PERMILL: string; INFINITY: string; NAN: string; DECIMAL_PATTERN: string; SCIENTIFIC_PATTERN: string; PERCENT_PATTERN: string; CURRENCY_PATTERN: string; DEF_CURRENCY_CODE: string }): NumberSymbols {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/dependency_intl#type:NumberSymbols", "", [{"name":"NAME","required":true},{"name":"DECIMAL_SEP","required":true},{"name":"GROUP_SEP","required":true},{"name":"PERCENT","required":true},{"name":"ZERO_DIGIT","required":true},{"name":"PLUS_SIGN","required":true},{"name":"MINUS_SIGN","required":true},{"name":"EXP_SYMBOL","required":true},{"name":"PERMILL","required":true},{"name":"INFINITY","required":true},{"name":"NAN","required":true},{"name":"DECIMAL_PATTERN","required":true},{"name":"SCIENTIFIC_PATTERN","required":true},{"name":"PERCENT_PATTERN","required":true},{"name":"CURRENCY_PATTERN","required":true},{"name":"DEF_CURRENCY_CODE","required":true}], [], options) as NumberSymbols;
}
const _NumberSymbolsProxy = {type: "flax.material/dependency_intl#type:NumberSymbols", parameters: _flaxMemberParameters17, constructors: {"": _flaxMemberParameters17}, methods: {"toString":_flaxMemberParameters3}, getters: ["NAME","DECIMAL_SEP","GROUP_SEP","PERCENT","ZERO_DIGIT","PLUS_SIGN","MINUS_SIGN","EXP_SYMBOL","PERMILL","INFINITY","NAN","DECIMAL_PATTERN","SCIENTIFIC_PATTERN","PERCENT_PATTERN","CURRENCY_PATTERN","DEF_CURRENCY_CODE"], setters: [], contextMembers: [], superMembers: ["get:NAME","get:DECIMAL_SEP","get:GROUP_SEP","get:PERCENT","get:ZERO_DIGIT","get:PLUS_SIGN","get:MINUS_SIGN","get:EXP_SYMBOL","get:PERMILL","get:INFINITY","get:NAN","get:DECIMAL_PATTERN","get:SCIENTIFIC_PATTERN","get:PERCENT_PATTERN","get:CURRENCY_PATTERN","get:DEF_CURRENCY_CODE","toString"]} as const;
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
export abstract class _NumberSymbolsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumberSymbols>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NumberSymbols;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/dependency_intl#type:NumberSymbols", readonly [], false];
constructor(options: {NAME: string; DECIMAL_SEP: string; GROUP_SEP: string; PERCENT: string; ZERO_DIGIT: string; PLUS_SIGN: string; MINUS_SIGN: string; EXP_SYMBOL: string; PERMILL: string; INFINITY: string; NAN: string; DECIMAL_PATTERN: string; SCIENTIFIC_PATTERN: string; PERCENT_PATTERN: string; CURRENCY_PATTERN: string; DEF_CURRENCY_CODE: string}) { super(_NumberSymbolsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NumberSymbolsNative.prototype, _NumberSymbolsProxy);
export namespace _NumberSymbolsFactory { export function implement(args: [options: {NAME: string; DECIMAL_SEP: string; GROUP_SEP: string; PERCENT: string; ZERO_DIGIT: string; PLUS_SIGN: string; MINUS_SIGN: string; EXP_SYMBOL: string; PERMILL: string; INFINITY: string; NAN: string; DECIMAL_PATTERN: string; SCIENTIFIC_PATTERN: string; PERCENT_PATTERN: string; CURRENCY_PATTERN: string; DEF_CURRENCY_CODE: string}], implementation: {}): NumberSymbols {
return constructProxy(_NumberSymbolsProxy, args, implementation) as NumberSymbols; } }
const _NumberSymbolsBinding = _flaxProxyFactory(_NumberSymbolsFactory, _NumberSymbolsNative) as unknown as typeof _NumberSymbolsFactory & (new(options: {NAME: string; DECIMAL_SEP: string; GROUP_SEP: string; PERCENT: string; ZERO_DIGIT: string; PLUS_SIGN: string; MINUS_SIGN: string; EXP_SYMBOL: string; PERMILL: string; INFINITY: string; NAN: string; DECIMAL_PATTERN: string; SCIENTIFIC_PATTERN: string; PERCENT_PATTERN: string; CURRENCY_PATTERN: string; DEF_CURRENCY_CODE: string}) => _NumberSymbolsNative);
export const NumberSymbols: typeof _NumberSymbolsBinding & _FlaxInstanceType<NumberSymbols> & _FlaxDartType<NumberSymbols, readonly ["class", "flax.material/dependency_intl#type:NumberSymbols", readonly [], false]> = _flaxBindInstanceType<NumberSymbols, typeof _NumberSymbolsBinding>(_NumberSymbolsBinding, "flax.material/dependency_intl#type:NumberSymbols", ["dart:core::Object"]) as typeof _NumberSymbolsBinding & _FlaxInstanceType<NumberSymbols> & _FlaxDartType<NumberSymbols, readonly ["class", "flax.material/dependency_intl#type:NumberSymbols", readonly [], false]>;
