import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageInfo extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
}> {
    readonly __ImageInfo: unique symbol;
    readonly [_flaxDartTypeValue]: ImageInfo;
    readonly image: upstream0.Image;
    readonly sizeBytes: number;
    readonly scale: number;
    readonly debugLabel: string | null;
    clone(): ImageInfo;
    isCloneOf(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
    }>): boolean;
    dispose(): void;
    toString(): string;
}
export declare function _ImageInfoFactory(options: {
    image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>;
    scale?: number | undefined;
    debugLabel?: string | null | undefined;
}): ImageInfo;
export interface _ImageInfoNative extends ImageInfo {
    readonly [_flaxDartTypeValue]: _ImageInfoNative;
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
export declare abstract class _ImageInfoNative extends _FlaxProxyBase {
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
export declare namespace _ImageInfoFactory {
    function implement(args: [options: {
        image: Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>;
        scale?: number | undefined;
        debugLabel?: string | null | undefined;
    }], implementation: {}): ImageInfo;
}
declare const _ImageInfoBinding: typeof _ImageInfoFactory & (new (options: {
    image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>;
    scale?: number | undefined;
    debugLabel?: string | null | undefined;
}) => _ImageInfoNative);
export declare const ImageInfo: typeof _ImageInfoBinding & _FlaxInstanceType<ImageInfo> & _FlaxDartType<ImageInfo, readonly ["class", "flax.core/sdk_painting#type:ImageInfo", readonly [], false]>;
export {};
