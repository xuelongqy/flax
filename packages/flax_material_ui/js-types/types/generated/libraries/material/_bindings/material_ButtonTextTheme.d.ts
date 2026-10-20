import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonTextTheme extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_theme.dart::ButtonTextTheme">, Readonly<{
    "__flaxBound:package:material_ui/src/button_theme.dart::ButtonTextTheme": readonly [];
}> {
    readonly __ButtonTextTheme: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonTextTheme;
    readonly name: string;
    readonly index: number;
}
export declare const ButtonTextTheme: Readonly<{
    normal: ButtonTextTheme;
    accent: ButtonTextTheme;
    primary: ButtonTextTheme;
    values: readonly ButtonTextTheme[];
} & _FlaxInstanceType<ButtonTextTheme> & _FlaxDartType<ButtonTextTheme, readonly ["class", "flax.material/material#type:ButtonTextTheme", readonly [], false]>>;
