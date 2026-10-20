import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoLocalizations';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_DateFormat';
import '@flax/cupertino-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream3 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import type * as upstream4 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GlobalCupertinoLocalizations extends Omit<upstream0.CupertinoLocalizations, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/global_cupertino_localizations.dart::GlobalCupertinoLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations": readonly [];
}> {
    readonly __GlobalCupertinoLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalCupertinoLocalizations;
}
export interface GlobalCupertinoLocalizations {
    readonly [_flaxDartTypeValue]: GlobalCupertinoLocalizations;
    datePickerYear(yearIndex: number): string;
    datePickerMonth(monthIndex: number): string;
    datePickerStandaloneMonth(monthIndex: number): string;
    datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
    datePickerMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    datePickerHour(hour: number): string;
    datePickerHourSemanticsLabel(hour: number): string | null;
    datePickerMinute(minute: number): string;
    datePickerMinuteSemanticsLabel(minute: number): string | null;
    tabSemanticsLabel(options: {
        tabIndex: number;
        tabCount: number;
    }): string;
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
export declare abstract class GlobalCupertinoLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalCupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GlobalCupertinoLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:GlobalCupertinoLocalizations", readonly [], false];
    constructor(options: {
        localeName: string;
        fullYearFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        dayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        weekdayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        mediumDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitHourFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitMinuteFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        doubleDigitMinuteFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitSecondFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        decimalFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
    });
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
export declare namespace GlobalCupertinoLocalizations {
    function implement(args: [options: {
        localeName: string;
        fullYearFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        dayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        weekdayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        mediumDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitHourFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitMinuteFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        doubleDigitMinuteFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        singleDigitSecondFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        decimalFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
    }], implementation: {
        get datePickerHourSemanticsLabelOther(): string | null;
        get datePickerMinuteSemanticsLabelOther(): string | null;
        get datePickerDateOrderString(): string;
        get datePickerDateTimeOrderString(): string;
        get tabSemanticsLabelRaw(): string;
        get timerPickerHourLabelOther(): string | null;
        get timerPickerMinuteLabelOther(): string | null;
        get timerPickerSecondLabelOther(): string | null;
        get anteMeridiemAbbreviation(): string;
        get postMeridiemAbbreviation(): string;
        get todayLabel(): string;
        get alertDialogLabel(): string;
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
    }): GlobalCupertinoLocalizations;
}
export declare namespace GlobalCupertinoLocalizations {
    const delegate: upstream5.LocalizationsDelegate<upstream0.CupertinoLocalizations>;
}
export declare namespace GlobalCupertinoLocalizations {
    const delegates: DartList<upstream5.LocalizationsDelegate<unknown | null>>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "datePickerDateOrder" | "datePickerDateTimeOrder" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "todayLabel" | "alertDialogLabel" | "timerPickerHourLabels" | "timerPickerMinuteLabels" | "timerPickerSecondLabels" | "cutButtonLabel" | "copyButtonLabel" | "pasteButtonLabel" | "clearButtonLabel" | "noSpellCheckReplacementsLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "searchTextFieldPlaceholderLabel" | "modalBarrierDismissLabel" | "menuDismissLabel" | "cancelButtonLabel" | "backButtonLabel" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "datePickerHourSemanticsLabelZero" | "datePickerHourSemanticsLabelOne" | "datePickerHourSemanticsLabelTwo" | "datePickerHourSemanticsLabelFew" | "datePickerHourSemanticsLabelMany" | "datePickerHourSemanticsLabelOther" | "datePickerMinuteSemanticsLabelZero" | "datePickerMinuteSemanticsLabelOne" | "datePickerMinuteSemanticsLabelTwo" | "datePickerMinuteSemanticsLabelFew" | "datePickerMinuteSemanticsLabelMany" | "datePickerMinuteSemanticsLabelOther" | "datePickerDateOrderString" | "datePickerDateTimeOrderString" | "tabSemanticsLabelRaw" | "timerPickerHourLabelZero" | "timerPickerHourLabelOne" | "timerPickerHourLabelTwo" | "timerPickerHourLabelFew" | "timerPickerHourLabelMany" | "timerPickerHourLabelOther" | "timerPickerMinuteLabelZero" | "timerPickerMinuteLabelOne" | "timerPickerMinuteLabelTwo" | "timerPickerMinuteLabelFew" | "timerPickerMinuteLabelMany" | "timerPickerMinuteLabelOther" | "timerPickerSecondLabelZero" | "timerPickerSecondLabelOne" | "timerPickerSecondLabelTwo" | "timerPickerSecondLabelFew" | "timerPickerSecondLabelMany" | "timerPickerSecondLabelOther" | "datePickerYear" | "datePickerMonth" | "datePickerStandaloneMonth" | "datePickerDayOfMonth" | "datePickerMediumDate" | "datePickerHour" | "datePickerHourSemanticsLabel" | "datePickerMinute" | "datePickerMinuteSemanticsLabel" | "tabSemanticsLabel" | "timerPickerHour" | "timerPickerMinute" | "timerPickerSecond" | "timerPickerHourLabel" | "timerPickerMinuteLabel" | "timerPickerSecondLabel" | "__flaxBound:package:cupertino_ui/src/global_cupertino_localizations.dart::GlobalCupertinoLocalizations" | "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations";
export {};
