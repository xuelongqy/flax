import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionGestureDetectorBuilderDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionGestureDetectorBuilderDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionGestureDetectorBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilder": readonly [];
}> {
    readonly __TextSelectionGestureDetectorBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionGestureDetectorBuilder;
    readonly delegate: upstream0.TextSelectionGestureDetectorBuilderDelegate;
    readonly shouldShowSelectionToolbar: boolean;
    readonly shouldShowSelectionHandles: boolean;
    readonly editableText: upstream1.EditableTextState;
    readonly renderEditable: upstream2.RenderEditable;
    readonly onUserTapAlwaysCalled: boolean;
    onTapTrackStart(): void;
    onTapTrackReset(): void;
    onTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onForcePressStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onForcePressEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onUserTap(): void;
    onSingleTapUp(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleTapCancel(): void;
    onSingleLongTapStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapMoveUpdate(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapCancel(): void;
    onSecondaryTap(): void;
    onSecondaryTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDoubleTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onTripleTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionUpdate(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    buildGestureDetector(options: {
        behavior?: upstream13.HitTestBehavior | null | undefined;
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): Widget;
}
export declare function _TextSelectionGestureDetectorBuilderFactory(options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [];
    }>;
}): TextSelectionGestureDetectorBuilder;
export interface _TextSelectionGestureDetectorBuilderNative extends TextSelectionGestureDetectorBuilder {
    readonly [_flaxDartTypeValue]: _TextSelectionGestureDetectorBuilderNative;
    onTapTrackStart(): void;
    onTapTrackReset(): void;
    onTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onForcePressStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onForcePressEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onUserTap(): void;
    onSingleTapUp(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleTapCancel(): void;
    onSingleLongTapStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapMoveUpdate(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onSingleLongTapCancel(): void;
    onSecondaryTap(): void;
    onSecondaryTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDoubleTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onTripleTapDown(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionStart(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionUpdate(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    onDragSelectionEnd(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    buildGestureDetector(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        behavior?: upstream13.HitTestBehavior | null | undefined;
        child: Widget;
    }): Widget;
    get delegate(): upstream0.TextSelectionGestureDetectorBuilderDelegate;
    get shouldShowSelectionToolbar(): boolean;
    get shouldShowSelectionHandles(): boolean;
    get editableText(): upstream1.EditableTextState;
    get renderEditable(): upstream2.RenderEditable;
    get onUserTapAlwaysCalled(): boolean;
}
export declare abstract class _TextSelectionGestureDetectorBuilderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionGestureDetectorBuilder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionGestureDetectorBuilder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", readonly [], false];
    constructor(options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [];
        }>;
    });
}
export declare namespace _TextSelectionGestureDetectorBuilderFactory {
    function implement(args: [options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [];
        }>;
    }], implementation: {}): TextSelectionGestureDetectorBuilder;
}
declare const _TextSelectionGestureDetectorBuilderBinding: typeof _TextSelectionGestureDetectorBuilderFactory & (new (options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [];
    }>;
}) => _TextSelectionGestureDetectorBuilderNative);
export declare const TextSelectionGestureDetectorBuilder: typeof _TextSelectionGestureDetectorBuilderBinding & _FlaxInstanceType<TextSelectionGestureDetectorBuilder> & _FlaxDartType<TextSelectionGestureDetectorBuilder, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", readonly [], false]>;
export {};
