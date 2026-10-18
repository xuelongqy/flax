import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/media_query.dart::NavigationMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/media_query.dart::NavigationMode": readonly [];
}> {
    readonly __NavigationMode: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationMode;
    readonly name: string;
    readonly index: number;
}
export declare const NavigationMode: Readonly<{
    traditional: NavigationMode;
    directional: NavigationMode;
    values: readonly NavigationMode[];
} & _FlaxInstanceType<NavigationMode> & _FlaxDartType<NavigationMode, readonly ["class", "flax.core/sdk_widgets#type:NavigationMode", readonly [], false]>>;
