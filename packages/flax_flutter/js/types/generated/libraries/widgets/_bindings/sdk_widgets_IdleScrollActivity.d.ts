import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IdleScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::IdleScrollActivity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
}> {
    readonly __IdleScrollActivity: unique symbol;
    readonly [_flaxDartTypeValue]: IdleScrollActivity;
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
    }>, context: upstream3.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
}
export declare function _IdleScrollActivityFactory(delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>): IdleScrollActivity;
export interface _IdleScrollActivityNative extends IdleScrollActivity {
    readonly [_flaxDartTypeValue]: _IdleScrollActivityNative;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    resetActivity(): void;
    dispatchScrollStartNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext | null): void;
    dispatchScrollUpdateNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext, scrollDelta: number): void;
    dispatchOverscrollNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext, overscroll: number): void;
    dispatchScrollEndNotification(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream3.BuildContext): void;
    applyNewDimensions(): void;
    dispose(): void;
    toString(): string;
    get shouldIgnorePointer(): boolean;
    get isScrolling(): boolean;
    get velocity(): number;
    get delegate(): upstream1.ScrollActivityDelegate;
}
export declare abstract class _IdleScrollActivityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IdleScrollActivity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IdleScrollActivity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IdleScrollActivity", readonly [], false];
    constructor(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>);
}
export declare namespace _IdleScrollActivityFactory {
    function implement(args: [delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>], implementation: {}): IdleScrollActivity;
}
declare const _IdleScrollActivityBinding: typeof _IdleScrollActivityFactory & (new (delegate: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}>) => _IdleScrollActivityNative);
export declare const IdleScrollActivity: typeof _IdleScrollActivityBinding & _FlaxInstanceType<IdleScrollActivity> & _FlaxDartType<IdleScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:IdleScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::IdleScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
export {};
