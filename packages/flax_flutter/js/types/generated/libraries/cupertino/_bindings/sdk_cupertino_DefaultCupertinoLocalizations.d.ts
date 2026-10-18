import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoLocalizations';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoLocalizations';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import type * as upstream2 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateTimeOrder';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateTimeOrder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DefaultCupertinoLocalizations extends Omit<upstream0.CupertinoLocalizations, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/localizations.dart::DefaultCupertinoLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/localizations.dart::CupertinoLocalizations": readonly [];
}> {
    readonly __DefaultCupertinoLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultCupertinoLocalizations;
}
export interface DefaultCupertinoLocalizations {
    readonly [_flaxDartTypeValue]: DefaultCupertinoLocalizations;
    datePickerYear(yearIndex: number): string;
    datePickerMonth(monthIndex: number): string;
    datePickerStandaloneMonth(monthIndex: number): string;
    datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
    datePickerMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    datePickerHour(hour: number): string;
    datePickerHourSemanticsLabel(hour: number): string;
    datePickerMinute(minute: number): string;
    datePickerMinuteSemanticsLabel(minute: number): string;
    tabSemanticsLabel(options: {
        tabIndex: number;
        tabCount: number;
    }): string;
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
export declare abstract class DefaultCupertinoLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultCupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultCupertinoLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:DefaultCupertinoLocalizations", readonly [], false];
    constructor();
}
export declare namespace DefaultCupertinoLocalizations {
    function implement(args: [], implementation: {}): DefaultCupertinoLocalizations;
}
export declare namespace DefaultCupertinoLocalizations {
    const delegate: upstream3.LocalizationsDelegate<upstream0.CupertinoLocalizations>;
}
export declare namespace DefaultCupertinoLocalizations {
    function load(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): Promise<upstream0.CupertinoLocalizations>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "datePickerDateOrder" | "datePickerDateTimeOrder" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "todayLabel" | "alertDialogLabel" | "timerPickerHourLabels" | "timerPickerMinuteLabels" | "timerPickerSecondLabels" | "cutButtonLabel" | "copyButtonLabel" | "pasteButtonLabel" | "clearButtonLabel" | "noSpellCheckReplacementsLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "searchTextFieldPlaceholderLabel" | "modalBarrierDismissLabel" | "menuDismissLabel" | "cancelButtonLabel" | "backButtonLabel" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "datePickerYear" | "datePickerMonth" | "datePickerStandaloneMonth" | "datePickerDayOfMonth" | "datePickerMediumDate" | "datePickerHour" | "datePickerHourSemanticsLabel" | "datePickerMinute" | "datePickerMinuteSemanticsLabel" | "tabSemanticsLabel" | "timerPickerHour" | "timerPickerMinute" | "timerPickerSecond" | "timerPickerHourLabel" | "timerPickerMinuteLabel" | "timerPickerSecondLabel" | "__flaxBound:package:flutter/src/cupertino/localizations.dart::DefaultCupertinoLocalizations" | "__flaxBound:package:flutter/src/cupertino/localizations.dart::CupertinoLocalizations";
export {};
