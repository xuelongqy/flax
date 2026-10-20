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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
}> {
    readonly __ImageConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: ImageConfiguration;
    readonly bundle: upstream0.AssetBundle | null;
    readonly devicePixelRatio: number | null;
    readonly locale: upstream1.Locale | null;
    readonly textDirection: upstream2.TextDirection | null;
    readonly size: upstream3.Size | null;
    readonly platform: upstream4.TargetPlatform | null;
    copyWith(options?: {
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        devicePixelRatio?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        platform?: upstream4.TargetPlatform | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
    }): ImageConfiguration;
    toString(): string;
}
export declare function _ImageConfigurationFactory(options?: {
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
export interface _ImageConfigurationNative extends ImageConfiguration {
    readonly [_flaxDartTypeValue]: _ImageConfigurationNative;
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
export declare abstract class _ImageConfigurationNative extends _FlaxProxyBase {
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
export declare namespace _ImageConfigurationFactory {
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
declare const _ImageConfigurationBinding: typeof _ImageConfigurationFactory & (new (options?: {
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
}) => _ImageConfigurationNative);
export declare namespace _ImageConfigurationFactory {
    const empty: ImageConfiguration;
}
export declare const ImageConfiguration: typeof _ImageConfigurationBinding & _FlaxInstanceType<ImageConfiguration> & _FlaxDartType<ImageConfiguration, readonly ["class", "flax.core/sdk_painting#type:ImageConfiguration", readonly [], false]>;
export {};
