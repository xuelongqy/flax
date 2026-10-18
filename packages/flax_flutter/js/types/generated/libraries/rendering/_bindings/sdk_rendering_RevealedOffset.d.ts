import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RevealedOffset extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [];
}> {
    readonly __RevealedOffset: unique symbol;
    readonly [_flaxDartTypeValue]: RevealedOffset;
}
export interface RevealedOffset {
    readonly [_flaxDartTypeValue]: RevealedOffset;
    toString(): string;
    get offset(): number;
    get rect(): upstream0.Rect;
}
export declare abstract class RevealedOffset extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RevealedOffset>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RevealedOffset;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RevealedOffset", readonly [], false];
    constructor(options: {
        offset: number;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    });
}
export declare namespace RevealedOffset {
    function implement(args: [options: {
        offset: number;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }], implementation: {}): RevealedOffset;
}
export declare namespace RevealedOffset {
    function clampOffset(options: {
        currentOffset: number;
        leadingEdgeOffset: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [];
        }>;
        trailingEdgeOffset: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [];
        }>;
    }): RevealedOffset | null;
}
