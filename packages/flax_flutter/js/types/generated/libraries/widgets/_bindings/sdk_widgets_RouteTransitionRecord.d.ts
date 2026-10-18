import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RouteTransitionRecord extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
}> {
    readonly __RouteTransitionRecord: unique symbol;
    readonly [_flaxDartTypeValue]: RouteTransitionRecord;
}
export interface RouteTransitionRecord {
    readonly [_flaxDartTypeValue]: RouteTransitionRecord;
    markForRemove(): void;
}
export declare abstract class RouteTransitionRecord extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteTransitionRecord>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteTransitionRecord;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteTransitionRecord", readonly [], false];
    constructor();
    abstract markForPush(): void;
    abstract markForAdd(): void;
    abstract markForPop(result?: unknown | null): void;
    abstract markForComplete(result?: unknown | null): void;
    abstract get route(): upstream0.Route<unknown | null>;
    abstract get isWaitingForEnteringDecision(): boolean;
    abstract get isWaitingForExitingDecision(): boolean;
}
export declare namespace RouteTransitionRecord {
    function implement(args: [], implementation: {
        markForPush: (() => void);
        markForAdd: (() => void);
        markForPop: ((result?: unknown | null) => void);
        markForComplete: ((result?: unknown | null) => void);
        get route(): Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>;
        get isWaitingForEnteringDecision(): boolean;
        get isWaitingForExitingDecision(): boolean;
    }): RouteTransitionRecord;
}
