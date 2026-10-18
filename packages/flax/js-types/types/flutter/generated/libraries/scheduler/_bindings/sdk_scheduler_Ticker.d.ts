import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Ticker extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
}> {
    readonly __Ticker: unique symbol;
    readonly [_flaxDartTypeValue]: Ticker;
}
export interface Ticker {
    readonly [_flaxDartTypeValue]: Ticker;
    start(): upstream1.TickerFuture;
    describeForError(name: string): upstream2.DiagnosticsNode;
    stop(options?: {
        canceled?: boolean | undefined;
    }): void;
    scheduleTick(options?: {
        rescheduling?: boolean | undefined;
    }): void;
    unscheduleTick(): void;
    absorbTicker(originalTicker: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
    }>): void;
    dispose(): void;
    toString(options?: {
        debugIncludeStack?: boolean | undefined;
    }): string;
    get forceFrames(): boolean;
    get muted(): boolean;
    get isTicking(): boolean;
    get isActive(): boolean;
    get scheduled(): boolean;
    get shouldScheduleTick(): boolean;
    get debugLabel(): string | null;
    set forceFrames(value: boolean);
    set muted(value: boolean);
}
export declare abstract class Ticker extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Ticker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Ticker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:Ticker", readonly [], false];
    constructor(_onTick: ((elapsed: upstream0.Duration) => void), options?: {
        debugLabel?: string | null | undefined;
    });
}
export declare namespace Ticker {
    function implement(args: [_onTick: ((elapsed: upstream0.Duration) => void), options?: {
        debugLabel?: string | null | undefined;
    }], implementation: {}): Ticker;
}
