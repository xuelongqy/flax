import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BannerLocation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/banner.dart::BannerLocation">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/banner.dart::BannerLocation": readonly [];
}> {
    readonly __BannerLocation: unique symbol;
    readonly [_flaxDartTypeValue]: BannerLocation;
    readonly name: string;
    readonly index: number;
}
export declare const BannerLocation: Readonly<{
    topStart: BannerLocation;
    topEnd: BannerLocation;
    bottomStart: BannerLocation;
    bottomEnd: BannerLocation;
    values: readonly BannerLocation[];
} & _FlaxInstanceType<BannerLocation> & _FlaxDartType<BannerLocation, readonly ["class", "flax.core/sdk_widgets#type:BannerLocation", readonly [], false]>>;
