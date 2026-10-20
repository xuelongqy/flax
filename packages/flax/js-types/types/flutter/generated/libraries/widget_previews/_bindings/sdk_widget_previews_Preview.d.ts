import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import type * as upstream4 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewBuilder';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Preview extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::Preview": readonly [];
}> {
    readonly __Preview: unique symbol;
    readonly [_flaxDartTypeValue]: Preview;
    readonly group: string;
    readonly name: string | null;
    readonly size: upstream0.Size | null;
    readonly textScaleFactor: number | null;
    readonly wrapper: ((p0: Widget) => Widget) | null;
    readonly theme: (() => upstream1.PreviewThemeData) | null;
    readonly brightness: upstream2.Brightness | null;
    readonly localizations: (() => upstream3.PreviewLocalizationsData) | null;
    transform(): Preview;
    toBuilder(): upstream4.PreviewBuilder;
}
export declare function _PreviewFactory(options?: {
    group?: string | undefined;
    name?: string | null | undefined;
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    textScaleFactor?: number | null | undefined;
    wrapper?: ((p0: Widget) => Widget) | null | undefined;
    theme?: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
    }>) | null | undefined;
    brightness?: upstream2.Brightness | null | undefined;
    localizations?: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
    }>) | null | undefined;
}): Preview;
export interface _PreviewNative extends Preview {
    readonly [_flaxDartTypeValue]: _PreviewNative;
    transform(): Preview;
    toBuilder(): upstream4.PreviewBuilder;
    get group(): string;
    get name(): string | null;
    get size(): upstream0.Size | null;
    get textScaleFactor(): number | null;
    get wrapper(): ((p0: Widget) => Widget) | null;
    get theme(): (() => upstream1.PreviewThemeData) | null;
    get brightness(): upstream2.Brightness | null;
    get localizations(): (() => upstream3.PreviewLocalizationsData) | null;
}
export declare abstract class _PreviewNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Preview>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Preview;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:Preview", readonly [], false];
    constructor(options?: {
        group?: string | undefined;
        name?: string | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        textScaleFactor?: number | null | undefined;
        wrapper?: ((p0: Widget) => Widget) | null | undefined;
        theme?: (() => Readonly<{
            "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
        }>) | null | undefined;
        brightness?: upstream2.Brightness | null | undefined;
        localizations?: (() => Readonly<{
            "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _PreviewFactory {
    function implement(args: [options?: {
        group?: string | undefined;
        name?: string | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        textScaleFactor?: number | null | undefined;
        wrapper?: ((p0: Widget) => Widget) | null | undefined;
        theme?: (() => Readonly<{
            "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
        }>) | null | undefined;
        brightness?: upstream2.Brightness | null | undefined;
        localizations?: (() => Readonly<{
            "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
        }>) | null | undefined;
    }], implementation: {}): Preview;
}
declare const _PreviewBinding: typeof _PreviewFactory & (new (options?: {
    group?: string | undefined;
    name?: string | null | undefined;
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    textScaleFactor?: number | null | undefined;
    wrapper?: ((p0: Widget) => Widget) | null | undefined;
    theme?: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
    }>) | null | undefined;
    brightness?: upstream2.Brightness | null | undefined;
    localizations?: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
    }>) | null | undefined;
}) => _PreviewNative);
export declare const Preview: typeof _PreviewBinding & _FlaxInstanceType<Preview> & _FlaxDartType<Preview, readonly ["class", "flax.core/sdk_widget_previews#type:Preview", readonly [], false]>;
export {};
