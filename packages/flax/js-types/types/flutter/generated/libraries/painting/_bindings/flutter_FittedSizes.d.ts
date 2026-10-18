import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FittedSizes extends Readonly<{
    "__flaxBound:package:flutter/src/painting/box_fit.dart::FittedSizes": readonly [];
}> {
    readonly __FittedSizes: unique symbol;
    readonly [_flaxDartTypeValue]: FittedSizes;
    readonly source: upstream0.Size;
    readonly destination: upstream0.Size;
}
export declare function _FittedSizesFactory(source: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, destination: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>): FittedSizes;
export declare const FittedSizes: typeof _FittedSizesFactory & _FlaxInstanceType<FittedSizes> & _FlaxDartType<FittedSizes, readonly ["class", "flax.core/flutter#type:FittedSizes", readonly [], false]>;
