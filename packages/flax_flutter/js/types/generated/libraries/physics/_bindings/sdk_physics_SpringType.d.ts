import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpringType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringType">, Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringType": readonly [];
}> {
    readonly __SpringType: unique symbol;
    readonly [_flaxDartTypeValue]: SpringType;
    readonly name: string;
    readonly index: number;
}
export declare const SpringType: Readonly<{
    criticallyDamped: SpringType;
    underDamped: SpringType;
    overDamped: SpringType;
    values: readonly SpringType[];
} & _FlaxInstanceType<SpringType> & _FlaxDartType<SpringType, readonly ["class", "flax.core/sdk_physics#type:SpringType", readonly [], false]>>;
