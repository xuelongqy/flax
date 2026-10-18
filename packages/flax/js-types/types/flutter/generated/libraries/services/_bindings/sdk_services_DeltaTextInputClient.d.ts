import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_RawFloatingCursorPoint';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeltaTextInputClient extends Omit<upstream0.TextInputClient, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::DeltaTextInputClient": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
}> {
    readonly __DeltaTextInputClient: unique symbol;
    readonly [_flaxDartTypeValue]: DeltaTextInputClient;
    readonly currentTextEditingValue: upstream1.TextEditingValue | null;
    readonly currentAutofillScope: upstream2.AutofillScope | null;
    updateEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    performAction(action: upstream3.TextInputAction): void;
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
    showToolbar(): void;
    insertTextPlaceholder(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    removeTextPlaceholder(): void;
    performSelector(selectorName: string): void;
    updateEditingValueWithDeltas(textEditingDeltas: DartListInput<upstream8.TextEditingDelta, Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
}
export declare const DeltaTextInputClient: object & _FlaxInstanceType<DeltaTextInputClient> & _FlaxDartType<DeltaTextInputClient, readonly ["class", "flax.core/sdk_services#type:DeltaTextInputClient", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentTextEditingValue" | "currentAutofillScope" | "updateEditingValue" | "performAction" | "insertContent" | "performPrivateCommand" | "updateFloatingCursor" | "showAutocorrectionPromptRect" | "onFocusReceived" | "connectionClosed" | "didChangeInputControl" | "showToolbar" | "insertTextPlaceholder" | "removeTextPlaceholder" | "performSelector" | "updateEditingValueWithDeltas" | "__flaxBound:package:flutter/src/services/text_input.dart::DeltaTextInputClient" | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient";
export {};
