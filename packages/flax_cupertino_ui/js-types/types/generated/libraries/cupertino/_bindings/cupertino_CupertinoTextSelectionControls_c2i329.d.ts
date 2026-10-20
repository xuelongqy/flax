import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoTextSelectionControls extends Omit<upstream0.TextSelectionControls, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/text_selection.dart::CupertinoTextSelectionControls": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
}> {
    readonly __CupertinoTextSelectionControls: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTextSelectionControls;
    buildHandle(context: upstream1.BuildContext, type: upstream2.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null): Widget;
    getHandleAnchor(type: upstream2.TextSelectionHandleType, textLineHeight: number): upstream3.Offset;
    buildToolbar(context: upstream1.BuildContext, globalEditableRegion: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textLineHeight: number, selectionMidpoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, endpoints: DartListInput<upstream5.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream8.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null, lastSecondaryTapDownPosition: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null): Widget;
    getHandleSize(textLineHeight: number): upstream9.Size;
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
export declare function _CupertinoTextSelectionControlsFactory(): CupertinoTextSelectionControls;
export interface _CupertinoTextSelectionControlsNative extends CupertinoTextSelectionControls {
    readonly [_flaxDartTypeValue]: _CupertinoTextSelectionControlsNative;
    buildHandle(context: upstream1.BuildContext, type: upstream2.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null): Widget;
    getHandleAnchor(type: upstream2.TextSelectionHandleType, textLineHeight: number): upstream3.Offset;
    buildToolbar(context: upstream1.BuildContext, globalEditableRegion: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textLineHeight: number, selectionMidpoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, endpoints: DartListInput<upstream5.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream8.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null, lastSecondaryTapDownPosition: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null): Widget;
    getHandleSize(textLineHeight: number): upstream9.Size;
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
export declare abstract class _CupertinoTextSelectionControlsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTextSelectionControls>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoTextSelectionControls;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoTextSelectionControls", readonly [], false];
    constructor();
}
export declare namespace _CupertinoTextSelectionControlsFactory {
    function implement(args: [], implementation: {}): CupertinoTextSelectionControls;
}
declare const _CupertinoTextSelectionControlsBinding: typeof _CupertinoTextSelectionControlsFactory & (new () => _CupertinoTextSelectionControlsNative);
export declare const CupertinoTextSelectionControls: typeof _CupertinoTextSelectionControlsBinding & _FlaxInstanceType<CupertinoTextSelectionControls> & _FlaxDartType<CupertinoTextSelectionControls, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTextSelectionControls", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "buildHandle" | "getHandleAnchor" | "buildToolbar" | "getHandleSize" | "canCut" | "canCopy" | "canPaste" | "canSelectAll" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:cupertino_ui/src/text_selection.dart::CupertinoTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls";
export {};
