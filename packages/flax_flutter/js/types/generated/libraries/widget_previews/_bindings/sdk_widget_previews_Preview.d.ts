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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Preview extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::Preview": readonly [];
}> {
    readonly __Preview: unique symbol;
    readonly [_flaxDartTypeValue]: Preview;
}
export interface Preview {
    readonly [_flaxDartTypeValue]: Preview;
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
export declare abstract class Preview extends _FlaxProxyBase {
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
export declare namespace Preview {
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
