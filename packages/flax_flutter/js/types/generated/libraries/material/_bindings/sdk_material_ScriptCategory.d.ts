import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScriptCategory extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/typography.dart::ScriptCategory">, Readonly<{
    "__flaxBound:package:flutter/src/material/typography.dart::ScriptCategory": readonly [];
}> {
    readonly __ScriptCategory: unique symbol;
    readonly [_flaxDartTypeValue]: ScriptCategory;
    readonly name: string;
    readonly index: number;
}
export declare const ScriptCategory: Readonly<{
    englishLike: ScriptCategory;
    dense: ScriptCategory;
    tall: ScriptCategory;
    values: readonly ScriptCategory[];
} & _FlaxInstanceType<ScriptCategory> & _FlaxDartType<ScriptCategory, readonly ["class", "flax.core/sdk_material#type:ScriptCategory", readonly [], false]>>;
