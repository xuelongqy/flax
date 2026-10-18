import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoScrollBehavior extends Omit<upstream0.ScrollBehavior, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/app.dart::CupertinoScrollBehavior": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
}> {
    readonly __CupertinoScrollBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoScrollBehavior;
}
export interface CupertinoScrollBehavior {
    readonly [_flaxDartTypeValue]: CupertinoScrollBehavior;
    copyWith(options?: {
        scrollbars?: boolean | null | undefined;
        overscroll?: boolean | null | undefined;
        dragDevices?: DartSetInput<upstream1.PointerDeviceKind, upstream1.PointerDeviceKind> | null | undefined;
        multitouchDragStrategy?: upstream4.MultitouchDragStrategy | null | undefined;
        pointerAxisModifiers?: DartSetInput<upstream2.LogicalKeyboardKey, Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        platform?: upstream6.TargetPlatform | null | undefined;
        keyboardDismissBehavior?: upstream3.ScrollViewKeyboardDismissBehavior | null | undefined;
    }): upstream0.ScrollBehavior;
    getPlatform(context: upstream7.BuildContext): upstream6.TargetPlatform;
    getMultitouchDragStrategy(context: upstream7.BuildContext): upstream4.MultitouchDragStrategy;
    buildScrollbar(context: upstream7.BuildContext, child: Widget, details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>): Widget;
    buildOverscrollIndicator(context: upstream7.BuildContext, child: Widget, details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>): Widget;
    velocityTrackerBuilder(context: upstream7.BuildContext): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => upstream9.VelocityTracker);
    getScrollPhysics(context: upstream7.BuildContext): upstream5.ScrollPhysics;
    shouldNotify(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }>): boolean;
    getKeyboardDismissBehavior(context: upstream7.BuildContext): upstream3.ScrollViewKeyboardDismissBehavior;
    toString(): string;
    get dragDevices(): DartSet<upstream1.PointerDeviceKind>;
    get pointerAxisModifiers(): DartSet<upstream2.LogicalKeyboardKey>;
}
export declare abstract class CupertinoScrollBehavior extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoScrollBehavior>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoScrollBehavior;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoScrollBehavior", readonly [], false];
    constructor();
}
export declare namespace CupertinoScrollBehavior {
    function implement(args: [], implementation: {}): CupertinoScrollBehavior;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dragDevices" | "pointerAxisModifiers" | "copyWith" | "getPlatform" | "getMultitouchDragStrategy" | "buildScrollbar" | "buildOverscrollIndicator" | "velocityTrackerBuilder" | "getScrollPhysics" | "shouldNotify" | "getKeyboardDismissBehavior" | "toString" | "__flaxBound:package:flutter/src/cupertino/app.dart::CupertinoScrollBehavior" | "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior";
export {};
