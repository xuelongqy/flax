import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_SelectionRect';
import '@flax/flutter/services/_bindings/sdk_services_SelectionRect';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputStyle';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputConnection extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConnection": readonly [];
}> {
    readonly __TextInputConnection: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputConnection;
    readonly attached: boolean;
    readonly scribbleInProgress: boolean;
    show(): void;
    requestAutofill(): void;
    updateConfig(configuration: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
    }>): void;
    setEditingState(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    setEditableSizeAndTransform(editableBoxSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    setComposingRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    setCaretRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    setSelectionRects(selectionRects: DartListInput<upstream5.SelectionRect, Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [];
    }>>): void;
    setStyle(options: {
        fontFamily: string | null;
        fontSize: number | null;
        fontWeight: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null;
        textAlign: upstream7.TextAlign;
        textDirection: upstream8.TextDirection;
    }): void;
    updateStyle(style: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    close(): void;
    connectionClosedReceived(): void;
}
export declare const TextInputConnection: object & _FlaxInstanceType<TextInputConnection> & _FlaxDartType<TextInputConnection, readonly ["class", "flax.core/sdk_services#type:TextInputConnection", readonly [], false]>;
