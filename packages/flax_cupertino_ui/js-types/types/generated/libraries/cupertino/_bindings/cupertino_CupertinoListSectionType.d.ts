import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoListSectionType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSectionType">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSectionType": readonly [];
}> {
    readonly __CupertinoListSectionType: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoListSectionType;
    readonly name: string;
    readonly index: number;
}
export declare const CupertinoListSectionType: Readonly<{
    base: CupertinoListSectionType;
    insetGrouped: CupertinoListSectionType;
    values: readonly CupertinoListSectionType[];
} & _FlaxInstanceType<CupertinoListSectionType> & _FlaxDartType<CupertinoListSectionType, readonly ["class", "flax.cupertino/cupertino#type:CupertinoListSectionType", readonly [], false]>>;
