import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollDragController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DragScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
}> {
    readonly __DragScrollActivity: unique symbol;
    readonly [_flaxDartTypeValue]: DragScrollActivity;
    readonly delegate: upstream1.ScrollActivityDelegate;
    readonly shouldIgnorePointer: boolean;
    readonly isScrolling: boolean;
    readonly velocity: number;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
}
export declare function _DragScrollActivityFactory(delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, controller: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
}>): DragScrollActivity;
export interface _DragScrollActivityNative extends DragScrollActivity {
    readonly [_flaxDartTypeValue]: _DragScrollActivityNative;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    get shouldIgnorePointer(): boolean;
    get isScrolling(): boolean;
    get velocity(): number;
    get delegate(): upstream1.ScrollActivityDelegate;
}
export declare abstract class _DragScrollActivityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragScrollActivity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DragScrollActivity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false];
    constructor(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }>);
}
export declare namespace _DragScrollActivityFactory {
    function implement(args: [delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }>], implementation: {}): DragScrollActivity;
}
declare const _DragScrollActivityBinding: typeof _DragScrollActivityFactory & (new (delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, controller: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
}>) => _DragScrollActivityNative);
export declare const DragScrollActivity: typeof _DragScrollActivityBinding & _FlaxInstanceType<DragScrollActivity> & _FlaxDartType<DragScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
export {};
