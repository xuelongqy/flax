import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColorPalette';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SystemColorPalette';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemColor extends Readonly<{
    "__flaxBound:dart:ui::SystemColor": readonly [];
}> {
    readonly __SystemColor: unique symbol;
    readonly [_flaxDartTypeValue]: SystemColor;
    readonly name: string;
    readonly value: upstream0.Color | null;
    readonly isSupported: boolean;
}
export declare function _SystemColorFactory(options: {
    name: string;
    value?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): SystemColor;
export declare namespace _SystemColorFactory {
    const platformProvidesSystemColors: boolean;
}
export declare namespace _SystemColorFactory {
    const light: upstream1.SystemColorPalette;
}
export declare namespace _SystemColorFactory {
    const dark: upstream1.SystemColorPalette;
}
export declare const SystemColor: typeof _SystemColorFactory & _FlaxInstanceType<SystemColor> & _FlaxDartType<SystemColor, readonly ["class", "flax.core/sdk_dart_ui#type:SystemColor", readonly [], false]>;
