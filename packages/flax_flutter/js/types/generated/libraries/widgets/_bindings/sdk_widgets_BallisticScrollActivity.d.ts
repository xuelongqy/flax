import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BallisticScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::BallisticScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
}> {
    readonly __BallisticScrollActivity: unique symbol;
    readonly [_flaxDartTypeValue]: BallisticScrollActivity;
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
    }>, context: upstream5.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    applyMoveTo(value: number): boolean;
}
export declare function _BallisticScrollActivityFactory(delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, simulation: Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}>, vsync: Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, shouldIgnorePointer: boolean): BallisticScrollActivity;
export interface _BallisticScrollActivityNative extends BallisticScrollActivity {
    readonly [_flaxDartTypeValue]: _BallisticScrollActivityNative;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream5.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    applyMoveTo(value: number): boolean;
    get shouldIgnorePointer(): boolean;
    get isScrolling(): boolean;
    get velocity(): number;
    get delegate(): upstream1.ScrollActivityDelegate;
}
export declare abstract class _BallisticScrollActivityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BallisticScrollActivity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BallisticScrollActivity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BallisticScrollActivity", readonly [], false];
    constructor(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>, shouldIgnorePointer: boolean);
}
export declare namespace _BallisticScrollActivityFactory {
    function implement(args: [delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>, shouldIgnorePointer: boolean], implementation: {}): BallisticScrollActivity;
}
declare const _BallisticScrollActivityBinding: typeof _BallisticScrollActivityFactory & (new (delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, simulation: Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}>, vsync: Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, shouldIgnorePointer: boolean) => _BallisticScrollActivityNative);
export declare const BallisticScrollActivity: typeof _BallisticScrollActivityBinding & _FlaxInstanceType<BallisticScrollActivity> & _FlaxDartType<BallisticScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:BallisticScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "applyMoveTo" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::BallisticScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
export {};
