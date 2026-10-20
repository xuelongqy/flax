import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MaterialTextSelectionControls_c191j5';
import '@flax/material-ui/_bindings/material_MaterialTextSelectionControls_c191j5';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionHandleControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionHandleControls';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialTextSelectionHandleControls extends Omit<upstream0.MaterialTextSelectionControls, _flaxOwnMembers0>, Omit<upstream1.TextSelectionControls, _flaxOwnMembers0 | keyof upstream0.MaterialTextSelectionControls>, Omit<upstream2.TextSelectionHandleControls, _flaxOwnMembers0 | keyof upstream0.MaterialTextSelectionControls | keyof upstream1.TextSelectionControls>, Readonly<{
    "__flaxBound:package:material_ui/src/text_selection.dart::MaterialTextSelectionHandleControls": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/text_selection.dart::MaterialTextSelectionControls": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls": readonly [];
}> {
    readonly __MaterialTextSelectionHandleControls: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialTextSelectionHandleControls;
    getHandleSize(textLineHeight: number): upstream3.Size;
    buildToolbar(context: upstream4.BuildContext, globalEditableRegion: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textLineHeight: number, selectionMidpoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, endpoints: DartListInput<upstream7.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null, lastSecondaryTapDownPosition: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null): Widget;
    buildHandle(context: upstream4.BuildContext, type: upstream11.TextSelectionHandleType, textHeight: number, onTap?: (() => void) | null): Widget;
    getHandleAnchor(type: upstream11.TextSelectionHandleType, textLineHeight: number): upstream6.Offset;
    canSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canPaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    handleCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null): void;
    handleCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null): void;
    handlePaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): Promise<void>;
    handleSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): void;
}
export declare function _MaterialTextSelectionHandleControlsFactory(): MaterialTextSelectionHandleControls;
export interface _MaterialTextSelectionHandleControlsNative extends MaterialTextSelectionHandleControls {
    readonly [_flaxDartTypeValue]: _MaterialTextSelectionHandleControlsNative;
    getHandleSize(textLineHeight: number): upstream3.Size;
    buildToolbar(context: upstream4.BuildContext, globalEditableRegion: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textLineHeight: number, selectionMidpoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, endpoints: DartListInput<upstream7.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null, lastSecondaryTapDownPosition: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null): Widget;
    buildHandle(context: upstream4.BuildContext, type: upstream11.TextSelectionHandleType, textHeight: number, onTap?: (() => void) | null): Widget;
    getHandleAnchor(type: upstream11.TextSelectionHandleType, textLineHeight: number): upstream6.Offset;
    canSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    canPaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): boolean;
    handleCut(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null): void;
    handleCopy(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>, clipboardStatus?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null): void;
    handlePaste(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): Promise<void>;
    handleSelectAll(delegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }>): void;
}
export declare abstract class _MaterialTextSelectionHandleControlsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialTextSelectionHandleControls>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialTextSelectionHandleControls;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialTextSelectionHandleControls", readonly [], false];
    constructor();
}
export declare namespace _MaterialTextSelectionHandleControlsFactory {
    function implement(args: [], implementation: {}): MaterialTextSelectionHandleControls;
}
declare const _MaterialTextSelectionHandleControlsBinding: typeof _MaterialTextSelectionHandleControlsFactory & (new () => _MaterialTextSelectionHandleControlsNative);
export declare const MaterialTextSelectionHandleControls: typeof _MaterialTextSelectionHandleControlsBinding & _FlaxInstanceType<MaterialTextSelectionHandleControls> & _FlaxDartType<MaterialTextSelectionHandleControls, readonly ["class", "flax.material/material#type:MaterialTextSelectionHandleControls", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getHandleSize" | "buildToolbar" | "buildHandle" | "getHandleAnchor" | "canSelectAll" | "canCut" | "canCopy" | "canPaste" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:material_ui/src/text_selection.dart::MaterialTextSelectionHandleControls" | "__flaxBound:package:material_ui/src/text_selection.dart::MaterialTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls";
export {};
