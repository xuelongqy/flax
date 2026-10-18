import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IconData extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconData": readonly [];
}> {
    readonly __IconData: unique symbol;
    readonly [_flaxDartTypeValue]: IconData;
    readonly codePoint: number;
    readonly fontFamily: string | null;
    readonly fontPackage: string | null;
    readonly matchTextDirection: boolean;
    readonly fontFamilyFallback: DartList<string> | null;
    toString(): string;
}
export declare const IconData: object & _FlaxInstanceType<IconData> & _FlaxDartType<IconData, readonly ["class", "flax.core/sdk_widgets#type:IconData", readonly [], false]>;
