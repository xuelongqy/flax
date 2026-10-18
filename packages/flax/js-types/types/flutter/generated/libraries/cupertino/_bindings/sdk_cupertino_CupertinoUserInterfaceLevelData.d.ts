import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoUserInterfaceLevelData extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/interface_level.dart::CupertinoUserInterfaceLevelData">, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/interface_level.dart::CupertinoUserInterfaceLevelData": readonly [];
}> {
    readonly __CupertinoUserInterfaceLevelData: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoUserInterfaceLevelData;
    readonly name: string;
    readonly index: number;
}
export declare const CupertinoUserInterfaceLevelData: Readonly<{
    base: CupertinoUserInterfaceLevelData;
    elevated: CupertinoUserInterfaceLevelData;
    values: readonly CupertinoUserInterfaceLevelData[];
} & _FlaxInstanceType<CupertinoUserInterfaceLevelData> & _FlaxDartType<CupertinoUserInterfaceLevelData, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", readonly [], false]>>;
