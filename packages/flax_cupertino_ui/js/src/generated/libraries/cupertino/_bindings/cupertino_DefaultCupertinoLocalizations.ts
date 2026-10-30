// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import type * as upstream2 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { _flaxMemberParameters73, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters46, _flaxMemberParameters0, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters45 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultCupertinoLocalizations extends Omit<upstream0.CupertinoLocalizations, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:cupertino_ui/src/localizations.dart::DefaultCupertinoLocalizations": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations": readonly [] }> { readonly __DefaultCupertinoLocalizations: unique symbol;
readonly [_flaxDartTypeValue]: DefaultCupertinoLocalizations;

readonly datePickerDateOrder: upstream1.DatePickerDateOrder;
readonly datePickerDateTimeOrder: upstream2.DatePickerDateTimeOrder;
readonly anteMeridiemAbbreviation: string;
readonly postMeridiemAbbreviation: string;
readonly todayLabel: string;
readonly alertDialogLabel: string;
readonly timerPickerHourLabels: DartList<string>;
readonly timerPickerMinuteLabels: DartList<string>;
readonly timerPickerSecondLabels: DartList<string>;
readonly cutButtonLabel: string;
readonly copyButtonLabel: string;
readonly pasteButtonLabel: string;
readonly clearButtonLabel: string;
readonly noSpellCheckReplacementsLabel: string;
readonly selectAllButtonLabel: string;
readonly lookUpButtonLabel: string;
readonly searchWebButtonLabel: string;
readonly shareButtonLabel: string;
readonly searchTextFieldPlaceholderLabel: string;
readonly modalBarrierDismissLabel: string;
readonly menuDismissLabel: string;
readonly cancelButtonLabel: string;
readonly backButtonLabel: string;
readonly expansionTileExpandedHint: string;
readonly expansionTileCollapsedHint: string;
readonly expansionTileExpandedTapHint: string;
readonly expansionTileCollapsedTapHint: string;
readonly expandedHint: string;
readonly collapsedHint: string;
datePickerYear(yearIndex: number): string;
datePickerMonth(monthIndex: number): string;
datePickerStandaloneMonth(monthIndex: number): string;
datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
datePickerMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
datePickerHour(hour: number): string;
datePickerHourSemanticsLabel(hour: number): string;
datePickerMinute(minute: number): string;
datePickerMinuteSemanticsLabel(minute: number): string;
tabSemanticsLabel(options: {tabCount: number; tabIndex: number}): string;
timerPickerHour(hour: number): string;
timerPickerMinute(minute: number): string;
timerPickerSecond(second: number): string;
timerPickerHourLabel(hour: number): string;
timerPickerMinuteLabel(minute: number): string;
timerPickerSecondLabel(second: number): string;
}
defineObject("flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", ["datePickerDateOrder","datePickerDateTimeOrder","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","timerPickerHourLabels","timerPickerMinuteLabels","timerPickerSecondLabels","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", "object", {"datePickerHourSemanticsLabel":_flaxMemberParameters43,"datePickerMinuteSemanticsLabel":_flaxMemberParameters44,"timerPickerHourLabel":_flaxMemberParameters43,"timerPickerMinuteLabel":_flaxMemberParameters44,"timerPickerSecondLabel":_flaxMemberParameters46}, {}), [], undefined, "flax.cupertino/cupertino#type:CupertinoLocalizations");
export function _DefaultCupertinoLocalizationsFactory(): DefaultCupertinoLocalizations {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", "", [], [], {}) as DefaultCupertinoLocalizations;
}
const _DefaultCupertinoLocalizationsProxy = {type: "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"datePickerYear":_flaxMemberParameters39,"datePickerMonth":_flaxMemberParameters40,"datePickerStandaloneMonth":_flaxMemberParameters40,"datePickerDayOfMonth":_flaxMemberParameters41,"datePickerMediumDate":_flaxMemberParameters42,"datePickerHour":_flaxMemberParameters43,"datePickerHourSemanticsLabel":_flaxMemberParameters43,"datePickerMinute":_flaxMemberParameters44,"datePickerMinuteSemanticsLabel":_flaxMemberParameters44,"tabSemanticsLabel":_flaxMemberParameters45,"timerPickerHour":_flaxMemberParameters43,"timerPickerMinute":_flaxMemberParameters44,"timerPickerSecond":_flaxMemberParameters46,"timerPickerHourLabel":_flaxMemberParameters43,"timerPickerMinuteLabel":_flaxMemberParameters44,"timerPickerSecondLabel":_flaxMemberParameters46}, getters: ["datePickerDateOrder","datePickerDateTimeOrder","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","timerPickerHourLabels","timerPickerMinuteLabels","timerPickerSecondLabels","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint"], setters: [], contextMembers: [], superMembers: ["get:datePickerDateOrder","get:datePickerDateTimeOrder","get:anteMeridiemAbbreviation","get:postMeridiemAbbreviation","get:todayLabel","get:alertDialogLabel","get:timerPickerHourLabels","get:timerPickerMinuteLabels","get:timerPickerSecondLabels","get:cutButtonLabel","get:copyButtonLabel","get:pasteButtonLabel","get:clearButtonLabel","get:noSpellCheckReplacementsLabel","get:selectAllButtonLabel","get:lookUpButtonLabel","get:searchWebButtonLabel","get:shareButtonLabel","get:searchTextFieldPlaceholderLabel","get:modalBarrierDismissLabel","get:menuDismissLabel","get:cancelButtonLabel","get:backButtonLabel","get:expansionTileExpandedHint","get:expansionTileCollapsedHint","get:expansionTileExpandedTapHint","get:expansionTileCollapsedTapHint","get:expandedHint","get:collapsedHint","datePickerYear","datePickerMonth","datePickerStandaloneMonth","datePickerDayOfMonth","datePickerMediumDate","datePickerHour","datePickerHourSemanticsLabel","datePickerMinute","datePickerMinuteSemanticsLabel","tabSemanticsLabel","timerPickerHour","timerPickerMinute","timerPickerSecond","timerPickerHourLabel","timerPickerMinuteLabel","timerPickerSecondLabel"]} as const;
export interface _DefaultCupertinoLocalizationsNative extends DefaultCupertinoLocalizations {
readonly [_flaxDartTypeValue]: _DefaultCupertinoLocalizationsNative;

datePickerYear(yearIndex: number): string;
datePickerMonth(monthIndex: number): string;
datePickerStandaloneMonth(monthIndex: number): string;
datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
datePickerMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
datePickerHour(hour: number): string;
datePickerHourSemanticsLabel(hour: number): string;
datePickerMinute(minute: number): string;
datePickerMinuteSemanticsLabel(minute: number): string;
tabSemanticsLabel(options: {tabIndex: number; tabCount: number}): string;
timerPickerHour(hour: number): string;
timerPickerMinute(minute: number): string;
timerPickerSecond(second: number): string;
timerPickerHourLabel(hour: number): string;
timerPickerMinuteLabel(minute: number): string;
timerPickerSecondLabel(second: number): string;
get datePickerDateOrder(): upstream1.DatePickerDateOrder;
get datePickerDateTimeOrder(): upstream2.DatePickerDateTimeOrder;
get anteMeridiemAbbreviation(): string;
get postMeridiemAbbreviation(): string;
get todayLabel(): string;
get alertDialogLabel(): string;
get timerPickerHourLabels(): DartList<string>;
get timerPickerMinuteLabels(): DartList<string>;
get timerPickerSecondLabels(): DartList<string>;
get cutButtonLabel(): string;
get copyButtonLabel(): string;
get pasteButtonLabel(): string;
get clearButtonLabel(): string;
get noSpellCheckReplacementsLabel(): string;
get selectAllButtonLabel(): string;
get lookUpButtonLabel(): string;
get searchWebButtonLabel(): string;
get shareButtonLabel(): string;
get searchTextFieldPlaceholderLabel(): string;
get modalBarrierDismissLabel(): string;
get menuDismissLabel(): string;
get cancelButtonLabel(): string;
get backButtonLabel(): string;
get expansionTileExpandedHint(): string;
get expansionTileCollapsedHint(): string;
get expansionTileExpandedTapHint(): string;
get expansionTileCollapsedTapHint(): string;
get expandedHint(): string;
get collapsedHint(): string;
}
export abstract class _DefaultCupertinoLocalizationsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultCupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultCupertinoLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", readonly [], false];
constructor() { super(_DefaultCupertinoLocalizationsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DefaultCupertinoLocalizationsNative.prototype, _DefaultCupertinoLocalizationsProxy);
export namespace _DefaultCupertinoLocalizationsFactory { export function implement(args: [], implementation: {}): DefaultCupertinoLocalizations {
return constructProxy(_DefaultCupertinoLocalizationsProxy, args, implementation) as DefaultCupertinoLocalizations; } }
const _DefaultCupertinoLocalizationsBinding = _flaxProxyFactory(_DefaultCupertinoLocalizationsFactory, _DefaultCupertinoLocalizationsNative) as unknown as typeof _DefaultCupertinoLocalizationsFactory & (new() => _DefaultCupertinoLocalizationsNative);
export namespace _DefaultCupertinoLocalizationsFactory { export declare const delegate: upstream3.LocalizationsDelegate<upstream0.CupertinoLocalizations>; }
_flaxDefineStaticGetters(_DefaultCupertinoLocalizationsFactory, "flax.cupertino/cupertino#read:DefaultCupertinoLocalizations.", ["delegate"]);
export namespace _DefaultCupertinoLocalizationsFactory { export function load(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>): Promise<upstream0.CupertinoLocalizations> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:DefaultCupertinoLocalizations.load", [locale], _flaxMemberParameters73);
return _flaxResult as Promise<upstream0.CupertinoLocalizations>;
} }
export const DefaultCupertinoLocalizations: typeof _DefaultCupertinoLocalizationsBinding & _FlaxInstanceType<DefaultCupertinoLocalizations> & _FlaxDartType<DefaultCupertinoLocalizations, readonly ["class", "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", readonly [], false]> = _flaxBindInstanceType<DefaultCupertinoLocalizations, typeof _DefaultCupertinoLocalizationsBinding>(_DefaultCupertinoLocalizationsBinding, "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", ["dart:core::Object","flax.cupertino/cupertino#type:CupertinoLocalizations"]) as typeof _DefaultCupertinoLocalizationsBinding & _FlaxInstanceType<DefaultCupertinoLocalizations> & _FlaxDartType<DefaultCupertinoLocalizations, readonly ["class", "flax.cupertino/cupertino#type:DefaultCupertinoLocalizations", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "datePickerDateOrder" | "datePickerDateTimeOrder" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "todayLabel" | "alertDialogLabel" | "timerPickerHourLabels" | "timerPickerMinuteLabels" | "timerPickerSecondLabels" | "cutButtonLabel" | "copyButtonLabel" | "pasteButtonLabel" | "clearButtonLabel" | "noSpellCheckReplacementsLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "searchTextFieldPlaceholderLabel" | "modalBarrierDismissLabel" | "menuDismissLabel" | "cancelButtonLabel" | "backButtonLabel" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "datePickerYear" | "datePickerMonth" | "datePickerStandaloneMonth" | "datePickerDayOfMonth" | "datePickerMediumDate" | "datePickerHour" | "datePickerHourSemanticsLabel" | "datePickerMinute" | "datePickerMinuteSemanticsLabel" | "tabSemanticsLabel" | "timerPickerHour" | "timerPickerMinute" | "timerPickerSecond" | "timerPickerHourLabel" | "timerPickerMinuteLabel" | "timerPickerSecondLabel" | "__flaxBound:package:cupertino_ui/src/localizations.dart::DefaultCupertinoLocalizations" | "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations";
