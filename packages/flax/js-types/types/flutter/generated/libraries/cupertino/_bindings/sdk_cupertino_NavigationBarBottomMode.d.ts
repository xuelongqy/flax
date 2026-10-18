import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationBarBottomMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/nav_bar.dart::NavigationBarBottomMode">, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/nav_bar.dart::NavigationBarBottomMode": readonly [];
}> {
    readonly __NavigationBarBottomMode: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationBarBottomMode;
    readonly name: string;
    readonly index: number;
}
export declare const NavigationBarBottomMode: Readonly<{
    automatic: NavigationBarBottomMode;
    always: NavigationBarBottomMode;
    values: readonly NavigationBarBottomMode[];
} & _FlaxInstanceType<NavigationBarBottomMode> & _FlaxDartType<NavigationBarBottomMode, readonly ["class", "flax.core/sdk_cupertino#type:NavigationBarBottomMode", readonly [], false]>>;
