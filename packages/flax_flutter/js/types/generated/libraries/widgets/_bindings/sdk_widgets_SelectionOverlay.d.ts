import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionOverlay extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::SelectionOverlay": readonly [];
}> {
    readonly __SelectionOverlay: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionOverlay;
    readonly context: upstream0.BuildContext;
    readonly magnifierConfiguration: upstream13.TextMagnifierConfiguration;
    readonly toolbarIsVisible: boolean;
    readonly magnifierIsVisible: boolean;
    readonly magnifierExists: boolean;
    get startHandleType(): upstream1.TextSelectionHandleType;
    get lineHeightAtStart(): number;
    readonly isDraggingStartHandle: boolean;
    readonly startHandlesVisible: upstream2.ValueListenable<boolean> | null;
    readonly onStartHandleDragStart: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onStartHandleDragUpdate: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onStartHandleDragEnd: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get endHandleType(): upstream1.TextSelectionHandleType;
    get lineHeightAtEnd(): number;
    readonly isDraggingEndHandle: boolean;
    readonly endHandlesVisible: upstream2.ValueListenable<boolean> | null;
    readonly onEndHandleDragStart: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onEndHandleDragUpdate: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onEndHandleDragEnd: ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly toolbarVisible: upstream2.ValueListenable<boolean> | null;
    get selectionEndpoints(): DartList<upstream6.TextSelectionPoint>;
    readonly debugRequiredFor: Widget | null;
    readonly toolbarLayerLink: upstream10.LayerLink;
    readonly startHandleLayerLink: upstream10.LayerLink;
    readonly endHandleLayerLink: upstream10.LayerLink;
    readonly selectionControls: upstream7.TextSelectionControls | null;
    readonly selectionDelegate: upstream8.TextSelectionDelegate | null;
    readonly dragStartBehavior: upstream11.DragStartBehavior;
    readonly onSelectionHandleTapped: (() => void) | null;
    readonly clipboardStatus: upstream9.ClipboardStatusNotifier | null;
    get toolbarLocation(): upstream12.Offset | null;
    showMagnifier(initialMagnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
    }>): void;
    hideMagnifier(): void;
    showHandles(): void;
    hideHandles(): void;
    showToolbar(options?: {
        context?: upstream0.BuildContext | null | undefined;
        contextMenuBuilder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
    }): void;
    showSpellCheckSuggestionsToolbar(options: {
        builder: ((context: upstream0.BuildContext) => Widget);
        context?: upstream0.BuildContext | null | undefined;
    }): void;
    markNeedsBuild(): void;
    hide(): void;
    hideToolbar(): void;
    dispose(): void;
    updateMagnifier(magnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
    }>): void;
    set startHandleType(value: upstream1.TextSelectionHandleType);
    set lineHeightAtStart(value: number);
    set endHandleType(value: upstream1.TextSelectionHandleType);
    set lineHeightAtEnd(value: number);
    set selectionEndpoints(value: DartListInput<upstream6.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>);
    set toolbarLocation(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
}
export declare function _SelectionOverlayFactory(options: {
    context: upstream0.BuildContext;
    debugRequiredFor?: Widget | null | undefined;
    startHandleType: upstream1.TextSelectionHandleType;
    lineHeightAtStart: number;
    startHandlesVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onStartHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
    onStartHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
    onStartHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
    endHandleType: upstream1.TextSelectionHandleType;
    lineHeightAtEnd: number;
    endHandlesVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onEndHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
    onEndHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
    onEndHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
    toolbarVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    selectionEndpoints: DartListInput<upstream6.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>;
    selectionControls: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
    }> | null;
    selectionDelegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> | null;
    clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream16.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream16.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null;
    startHandleLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    endHandleLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    toolbarLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    dragStartBehavior?: upstream11.DragStartBehavior | undefined;
    onSelectionHandleTapped?: (() => void) | null | undefined;
    toolbarLocation?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    magnifierConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
    }> | undefined;
}): SelectionOverlay;
export interface _SelectionOverlayNative extends SelectionOverlay {
    readonly [_flaxDartTypeValue]: _SelectionOverlayNative;
    showMagnifier(initialMagnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
    }>): void;
    hideMagnifier(): void;
    showHandles(): void;
    hideHandles(): void;
    showToolbar(options?: {
        context?: upstream0.BuildContext | null | undefined;
        contextMenuBuilder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
    }): void;
    showSpellCheckSuggestionsToolbar(options: {
        context?: upstream0.BuildContext | null | undefined;
        builder: ((context: upstream0.BuildContext) => Widget);
    }): void;
    markNeedsBuild(): void;
    hide(): void;
    hideToolbar(): void;
    dispose(): void;
    updateMagnifier(magnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
    }>): void;
    get context(): upstream0.BuildContext;
    get magnifierConfiguration(): upstream13.TextMagnifierConfiguration;
    get toolbarIsVisible(): boolean;
    get magnifierIsVisible(): boolean;
    get magnifierExists(): boolean;
    get startHandleType(): upstream1.TextSelectionHandleType;
    get lineHeightAtStart(): number;
    get isDraggingStartHandle(): boolean;
    get startHandlesVisible(): upstream2.ValueListenable<boolean> | null;
    get onStartHandleDragStart(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onStartHandleDragUpdate(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onStartHandleDragEnd(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get endHandleType(): upstream1.TextSelectionHandleType;
    get lineHeightAtEnd(): number;
    get isDraggingEndHandle(): boolean;
    get endHandlesVisible(): upstream2.ValueListenable<boolean> | null;
    get onEndHandleDragStart(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onEndHandleDragUpdate(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onEndHandleDragEnd(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get toolbarVisible(): upstream2.ValueListenable<boolean> | null;
    get selectionEndpoints(): DartList<upstream6.TextSelectionPoint>;
    get debugRequiredFor(): Widget | null;
    get toolbarLayerLink(): upstream10.LayerLink;
    get startHandleLayerLink(): upstream10.LayerLink;
    get endHandleLayerLink(): upstream10.LayerLink;
    get selectionControls(): upstream7.TextSelectionControls | null;
    get selectionDelegate(): upstream8.TextSelectionDelegate | null;
    get dragStartBehavior(): upstream11.DragStartBehavior;
    get onSelectionHandleTapped(): (() => void) | null;
    get clipboardStatus(): upstream9.ClipboardStatusNotifier | null;
    get toolbarLocation(): upstream12.Offset | null;
    set startHandleType(value: upstream1.TextSelectionHandleType);
    set lineHeightAtStart(value: number);
    set endHandleType(value: upstream1.TextSelectionHandleType);
    set lineHeightAtEnd(value: number);
    set selectionEndpoints(value: DartListInput<upstream6.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>);
    set toolbarLocation(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
}
export declare abstract class _SelectionOverlayNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionOverlay>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectionOverlay;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SelectionOverlay", readonly [], false];
    constructor(options: {
        context: upstream0.BuildContext;
        debugRequiredFor?: Widget | null | undefined;
        startHandleType: upstream1.TextSelectionHandleType;
        lineHeightAtStart: number;
        startHandlesVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        onStartHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
        onStartHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
        onStartHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
        endHandleType: upstream1.TextSelectionHandleType;
        lineHeightAtEnd: number;
        endHandlesVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        onEndHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
        onEndHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
        onEndHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
        toolbarVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        selectionEndpoints: DartListInput<upstream6.TextSelectionPoint, Readonly<{
            "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
        }>>;
        selectionControls: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
        }> | null;
        selectionDelegate: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }> | null;
        clipboardStatus: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream16.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream16.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }>) | null;
        startHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        endHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        toolbarLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        dragStartBehavior?: upstream11.DragStartBehavior | undefined;
        onSelectionHandleTapped?: (() => void) | null | undefined;
        toolbarLocation?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        magnifierConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
        }> | undefined;
    });
}
export declare namespace _SelectionOverlayFactory {
    function implement(args: [options: {
        context: upstream0.BuildContext;
        debugRequiredFor?: Widget | null | undefined;
        startHandleType: upstream1.TextSelectionHandleType;
        lineHeightAtStart: number;
        startHandlesVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        onStartHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
        onStartHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
        onStartHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
        endHandleType: upstream1.TextSelectionHandleType;
        lineHeightAtEnd: number;
        endHandlesVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        onEndHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
        onEndHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
        onEndHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
        toolbarVisible?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        selectionEndpoints: DartListInput<upstream6.TextSelectionPoint, Readonly<{
            "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
        }>>;
        selectionControls: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
        }> | null;
        selectionDelegate: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }> | null;
        clipboardStatus: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream16.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream16.ClipboardStatus];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }>) | null;
        startHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        endHandleLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        toolbarLayerLink: Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
        }>;
        dragStartBehavior?: upstream11.DragStartBehavior | undefined;
        onSelectionHandleTapped?: (() => void) | null | undefined;
        toolbarLocation?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        magnifierConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
        }> | undefined;
    }], implementation: {}): SelectionOverlay;
}
declare const _SelectionOverlayBinding: typeof _SelectionOverlayFactory & (new (options: {
    context: upstream0.BuildContext;
    debugRequiredFor?: Widget | null | undefined;
    startHandleType: upstream1.TextSelectionHandleType;
    lineHeightAtStart: number;
    startHandlesVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onStartHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
    onStartHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
    onStartHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
    endHandleType: upstream1.TextSelectionHandleType;
    lineHeightAtEnd: number;
    endHandlesVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onEndHandleDragStart?: ((value: upstream3.DragStartDetails) => void) | null | undefined;
    onEndHandleDragUpdate?: ((value: upstream4.DragUpdateDetails) => void) | null | undefined;
    onEndHandleDragEnd?: ((value: upstream5.DragEndDetails) => void) | null | undefined;
    toolbarVisible?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    selectionEndpoints: DartListInput<upstream6.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>;
    selectionControls: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
    }> | null;
    selectionDelegate: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> | null;
    clipboardStatus: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream16.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream16.ClipboardStatus];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }>) | null;
    startHandleLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    endHandleLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    toolbarLayerLink: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }>;
    dragStartBehavior?: upstream11.DragStartBehavior | undefined;
    onSelectionHandleTapped?: (() => void) | null | undefined;
    toolbarLocation?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    magnifierConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
    }> | undefined;
}) => _SelectionOverlayNative);
export declare namespace _SelectionOverlayFactory {
    const fadeDuration: upstream14.Duration;
}
export declare const SelectionOverlay: typeof _SelectionOverlayBinding & _FlaxInstanceType<SelectionOverlay> & _FlaxDartType<SelectionOverlay, readonly ["class", "flax.core/sdk_widgets#type:SelectionOverlay", readonly [], false]>;
export {};
