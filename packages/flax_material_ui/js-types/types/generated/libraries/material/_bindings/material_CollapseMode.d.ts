import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CollapseMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/flexible_space_bar.dart::CollapseMode">, Readonly<{
    "__flaxBound:package:material_ui/src/flexible_space_bar.dart::CollapseMode": readonly [];
}> {
    readonly __CollapseMode: unique symbol;
    readonly [_flaxDartTypeValue]: CollapseMode;
    readonly name: string;
    readonly index: number;
}
export declare const CollapseMode: Readonly<{
    parallax: CollapseMode;
    pin: CollapseMode;
    none: CollapseMode;
    values: readonly CollapseMode[];
} & _FlaxInstanceType<CollapseMode> & _FlaxDartType<CollapseMode, readonly ["class", "flax.material/material#type:CollapseMode", readonly [], false]>>;
