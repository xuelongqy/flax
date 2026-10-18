import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ScriptCategory';
import '@flax/flutter/material/_bindings/sdk_material_ScriptCategory';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDayFormat';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDayFormat';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DefaultMaterialLocalizations extends Omit<upstream0.MaterialLocalizations, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/material_localizations.dart::DefaultMaterialLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
}> {
    readonly __DefaultMaterialLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultMaterialLocalizations;
}
export interface DefaultMaterialLocalizations {
    readonly [_flaxDartTypeValue]: DefaultMaterialLocalizations;
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
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.TimeOfDay];
    }>, options?: {
        alwaysUse24HourFormat?: boolean | undefined;
    }): string;
    formatMinute(timeOfDay: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.TimeOfDay];
    }>): string;
    formatTimeOfDay(timeOfDay: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.TimeOfDay];
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
    parseCompactDate(inputString: string | null): upstream6.DateTime | null;
    dateRangeStartDateSemanticLabel(formattedDate: string): string;
    dateRangeEndDateSemanticLabel(formattedDate: string): string;
    remainingTextFieldCharacterCount(remaining: number): string;
    get narrowWeekdays(): DartList<string>;
    get firstDayOfWeekIndex(): number;
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
    get openAppDrawerTooltip(): string;
    get backButtonTooltip(): string;
    get clearButtonTooltip(): string;
    get closeButtonTooltip(): string;
    get deleteButtonTooltip(): string;
    get moreButtonTooltip(): string;
    get nextMonthTooltip(): string;
    get previousMonthTooltip(): string;
    get nextPageTooltip(): string;
    get previousPageTooltip(): string;
    get firstPageTooltip(): string;
    get lastPageTooltip(): string;
    get showMenuTooltip(): string;
    get drawerLabel(): string;
    get menuBarMenuLabel(): string;
    get popupMenuLabel(): string;
    get dialogLabel(): string;
    get alertDialogLabel(): string;
    get searchFieldLabel(): string;
    get currentDateLabel(): string;
    get selectedDateLabel(): string;
    get scrimLabel(): string;
    get bottomSheetLabel(): string;
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
    get scriptCategory(): upstream1.ScriptCategory;
    get signedInLabel(): string;
    get hideAccountsLabel(): string;
    get showAccountsLabel(): string;
    get reorderItemUp(): string;
    get reorderItemDown(): string;
    get reorderItemLeft(): string;
    get reorderItemRight(): string;
    get reorderItemToEnd(): string;
    get reorderItemToStart(): string;
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
}
export declare abstract class DefaultMaterialLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultMaterialLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultMaterialLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DefaultMaterialLocalizations", readonly [], false];
    constructor();
}
export declare namespace DefaultMaterialLocalizations {
    function implement(args: [], implementation: {}): DefaultMaterialLocalizations;
}
export declare namespace DefaultMaterialLocalizations {
    const delegate: upstream2.LocalizationsDelegate<upstream0.MaterialLocalizations>;
}
export declare namespace DefaultMaterialLocalizations {
    function load(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): Promise<upstream0.MaterialLocalizations>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "openAppDrawerTooltip" | "backButtonTooltip" | "clearButtonTooltip" | "closeButtonTooltip" | "deleteButtonTooltip" | "moreButtonTooltip" | "nextMonthTooltip" | "previousMonthTooltip" | "firstPageTooltip" | "lastPageTooltip" | "nextPageTooltip" | "previousPageTooltip" | "showMenuTooltip" | "licensesPageTitle" | "rowsPerPageTitle" | "cancelButtonLabel" | "closeButtonLabel" | "continueButtonLabel" | "copyButtonLabel" | "cutButtonLabel" | "scanTextButtonLabel" | "okButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "viewLicensesButtonLabel" | "anteMeridiemAbbreviation" | "postMeridiemAbbreviation" | "timePickerHourModeAnnouncement" | "timePickerMinuteModeAnnouncement" | "modalBarrierDismissLabel" | "menuDismissLabel" | "drawerLabel" | "popupMenuLabel" | "menuBarMenuLabel" | "dialogLabel" | "alertDialogLabel" | "searchFieldLabel" | "currentDateLabel" | "selectedDateLabel" | "scrimLabel" | "bottomSheetLabel" | "scriptCategory" | "narrowWeekdays" | "firstDayOfWeekIndex" | "dateSeparator" | "dateHelpText" | "selectYearSemanticsLabel" | "unspecifiedDate" | "unspecifiedDateRange" | "dateInputLabel" | "dateRangeStartLabel" | "dateRangeEndLabel" | "invalidDateFormatLabel" | "invalidDateRangeLabel" | "dateOutOfRangeLabel" | "saveButtonLabel" | "datePickerHelpText" | "dateRangePickerHelpText" | "calendarModeButtonLabel" | "inputDateModeButtonLabel" | "timePickerDialHelpText" | "timePickerInputHelpText" | "timePickerHourLabel" | "timePickerMinuteLabel" | "invalidTimeLabel" | "dialModeButtonLabel" | "inputTimeModeButtonLabel" | "signedInLabel" | "hideAccountsLabel" | "showAccountsLabel" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "expandedIconTapHint" | "collapsedIconTapHint" | "expansionTileExpandedHint" | "expansionTileCollapsedHint" | "expansionTileExpandedTapHint" | "expansionTileCollapsedTapHint" | "expandedHint" | "collapsedHint" | "refreshIndicatorSemanticLabel" | "keyboardKeyAlt" | "keyboardKeyAltGraph" | "keyboardKeyBackspace" | "keyboardKeyCapsLock" | "keyboardKeyChannelDown" | "keyboardKeyChannelUp" | "keyboardKeyControl" | "keyboardKeyDelete" | "keyboardKeyEject" | "keyboardKeyEnd" | "keyboardKeyEscape" | "keyboardKeyFn" | "keyboardKeyHome" | "keyboardKeyInsert" | "keyboardKeyMeta" | "keyboardKeyMetaMacOs" | "keyboardKeyMetaWindows" | "keyboardKeyNumLock" | "keyboardKeyNumpad1" | "keyboardKeyNumpad2" | "keyboardKeyNumpad3" | "keyboardKeyNumpad4" | "keyboardKeyNumpad5" | "keyboardKeyNumpad6" | "keyboardKeyNumpad7" | "keyboardKeyNumpad8" | "keyboardKeyNumpad9" | "keyboardKeyNumpad0" | "keyboardKeyNumpadAdd" | "keyboardKeyNumpadComma" | "keyboardKeyNumpadDecimal" | "keyboardKeyNumpadDivide" | "keyboardKeyNumpadEnter" | "keyboardKeyNumpadEqual" | "keyboardKeyNumpadMultiply" | "keyboardKeyNumpadParenLeft" | "keyboardKeyNumpadParenRight" | "keyboardKeyNumpadSubtract" | "keyboardKeyPageDown" | "keyboardKeyPageUp" | "keyboardKeyPower" | "keyboardKeyPowerOff" | "keyboardKeyPrintScreen" | "keyboardKeyScrollLock" | "keyboardKeySelect" | "keyboardKeyShift" | "keyboardKeySpace" | "aboutListTileTitle" | "licensesPackageDetailText" | "pageRowsInfoTitle" | "tabLabel" | "selectedRowCountTitle" | "scrimOnTapHint" | "timeOfDayFormat" | "formatDecimal" | "formatHour" | "formatMinute" | "formatTimeOfDay" | "formatYear" | "formatCompactDate" | "formatShortDate" | "formatMediumDate" | "formatFullDate" | "formatMonthYear" | "formatShortMonthDay" | "parseCompactDate" | "dateRangeStartDateSemanticLabel" | "dateRangeEndDateSemanticLabel" | "remainingTextFieldCharacterCount" | "__flaxBound:package:flutter/src/material/material_localizations.dart::DefaultMaterialLocalizations" | "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations";
export {};
