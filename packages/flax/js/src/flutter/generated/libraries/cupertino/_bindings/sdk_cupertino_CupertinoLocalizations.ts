// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateTimeOrder';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateTimeOrder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters0, _flaxMemberParameters45 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoLocalizations extends Readonly<{ "__flaxBound:package:flutter/src/cupertino/localizations.dart::CupertinoLocalizations": readonly [] }> { readonly __CupertinoLocalizations: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoLocalizations;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoLocalizations", ["datePickerDateOrder","datePickerDateTimeOrder","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","timerPickerHourLabels","timerPickerMinuteLabels","timerPickerSecondLabels","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoLocalizations", "object", {"datePickerYear":_flaxMemberParameters37,"datePickerMonth":_flaxMemberParameters38,"datePickerStandaloneMonth":_flaxMemberParameters38,"datePickerDayOfMonth":_flaxMemberParameters39,"datePickerMediumDate":_flaxMemberParameters40,"datePickerHour":_flaxMemberParameters41,"datePickerHourSemanticsLabel":_flaxMemberParameters41,"datePickerMinute":_flaxMemberParameters42,"datePickerMinuteSemanticsLabel":_flaxMemberParameters42,"tabSemanticsLabel":_flaxMemberParameters43,"timerPickerHour":_flaxMemberParameters41,"timerPickerMinute":_flaxMemberParameters42,"timerPickerSecond":_flaxMemberParameters44,"timerPickerHourLabel":_flaxMemberParameters41,"timerPickerMinuteLabel":_flaxMemberParameters42,"timerPickerSecondLabel":_flaxMemberParameters44}, {}), []);
const _CupertinoLocalizationsProxy = {type: "flax.core/sdk_cupertino#type:CupertinoLocalizations", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"datePickerYear":_flaxMemberParameters37,"datePickerMonth":_flaxMemberParameters38,"datePickerStandaloneMonth":_flaxMemberParameters38,"datePickerDayOfMonth":_flaxMemberParameters39,"datePickerMediumDate":_flaxMemberParameters40,"datePickerHour":_flaxMemberParameters41,"datePickerHourSemanticsLabel":_flaxMemberParameters41,"datePickerMinute":_flaxMemberParameters42,"datePickerMinuteSemanticsLabel":_flaxMemberParameters42,"tabSemanticsLabel":_flaxMemberParameters45,"timerPickerHour":_flaxMemberParameters41,"timerPickerMinute":_flaxMemberParameters42,"timerPickerSecond":_flaxMemberParameters44,"timerPickerHourLabel":_flaxMemberParameters41,"timerPickerMinuteLabel":_flaxMemberParameters42,"timerPickerSecondLabel":_flaxMemberParameters44}, getters: ["datePickerDateOrder","datePickerDateTimeOrder","anteMeridiemAbbreviation","postMeridiemAbbreviation","todayLabel","alertDialogLabel","timerPickerHourLabels","timerPickerMinuteLabels","timerPickerSecondLabels","cutButtonLabel","copyButtonLabel","pasteButtonLabel","clearButtonLabel","noSpellCheckReplacementsLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","searchTextFieldPlaceholderLabel","modalBarrierDismissLabel","menuDismissLabel","cancelButtonLabel","backButtonLabel","expansionTileExpandedHint","expansionTileCollapsedHint","expansionTileExpandedTapHint","expansionTileCollapsedTapHint","expandedHint","collapsedHint"], setters: [], contextMembers: [], superMembers: ["get:expansionTileExpandedHint","get:expansionTileCollapsedHint","get:expansionTileExpandedTapHint","get:expansionTileCollapsedTapHint","get:expandedHint","get:collapsedHint"]} as const;
export interface CupertinoLocalizations {
readonly [_flaxDartTypeValue]: CupertinoLocalizations;

get expansionTileExpandedHint(): string;
get expansionTileCollapsedHint(): string;
get expansionTileExpandedTapHint(): string;
get expansionTileCollapsedTapHint(): string;
get expandedHint(): string;
get collapsedHint(): string;
}
export abstract class CupertinoLocalizations extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoLocalizations", readonly [], false];
constructor() { super(_CupertinoLocalizationsProxy, Array.from(arguments)); }
abstract datePickerYear(yearIndex: number): string;
abstract datePickerMonth(monthIndex: number): string;
abstract datePickerStandaloneMonth(monthIndex: number): string;
abstract datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
abstract datePickerMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): string;
abstract datePickerHour(hour: number): string;
abstract datePickerHourSemanticsLabel(hour: number): string | null;
abstract datePickerMinute(minute: number): string;
abstract datePickerMinuteSemanticsLabel(minute: number): string | null;
abstract tabSemanticsLabel(options: {tabIndex: number; tabCount: number}): string;
abstract timerPickerHour(hour: number): string;
abstract timerPickerMinute(minute: number): string;
abstract timerPickerSecond(second: number): string;
abstract timerPickerHourLabel(hour: number): string | null;
abstract timerPickerMinuteLabel(minute: number): string | null;
abstract timerPickerSecondLabel(second: number): string | null;
abstract get datePickerDateOrder(): upstream0.DatePickerDateOrder;
abstract get datePickerDateTimeOrder(): upstream1.DatePickerDateTimeOrder;
abstract get anteMeridiemAbbreviation(): string;
abstract get postMeridiemAbbreviation(): string;
abstract get todayLabel(): string;
abstract get alertDialogLabel(): string;
abstract get timerPickerHourLabels(): DartList<string>;
abstract get timerPickerMinuteLabels(): DartList<string>;
abstract get timerPickerSecondLabels(): DartList<string>;
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
}
_flaxDefineProxyBase(CupertinoLocalizations.prototype, _CupertinoLocalizationsProxy);
export namespace CupertinoLocalizations { export function implement(args: [], implementation: {datePickerYear: ((yearIndex: number) => string); datePickerMonth: ((monthIndex: number) => string); datePickerStandaloneMonth: ((monthIndex: number) => string); datePickerDayOfMonth: ((dayIndex: number, weekDay?: number | null) => string); datePickerMediumDate: ((date: upstream3.DateTime) => string); datePickerHour: ((hour: number) => string); datePickerHourSemanticsLabel: ((hour: number) => string | null); datePickerMinute: ((minute: number) => string); datePickerMinuteSemanticsLabel: ((minute: number) => string | null); tabSemanticsLabel: ((options: { tabIndex: number; tabCount: number }) => string); timerPickerHour: ((hour: number) => string); timerPickerMinute: ((minute: number) => string); timerPickerSecond: ((second: number) => string); timerPickerHourLabel: ((hour: number) => string | null); timerPickerMinuteLabel: ((minute: number) => string | null); timerPickerSecondLabel: ((second: number) => string | null); get datePickerDateOrder(): upstream0.DatePickerDateOrder; get datePickerDateTimeOrder(): upstream1.DatePickerDateTimeOrder; get anteMeridiemAbbreviation(): string; get postMeridiemAbbreviation(): string; get todayLabel(): string; get alertDialogLabel(): string; get timerPickerHourLabels(): DartListInput<string, string>; get timerPickerMinuteLabels(): DartListInput<string, string>; get timerPickerSecondLabels(): DartListInput<string, string>; get cutButtonLabel(): string; get copyButtonLabel(): string; get pasteButtonLabel(): string; get clearButtonLabel(): string; get noSpellCheckReplacementsLabel(): string; get selectAllButtonLabel(): string; get lookUpButtonLabel(): string; get searchWebButtonLabel(): string; get shareButtonLabel(): string; get searchTextFieldPlaceholderLabel(): string; get modalBarrierDismissLabel(): string; get menuDismissLabel(): string; get cancelButtonLabel(): string; get backButtonLabel(): string}): CupertinoLocalizations {
return constructProxy(_CupertinoLocalizationsProxy, args, implementation) as CupertinoLocalizations; } }
export namespace CupertinoLocalizations { export function of(context: upstream2.BuildContext): CupertinoLocalizations {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_cupertino#function:CupertinoLocalizations.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as CupertinoLocalizations;
} }
_flaxBindInstanceType<CupertinoLocalizations, typeof CupertinoLocalizations>(CupertinoLocalizations, "flax.core/sdk_cupertino#type:CupertinoLocalizations", ["dart:core::Object"]);
