import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMapInput, type Widget } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_AutomaticKeepAliveClientMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AutomaticKeepAliveClientMixin';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream7 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream9 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream10 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream12 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream13 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import type * as upstream15 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream18 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream25 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream26 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream28 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import type * as upstream29 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream30 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream31 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream33 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_RawFloatingCursorPoint';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream38 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import type * as upstream39 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream41 from '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EditableTextState extends Omit<upstream0.State<upstream1.EditableText>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText>>, Omit<upstream3.AutofillClient, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable>, Omit<upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient>, Omit<upstream5.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient | keyof upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText>>, Omit<upstream6.TickerProviderStateMixin<upstream1.EditableText>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient | keyof upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText> | keyof upstream5.WidgetsBindingObserver>, Omit<upstream7.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient | keyof upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText> | keyof upstream5.WidgetsBindingObserver | keyof upstream6.TickerProviderStateMixin<upstream1.EditableText>>, Omit<upstream8.TextSelectionDelegate, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient | keyof upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText> | keyof upstream5.WidgetsBindingObserver | keyof upstream6.TickerProviderStateMixin<upstream1.EditableText> | keyof upstream7.TickerProvider>, Omit<upstream9.TextInputClient, _flaxOwnMembers0 | keyof upstream0.State<upstream1.EditableText> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillClient | keyof upstream4.AutomaticKeepAliveClientMixin<upstream1.EditableText> | keyof upstream5.WidgetsBindingObserver | keyof upstream6.TickerProviderStateMixin<upstream1.EditableText> | keyof upstream7.TickerProvider | keyof upstream8.TextSelectionDelegate>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.EditableText];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream1.EditableText];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.EditableText];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
}> {
    readonly __EditableTextState: unique symbol;
    readonly [_flaxDartTypeValue]: EditableTextState;
    readonly autofillId: string;
    readonly textInputConfiguration: upstream10.TextInputConfiguration;
    readonly wantKeepAlive: boolean;
    readonly widget: upstream1.EditableText;
    readonly context: upstream11.BuildContext;
    readonly mounted: boolean;
    readonly textEditingValue: upstream12.TextEditingValue;
    readonly cutEnabled: boolean;
    readonly copyEnabled: boolean;
    readonly pasteEnabled: boolean;
    readonly selectAllEnabled: boolean;
    readonly lookUpEnabled: boolean;
    readonly searchWebEnabled: boolean;
    readonly shareEnabled: boolean;
    readonly liveTextInputEnabled: boolean;
    readonly currentTextEditingValue: upstream12.TextEditingValue;
    readonly currentAutofillScope: upstream13.AutofillScope | null;
    readonly clipboardStatus: upstream14.ClipboardStatusNotifier;
    readonly spellCheckEnabled: boolean;
    get spellCheckResults(): upstream15.SpellCheckResults | null;
    readonly contextMenuAnchors: upstream16.TextSelectionToolbarAnchors;
    readonly contextMenuButtonItems: DartList<upstream17.ContextMenuButtonItem>;
    readonly renderEditable: upstream18.RenderEditable;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    autofill(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    updateKeepAlive(): void;
    initState(): void;
    deactivate(): void;
    build(context: upstream11.BuildContext): Widget;
    didUpdateWidget(oldWidget: upstream1.EditableText): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    activate(): void;
    dispose(): void;
    didChangeDependencies(): void;
    didPopRoute(): Promise<boolean>;
    handleStartBackGesture(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): boolean;
    handleUpdateBackGestureProgress(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): void;
    handleCommitBackGesture(): void;
    handleCancelBackGesture(): void;
    handleStatusBarTap(): void;
    didPushRoute(route: string): Promise<boolean>;
    didPushRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>): Promise<boolean>;
    didChangeMetrics(): void;
    didChangeTextScaleFactor(): void;
    didChangePlatformBrightness(): void;
    didChangeLocales(locales: DartListInput<upstream25.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream26.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream28.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    createTicker(onTick: ((elapsed: upstream30.Duration) => void)): upstream29.Ticker;
    userUpdateTextEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, cause: upstream31.SelectionChangedCause | null): void;
    hideToolbar(hideHandles?: boolean): void;
    bringIntoView(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): void;
    cutSelection(cause: upstream31.SelectionChangedCause): void;
    pasteText(cause: upstream31.SelectionChangedCause): Promise<void>;
    selectAll(cause: upstream31.SelectionChangedCause): void;
    copySelection(cause: upstream31.SelectionChangedCause): void;
    updateEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    performAction(action: upstream33.TextInputAction): void;
    insertContent(content: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
    }>): void;
    performPrivateCommand(action: string, data: DartMapInput<string, unknown | null, string, unknown | null>): void;
    updateFloatingCursor(point: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [];
    }>): void;
    showAutocorrectionPromptRect(start: number, end: number): void;
    onFocusReceived(): boolean;
    connectionClosed(): void;
    didChangeInputControl(oldControl: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [];
    }> | null, newControl: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [];
    }> | null): void;
    showToolbar(): boolean;
    insertTextPlaceholder(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    removeTextPlaceholder(): void;
    performSelector(selectorName: string): void;
    lookUpSelection(cause: upstream31.SelectionChangedCause): Promise<void>;
    searchWebForSelection(cause: upstream31.SelectionChangedCause): Promise<void>;
    shareSelection(cause: upstream31.SelectionChangedCause): Promise<void>;
    findSuggestionSpanAtCursorIndex(cursorIndex: number): upstream38.SuggestionSpan | null;
    buttonItemsForToolbarOptions(targetPlatform?: upstream39.TargetPlatform | null): DartList<upstream17.ContextMenuButtonItem> | null;
    getGlyphHeights(): _FlaxDartRecord<{
        readonly endGlyphHeight: number;
        readonly startGlyphHeight: number;
    }>;
    beginBatchEdit(): void;
    endBatchEdit(): void;
    requestKeyboard(): void;
    toggleToolbar(hideHandles?: boolean): void;
    showSpellCheckSuggestionsToolbar(): boolean;
    showMagnifier(positionToShow: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    hideMagnifier(): void;
    buildTextSpan(): upstream41.TextSpan;
    set spellCheckResults(value: Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [];
    }> | null);
}
export declare function _EditableTextStateFactory(): EditableTextState;
export declare const EditableTextState: typeof _EditableTextStateFactory & _FlaxInstanceType<EditableTextState> & _FlaxDartType<EditableTextState, readonly ["class", "flax.core/sdk_widgets#type:EditableTextState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "autofillId" | "textInputConfiguration" | "wantKeepAlive" | "widget" | "context" | "mounted" | "textEditingValue" | "cutEnabled" | "copyEnabled" | "pasteEnabled" | "selectAllEnabled" | "lookUpEnabled" | "searchWebEnabled" | "shareEnabled" | "liveTextInputEnabled" | "currentTextEditingValue" | "currentAutofillScope" | "clipboardStatus" | "spellCheckEnabled" | "spellCheckResults" | "contextMenuAnchors" | "contextMenuButtonItems" | "renderEditable" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "autofill" | "updateKeepAlive" | "initState" | "deactivate" | "build" | "didUpdateWidget" | "reassemble" | "setState" | "activate" | "dispose" | "didChangeDependencies" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "createTicker" | "userUpdateTextEditingValue" | "hideToolbar" | "bringIntoView" | "cutSelection" | "pasteText" | "selectAll" | "copySelection" | "updateEditingValue" | "performAction" | "insertContent" | "performPrivateCommand" | "updateFloatingCursor" | "showAutocorrectionPromptRect" | "onFocusReceived" | "connectionClosed" | "didChangeInputControl" | "showToolbar" | "insertTextPlaceholder" | "removeTextPlaceholder" | "performSelector" | "lookUpSelection" | "searchWebForSelection" | "shareSelection" | "findSuggestionSpanAtCursorIndex" | "buttonItemsForToolbarOptions" | "getGlyphHeights" | "beginBatchEdit" | "endBatchEdit" | "requestKeyboard" | "toggleToolbar" | "showSpellCheckSuggestionsToolbar" | "showMagnifier" | "hideMagnifier" | "buildTextSpan" | "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider" | "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate" | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient";
export {};
