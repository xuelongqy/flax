import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
}> {
    readonly __TextSelectionDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionDelegate;
    readonly textEditingValue: upstream0.TextEditingValue;
    readonly cutEnabled: boolean;
    readonly copyEnabled: boolean;
    readonly pasteEnabled: boolean;
    readonly selectAllEnabled: boolean;
    readonly lookUpEnabled: boolean;
    readonly searchWebEnabled: boolean;
    readonly shareEnabled: boolean;
    readonly liveTextInputEnabled: boolean;
    userUpdateTextEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, cause: upstream1.SelectionChangedCause): void;
    hideToolbar(hideHandles?: boolean): void;
    bringIntoView(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): void;
    cutSelection(cause: upstream1.SelectionChangedCause): void;
    pasteText(cause: upstream1.SelectionChangedCause): Promise<void>;
    selectAll(cause: upstream1.SelectionChangedCause): void;
    copySelection(cause: upstream1.SelectionChangedCause): void;
}
export declare const TextSelectionDelegate: object & _FlaxInstanceType<TextSelectionDelegate> & _FlaxDartType<TextSelectionDelegate, readonly ["class", "flax.core/sdk_services#type:TextSelectionDelegate", readonly [], false]>;
