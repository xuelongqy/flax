// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream1 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import { _flaxMemberParameters3, _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NumberParserBase<R extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:intl/src/intl/number_parser_base.dart::NumberParserBase": readonly [R] }> { readonly __NumberParserBase: unique symbol;
readonly [_flaxDartTypeValue]: NumberParserBase<R>;

}
defineObject("flax.cupertino/dependency_intl#type:NumberParserBase", ["format","text","value","symbols","gotPositive","gotNegative","gotPositiveSuffix","gotNegativeSuffix","done","prefixesSkipped","scale","replacements","groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit"], ["value","gotPositive","gotNegative","gotPositiveSuffix","gotNegativeSuffix","done","prefixesSkipped","scale"], _flaxBindingMethods("flax.cupertino/dependency_intl#type:NumberParserBase", "object", {"invalidFormat":_flaxMemberParameters3,"handleSpace":_flaxMemberParameters3,"asDigit":_flaxMemberParameters12,"checkPrefixes":_flaxMemberParameters13,"checkSuffixes":_flaxMemberParameters3,"processNonDigit":_flaxMemberParameters3,"parse":_flaxMemberParameters3,"invalidNumber":_flaxMemberParameters3,"fromNormalized":_flaxMemberParameters14,"scaled":_flaxMemberParameters15,"nan":_flaxMemberParameters3,"positiveInfinity":_flaxMemberParameters3,"negativeInfinity":_flaxMemberParameters3}, {}), []);
const _NumberParserBaseProxy = {type: "flax.cupertino/dependency_intl#type:NumberParserBase", parameters: _flaxMemberParameters16, constructors: {"": _flaxMemberParameters16}, methods: {"invalidFormat":_flaxMemberParameters3,"handleSpace":_flaxMemberParameters3,"asDigit":_flaxMemberParameters12,"checkPrefixes":_flaxMemberParameters13,"checkSuffixes":_flaxMemberParameters3,"processNonDigit":_flaxMemberParameters3,"parse":_flaxMemberParameters3,"invalidNumber":_flaxMemberParameters3,"fromNormalized":_flaxMemberParameters14,"scaled":_flaxMemberParameters15,"nan":_flaxMemberParameters3,"positiveInfinity":_flaxMemberParameters3,"negativeInfinity":_flaxMemberParameters3}, getters: ["format","text","value","symbols","gotPositive","gotNegative","gotPositiveSuffix","gotNegativeSuffix","done","prefixesSkipped","scale","replacements","groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit"], setters: ["value","gotPositive","gotNegative","gotPositiveSuffix","gotNegativeSuffix","done","prefixesSkipped","scale"], contextMembers: [], superMembers: ["get:format","get:text","get:value","get:symbols","get:gotPositive","get:gotNegative","get:gotPositiveSuffix","get:gotNegativeSuffix","get:done","get:prefixesSkipped","get:scale","get:replacements","get:groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit","set:value","set:gotPositive","set:gotNegative","set:gotPositiveSuffix","set:gotNegativeSuffix","set:done","set:prefixesSkipped","set:scale","invalidFormat","handleSpace","asDigit","checkPrefixes","checkSuffixes","processNonDigit","parse","invalidNumber"]} as const;
export interface NumberParserBase<R extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: NumberParserBase<R>;

invalidFormat(): void;
handleSpace(): void;
asDigit(char: string): number | null;
checkPrefixes(options?: {skip?: boolean | undefined}): void;
checkSuffixes(): void;
processNonDigit(): void;
parse(): R;
invalidNumber(): void;
get format(): upstream0.NumberFormat;
get text(): string;
get value(): R | null;
get symbols(): upstream1.NumberSymbols;
get gotPositive(): boolean;
get gotNegative(): boolean;
get gotPositiveSuffix(): boolean;
get gotNegativeSuffix(): boolean;
get done(): boolean;
get prefixesSkipped(): boolean;
get scale(): number;
get replacements(): DartMap<string, _FlaxDartFunction>;
get groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(): boolean;
set value(value: (R | DartInput<R>) | null);
set gotPositive(value: boolean);
set gotNegative(value: boolean);
set gotPositiveSuffix(value: boolean);
set gotNegativeSuffix(value: boolean);
set done(value: boolean);
set prefixesSkipped(value: boolean);
set scale(value: number);
}
export abstract class NumberParserBase<R extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumberParserBase<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NumberParserBase<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/dependency_intl#type:NumberParserBase", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(format: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, text: string) { super(_NumberParserBaseProxy, Array.from(arguments)); }
abstract fromNormalized(normalizedText: string): R;
abstract scaled(parsed: (R | DartInput<R>), scale: number): R;
abstract nan(): R;
abstract positiveInfinity(): R;
abstract negativeInfinity(): R;
}
_flaxDefineProxyBase(NumberParserBase.prototype, _NumberParserBaseProxy);
export namespace NumberParserBase { export function implement<R extends unknown | null = unknown | null>(args: [format: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, text: string], implementation: {fromNormalized: ((normalizedText: string) => (R | DartInput<R>)); scaled: ((parsed: R, scale: number) => (R | DartInput<R>)); nan: (() => (R | DartInput<R>)); positiveInfinity: (() => (R | DartInput<R>)); negativeInfinity: (() => (R | DartInput<R>))}): NumberParserBase<R> {
return constructProxy(_NumberParserBaseProxy, args, implementation) as NumberParserBase<R>; } }
_flaxBindInstanceType<NumberParserBase<unknown | null>, typeof NumberParserBase>(NumberParserBase, "flax.cupertino/dependency_intl#type:NumberParserBase", ["dart:core::Object"]);
_flaxDefineDartTypes(NumberParserBase, "flax.cupertino/dependency_intl#type:NumberParserBase", {...{"category":"object","constructors":{}}, proxy: _NumberParserBaseProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (format: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, text: string) => NumberParserBase<_Selected0>) & {readonly prototype: NumberParserBase<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, string], implementation: Partial<NumberParserBase<_Selected0>>): NumberParserBase<_Selected0>;} & _FlaxInstanceType<NumberParserBase<_Selected0>> & _FlaxDartType<NumberParserBase<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (format: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, text: string) => NumberParserBase<_Selected0>) & {readonly prototype: NumberParserBase<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>, string], implementation: Partial<NumberParserBase<_Selected0>>): NumberParserBase<_Selected0>;} & _FlaxInstanceType<NumberParserBase<_Selected0>> & _FlaxDartType<NumberParserBase<_Selected0>> : never : never; }
