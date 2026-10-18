import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageInfo extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
}> {
    readonly __ImageInfo: unique symbol;
    readonly [_flaxDartTypeValue]: ImageInfo;
}
export interface ImageInfo {
    readonly [_flaxDartTypeValue]: ImageInfo;
    clone(): ImageInfo;
    isCloneOf(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
    }>): boolean;
    dispose(): void;
    toString(): string;
    get image(): upstream0.Image;
    get sizeBytes(): number;
    get scale(): number;
    get debugLabel(): string | null;
}
export declare abstract class ImageInfo extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageInfo>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageInfo;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageInfo", readonly [], false];
    constructor(options: {
        image: Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>;
        scale?: number | undefined;
        debugLabel?: string | null | undefined;
    });
}
export declare namespace ImageInfo {
    function implement(args: [options: {
        image: Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>;
        scale?: number | undefined;
        debugLabel?: string | null | undefined;
    }], implementation: {}): ImageInfo;
}
