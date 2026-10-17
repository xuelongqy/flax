import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FittedSizes extends Readonly<{
    "__flaxBound:package:flutter/src/painting/box_fit.dart::FittedSizes": readonly [];
}> {
    readonly __FittedSizes: unique symbol;
    readonly source: upstream0.Size;
    readonly destination: upstream0.Size;
}
export declare function _FittedSizesFactory(source: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>, destination: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>): FittedSizes;
export declare const FittedSizes: typeof _FittedSizesFactory & _FlaxInstanceType<FittedSizes> & _FlaxDartType<FittedSizes, readonly ["class", "flax.core/flutter#type:FittedSizes", readonly [], false]>;
