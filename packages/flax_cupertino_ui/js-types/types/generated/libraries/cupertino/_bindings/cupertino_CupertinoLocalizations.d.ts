import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateOrder';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import '@flax/cupertino-ui/_bindings/cupertino_DatePickerDateTimeOrder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoLocalizations extends Readonly<{
    "__flaxBound:package:cupertino_ui/src/localizations.dart::CupertinoLocalizations": readonly [];
}> {
    readonly __CupertinoLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoLocalizations;
}
export interface CupertinoLocalizations {
    readonly [_flaxDartTypeValue]: CupertinoLocalizations;
    get expansionTileExpandedHint(): string;
    get expansionTileCollapsedHint(): string;
    get expansionTileExpandedTapHint(): string;
    get expansionTileCollapsedTapHint(): string;
    get expandedHint(): string;
    get collapsedHint(): string;
}
export declare abstract class CupertinoLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoLocalizations", readonly [], false];
    constructor();
    abstract datePickerYear(yearIndex: number): string;
    abstract datePickerMonth(monthIndex: number): string;
    abstract datePickerStandaloneMonth(monthIndex: number): string;
    abstract datePickerDayOfMonth(dayIndex: number, weekDay?: number | null): string;
    abstract datePickerMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    abstract datePickerHour(hour: number): string;
    abstract datePickerHourSemanticsLabel(hour: number): string | null;
    abstract datePickerMinute(minute: number): string;
    abstract datePickerMinuteSemanticsLabel(minute: number): string | null;
    abstract tabSemanticsLabel(options: {
        tabIndex: number;
        tabCount: number;
    }): string;
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
export declare namespace CupertinoLocalizations {
    function implement(args: [], implementation: {
        datePickerYear: ((yearIndex: number) => string);
        datePickerMonth: ((monthIndex: number) => string);
        datePickerStandaloneMonth: ((monthIndex: number) => string);
        datePickerDayOfMonth: ((dayIndex: number, weekDay?: number | null) => string);
        datePickerMediumDate: ((date: upstream3.DateTime) => string);
        datePickerHour: ((hour: number) => string);
        datePickerHourSemanticsLabel: ((hour: number) => string | null);
        datePickerMinute: ((minute: number) => string);
        datePickerMinuteSemanticsLabel: ((minute: number) => string | null);
        tabSemanticsLabel: ((options: {
            tabIndex: number;
            tabCount: number;
        }) => string);
        timerPickerHour: ((hour: number) => string);
        timerPickerMinute: ((minute: number) => string);
        timerPickerSecond: ((second: number) => string);
        timerPickerHourLabel: ((hour: number) => string | null);
        timerPickerMinuteLabel: ((minute: number) => string | null);
        timerPickerSecondLabel: ((second: number) => string | null);
        get datePickerDateOrder(): upstream0.DatePickerDateOrder;
        get datePickerDateTimeOrder(): upstream1.DatePickerDateTimeOrder;
        get anteMeridiemAbbreviation(): string;
        get postMeridiemAbbreviation(): string;
        get todayLabel(): string;
        get alertDialogLabel(): string;
        get timerPickerHourLabels(): DartListInput<string, string>;
        get timerPickerMinuteLabels(): DartListInput<string, string>;
        get timerPickerSecondLabels(): DartListInput<string, string>;
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
    }): CupertinoLocalizations;
}
export declare namespace CupertinoLocalizations {
    function of(context: upstream2.BuildContext): CupertinoLocalizations;
}
