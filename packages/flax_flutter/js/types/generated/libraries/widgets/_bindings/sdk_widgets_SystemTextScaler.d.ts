import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemTextScaler extends Omit<upstream0.TextScaler, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/media_query.dart::SystemTextScaler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
}> {
    readonly __SystemTextScaler: unique symbol;
    readonly [_flaxDartTypeValue]: SystemTextScaler;
    readonly textScaleFactor: number;
    scale(fontSize: number): number;
    clamp(options?: {
        maxScaleFactor?: number | undefined;
        minScaleFactor?: number | undefined;
    }): upstream0.TextScaler;
    toString(): string;
}
export declare const SystemTextScaler: object & _FlaxInstanceType<SystemTextScaler> & _FlaxDartType<SystemTextScaler, readonly ["class", "flax.core/sdk_widgets#type:SystemTextScaler", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textScaleFactor" | "scale" | "clamp" | "toString" | "__flaxBound:package:flutter/src/widgets/media_query.dart::SystemTextScaler" | "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler";
export {};
