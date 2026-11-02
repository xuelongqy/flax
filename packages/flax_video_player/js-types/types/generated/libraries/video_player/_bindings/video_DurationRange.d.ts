import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DurationRange extends Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
}> {
    readonly __DurationRange: unique symbol;
    readonly [_flaxDartTypeValue]: DurationRange;
    readonly start: upstream0.Duration;
    readonly end: upstream0.Duration;
    startFraction(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>): number;
    endFraction(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>): number;
    toString(): string;
}
export declare function _DurationRangeFactory(start: Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}> & Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
}>, end: Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}> & Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
}>): DurationRange;
export interface _DurationRangeNative extends DurationRange {
    readonly [_flaxDartTypeValue]: _DurationRangeNative;
    startFraction(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>): number;
    endFraction(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>): number;
    toString(): string;
    get start(): upstream0.Duration;
    get end(): upstream0.Duration;
}
export declare abstract class _DurationRangeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DurationRange>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DurationRange;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:DurationRange", readonly [], false];
    constructor(start: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>, end: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>);
}
export declare namespace _DurationRangeFactory {
    function implement(args: [start: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>, end: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>], implementation: {}): DurationRange;
}
declare const _DurationRangeBinding: typeof _DurationRangeFactory & (new (start: Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}> & Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
}>, end: Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}> & Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
}>) => _DurationRangeNative);
export declare const DurationRange: typeof _DurationRangeBinding & _FlaxInstanceType<DurationRange> & _FlaxDartType<DurationRange, readonly ["class", "flax.video/video#type:DurationRange", readonly [], false]>;
export {};
