import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ExpansionTileTransitionMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/expansion_tile.dart::ExpansionTileTransitionMode">, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/expansion_tile.dart::ExpansionTileTransitionMode": readonly [];
}> {
    readonly __ExpansionTileTransitionMode: unique symbol;
    readonly [_flaxDartTypeValue]: ExpansionTileTransitionMode;
    readonly name: string;
    readonly index: number;
}
export declare const ExpansionTileTransitionMode: Readonly<{
    fade: ExpansionTileTransitionMode;
    scroll: ExpansionTileTransitionMode;
    values: readonly ExpansionTileTransitionMode[];
} & _FlaxInstanceType<ExpansionTileTransitionMode> & _FlaxDartType<ExpansionTileTransitionMode, readonly ["class", "flax.core/sdk_cupertino#type:ExpansionTileTransitionMode", readonly [], false]>>;
