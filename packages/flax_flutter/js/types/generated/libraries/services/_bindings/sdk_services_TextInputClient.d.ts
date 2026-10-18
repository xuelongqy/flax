import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_RawFloatingCursorPoint';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputClient extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
}> {
    readonly __TextInputClient: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputClient;
    readonly currentTextEditingValue: upstream0.TextEditingValue | null;
    readonly currentAutofillScope: upstream1.AutofillScope | null;
    updateEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    performAction(action: upstream2.TextInputAction): void;
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
}
export declare const TextInputClient: object & _FlaxInstanceType<TextInputClient> & _FlaxDartType<TextInputClient, readonly ["class", "flax.core/sdk_services#type:TextInputClient", readonly [], false]>;
