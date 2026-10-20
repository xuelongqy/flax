import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HoldScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Omit<upstream1.ScrollHoldController, _flaxOwnMembers0 | keyof upstream0.ScrollActivity>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::HoldScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController": readonly [];
}> {
    readonly __HoldScrollActivity: unique symbol;
    readonly [_flaxDartTypeValue]: HoldScrollActivity;
    readonly delegate: upstream2.ScrollActivityDelegate;
    readonly shouldIgnorePointer: boolean;
    readonly isScrolling: boolean;
    readonly velocity: number;
    readonly onHoldCanceled: (() => void) | null;
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
    cancel(): void;
}
export declare function _HoldScrollActivityFactory(options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>;
    onHoldCanceled?: (() => void) | null | undefined;
}): HoldScrollActivity;
export interface _HoldScrollActivityNative extends HoldScrollActivity {
    readonly [_flaxDartTypeValue]: _HoldScrollActivityNative;
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
    cancel(): void;
    get onHoldCanceled(): (() => void) | null;
    get shouldIgnorePointer(): boolean;
    get isScrolling(): boolean;
    get velocity(): number;
    get delegate(): upstream2.ScrollActivityDelegate;
}
export declare abstract class _HoldScrollActivityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HoldScrollActivity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HoldScrollActivity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:HoldScrollActivity", readonly [], false];
    constructor(options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>;
        onHoldCanceled?: (() => void) | null | undefined;
    });
}
export declare namespace _HoldScrollActivityFactory {
    function implement(args: [options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>;
        onHoldCanceled?: (() => void) | null | undefined;
    }], implementation: {}): HoldScrollActivity;
}
declare const _HoldScrollActivityBinding: typeof _HoldScrollActivityFactory & (new (options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>;
    onHoldCanceled?: (() => void) | null | undefined;
}) => _HoldScrollActivityNative);
export declare const HoldScrollActivity: typeof _HoldScrollActivityBinding & _FlaxInstanceType<HoldScrollActivity> & _FlaxDartType<HoldScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:HoldScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "onHoldCanceled" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "cancel" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::HoldScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController";
export {};
