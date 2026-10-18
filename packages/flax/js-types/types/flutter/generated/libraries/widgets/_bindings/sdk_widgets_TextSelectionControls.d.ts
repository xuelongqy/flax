import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextSelectionControls extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
}> {
    readonly __TextSelectionControls: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionControls;
}
export interface TextSelectionControls {
    readonly [_flaxDartTypeValue]: TextSelectionControls;
    canCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canPaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    handleCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): void;
    handleCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): void;
    handlePaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): Promise<void>;
    handleSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): void;
}
export declare abstract class TextSelectionControls extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionControls>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionControls;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionControls", readonly [], false];
    constructor();
    abstract buildHandle(context: upstream0.BuildContext, type: upstream1.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null): Widget;
    abstract getHandleAnchor(type: upstream1.TextSelectionHandleType, textLineHeight: number): upstream2.Offset;
    abstract buildToolbar(context: upstream0.BuildContext, globalEditableRegion: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textLineHeight: number, selectionMidpoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, endpoints: DartListInput<upstream4.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream7.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null, lastSecondaryTapDownPosition: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null): Widget;
    abstract getHandleSize(textLineHeight: number): upstream8.Size;
}
export declare namespace TextSelectionControls {
    function implement(args: [], implementation: {
        buildHandle: ((context: upstream0.BuildContext, type: upstream1.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null) => Widget);
        getHandleAnchor: ((type: upstream1.TextSelectionHandleType, textLineHeight: number) => Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        buildToolbar: ((context: upstream0.BuildContext, globalEditableRegion: upstream3.Rect, textLineHeight: number, selectionMidpoint: upstream2.Offset, endpoints: DartList<upstream4.TextSelectionPoint>, delegate: upstream5.TextSelectionDelegate, clipboardStatus: upstream6.ValueListenable<upstream7.ClipboardStatus> | null, lastSecondaryTapDownPosition: upstream2.Offset | null) => Widget);
        getHandleSize: ((textLineHeight: number) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
    }): TextSelectionControls;
}
