import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DrivenScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DrivenScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
}> {
    readonly __DrivenScrollActivity: unique symbol;
    readonly [_flaxDartTypeValue]: DrivenScrollActivity;
    readonly delegate: upstream1.ScrollActivityDelegate;
    readonly shouldIgnorePointer: boolean;
    readonly isScrolling: boolean;
    readonly velocity: number;
    readonly done: Promise<void>;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    applyMoveTo(value: number): boolean;
}
export declare function _DrivenScrollActivityFactory(delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, options: {
    from: number;
    to: number;
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>;
    curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>;
    vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>;
}): DrivenScrollActivity;
export declare namespace _DrivenScrollActivityFactory {
    function simulation(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, options: {
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }): DrivenScrollActivity;
}
export interface _DrivenScrollActivityNative extends DrivenScrollActivity {
    readonly [_flaxDartTypeValue]: _DrivenScrollActivityNative;
    readonly [_flaxDartConstructors]?: {
        "": (delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>, options: {
            from: number;
            to: number;
            duration: Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
            }>;
            curve: Readonly<{
                "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
            }>;
            vsync: Readonly<{
                "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
            }>;
        }) => void;
        "simulation": (delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>, simulation: Readonly<{
            "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
        }>, options: {
            vsync: Readonly<{
                "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
            }>;
        }) => void;
    };
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream7.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    applyMoveTo(value: number): boolean;
    get done(): Promise<void>;
    get shouldIgnorePointer(): boolean;
    get isScrolling(): boolean;
    get velocity(): number;
    get delegate(): upstream1.ScrollActivityDelegate;
}
export declare abstract class _DrivenScrollActivityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DrivenScrollActivity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DrivenScrollActivity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DrivenScrollActivity", readonly [], false];
    constructor(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, options: {
        from: number;
        to: number;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    });
    constructor(call: _FlaxProxySuper<_DrivenScrollActivityNative>);
}
export declare namespace _DrivenScrollActivityFactory {
    function implement(args: [delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>, options: {
        from: number;
        to: number;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }], implementation: {}): DrivenScrollActivity;
}
declare const _DrivenScrollActivityBinding: typeof _DrivenScrollActivityFactory & (new (delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>, options: {
    from: number;
    to: number;
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>;
    curve: Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>;
    vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>;
}) => _DrivenScrollActivityNative) & (new (call: _FlaxProxySuper<_DrivenScrollActivityNative>) => _DrivenScrollActivityNative);
export declare const DrivenScrollActivity: typeof _DrivenScrollActivityBinding & _FlaxInstanceType<DrivenScrollActivity> & _FlaxDartType<DrivenScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:DrivenScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "done" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "applyMoveTo" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DrivenScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
export {};
