import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ThemeMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "isSystem" | "isLight" | "isDark" | "__flaxBound:package:material_ui/src/app.dart::ThemeMode">, Readonly<{
    "__flaxBound:package:material_ui/src/app.dart::ThemeMode": readonly [];
}> {
    readonly __ThemeMode: unique symbol;
    readonly [_flaxDartTypeValue]: ThemeMode;
    readonly name: string;
    readonly index: number;
    readonly isSystem: boolean;
    readonly isLight: boolean;
    readonly isDark: boolean;
}
export declare const ThemeMode: Readonly<{
    system: ThemeMode;
    light: ThemeMode;
    dark: ThemeMode;
    values: readonly ThemeMode[];
} & _FlaxInstanceType<ThemeMode> & _FlaxDartType<ThemeMode, readonly ["class", "flax.material/material#type:ThemeMode", readonly [], false]>>;
