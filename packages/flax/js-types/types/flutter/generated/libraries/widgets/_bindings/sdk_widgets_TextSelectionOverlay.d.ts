import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextParentData';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextSelectionOverlay extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionOverlay": readonly [];
}> {
    readonly __TextSelectionOverlay: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionOverlay;
}
export interface TextSelectionOverlay {
    readonly [_flaxDartTypeValue]: TextSelectionOverlay;
    showHandles(): void;
    hideHandles(): void;
    showToolbar(): void;
    showSpellCheckSuggestionsToolbar(spellCheckSuggestionsToolbarBuilder: ((context: upstream1.BuildContext) => Widget)): void;
    showMagnifier(positionToShow: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    updateMagnifier(positionToShow: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    hideMagnifier(): void;
    update(newValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
    updateForScroll(): void;
    hide(): void;
    hideToolbar(): void;
    dispose(): void;
    get context(): upstream1.BuildContext;
    get renderObject(): upstream3.RenderEditable;
    get selectionControls(): upstream4.TextSelectionControls | null;
    get selectionDelegate(): upstream5.TextSelectionDelegate;
    get contextMenuBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
    get handlesVisible(): boolean;
    get handlesAreVisible(): boolean;
    get toolbarIsVisible(): boolean;
    get magnifierIsVisible(): boolean;
    get magnifierExists(): boolean;
    get spellCheckToolbarIsVisible(): boolean;
    set handlesVisible(value: boolean);
}
export declare abstract class TextSelectionOverlay extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionOverlay>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionOverlay;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionOverlay", readonly [], false];
    constructor(options: {
        value: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>;
        context: upstream1.BuildContext;
        debugRequiredFor?: Widget | null | undefined;
        toolbarLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        startHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        endHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        renderObject: Readonly<{
            "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RelayoutWhenSystemFontsChangeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream10.RenderBox, upstream11.TextParentData];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/paragraph.dart::RenderInlineChildrenContainerDefaults": readonly [];
        }>;
        selectionControls?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
        }> | null | undefined;
        handlesVisible?: boolean | undefined;
        selectionDelegate: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }>;
        dragStartBehavior?: upstream6.DragStartBehavior | undefined;
        onSelectionHandleTapped?: (() => void) | null | undefined;
        clipboardStatus?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream12.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream12.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }>) | null | undefined;
        contextMenuBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        magnifierConfiguration: Readonly<{
            "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
        }>;
    });
}
export declare namespace TextSelectionOverlay {
    function implement(args: [options: {
        value: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>;
        context: upstream1.BuildContext;
        debugRequiredFor?: Widget | null | undefined;
        toolbarLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        startHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        endHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        renderObject: Readonly<{
            "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RelayoutWhenSystemFontsChangeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream10.RenderBox, upstream11.TextParentData];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/paragraph.dart::RenderInlineChildrenContainerDefaults": readonly [];
        }>;
        selectionControls?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
        }> | null | undefined;
        handlesVisible?: boolean | undefined;
        selectionDelegate: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }>;
        dragStartBehavior?: upstream6.DragStartBehavior | undefined;
        onSelectionHandleTapped?: (() => void) | null | undefined;
        clipboardStatus?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream12.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream12.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }>) | null | undefined;
        contextMenuBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        magnifierConfiguration: Readonly<{
            "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
        }>;
    }], implementation: {}): TextSelectionOverlay;
}
