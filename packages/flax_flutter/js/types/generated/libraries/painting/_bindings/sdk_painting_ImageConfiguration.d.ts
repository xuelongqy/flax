import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
}> {
    readonly __ImageConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: ImageConfiguration;
}
export interface ImageConfiguration {
    readonly [_flaxDartTypeValue]: ImageConfiguration;
    copyWith(options?: {
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        devicePixelRatio?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        platform?: upstream4.TargetPlatform | null | undefined;
    }): ImageConfiguration;
    toString(): string;
    get bundle(): upstream0.AssetBundle | null;
    get devicePixelRatio(): number | null;
    get locale(): upstream1.Locale | null;
    get textDirection(): upstream2.TextDirection | null;
    get size(): upstream3.Size | null;
    get platform(): upstream4.TargetPlatform | null;
}
export declare abstract class ImageConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageConfiguration", readonly [], false];
    constructor(options?: {
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        devicePixelRatio?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        platform?: upstream4.TargetPlatform | null | undefined;
    });
}
export declare namespace ImageConfiguration {
    function implement(args: [options?: {
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        devicePixelRatio?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        platform?: upstream4.TargetPlatform | null | undefined;
    }], implementation: {}): ImageConfiguration;
}
export declare namespace ImageConfiguration {
    const empty: ImageConfiguration;
}
