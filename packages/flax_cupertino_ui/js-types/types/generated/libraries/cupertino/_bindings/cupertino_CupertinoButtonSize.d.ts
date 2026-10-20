import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoButtonSize extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/button.dart::CupertinoButtonSize">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/button.dart::CupertinoButtonSize": readonly [];
}> {
    readonly __CupertinoButtonSize: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoButtonSize;
    readonly name: string;
    readonly index: number;
}
export declare const CupertinoButtonSize: Readonly<{
    small: CupertinoButtonSize;
    medium: CupertinoButtonSize;
    large: CupertinoButtonSize;
    values: readonly CupertinoButtonSize[];
} & _FlaxInstanceType<CupertinoButtonSize> & _FlaxDartType<CupertinoButtonSize, readonly ["class", "flax.cupertino/cupertino#type:CupertinoButtonSize", readonly [], false]>>;
