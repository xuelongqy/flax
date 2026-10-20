// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import type * as upstream1 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_DateFormat';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_DateFormat';
import type * as upstream2 from '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream3 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import type * as upstream4 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { _flaxMemberParameters64, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters43, _flaxMemberParameters44 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlobalCupertinoLocalizations extends Omit<upstream0.CupertinoLocalizations, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:cupertino_ui/src/global_cupertino_localizations.dart::GlobalCupertinoLocalizations": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations": readonly [] }> { readonly __GlobalCupertinoLocalizations: unique symbol;
readonly [_flaxDartTypeValue]: GlobalCupertinoLocalizations;

}
defineObject("flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", ["datePickerDateOrder","datePickerDateTimeOrder","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","timerPickerHourLabels","timerPickerMinuteLabels","timerPickerSecondLabels","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint","datePickerHourSemanticsLabelZero","datePickerHourSemanticsLabelOne","datePickerHourSemanticsLabelTwo","datePickerHourSemanticsLabelFew","datePickerHourSemanticsLabelMany","datePickerHourSemanticsLabelOther","datePickerMinuteSemanticsLabelZero","datePickerMinuteSemanticsLabelOne","datePickerMinuteSemanticsLabelTwo","datePickerMinuteSemanticsLabelFew","datePickerMinuteSemanticsLabelMany","datePickerMinuteSemanticsLabelOther","datePickerDateOrderString","datePickerDateTimeOrderString","tabSemanticsLabelRaw","timerPickerHourLabelZero","timerPickerHourLabelOne","timerPickerHourLabelTwo","timerPickerHourLabelFew","timerPickerHourLabelMany","timerPickerHourLabelOther","timerPickerMinuteLabelZero","timerPickerMinuteLabelOne","timerPickerMinuteLabelTwo","timerPickerMinuteLabelFew","timerPickerMinuteLabelMany","timerPickerMinuteLabelOther","timerPickerSecondLabelZero","timerPickerSecondLabelOne","timerPickerSecondLabelTwo","timerPickerSecondLabelFew","timerPickerSecondLabelMany","timerPickerSecondLabelOther"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", "object", {}, {}), [], undefined, "flax.cupertino/cupertino#type:CupertinoLocalizations");
const _GlobalCupertinoLocalizationsProxy = {type: "flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", parameters: _flaxMemberParameters64, constructors: {"": _flaxMemberParameters64}, methods: {"datePickerYear":_flaxMemberParameters37,"datePickerMonth":_flaxMemberParameters38,"datePickerStandaloneMonth":_flaxMemberParameters38,"datePickerDayOfMonth":_flaxMemberParameters39,"datePickerMediumDate":_flaxMemberParameters40,"datePickerHour":_flaxMemberParameters41,"datePickerHourSemanticsLabel":_flaxMemberParameters41,"datePickerMinute":_flaxMemberParameters42,"datePickerMinuteSemanticsLabel":_flaxMemberParameters42,"tabSemanticsLabel":_flaxMemberParameters43,"timerPickerHour":_flaxMemberParameters41,"timerPickerMinute":_flaxMemberParameters42,"timerPickerSecond":_flaxMemberParameters44,"timerPickerHourLabel":_flaxMemberParameters41,"timerPickerMinuteLabel":_flaxMemberParameters42,"timerPickerSecondLabel":_flaxMemberParameters44}, getters: ["datePickerHourSemanticsLabelZero","datePickerHourSemanticsLabelOne","datePickerHourSemanticsLabelTwo","datePickerHourSemanticsLabelFew","datePickerHourSemanticsLabelMany","datePickerHourSemanticsLabelOther","datePickerMinuteSemanticsLabelZero","datePickerMinuteSemanticsLabelOne","datePickerMinuteSemanticsLabelTwo","datePickerMinuteSemanticsLabelFew","datePickerMinuteSemanticsLabelMany","datePickerMinuteSemanticsLabelOther","datePickerDateOrderString","datePickerDateOrder","datePickerDateTimeOrderString","datePickerDateTimeOrder","tabSemanticsLabelRaw","timerPickerHourLabelZero","timerPickerHourLabelOne","timerPickerHourLabelTwo","timerPickerHourLabelFew","timerPickerHourLabelMany","timerPickerHourLabelOther","timerPickerHourLabels","timerPickerMinuteLabelZero","timerPickerMinuteLabelOne","timerPickerMinuteLabelTwo","timerPickerMinuteLabelFew","timerPickerMinuteLabelMany","timerPickerMinuteLabelOther","timerPickerMinuteLabels","timerPickerSecondLabelZero","timerPickerSecondLabelOne","timerPickerSecondLabelTwo","timerPickerSecondLabelFew","timerPickerSecondLabelMany","timerPickerSecondLabelOther","timerPickerSecondLabels","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint"], setters: [], contextMembers: [], superMembers: ["get:datePickerHourSemanticsLabelZero","get:datePickerHourSemanticsLabelOne","get:datePickerHourSemanticsLabelTwo","get:datePickerHourSemanticsLabelFew","get:datePickerHourSemanticsLabelMany","get:datePickerMinuteSemanticsLabelZero","get:datePickerMinuteSemanticsLabelOne","get:datePickerMinuteSemanticsLabelTwo","get:datePickerMinuteSemanticsLabelFew","get:datePickerMinuteSemanticsLabelMany","get:datePickerDateOrder","get:datePickerDateTimeOrder","get:timerPickerHourLabelZero","get:timerPickerHourLabelOne","get:timerPickerHourLabelTwo","get:timerPickerHourLabelFew","get:timerPickerHourLabelMany","get:timerPickerHourLabels","get:timerPickerMinuteLabelZero","get:timerPickerMinuteLabelOne","get:timerPickerMinuteLabelTwo","get:timerPickerMinuteLabelFew","get:timerPickerMinuteLabelMany","get:timerPickerMinuteLabels","get:timerPickerSecondLabelZero","get:timerPickerSecondLabelOne","get:timerPickerSecondLabelTwo","get:timerPickerSecondLabelFew","get:timerPickerSecondLabelMany","get:timerPickerSecondLabels","datePickerYear","datePickerMonth","datePickerStandaloneMonth","datePickerDayOfMonth","datePickerMediumDate","datePickerHour","datePickerHourSemanticsLabel","datePickerMinute","datePickerMinuteSemanticsLabel","tabSemanticsLabel","timerPickerHour","timerPickerMinute","timerPickerSecond","timerPickerHourLabel","timerPickerMinuteLabel","timerPickerSecondLabel"]} as const;
export interface GlobalCupertinoLocalizations {
readonly [_flaxDartTypeValue]: GlobalCupertinoLocalizations;

datePickerYear(yearIndex: number): string;
datePickerMonth(monthIndex: number): string;
datePickerStandaloneMonth(monthIndex: number): string;
datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
datePickerMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
datePickerHour(hour: number): string;
datePickerHourSemanticsLabel(hour: number): string | null;
datePickerMinute(minute: number): string;
datePickerMinuteSemanticsLabel(minute: number): string | null;
tabSemanticsLabel(options: {tabIndex: number; tabCount: number}): string;
timerPickerHour(hour: number): string;
timerPickerMinute(minute: number): string;
timerPickerSecond(second: number): string;
timerPickerHourLabel(hour: number): string | null;
timerPickerMinuteLabel(minute: number): string | null;
timerPickerSecondLabel(second: number): string | null;
get datePickerHourSemanticsLabelZero(): string | null;
get datePickerHourSemanticsLabelOne(): string | null;
get datePickerHourSemanticsLabelTwo(): string | null;
get datePickerHourSemanticsLabelFew(): string | null;
get datePickerHourSemanticsLabelMany(): string | null;
get datePickerMinuteSemanticsLabelZero(): string | null;
get datePickerMinuteSemanticsLabelOne(): string | null;
get datePickerMinuteSemanticsLabelTwo(): string | null;
get datePickerMinuteSemanticsLabelFew(): string | null;
get datePickerMinuteSemanticsLabelMany(): string | null;
get datePickerDateOrder(): upstream3.DatePickerDateOrder;
get datePickerDateTimeOrder(): upstream4.DatePickerDateTimeOrder;
get timerPickerHourLabelZero(): string | null;
get timerPickerHourLabelOne(): string | null;
get timerPickerHourLabelTwo(): string | null;
get timerPickerHourLabelFew(): string | null;
get timerPickerHourLabelMany(): string | null;
get timerPickerHourLabels(): DartList<string>;
get timerPickerMinuteLabelZero(): string | null;
get timerPickerMinuteLabelOne(): string | null;
get timerPickerMinuteLabelTwo(): string | null;
get timerPickerMinuteLabelFew(): string | null;
get timerPickerMinuteLabelMany(): string | null;
get timerPickerMinuteLabels(): DartList<string>;
get timerPickerSecondLabelZero(): string | null;
get timerPickerSecondLabelOne(): string | null;
get timerPickerSecondLabelTwo(): string | null;
get timerPickerSecondLabelFew(): string | null;
get timerPickerSecondLabelMany(): string | null;
get timerPickerSecondLabels(): DartList<string>;
}
export abstract class GlobalCupertinoLocalizations extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalCupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GlobalCupertinoLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", readonly [], false];
constructor(options: {localeName: string; fullYearFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; dayFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; weekdayFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; mediumDateFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitHourFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitMinuteFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; doubleDigitMinuteFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitSecondFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; decimalFormat: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>}) { super(_GlobalCupertinoLocalizationsProxy, Array.from(arguments)); }
abstract get datePickerHourSemanticsLabelOther(): string | null;
abstract get datePickerMinuteSemanticsLabelOther(): string | null;
abstract get datePickerDateOrderString(): string;
abstract get datePickerDateTimeOrderString(): string;
abstract get tabSemanticsLabelRaw(): string;
abstract get timerPickerHourLabelOther(): string | null;
abstract get timerPickerMinuteLabelOther(): string | null;
abstract get timerPickerSecondLabelOther(): string | null;
abstract get anteMeridiemAbbreviation(): string;
abstract get postMeridiemAbbreviation(): string;
abstract get todayLabel(): string;
abstract get alertDialogLabel(): string;
abstract get cutButtonLabel(): string;
abstract get copyButtonLabel(): string;
abstract get pasteButtonLabel(): string;
abstract get clearButtonLabel(): string;
abstract get noSpellCheckReplacementsLabel(): string;
abstract get selectAllButtonLabel(): string;
abstract get lookUpButtonLabel(): string;
abstract get searchWebButtonLabel(): string;
abstract get shareButtonLabel(): string;
abstract get searchTextFieldPlaceholderLabel(): string;
abstract get modalBarrierDismissLabel(): string;
abstract get menuDismissLabel(): string;
abstract get cancelButtonLabel(): string;
abstract get backButtonLabel(): string;
abstract get expansionTileExpandedHint(): string;
abstract get expansionTileCollapsedHint(): string;
abstract get expansionTileExpandedTapHint(): string;
abstract get expansionTileCollapsedTapHint(): string;
abstract get expandedHint(): string;
abstract get collapsedHint(): string;
}
_flaxDefineProxyBase(GlobalCupertinoLocalizations.prototype, _GlobalCupertinoLocalizationsProxy);
export namespace GlobalCupertinoLocalizations { export function implement(args: [options: {localeName: string; fullYearFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; dayFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; weekdayFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; mediumDateFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitHourFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitMinuteFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; doubleDigitMinuteFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; singleDigitSecondFormat: Readonly<{ "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [] }>; decimalFormat: Readonly<{ "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [] }>}], implementation: {get datePickerHourSemanticsLabelOther(): string | null; get datePickerMinuteSemanticsLabelOther(): string | null; get datePickerDateOrderString(): string; get datePickerDateTimeOrderString(): string; get tabSemanticsLabelRaw(): string; get timerPickerHourLabelOther(): string | null; get timerPickerMinuteLabelOther(): string | null; get timerPickerSecondLabelOther(): string | null; get anteMeridiemAbbreviation(): string; get postMeridiemAbbreviation(): string; get todayLabel(): string; get alertDialogLabel(): string; get cutButtonLabel(): string; get copyButtonLabel(): string; get pasteButtonLabel(): string; get clearButtonLabel(): string; get noSpellCheckReplacementsLabel(): string; get selectAllButtonLabel(): string; get lookUpButtonLabel(): string; get searchWebButtonLabel(): string; get shareButtonLabel(): string; get searchTextFieldPlaceholderLabel(): string; get modalBarrierDismissLabel(): string; get menuDismissLabel(): string; get cancelButtonLabel(): string; get backButtonLabel(): string; get expansionTileExpandedHint(): string; get expansionTileCollapsedHint(): string; get expansionTileExpandedTapHint(): string; get expansionTileCollapsedTapHint(): string; get expandedHint(): string; get collapsedHint(): string}): GlobalCupertinoLocalizations {
return constructProxy(_GlobalCupertinoLocalizationsProxy, args, implementation) as GlobalCupertinoLocalizations; } }
export namespace GlobalCupertinoLocalizations { export declare const delegate: upstream5.LocalizationsDelegate<upstream0.CupertinoLocalizations>; }
export namespace GlobalCupertinoLocalizations { export declare const delegates: DartList<upstream5.LocalizationsDelegate<unknown | null>>; }
_flaxDefineStaticGetters(GlobalCupertinoLocalizations, "flax.cupertino/cupertino#read:GlobalCupertinoLocalizations.", ["delegate","delegates"]);
_flaxBindInstanceType<GlobalCupertinoLocalizations, typeof GlobalCupertinoLocalizations>(GlobalCupertinoLocalizations, "flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", ["dart:core::Object","flax.cupertino/cupertino#type:CupertinoLocalizations"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "datePickerDateOrder" | "datePickerDateTimeOrder" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "todayLabel" | "alertDialogLabel" | "timerPickerHourLabels" | "timerPickerMinuteLabels" | "timerPickerSecondLabels" | "cutButtonLabel" | "copyButtonLabel" | "pasteButtonLabel" | "clearButtonLabel" | "noSpellCheckReplacementsLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "searchTextFieldPlaceholderLabel" | "modalBarrierDismissLabel" | "menuDismissLabel" | "cancelButtonLabel" | "backButtonLabel" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "datePickerHourSemanticsLabelZero" | "datePickerHourSemanticsLabelOne" | "datePickerHourSemanticsLabelTwo" | "datePickerHourSemanticsLabelFew" | "datePickerHourSemanticsLabelMany" | "datePickerHourSemanticsLabelOther" | "datePickerMinuteSemanticsLabelZero" | "datePickerMinuteSemanticsLabelOne" | "datePickerMinuteSemanticsLabelTwo" | "datePickerMinuteSemanticsLabelFew" | "datePickerMinuteSemanticsLabelMany" | "datePickerMinuteSemanticsLabelOther" | "datePickerDateOrderString" | "datePickerDateTimeOrderString" | "tabSemanticsLabelRaw" | "timerPickerHourLabelZero" | "timerPickerHourLabelOne" | "timerPickerHourLabelTwo" | "timerPickerHourLabelFew" | "timerPickerHourLabelMany" | "timerPickerHourLabelOther" | "timerPickerMinuteLabelZero" | "timerPickerMinuteLabelOne" | "timerPickerMinuteLabelTwo" | "timerPickerMinuteLabelFew" | "timerPickerMinuteLabelMany" | "timerPickerMinuteLabelOther" | "timerPickerSecondLabelZero" | "timerPickerSecondLabelOne" | "timerPickerSecondLabelTwo" | "timerPickerSecondLabelFew" | "timerPickerSecondLabelMany" | "timerPickerSecondLabelOther" | "datePickerYear" | "datePickerMonth" | "datePickerStandaloneMonth" | "datePickerDayOfMonth" | "datePickerMediumDate" | "datePickerHour" | "datePickerHourSemanticsLabel" | "datePickerMinute" | "datePickerMinuteSemanticsLabel" | "tabSemanticsLabel" | "timerPickerHour" | "timerPickerMinute" | "timerPickerSecond" | "timerPickerHourLabel" | "timerPickerMinuteLabel" | "timerPickerSecondLabel" | "__flaxBound:package:cupertino_ui/src/global_cupertino_localizations.dart::GlobalCupertinoLocalizations" | "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations";
