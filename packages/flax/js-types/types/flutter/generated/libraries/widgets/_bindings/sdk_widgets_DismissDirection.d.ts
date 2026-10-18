import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DismissDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissDirection">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissDirection": readonly [];
}> {
    readonly __DismissDirection: unique symbol;
    readonly [_flaxDartTypeValue]: DismissDirection;
    readonly name: string;
    readonly index: number;
}
export declare const DismissDirection: Readonly<{
    vertical: DismissDirection;
    horizontal: DismissDirection;
    endToStart: DismissDirection;
    startToEnd: DismissDirection;
    up: DismissDirection;
    down: DismissDirection;
    none: DismissDirection;
    values: readonly DismissDirection[];
} & _FlaxInstanceType<DismissDirection> & _FlaxDartType<DismissDirection, readonly ["class", "flax.core/sdk_widgets#type:DismissDirection", readonly [], false]>>;
