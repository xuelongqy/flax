import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColor';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColor';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemColorPalette extends Readonly<{
    "__flaxBound:dart:ui::SystemColorPalette": readonly [];
}> {
    readonly __SystemColorPalette: unique symbol;
    readonly [_flaxDartTypeValue]: SystemColorPalette;
    readonly brightness: upstream0.Brightness;
    readonly accentColor: upstream1.SystemColor;
    readonly accentColorText: upstream1.SystemColor;
    readonly activeText: upstream1.SystemColor;
    readonly buttonBorder: upstream1.SystemColor;
    readonly buttonFace: upstream1.SystemColor;
    readonly buttonText: upstream1.SystemColor;
    readonly canvas: upstream1.SystemColor;
    readonly canvasText: upstream1.SystemColor;
    readonly field: upstream1.SystemColor;
    readonly fieldText: upstream1.SystemColor;
    readonly grayText: upstream1.SystemColor;
    readonly highlight: upstream1.SystemColor;
    readonly highlightText: upstream1.SystemColor;
    readonly linkText: upstream1.SystemColor;
    readonly mark: upstream1.SystemColor;
    readonly markText: upstream1.SystemColor;
    readonly selectedItem: upstream1.SystemColor;
    readonly selectedItemText: upstream1.SystemColor;
    readonly visitedText: upstream1.SystemColor;
}
export declare const SystemColorPalette: object & _FlaxInstanceType<SystemColorPalette> & _FlaxDartType<SystemColorPalette, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColorPalette", readonly [], false]>;
