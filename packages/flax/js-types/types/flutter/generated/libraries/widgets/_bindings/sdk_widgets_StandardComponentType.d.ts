import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StandardComponentType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/standard_component_type.dart::StandardComponentType": readonly [];
}> {
    readonly __StandardComponentType: unique symbol;
    readonly [_flaxDartTypeValue]: StandardComponentType;
    readonly name: string;
    readonly index: number;
    readonly key: upstream1.ValueKey<StandardComponentType>;
}
export declare const StandardComponentType: Readonly<{
    backButton: StandardComponentType;
    closeButton: StandardComponentType;
    moreButton: StandardComponentType;
    drawerButton: StandardComponentType;
    values: readonly StandardComponentType[];
} & _FlaxInstanceType<StandardComponentType> & _FlaxDartType<StandardComponentType, readonly ["class", "flax.core/sdk_widgets#type:StandardComponentType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "__flaxBound:package:flutter/src/widgets/standard_component_type.dart::StandardComponentType";
export {};
