import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageSizeInfo extends Readonly<{
    "__flaxBound:package:flutter/src/painting/debug.dart::ImageSizeInfo": readonly [];
}> {
    readonly __ImageSizeInfo: unique symbol;
    readonly [_flaxDartTypeValue]: ImageSizeInfo;
    readonly source: string | null;
    readonly displaySize: upstream0.Size;
    readonly imageSize: upstream0.Size;
    readonly displaySizeInBytes: number;
    readonly decodedSizeInBytes: number;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _ImageSizeInfoFactory(options: {
    source?: string | null | undefined;
    displaySize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    imageSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): ImageSizeInfo;
export interface _ImageSizeInfoNative extends ImageSizeInfo {
    readonly [_flaxDartTypeValue]: _ImageSizeInfoNative;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get source(): string | null;
    get displaySize(): upstream0.Size;
    get imageSize(): upstream0.Size;
    get displaySizeInBytes(): number;
    get decodedSizeInBytes(): number;
}
export declare abstract class _ImageSizeInfoNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageSizeInfo>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageSizeInfo;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false];
    constructor(options: {
        source?: string | null | undefined;
        displaySize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        imageSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _ImageSizeInfoFactory {
    function implement(args: [options: {
        source?: string | null | undefined;
        displaySize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        imageSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): ImageSizeInfo;
}
declare const _ImageSizeInfoBinding: typeof _ImageSizeInfoFactory & (new (options: {
    source?: string | null | undefined;
    displaySize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    imageSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _ImageSizeInfoNative);
export declare const ImageSizeInfo: typeof _ImageSizeInfoBinding & _FlaxInstanceType<ImageSizeInfo> & _FlaxDartType<ImageSizeInfo, readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false]>;
export {};
