import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_PositionUpdater';
import '@flax/audioplayers/_bindings/audio_PositionUpdater';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimerPositionUpdater extends Omit<upstream0.PositionUpdater, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/position_updater.dart::TimerPositionUpdater": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [];
}> {
    readonly __TimerPositionUpdater: unique symbol;
    readonly [_flaxDartTypeValue]: TimerPositionUpdater;
    readonly getPosition: (() => Promise<upstream1.Duration | null>);
    readonly positionStream: upstream2.Stream<upstream1.Duration>;
    readonly interval: upstream1.Duration;
    update(): Promise<void>;
    start(): void;
    stop(): void;
    stopAndUpdate(): Promise<void>;
    dispose(): Promise<void>;
}
export declare function _TimerPositionUpdaterFactory(options: {
    getPosition: (() => Promise<(Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null>);
    interval: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>;
}): TimerPositionUpdater;
export interface _TimerPositionUpdaterNative extends TimerPositionUpdater {
    readonly [_flaxDartTypeValue]: _TimerPositionUpdaterNative;
    update(): Promise<void>;
    start(): void;
    stop(): void;
    stopAndUpdate(): Promise<void>;
    dispose(): Promise<void>;
    get interval(): upstream1.Duration;
    get getPosition(): (() => Promise<upstream1.Duration | null>);
    get positionStream(): upstream2.Stream<upstream1.Duration>;
}
export declare abstract class _TimerPositionUpdaterNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimerPositionUpdater>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TimerPositionUpdater;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:TimerPositionUpdater", readonly [], false];
    constructor(options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null>);
        interval: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>;
    });
}
export declare namespace _TimerPositionUpdaterFactory {
    function implement(args: [options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null>);
        interval: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>;
    }], implementation: {}): TimerPositionUpdater;
}
declare const _TimerPositionUpdaterBinding: typeof _TimerPositionUpdaterFactory & (new (options: {
    getPosition: (() => Promise<(Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null>);
    interval: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>;
}) => _TimerPositionUpdaterNative);
export declare const TimerPositionUpdater: typeof _TimerPositionUpdaterBinding & _FlaxInstanceType<TimerPositionUpdater> & _FlaxDartType<TimerPositionUpdater, readonly ["class", "flax.audio/audio#type:TimerPositionUpdater", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPosition" | "positionStream" | "interval" | "update" | "start" | "stop" | "stopAndUpdate" | "dispose" | "__flaxBound:package:audioplayers/src/position_updater.dart::TimerPositionUpdater" | "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater";
export {};
