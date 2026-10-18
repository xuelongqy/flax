import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollBehavior extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
}> {
    readonly __ScrollBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollBehavior;
}
export interface ScrollBehavior {
    readonly [_flaxDartTypeValue]: ScrollBehavior;
    copyWith(options?: {
        scrollbars?: boolean | null | undefined;
        overscroll?: boolean | null | undefined;
        dragDevices?: DartSetInput<upstream0.PointerDeviceKind, upstream0.PointerDeviceKind> | null | undefined;
        multitouchDragStrategy?: upstream3.MultitouchDragStrategy | null | undefined;
        pointerAxisModifiers?: DartSetInput<upstream1.LogicalKeyboardKey, Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        platform?: upstream5.TargetPlatform | null | undefined;
        keyboardDismissBehavior?: upstream2.ScrollViewKeyboardDismissBehavior | null | undefined;
    }): ScrollBehavior;
    getPlatform(context: upstream6.BuildContext): upstream5.TargetPlatform;
    getMultitouchDragStrategy(context: upstream6.BuildContext): upstream3.MultitouchDragStrategy;
    buildScrollbar(context: upstream6.BuildContext, child: Widget, details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>): Widget;
    buildOverscrollIndicator(context: upstream6.BuildContext, child: Widget, details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>): Widget;
    velocityTrackerBuilder(context: upstream6.BuildContext): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => upstream8.VelocityTracker);
    getScrollPhysics(context: upstream6.BuildContext): upstream4.ScrollPhysics;
    shouldNotify(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }>): boolean;
    getKeyboardDismissBehavior(context: upstream6.BuildContext): upstream2.ScrollViewKeyboardDismissBehavior;
    toString(): string;
    get dragDevices(): DartSet<upstream0.PointerDeviceKind>;
    get pointerAxisModifiers(): DartSet<upstream1.LogicalKeyboardKey>;
}
export declare abstract class ScrollBehavior extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollBehavior>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollBehavior;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollBehavior", readonly [], false];
    constructor();
}
export declare namespace ScrollBehavior {
    function implement(args: [], implementation: {}): ScrollBehavior;
}
