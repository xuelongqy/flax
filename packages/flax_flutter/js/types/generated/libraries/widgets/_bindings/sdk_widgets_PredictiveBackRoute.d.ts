import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PredictiveBackRoute extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}> {
    readonly __PredictiveBackRoute: unique symbol;
    readonly [_flaxDartTypeValue]: PredictiveBackRoute;
    readonly isCurrent: boolean;
    readonly popGestureEnabled: boolean;
    handleStartBackGesture(options?: {
        progress?: number | undefined;
    }): void;
    handleUpdateBackGestureProgress(options: {
        progress: number;
    }): void;
    handleCommitBackGesture(): void;
    handleCancelBackGesture(): void;
}
export declare namespace _PredictiveBackRouteFactory {
    function implement(args: [], implementation: {
        handleStartBackGesture: ((options?: {
            progress?: number | undefined;
        }) => void);
        handleUpdateBackGestureProgress: ((options: {
            progress: number;
        }) => void);
        handleCommitBackGesture: (() => void);
        handleCancelBackGesture: (() => void);
        get isCurrent(): boolean;
        get popGestureEnabled(): boolean;
    }): PredictiveBackRoute;
}
export declare const PredictiveBackRoute: typeof _PredictiveBackRouteFactory & _FlaxInstanceType<PredictiveBackRoute> & _FlaxDartType<PredictiveBackRoute, readonly ["class", "flax.core/sdk_widgets#type:PredictiveBackRoute", readonly [], false]>;
