import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Caption extends Readonly<{
    "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
}> {
    readonly __Caption: unique symbol;
    readonly [_flaxDartTypeValue]: Caption;
    readonly number: number;
    readonly start: upstream0.Duration;
    readonly end: upstream0.Duration;
    readonly text: string;
    toString(): string;
}
export declare function _CaptionFactory(options: {
    number: number;
    start: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    end: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    text: string;
}): Caption;
export interface _CaptionNative extends Caption {
    readonly [_flaxDartTypeValue]: _CaptionNative;
    toString(): string;
    get number(): number;
    get start(): upstream0.Duration;
    get end(): upstream0.Duration;
    get text(): string;
}
export declare abstract class _CaptionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Caption>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Caption;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:Caption", readonly [], false];
    constructor(options: {
        number: number;
        start: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        end: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        text: string;
    });
}
export declare namespace _CaptionFactory {
    function implement(args: [options: {
        number: number;
        start: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        end: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        text: string;
    }], implementation: {}): Caption;
}
declare const _CaptionBinding: typeof _CaptionFactory & (new (options: {
    number: number;
    start: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    end: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    text: string;
}) => _CaptionNative);
export declare namespace _CaptionFactory {
    const none: Caption;
}
export declare const Caption: typeof _CaptionBinding & _FlaxInstanceType<Caption> & _FlaxDartType<Caption, readonly ["class", "flax.video/video#type:Caption", readonly [], false]>;
export {};
