import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CacheExtentStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/viewport.dart::CacheExtentStyle">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport.dart::CacheExtentStyle": readonly [];
}> {
    readonly __CacheExtentStyle: unique symbol;
    readonly [_flaxDartTypeValue]: CacheExtentStyle;
    readonly name: string;
    readonly index: number;
}
export declare const CacheExtentStyle: Readonly<{
    pixel: CacheExtentStyle;
    viewport: CacheExtentStyle;
    values: readonly CacheExtentStyle[];
} & _FlaxInstanceType<CacheExtentStyle> & _FlaxDartType<CacheExtentStyle, readonly ["class", "flax.core/sdk_rendering#type:CacheExtentStyle", readonly [], false]>>;
