import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_GlobalMaterialLocalizations';
import '@flax/material-ui/_bindings/material_GlobalMaterialLocalizations';
import type * as upstream1 from '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_DateFormat';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream4 from '@flax/material-ui/_bindings/material_TimeOfDayFormat';
import '@flax/material-ui/_bindings/material_TimeOfDayFormat';
import type * as upstream5 from '@flax/material-ui/_bindings/material_ScriptCategory';
import '@flax/material-ui/_bindings/material_ScriptCategory';
import type * as upstream6 from '@flax/material-ui/_bindings/material_TimeOfDay';
import '@flax/material-ui/_bindings/material_TimeOfDay';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialLocalizationKy extends Omit<upstream0.GlobalMaterialLocalizations, _flaxOwnMembers0>, Omit<upstream1.MaterialLocalizations, _flaxOwnMembers0 | keyof upstream0.GlobalMaterialLocalizations>, Readonly<{
    "__flaxBound:package:material_ui/src/l10n/generated_material_localizations.dart::MaterialLocalizationKy": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/global_material_localizations.dart::GlobalMaterialLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
}> {
    readonly __MaterialLocalizationKy: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialLocalizationKy;
    readonly narrowWeekdays: DartList<string>;
    readonly firstDayOfWeekIndex: number;
    readonly dateRangeStartDateSemanticLabelRaw: string;
    readonly dateRangeEndDateSemanticLabelRaw: string;
    readonly scrimOnTapHintRaw: string;
    readonly aboutListTileTitleRaw: string;
    readonly pageRowsInfoTitleApproximateRaw: string;
    readonly pageRowsInfoTitleRaw: string;
    readonly tabLabelRaw: string;
    readonly selectedRowCountTitleZero: string | null;
    readonly selectedRowCountTitleOne: string | null;
    readonly selectedRowCountTitleTwo: string | null;
    readonly selectedRowCountTitleFew: string | null;
    readonly selectedRowCountTitleMany: string | null;
    readonly selectedRowCountTitleOther: string;
    readonly timeOfDayFormatRaw: upstream4.TimeOfDayFormat;
    readonly licensesPackageDetailTextZero: string | null;
    readonly licensesPackageDetailTextOne: string | null;
    readonly licensesPackageDetailTextTwo: string | null;
    readonly licensesPackageDetailTextMany: string | null;
    readonly licensesPackageDetailTextFew: string | null;
    readonly licensesPackageDetailTextOther: string;
    readonly remainingTextFieldCharacterCountZero: string | null;
    readonly remainingTextFieldCharacterCountOne: string | null;
    readonly remainingTextFieldCharacterCountTwo: string | null;
    readonly remainingTextFieldCharacterCountMany: string | null;
    readonly remainingTextFieldCharacterCountFew: string | null;
    readonly remainingTextFieldCharacterCountOther: string;
    readonly scriptCategory: upstream5.ScriptCategory;
    readonly openAppDrawerTooltip: string;
    readonly backButtonTooltip: string;
    readonly clearButtonTooltip: string;
    readonly closeButtonTooltip: string;
    readonly deleteButtonTooltip: string;
    readonly moreButtonTooltip: string;
    readonly nextMonthTooltip: string;
    readonly previousMonthTooltip: string;
    readonly firstPageTooltip: string;
    readonly lastPageTooltip: string;
    readonly nextPageTooltip: string;
    readonly previousPageTooltip: string;
    readonly showMenuTooltip: string;
    readonly licensesPageTitle: string;
    readonly rowsPerPageTitle: string;
    readonly cancelButtonLabel: string;
    readonly closeButtonLabel: string;
    readonly continueButtonLabel: string;
    readonly copyButtonLabel: string;
    readonly cutButtonLabel: string;
    readonly scanTextButtonLabel: string;
    readonly okButtonLabel: string;
    readonly pasteButtonLabel: string;
    readonly selectAllButtonLabel: string;
    readonly lookUpButtonLabel: string;
    readonly searchWebButtonLabel: string;
    readonly shareButtonLabel: string;
    readonly viewLicensesButtonLabel: string;
    readonly anteMeridiemAbbreviation: string;
    readonly postMeridiemAbbreviation: string;
    readonly timePickerHourModeAnnouncement: string;
    readonly timePickerMinuteModeAnnouncement: string;
    readonly modalBarrierDismissLabel: string;
    readonly menuDismissLabel: string;
    readonly drawerLabel: string;
    readonly popupMenuLabel: string;
    readonly menuBarMenuLabel: string;
    readonly dialogLabel: string;
    readonly alertDialogLabel: string;
    readonly searchFieldLabel: string;
    readonly currentDateLabel: string;
    readonly selectedDateLabel: string;
    readonly scrimLabel: string;
    readonly bottomSheetLabel: string;
    readonly dateSeparator: string;
    readonly dateHelpText: string;
    readonly selectYearSemanticsLabel: string;
    readonly unspecifiedDate: string;
    readonly unspecifiedDateRange: string;
    readonly dateInputLabel: string;
    readonly dateRangeStartLabel: string;
    readonly dateRangeEndLabel: string;
    readonly invalidDateFormatLabel: string;
    readonly invalidDateRangeLabel: string;
    readonly dateOutOfRangeLabel: string;
    readonly saveButtonLabel: string;
    readonly datePickerHelpText: string;
    readonly dateRangePickerHelpText: string;
    readonly calendarModeButtonLabel: string;
    readonly inputDateModeButtonLabel: string;
    readonly timePickerDialHelpText: string;
    readonly timePickerInputHelpText: string;
    readonly timePickerHourLabel: string;
    readonly timePickerMinuteLabel: string;
    readonly invalidTimeLabel: string;
    readonly dialModeButtonLabel: string;
    readonly inputTimeModeButtonLabel: string;
    readonly signedInLabel: string;
    readonly hideAccountsLabel: string;
    readonly showAccountsLabel: string;
    readonly reorderItemToStart: string;
    readonly reorderItemToEnd: string;
    readonly reorderItemUp: string;
    readonly reorderItemDown: string;
    readonly reorderItemLeft: string;
    readonly reorderItemRight: string;
    readonly expandedIconTapHint: string;
    readonly collapsedIconTapHint: string;
    readonly expansionTileExpandedHint: string;
    readonly expansionTileCollapsedHint: string;
    readonly expansionTileExpandedTapHint: string;
    readonly expansionTileCollapsedTapHint: string;
    readonly expandedHint: string;
    readonly collapsedHint: string;
    readonly refreshIndicatorSemanticLabel: string;
    readonly keyboardKeyAlt: string;
    readonly keyboardKeyAltGraph: string;
    readonly keyboardKeyBackspace: string;
    readonly keyboardKeyCapsLock: string;
    readonly keyboardKeyChannelDown: string;
    readonly keyboardKeyChannelUp: string;
    readonly keyboardKeyControl: string;
    readonly keyboardKeyDelete: string;
    readonly keyboardKeyEject: string;
    readonly keyboardKeyEnd: string;
    readonly keyboardKeyEscape: string;
    readonly keyboardKeyFn: string;
    readonly keyboardKeyHome: string;
    readonly keyboardKeyInsert: string;
    readonly keyboardKeyMeta: string;
    readonly keyboardKeyMetaMacOs: string;
    readonly keyboardKeyMetaWindows: string;
    readonly keyboardKeyNumLock: string;
    readonly keyboardKeyNumpad1: string;
    readonly keyboardKeyNumpad2: string;
    readonly keyboardKeyNumpad3: string;
    readonly keyboardKeyNumpad4: string;
    readonly keyboardKeyNumpad5: string;
    readonly keyboardKeyNumpad6: string;
    readonly keyboardKeyNumpad7: string;
    readonly keyboardKeyNumpad8: string;
    readonly keyboardKeyNumpad9: string;
    readonly keyboardKeyNumpad0: string;
    readonly keyboardKeyNumpadAdd: string;
    readonly keyboardKeyNumpadComma: string;
    readonly keyboardKeyNumpadDecimal: string;
    readonly keyboardKeyNumpadDivide: string;
    readonly keyboardKeyNumpadEnter: string;
    readonly keyboardKeyNumpadEqual: string;
    readonly keyboardKeyNumpadMultiply: string;
    readonly keyboardKeyNumpadParenLeft: string;
    readonly keyboardKeyNumpadParenRight: string;
    readonly keyboardKeyNumpadSubtract: string;
    readonly keyboardKeyPageDown: string;
    readonly keyboardKeyPageUp: string;
    readonly keyboardKeyPower: string;
    readonly keyboardKeyPowerOff: string;
    readonly keyboardKeyPrintScreen: string;
    readonly keyboardKeyScrollLock: string;
    readonly keyboardKeySelect: string;
    readonly keyboardKeyShift: string;
    readonly keyboardKeySpace: string;
    formatHour(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
    formatMinute(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>): string;
    formatYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatCompactDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatShortDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatFullDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatMonthYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatShortMonthDay(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    parseCompactDate(inputString: string | null): upstream7.DateTime | null;
    formatDecimal(number: number): string;
    formatTimeOfDay(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
    dateRangeStartDateSemanticLabel(formattedDate: string): string;
    dateRangeEndDateSemanticLabel(formattedDate: string): string;
    scrimOnTapHint(modalRouteContentName: string): string;
    aboutListTileTitle(applicationName: string): string;
    pageRowsInfoTitle(firstRow: number, lastRow: number, rowCount: number, rowCountIsApproximate: boolean): string;
    tabLabel(options: {
        tabCount: number;
        tabIndex: number;
    }): string;
    selectedRowCountTitle(selectedRowCount: number): string;
    timeOfDayFormat(options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): upstream4.TimeOfDayFormat;
    licensesPackageDetailText(licenseCount: number): string;
    remainingTextFieldCharacterCount(remaining: number): string;
}
export declare function _MaterialLocalizationKyFactory(options: {
    localeName?: string | undefined;
    fullYearFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    compactDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    shortDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    mediumDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    longDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    yearMonthFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    shortMonthDayFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    decimalFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>;
    twoDigitZeroPaddedFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>;
}): MaterialLocalizationKy;
export interface _MaterialLocalizationKyNative extends MaterialLocalizationKy {
    readonly [_flaxDartTypeValue]: _MaterialLocalizationKyNative;
    formatHour(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
    formatMinute(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>): string;
    formatYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatCompactDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatShortDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatFullDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatMonthYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    formatShortMonthDay(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): string;
    parseCompactDate(inputString: string | null): upstream7.DateTime | null;
    formatDecimal(number: number): string;
    formatTimeOfDay(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
    dateRangeStartDateSemanticLabel(formattedDate: string): string;
    dateRangeEndDateSemanticLabel(formattedDate: string): string;
    scrimOnTapHint(modalRouteContentName: string): string;
    aboutListTileTitle(applicationName: string): string;
    pageRowsInfoTitle(firstRow: number, lastRow: number, rowCount: number, rowCountIsApproximate: boolean): string;
    tabLabel(options: {
        tabIndex: number;
        tabCount: number;
    }): string;
    selectedRowCountTitle(selectedRowCount: number): string;
    timeOfDayFormat(options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): upstream4.TimeOfDayFormat;
    licensesPackageDetailText(licenseCount: number): string;
    remainingTextFieldCharacterCount(remaining: number): string;
    get aboutListTileTitleRaw(): string;
    get alertDialogLabel(): string;
    get anteMeridiemAbbreviation(): string;
    get backButtonTooltip(): string;
    get bottomSheetLabel(): string;
    get calendarModeButtonLabel(): string;
    get cancelButtonLabel(): string;
    get clearButtonTooltip(): string;
    get closeButtonLabel(): string;
    get closeButtonTooltip(): string;
    get collapsedHint(): string;
    get collapsedIconTapHint(): string;
    get continueButtonLabel(): string;
    get copyButtonLabel(): string;
    get currentDateLabel(): string;
    get cutButtonLabel(): string;
    get dateHelpText(): string;
    get dateInputLabel(): string;
    get dateOutOfRangeLabel(): string;
    get datePickerHelpText(): string;
    get dateRangeEndDateSemanticLabelRaw(): string;
    get dateRangeEndLabel(): string;
    get dateRangePickerHelpText(): string;
    get dateRangeStartDateSemanticLabelRaw(): string;
    get dateRangeStartLabel(): string;
    get dateSeparator(): string;
    get deleteButtonTooltip(): string;
    get dialModeButtonLabel(): string;
    get dialogLabel(): string;
    get drawerLabel(): string;
    get expandedHint(): string;
    get expandedIconTapHint(): string;
    get expansionTileCollapsedHint(): string;
    get expansionTileCollapsedTapHint(): string;
    get expansionTileExpandedHint(): string;
    get expansionTileExpandedTapHint(): string;
    get firstPageTooltip(): string;
    get hideAccountsLabel(): string;
    get inputDateModeButtonLabel(): string;
    get inputTimeModeButtonLabel(): string;
    get invalidDateFormatLabel(): string;
    get invalidDateRangeLabel(): string;
    get invalidTimeLabel(): string;
    get keyboardKeyAlt(): string;
    get keyboardKeyAltGraph(): string;
    get keyboardKeyBackspace(): string;
    get keyboardKeyCapsLock(): string;
    get keyboardKeyChannelDown(): string;
    get keyboardKeyChannelUp(): string;
    get keyboardKeyControl(): string;
    get keyboardKeyDelete(): string;
    get keyboardKeyEject(): string;
    get keyboardKeyEnd(): string;
    get keyboardKeyEscape(): string;
    get keyboardKeyFn(): string;
    get keyboardKeyHome(): string;
    get keyboardKeyInsert(): string;
    get keyboardKeyMeta(): string;
    get keyboardKeyMetaMacOs(): string;
    get keyboardKeyMetaWindows(): string;
    get keyboardKeyNumLock(): string;
    get keyboardKeyNumpad0(): string;
    get keyboardKeyNumpad1(): string;
    get keyboardKeyNumpad2(): string;
    get keyboardKeyNumpad3(): string;
    get keyboardKeyNumpad4(): string;
    get keyboardKeyNumpad5(): string;
    get keyboardKeyNumpad6(): string;
    get keyboardKeyNumpad7(): string;
    get keyboardKeyNumpad8(): string;
    get keyboardKeyNumpad9(): string;
    get keyboardKeyNumpadAdd(): string;
    get keyboardKeyNumpadComma(): string;
    get keyboardKeyNumpadDecimal(): string;
    get keyboardKeyNumpadDivide(): string;
    get keyboardKeyNumpadEnter(): string;
    get keyboardKeyNumpadEqual(): string;
    get keyboardKeyNumpadMultiply(): string;
    get keyboardKeyNumpadParenLeft(): string;
    get keyboardKeyNumpadParenRight(): string;
    get keyboardKeyNumpadSubtract(): string;
    get keyboardKeyPageDown(): string;
    get keyboardKeyPageUp(): string;
    get keyboardKeyPower(): string;
    get keyboardKeyPowerOff(): string;
    get keyboardKeyPrintScreen(): string;
    get keyboardKeyScrollLock(): string;
    get keyboardKeySelect(): string;
    get keyboardKeyShift(): string;
    get keyboardKeySpace(): string;
    get lastPageTooltip(): string;
    get licensesPackageDetailTextFew(): string | null;
    get licensesPackageDetailTextMany(): string | null;
    get licensesPackageDetailTextOne(): string | null;
    get licensesPackageDetailTextOther(): string;
    get licensesPackageDetailTextTwo(): string | null;
    get licensesPackageDetailTextZero(): string | null;
    get licensesPageTitle(): string;
    get lookUpButtonLabel(): string;
    get menuBarMenuLabel(): string;
    get menuDismissLabel(): string;
    get modalBarrierDismissLabel(): string;
    get moreButtonTooltip(): string;
    get nextMonthTooltip(): string;
    get nextPageTooltip(): string;
    get okButtonLabel(): string;
    get openAppDrawerTooltip(): string;
    get pageRowsInfoTitleRaw(): string;
    get pageRowsInfoTitleApproximateRaw(): string;
    get pasteButtonLabel(): string;
    get popupMenuLabel(): string;
    get postMeridiemAbbreviation(): string;
    get previousMonthTooltip(): string;
    get previousPageTooltip(): string;
    get refreshIndicatorSemanticLabel(): string;
    get remainingTextFieldCharacterCountFew(): string | null;
    get remainingTextFieldCharacterCountMany(): string | null;
    get remainingTextFieldCharacterCountOne(): string | null;
    get remainingTextFieldCharacterCountOther(): string;
    get remainingTextFieldCharacterCountTwo(): string | null;
    get remainingTextFieldCharacterCountZero(): string | null;
    get reorderItemDown(): string;
    get reorderItemLeft(): string;
    get reorderItemRight(): string;
    get reorderItemToEnd(): string;
    get reorderItemToStart(): string;
    get reorderItemUp(): string;
    get rowsPerPageTitle(): string;
    get saveButtonLabel(): string;
    get scanTextButtonLabel(): string;
    get scrimLabel(): string;
    get scrimOnTapHintRaw(): string;
    get scriptCategory(): upstream5.ScriptCategory;
    get searchFieldLabel(): string;
    get searchWebButtonLabel(): string;
    get selectAllButtonLabel(): string;
    get selectYearSemanticsLabel(): string;
    get selectedDateLabel(): string;
    get selectedRowCountTitleFew(): string | null;
    get selectedRowCountTitleMany(): string | null;
    get selectedRowCountTitleOne(): string | null;
    get selectedRowCountTitleOther(): string;
    get selectedRowCountTitleTwo(): string | null;
    get selectedRowCountTitleZero(): string | null;
    get shareButtonLabel(): string;
    get showAccountsLabel(): string;
    get showMenuTooltip(): string;
    get signedInLabel(): string;
    get tabLabelRaw(): string;
    get timeOfDayFormatRaw(): upstream4.TimeOfDayFormat;
    get timePickerDialHelpText(): string;
    get timePickerHourLabel(): string;
    get timePickerHourModeAnnouncement(): string;
    get timePickerInputHelpText(): string;
    get timePickerMinuteLabel(): string;
    get timePickerMinuteModeAnnouncement(): string;
    get unspecifiedDate(): string;
    get unspecifiedDateRange(): string;
    get viewLicensesButtonLabel(): string;
    get narrowWeekdays(): DartList<string>;
    get firstDayOfWeekIndex(): number;
}
export declare abstract class _MaterialLocalizationKyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialLocalizationKy>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialLocalizationKy;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialLocalizationKy", readonly [], false];
    constructor(options: {
        localeName?: string | undefined;
        fullYearFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        compactDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        shortDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        mediumDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        longDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        yearMonthFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        shortMonthDayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        decimalFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
        twoDigitZeroPaddedFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
    });
}
export declare namespace _MaterialLocalizationKyFactory {
    function implement(args: [options: {
        localeName?: string | undefined;
        fullYearFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        compactDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        shortDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        mediumDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        longDateFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        yearMonthFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        shortMonthDayFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
        }>;
        decimalFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
        twoDigitZeroPaddedFormat: Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>;
    }], implementation: {}): MaterialLocalizationKy;
}
declare const _MaterialLocalizationKyBinding: typeof _MaterialLocalizationKyFactory & (new (options: {
    localeName?: string | undefined;
    fullYearFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    compactDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    shortDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    mediumDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    longDateFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    yearMonthFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    shortMonthDayFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/date_format.dart::DateFormat": readonly [];
    }>;
    decimalFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>;
    twoDigitZeroPaddedFormat: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>;
}) => _MaterialLocalizationKyNative);
export declare const MaterialLocalizationKy: typeof _MaterialLocalizationKyBinding & _FlaxInstanceType<MaterialLocalizationKy> & _FlaxDartType<MaterialLocalizationKy, readonly ["class", "flax.material/material#type:MaterialLocalizationKy", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "narrowWeekdays" | "firstDayOfWeekIndex" | "dateRangeStartDateSemanticLabelRaw" | "dateRangeEndDateSemanticLabelRaw" | "scrimOnTapHintRaw" | "aboutListTileTitleRaw" | "pageRowsInfoTitleApproximateRaw" | "pageRowsInfoTitleRaw" | "tabLabelRaw" | "selectedRowCountTitleZero" | "selectedRowCountTitleOne" | "selectedRowCountTitleTwo" | "selectedRowCountTitleFew" | "selectedRowCountTitleMany" | "selectedRowCountTitleOther" | "timeOfDayFormatRaw" | "licensesPackageDetailTextZero" | "licensesPackageDetailTextOne" | "licensesPackageDetailTextTwo" | "licensesPackageDetailTextMany" | "licensesPackageDetailTextFew" | "licensesPackageDetailTextOther" | "remainingTextFieldCharacterCountZero" | "remainingTextFieldCharacterCountOne" | "remainingTextFieldCharacterCountTwo" | "remainingTextFieldCharacterCountMany" | "remainingTextFieldCharacterCountFew" | "remainingTextFieldCharacterCountOther" | "scriptCategory" | "openAppDrawerTooltip" | "backButtonTooltip" | "clearButtonTooltip" | "closeButtonTooltip" | "deleteButtonTooltip" | "moreButtonTooltip" | "nextMonthTooltip" | "previousMonthTooltip" | "firstPageTooltip" | "lastPageTooltip" | "nextPageTooltip" | "previousPageTooltip" | "showMenuTooltip" | "licensesPageTitle" | "rowsPerPageTitle" | "cancelButtonLabel" | "closeButtonLabel" | "continueButtonLabel" | "copyButtonLabel" | "cutButtonLabel" | "scanTextButtonLabel" | "okButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "viewLicensesButtonLabel" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "timePickerHourModeAnnouncement" | "timePickerMinuteModeAnnouncement" | "modalBarrierDismissLabel" | "menuDismissLabel" | "drawerLabel" | "popupMenuLabel" | "menuBarMenuLabel" | "dialogLabel" | "alertDialogLabel" | "searchFieldLabel" | "currentDateLabel" | "selectedDateLabel" | "scrimLabel" | "bottomSheetLabel" | "dateSeparator" | "dateHelpText" | "selectYearSemanticsLabel" | "unspecifiedDate" | "unspecifiedDateRange" | "dateInputLabel" | "dateRangeStartLabel" | "dateRangeEndLabel" | "invalidDateFormatLabel" | "invalidDateRangeLabel" | "dateOutOfRangeLabel" | "saveButtonLabel" | "datePickerHelpText" | "dateRangePickerHelpText" | "calendarModeButtonLabel" | "inputDateModeButtonLabel" | "timePickerDialHelpText" | "timePickerInputHelpText" | "timePickerHourLabel" | "timePickerMinuteLabel" | "invalidTimeLabel" | "dialModeButtonLabel" | "inputTimeModeButtonLabel" | "signedInLabel" | "hideAccountsLabel" | "showAccountsLabel" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "expandedIconTapHint" | "collapsedIconTapHint" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "refreshIndicatorSemanticLabel" | "keyboardKeyAlt" | "keyboardKeyAltGraph" | "keyboardKeyBackspace" | "keyboardKeyCapsLock" | "keyboardKeyChannelDown" | "keyboardKeyChannelUp" | "keyboardKeyControl" | "keyboardKeyDelete" | "keyboardKeyEject" | "keyboardKeyEnd" | "keyboardKeyEscape" | "keyboardKeyFn" | "keyboardKeyHome" | "keyboardKeyInsert" | "keyboardKeyMeta" | "keyboardKeyMetaMacOs" | "keyboardKeyMetaWindows" | "keyboardKeyNumLock" | "keyboardKeyNumpad1" | "keyboardKeyNumpad2" | "keyboardKeyNumpad3" | "keyboardKeyNumpad4" | "keyboardKeyNumpad5" | "keyboardKeyNumpad6" | "keyboardKeyNumpad7" | "keyboardKeyNumpad8" | "keyboardKeyNumpad9" | "keyboardKeyNumpad0" | "keyboardKeyNumpadAdd" | "keyboardKeyNumpadComma" | "keyboardKeyNumpadDecimal" | "keyboardKeyNumpadDivide" | "keyboardKeyNumpadEnter" | "keyboardKeyNumpadEqual" | "keyboardKeyNumpadMultiply" | "keyboardKeyNumpadParenLeft" | "keyboardKeyNumpadParenRight" | "keyboardKeyNumpadSubtract" | "keyboardKeyPageDown" | "keyboardKeyPageUp" | "keyboardKeyPower" | "keyboardKeyPowerOff" | "keyboardKeyPrintScreen" | "keyboardKeyScrollLock" | "keyboardKeySelect" | "keyboardKeyShift" | "keyboardKeySpace" | "formatHour" | "formatMinute" | "formatYear" | "formatCompactDate" | "formatShortDate" | "formatMediumDate" | "formatFullDate" | "formatMonthYear" | "formatShortMonthDay" | "parseCompactDate" | "formatDecimal" | "formatTimeOfDay" | "dateRangeStartDateSemanticLabel" | "dateRangeEndDateSemanticLabel" | "scrimOnTapHint" | "aboutListTileTitle" | "pageRowsInfoTitle" | "tabLabel" | "selectedRowCountTitle" | "timeOfDayFormat" | "licensesPackageDetailText" | "remainingTextFieldCharacterCount" | "__flaxBound:package:material_ui/src/l10n/generated_material_localizations.dart::MaterialLocalizationKy" | "__flaxBound:package:material_ui/src/global_material_localizations.dart::GlobalMaterialLocalizations" | "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations";
export {};
