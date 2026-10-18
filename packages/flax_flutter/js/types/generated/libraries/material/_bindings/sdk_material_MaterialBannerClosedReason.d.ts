import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialBannerClosedReason extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/banner.dart::MaterialBannerClosedReason">, Readonly<{
    "__flaxBound:package:flutter/src/material/banner.dart::MaterialBannerClosedReason": readonly [];
}> {
    readonly __MaterialBannerClosedReason: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialBannerClosedReason;
    readonly name: string;
    readonly index: number;
}
export declare const MaterialBannerClosedReason: Readonly<{
    dismiss: MaterialBannerClosedReason;
    swipe: MaterialBannerClosedReason;
    hide: MaterialBannerClosedReason;
    remove: MaterialBannerClosedReason;
    values: readonly MaterialBannerClosedReason[];
} & _FlaxInstanceType<MaterialBannerClosedReason> & _FlaxDartType<MaterialBannerClosedReason, readonly ["class", "flax.core/sdk_material#type:MaterialBannerClosedReason", readonly [], false]>>;
