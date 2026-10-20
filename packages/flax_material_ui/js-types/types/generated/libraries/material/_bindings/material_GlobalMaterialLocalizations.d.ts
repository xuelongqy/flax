import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_DateFormat';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ScriptCategory';
import '@flax/material-ui/_bindings/material_ScriptCategory';
import type * as upstream4 from '@flax/material-ui/_bindings/material_TimeOfDayFormat';
import '@flax/material-ui/_bindings/material_TimeOfDayFormat';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream6 from '@flax/material-ui/_bindings/material_TimeOfDay';
import '@flax/material-ui/_bindings/material_TimeOfDay';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GlobalMaterialLocalizations extends Omit<upstream0.MaterialLocalizations, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/global_material_localizations.dart::GlobalMaterialLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
}> {
    readonly __GlobalMaterialLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalMaterialLocalizations;
}
export interface GlobalMaterialLocalizations {
    readonly [_flaxDartTypeValue]: GlobalMaterialLocalizations;
    aboutListTileTitle(applicationName: string): string;
    licensesPackageDetailText(licenseCount: number): string;
    pageRowsInfoTitle(firstRow: number, lastRow: number, rowCount: number, rowCountIsApproximate: boolean): string;
    tabLabel(options: {
        tabIndex: number;
        tabCount: number;
    }): string;
    selectedRowCountTitle(selectedRowCount: number): string;
    scrimOnTapHint(modalRouteContentName: string): string;
    timeOfDayFormat(options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): upstream4.TimeOfDayFormat;
    formatDecimal(number: number): string;
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
    formatTimeOfDay(timeOfDay: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
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
    dateRangeStartDateSemanticLabel(formattedDate: string): string;
    dateRangeEndDateSemanticLabel(formattedDate: string): string;
    remainingTextFieldCharacterCount(remaining: number): string;
    get narrowWeekdays(): DartList<string>;
    get firstDayOfWeekIndex(): number;
    get selectedRowCountTitleZero(): string | null;
    get selectedRowCountTitleOne(): string | null;
    get selectedRowCountTitleTwo(): string | null;
    get selectedRowCountTitleFew(): string | null;
    get selectedRowCountTitleMany(): string | null;
    get licensesPackageDetailTextZero(): string | null;
    get licensesPackageDetailTextOne(): string | null;
    get licensesPackageDetailTextTwo(): string | null;
    get licensesPackageDetailTextMany(): string | null;
    get licensesPackageDetailTextFew(): string | null;
    get remainingTextFieldCharacterCountZero(): string | null;
    get remainingTextFieldCharacterCountOne(): string | null;
    get remainingTextFieldCharacterCountTwo(): string | null;
    get remainingTextFieldCharacterCountMany(): string | null;
    get remainingTextFieldCharacterCountFew(): string | null;
}
export declare abstract class GlobalMaterialLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalMaterialLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GlobalMaterialLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:GlobalMaterialLocalizations", readonly [], false];
    constructor(options: {
        localeName: string;
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
    abstract get dateRangeStartDateSemanticLabelRaw(): string;
    abstract get dateRangeEndDateSemanticLabelRaw(): string;
    abstract get scrimOnTapHintRaw(): string;
    abstract get aboutListTileTitleRaw(): string;
    abstract get pageRowsInfoTitleApproximateRaw(): string;
    abstract get pageRowsInfoTitleRaw(): string;
    abstract get tabLabelRaw(): string;
    abstract get selectedRowCountTitleOther(): string;
    abstract get timeOfDayFormatRaw(): upstream4.TimeOfDayFormat;
    abstract get licensesPackageDetailTextOther(): string;
    abstract get remainingTextFieldCharacterCountOther(): string;
    abstract get scriptCategory(): upstream3.ScriptCategory;
    abstract get openAppDrawerTooltip(): string;
    abstract get backButtonTooltip(): string;
    abstract get clearButtonTooltip(): string;
    abstract get closeButtonTooltip(): string;
    abstract get deleteButtonTooltip(): string;
    abstract get moreButtonTooltip(): string;
    abstract get nextMonthTooltip(): string;
    abstract get previousMonthTooltip(): string;
    abstract get firstPageTooltip(): string;
    abstract get lastPageTooltip(): string;
    abstract get nextPageTooltip(): string;
    abstract get previousPageTooltip(): string;
    abstract get showMenuTooltip(): string;
    abstract get licensesPageTitle(): string;
    abstract get rowsPerPageTitle(): string;
    abstract get cancelButtonLabel(): string;
    abstract get closeButtonLabel(): string;
    abstract get continueButtonLabel(): string;
    abstract get copyButtonLabel(): string;
    abstract get cutButtonLabel(): string;
    abstract get scanTextButtonLabel(): string;
    abstract get okButtonLabel(): string;
    abstract get pasteButtonLabel(): string;
    abstract get selectAllButtonLabel(): string;
    abstract get lookUpButtonLabel(): string;
    abstract get searchWebButtonLabel(): string;
    abstract get shareButtonLabel(): string;
    abstract get viewLicensesButtonLabel(): string;
    abstract get anteMeridiemAbbreviation(): string;
    abstract get postMeridiemAbbreviation(): string;
    abstract get timePickerHourModeAnnouncement(): string;
    abstract get timePickerMinuteModeAnnouncement(): string;
    abstract get modalBarrierDismissLabel(): string;
    abstract get menuDismissLabel(): string;
    abstract get drawerLabel(): string;
    abstract get popupMenuLabel(): string;
    abstract get menuBarMenuLabel(): string;
    abstract get dialogLabel(): string;
    abstract get alertDialogLabel(): string;
    abstract get searchFieldLabel(): string;
    abstract get currentDateLabel(): string;
    abstract get selectedDateLabel(): string;
    abstract get scrimLabel(): string;
    abstract get bottomSheetLabel(): string;
    abstract get dateSeparator(): string;
    abstract get dateHelpText(): string;
    abstract get selectYearSemanticsLabel(): string;
    abstract get unspecifiedDate(): string;
    abstract get unspecifiedDateRange(): string;
    abstract get dateInputLabel(): string;
    abstract get dateRangeStartLabel(): string;
    abstract get dateRangeEndLabel(): string;
    abstract get invalidDateFormatLabel(): string;
    abstract get invalidDateRangeLabel(): string;
    abstract get dateOutOfRangeLabel(): string;
    abstract get saveButtonLabel(): string;
    abstract get datePickerHelpText(): string;
    abstract get dateRangePickerHelpText(): string;
    abstract get calendarModeButtonLabel(): string;
    abstract get inputDateModeButtonLabel(): string;
    abstract get timePickerDialHelpText(): string;
    abstract get timePickerInputHelpText(): string;
    abstract get timePickerHourLabel(): string;
    abstract get timePickerMinuteLabel(): string;
    abstract get invalidTimeLabel(): string;
    abstract get dialModeButtonLabel(): string;
    abstract get inputTimeModeButtonLabel(): string;
    abstract get signedInLabel(): string;
    abstract get hideAccountsLabel(): string;
    abstract get showAccountsLabel(): string;
    abstract get reorderItemToStart(): string;
    abstract get reorderItemToEnd(): string;
    abstract get reorderItemUp(): string;
    abstract get reorderItemDown(): string;
    abstract get reorderItemLeft(): string;
    abstract get reorderItemRight(): string;
    abstract get expandedIconTapHint(): string;
    abstract get collapsedIconTapHint(): string;
    abstract get expansionTileExpandedHint(): string;
    abstract get expansionTileCollapsedHint(): string;
    abstract get expansionTileExpandedTapHint(): string;
    abstract get expansionTileCollapsedTapHint(): string;
    abstract get expandedHint(): string;
    abstract get collapsedHint(): string;
    abstract get refreshIndicatorSemanticLabel(): string;
    abstract get keyboardKeyAlt(): string;
    abstract get keyboardKeyAltGraph(): string;
    abstract get keyboardKeyBackspace(): string;
    abstract get keyboardKeyCapsLock(): string;
    abstract get keyboardKeyChannelDown(): string;
    abstract get keyboardKeyChannelUp(): string;
    abstract get keyboardKeyControl(): string;
    abstract get keyboardKeyDelete(): string;
    abstract get keyboardKeyEject(): string;
    abstract get keyboardKeyEnd(): string;
    abstract get keyboardKeyEscape(): string;
    abstract get keyboardKeyFn(): string;
    abstract get keyboardKeyHome(): string;
    abstract get keyboardKeyInsert(): string;
    abstract get keyboardKeyMeta(): string;
    abstract get keyboardKeyMetaMacOs(): string;
    abstract get keyboardKeyMetaWindows(): string;
    abstract get keyboardKeyNumLock(): string;
    abstract get keyboardKeyNumpad1(): string;
    abstract get keyboardKeyNumpad2(): string;
    abstract get keyboardKeyNumpad3(): string;
    abstract get keyboardKeyNumpad4(): string;
    abstract get keyboardKeyNumpad5(): string;
    abstract get keyboardKeyNumpad6(): string;
    abstract get keyboardKeyNumpad7(): string;
    abstract get keyboardKeyNumpad8(): string;
    abstract get keyboardKeyNumpad9(): string;
    abstract get keyboardKeyNumpad0(): string;
    abstract get keyboardKeyNumpadAdd(): string;
    abstract get keyboardKeyNumpadComma(): string;
    abstract get keyboardKeyNumpadDecimal(): string;
    abstract get keyboardKeyNumpadDivide(): string;
    abstract get keyboardKeyNumpadEnter(): string;
    abstract get keyboardKeyNumpadEqual(): string;
    abstract get keyboardKeyNumpadMultiply(): string;
    abstract get keyboardKeyNumpadParenLeft(): string;
    abstract get keyboardKeyNumpadParenRight(): string;
    abstract get keyboardKeyNumpadSubtract(): string;
    abstract get keyboardKeyPageDown(): string;
    abstract get keyboardKeyPageUp(): string;
    abstract get keyboardKeyPower(): string;
    abstract get keyboardKeyPowerOff(): string;
    abstract get keyboardKeyPrintScreen(): string;
    abstract get keyboardKeyScrollLock(): string;
    abstract get keyboardKeySelect(): string;
    abstract get keyboardKeyShift(): string;
    abstract get keyboardKeySpace(): string;
}
export declare namespace GlobalMaterialLocalizations {
    function implement(args: [options: {
        localeName: string;
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
    }], implementation: {
        get dateRangeStartDateSemanticLabelRaw(): string;
        get dateRangeEndDateSemanticLabelRaw(): string;
        get scrimOnTapHintRaw(): string;
        get aboutListTileTitleRaw(): string;
        get pageRowsInfoTitleApproximateRaw(): string;
        get pageRowsInfoTitleRaw(): string;
        get tabLabelRaw(): string;
        get selectedRowCountTitleOther(): string;
        get timeOfDayFormatRaw(): upstream4.TimeOfDayFormat;
        get licensesPackageDetailTextOther(): string;
        get remainingTextFieldCharacterCountOther(): string;
        get scriptCategory(): upstream3.ScriptCategory;
        get openAppDrawerTooltip(): string;
        get backButtonTooltip(): string;
        get clearButtonTooltip(): string;
        get closeButtonTooltip(): string;
        get deleteButtonTooltip(): string;
        get moreButtonTooltip(): string;
        get nextMonthTooltip(): string;
        get previousMonthTooltip(): string;
        get firstPageTooltip(): string;
        get lastPageTooltip(): string;
        get nextPageTooltip(): string;
        get previousPageTooltip(): string;
        get showMenuTooltip(): string;
        get licensesPageTitle(): string;
        get rowsPerPageTitle(): string;
        get cancelButtonLabel(): string;
        get closeButtonLabel(): string;
        get continueButtonLabel(): string;
        get copyButtonLabel(): string;
        get cutButtonLabel(): string;
        get scanTextButtonLabel(): string;
        get okButtonLabel(): string;
        get pasteButtonLabel(): string;
        get selectAllButtonLabel(): string;
        get lookUpButtonLabel(): string;
        get searchWebButtonLabel(): string;
        get shareButtonLabel(): string;
        get viewLicensesButtonLabel(): string;
        get anteMeridiemAbbreviation(): string;
        get postMeridiemAbbreviation(): string;
        get timePickerHourModeAnnouncement(): string;
        get timePickerMinuteModeAnnouncement(): string;
        get modalBarrierDismissLabel(): string;
        get menuDismissLabel(): string;
        get drawerLabel(): string;
        get popupMenuLabel(): string;
        get menuBarMenuLabel(): string;
        get dialogLabel(): string;
        get alertDialogLabel(): string;
        get searchFieldLabel(): string;
        get currentDateLabel(): string;
        get selectedDateLabel(): string;
        get scrimLabel(): string;
        get bottomSheetLabel(): string;
        get dateSeparator(): string;
        get dateHelpText(): string;
        get selectYearSemanticsLabel(): string;
        get unspecifiedDate(): string;
        get unspecifiedDateRange(): string;
        get dateInputLabel(): string;
        get dateRangeStartLabel(): string;
        get dateRangeEndLabel(): string;
        get invalidDateFormatLabel(): string;
        get invalidDateRangeLabel(): string;
        get dateOutOfRangeLabel(): string;
        get saveButtonLabel(): string;
        get datePickerHelpText(): string;
        get dateRangePickerHelpText(): string;
        get calendarModeButtonLabel(): string;
        get inputDateModeButtonLabel(): string;
        get timePickerDialHelpText(): string;
        get timePickerInputHelpText(): string;
        get timePickerHourLabel(): string;
        get timePickerMinuteLabel(): string;
        get invalidTimeLabel(): string;
        get dialModeButtonLabel(): string;
        get inputTimeModeButtonLabel(): string;
        get signedInLabel(): string;
        get hideAccountsLabel(): string;
        get showAccountsLabel(): string;
        get reorderItemToStart(): string;
        get reorderItemToEnd(): string;
        get reorderItemUp(): string;
        get reorderItemDown(): string;
        get reorderItemLeft(): string;
        get reorderItemRight(): string;
        get expandedIconTapHint(): string;
        get collapsedIconTapHint(): string;
        get expansionTileExpandedHint(): string;
        get expansionTileCollapsedHint(): string;
        get expansionTileExpandedTapHint(): string;
        get expansionTileCollapsedTapHint(): string;
        get expandedHint(): string;
        get collapsedHint(): string;
        get refreshIndicatorSemanticLabel(): string;
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
        get keyboardKeyNumpad1(): string;
        get keyboardKeyNumpad2(): string;
        get keyboardKeyNumpad3(): string;
        get keyboardKeyNumpad4(): string;
        get keyboardKeyNumpad5(): string;
        get keyboardKeyNumpad6(): string;
        get keyboardKeyNumpad7(): string;
        get keyboardKeyNumpad8(): string;
        get keyboardKeyNumpad9(): string;
        get keyboardKeyNumpad0(): string;
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
    }): GlobalMaterialLocalizations;
}
export declare namespace GlobalMaterialLocalizations {
    const delegate: upstream5.LocalizationsDelegate<upstream0.MaterialLocalizations>;
}
export declare namespace GlobalMaterialLocalizations {
    const delegates: DartList<upstream5.LocalizationsDelegate<unknown | null>>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "openAppDrawerTooltip" | "backButtonTooltip" | "clearButtonTooltip" | "closeButtonTooltip" | "deleteButtonTooltip" | "moreButtonTooltip" | "nextMonthTooltip" | "previousMonthTooltip" | "firstPageTooltip" | "lastPageTooltip" | "nextPageTooltip" | "previousPageTooltip" | "showMenuTooltip" | "licensesPageTitle" | "rowsPerPageTitle" | "cancelButtonLabel" | "closeButtonLabel" | "continueButtonLabel" | "copyButtonLabel" | "cutButtonLabel" | "scanTextButtonLabel" | "okButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "viewLicensesButtonLabel" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "timePickerHourModeAnnouncement" | "timePickerMinuteModeAnnouncement" | "modalBarrierDismissLabel" | "menuDismissLabel" | "drawerLabel" | "popupMenuLabel" | "menuBarMenuLabel" | "dialogLabel" | "alertDialogLabel" | "searchFieldLabel" | "currentDateLabel" | "selectedDateLabel" | "scrimLabel" | "bottomSheetLabel" | "scriptCategory" | "narrowWeekdays" | "firstDayOfWeekIndex" | "dateSeparator" | "dateHelpText" | "selectYearSemanticsLabel" | "unspecifiedDate" | "unspecifiedDateRange" | "dateInputLabel" | "dateRangeStartLabel" | "dateRangeEndLabel" | "invalidDateFormatLabel" | "invalidDateRangeLabel" | "dateOutOfRangeLabel" | "saveButtonLabel" | "datePickerHelpText" | "dateRangePickerHelpText" | "calendarModeButtonLabel" | "inputDateModeButtonLabel" | "timePickerDialHelpText" | "timePickerInputHelpText" | "timePickerHourLabel" | "timePickerMinuteLabel" | "invalidTimeLabel" | "dialModeButtonLabel" | "inputTimeModeButtonLabel" | "signedInLabel" | "hideAccountsLabel" | "showAccountsLabel" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "expandedIconTapHint" | "collapsedIconTapHint" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "refreshIndicatorSemanticLabel" | "keyboardKeyAlt" | "keyboardKeyAltGraph" | "keyboardKeyBackspace" | "keyboardKeyCapsLock" | "keyboardKeyChannelDown" | "keyboardKeyChannelUp" | "keyboardKeyControl" | "keyboardKeyDelete" | "keyboardKeyEject" | "keyboardKeyEnd" | "keyboardKeyEscape" | "keyboardKeyFn" | "keyboardKeyHome" | "keyboardKeyInsert" | "keyboardKeyMeta" | "keyboardKeyMetaMacOs" | "keyboardKeyMetaWindows" | "keyboardKeyNumLock" | "keyboardKeyNumpad1" | "keyboardKeyNumpad2" | "keyboardKeyNumpad3" | "keyboardKeyNumpad4" | "keyboardKeyNumpad5" | "keyboardKeyNumpad6" | "keyboardKeyNumpad7" | "keyboardKeyNumpad8" | "keyboardKeyNumpad9" | "keyboardKeyNumpad0" | "keyboardKeyNumpadAdd" | "keyboardKeyNumpadComma" | "keyboardKeyNumpadDecimal" | "keyboardKeyNumpadDivide" | "keyboardKeyNumpadEnter" | "keyboardKeyNumpadEqual" | "keyboardKeyNumpadMultiply" | "keyboardKeyNumpadParenLeft" | "keyboardKeyNumpadParenRight" | "keyboardKeyNumpadSubtract" | "keyboardKeyPageDown" | "keyboardKeyPageUp" | "keyboardKeyPower" | "keyboardKeyPowerOff" | "keyboardKeyPrintScreen" | "keyboardKeyScrollLock" | "keyboardKeySelect" | "keyboardKeyShift" | "keyboardKeySpace" | "dateRangeStartDateSemanticLabelRaw" | "dateRangeEndDateSemanticLabelRaw" | "scrimOnTapHintRaw" | "aboutListTileTitleRaw" | "pageRowsInfoTitleApproximateRaw" | "pageRowsInfoTitleRaw" | "tabLabelRaw" | "selectedRowCountTitleZero" | "selectedRowCountTitleOne" | "selectedRowCountTitleTwo" | "selectedRowCountTitleFew" | "selectedRowCountTitleMany" | "selectedRowCountTitleOther" | "timeOfDayFormatRaw" | "licensesPackageDetailTextZero" | "licensesPackageDetailTextOne" | "licensesPackageDetailTextTwo" | "licensesPackageDetailTextMany" | "licensesPackageDetailTextFew" | "licensesPackageDetailTextOther" | "remainingTextFieldCharacterCountZero" | "remainingTextFieldCharacterCountOne" | "remainingTextFieldCharacterCountTwo" | "remainingTextFieldCharacterCountMany" | "remainingTextFieldCharacterCountFew" | "remainingTextFieldCharacterCountOther" | "aboutListTileTitle" | "licensesPackageDetailText" | "pageRowsInfoTitle" | "tabLabel" | "selectedRowCountTitle" | "scrimOnTapHint" | "timeOfDayFormat" | "formatDecimal" | "formatHour" | "formatMinute" | "formatTimeOfDay" | "formatYear" | "formatCompactDate" | "formatShortDate" | "formatMediumDate" | "formatFullDate" | "formatMonthYear" | "formatShortMonthDay" | "parseCompactDate" | "dateRangeStartDateSemanticLabel" | "dateRangeEndDateSemanticLabel" | "remainingTextFieldCharacterCount" | "__flaxBound:package:material_ui/src/global_material_localizations.dart::GlobalMaterialLocalizations" | "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations";
export {};
