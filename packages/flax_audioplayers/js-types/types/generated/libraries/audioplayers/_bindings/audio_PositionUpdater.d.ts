import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PositionUpdater extends Readonly<{
    "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [];
}> {
    readonly __PositionUpdater: unique symbol;
    readonly [_flaxDartTypeValue]: PositionUpdater;
}
export interface PositionUpdater {
    readonly [_flaxDartTypeValue]: PositionUpdater;
    update(): Promise<void>;
    stopAndUpdate(): Promise<void>;
    dispose(): Promise<void>;
    get getPosition(): (() => Promise<upstream0.Duration | null>);
    get positionStream(): upstream1.Stream<upstream0.Duration>;
}
export declare abstract class PositionUpdater extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PositionUpdater>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PositionUpdater;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:PositionUpdater", readonly [], false];
    constructor(options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null>);
    });
    abstract start(): void;
    abstract stop(): void;
}
export declare namespace PositionUpdater {
    function implement(args: [options: {
        getPosition: (() => Promise<(Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null>);
    }], implementation: {
        start: (() => void);
        stop: (() => void);
    }): PositionUpdater;
}
