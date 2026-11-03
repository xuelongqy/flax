import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_PositionUpdater';
import '@flax/audioplayers/_bindings/audio_PositionUpdater';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FramePositionUpdater extends Omit<upstream0.PositionUpdater, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/position_updater.dart::FramePositionUpdater": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [];
}> {
    readonly __FramePositionUpdater: unique symbol;
    readonly [_flaxDartTypeValue]: FramePositionUpdater;
    readonly getPosition: (() => Promise<upstream1.Duration | null>);
    readonly positionStream: upstream2.Stream<upstream1.Duration>;
    update(): Promise<void>;
    start(): void;
    stop(): void;
    stopAndUpdate(): Promise<void>;
    dispose(): Promise<void>;
}
export declare function _FramePositionUpdaterFactory(options: {
    getPosition: (() => Promise<(Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null>);
}): FramePositionUpdater;
export interface _FramePositionUpdaterNative extends FramePositionUpdater {
    readonly [_flaxDartTypeValue]: _FramePositionUpdaterNative;
    update(): Promise<void>;
    start(): void;
    stop(): void;
    stopAndUpdate(): Promise<void>;
    dispose(): Promise<void>;
    get getPosition(): (() => Promise<upstream1.Duration | null>);
    get positionStream(): upstream2.Stream<upstream1.Duration>;
}
export declare abstract class _FramePositionUpdaterNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FramePositionUpdater>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FramePositionUpdater;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:FramePositionUpdater", readonly [], false];
    constructor(options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null>);
    });
}
export declare namespace _FramePositionUpdaterFactory {
    function implement(args: [options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null>);
    }], implementation: {}): FramePositionUpdater;
}
declare const _FramePositionUpdaterBinding: typeof _FramePositionUpdaterFactory & (new (options: {
    getPosition: (() => Promise<(Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null>);
}) => _FramePositionUpdaterNative);
export declare const FramePositionUpdater: typeof _FramePositionUpdaterBinding & _FlaxInstanceType<FramePositionUpdater> & _FlaxDartType<FramePositionUpdater, readonly ["class", "flax.audio/audio#type:FramePositionUpdater", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPosition" | "positionStream" | "update" | "start" | "stop" | "stopAndUpdate" | "dispose" | "__flaxBound:package:audioplayers/src/position_updater.dart::FramePositionUpdater" | "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater";
export {};
