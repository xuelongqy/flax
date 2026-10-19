import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import type * as upstream4 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PreviewBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewBuilder": readonly [];
}> {
    readonly __PreviewBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: PreviewBuilder;
    get group(): string | null;
    get name(): string | null;
    get size(): upstream0.Size | null;
    get textScaleFactor(): number | null;
    get wrapper(): ((p0: Widget) => Widget) | null;
    get theme(): (() => upstream1.PreviewThemeData) | null;
    get brightness(): upstream2.Brightness | null;
    get localizations(): (() => upstream3.PreviewLocalizationsData) | null;
    addWrapper(newWrapper: ((p0: Widget) => Widget)): void;
    build(): upstream4.Preview;
    set group(value: string | null);
    set name(value: string | null);
    set size(value: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
    set textScaleFactor(value: number | null);
    set wrapper(value: ((p0: Widget) => Widget) | null);
    set theme(value: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
    }>) | null);
    set brightness(value: upstream2.Brightness | null);
    set localizations(value: (() => Readonly<{
        "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
    }>) | null);
}
export declare function _PreviewBuilderFactory(): PreviewBuilder;
export declare const PreviewBuilder: typeof _PreviewBuilderFactory & _FlaxInstanceType<PreviewBuilder> & _FlaxDartType<PreviewBuilder, readonly ["class", "flax.core/sdk_widget_previews#type:PreviewBuilder", readonly [], false]>;
