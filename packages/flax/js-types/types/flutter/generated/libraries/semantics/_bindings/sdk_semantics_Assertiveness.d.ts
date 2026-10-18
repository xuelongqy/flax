import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Assertiveness extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::Assertiveness">, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::Assertiveness": readonly [];
}> {
    readonly __Assertiveness: unique symbol;
    readonly [_flaxDartTypeValue]: Assertiveness;
    readonly name: string;
    readonly index: number;
}
export declare const Assertiveness: Readonly<{
    polite: Assertiveness;
    assertive: Assertiveness;
    values: readonly Assertiveness[];
} & _FlaxInstanceType<Assertiveness> & _FlaxDartType<Assertiveness, readonly ["class", "flax.core/sdk_semantics#type:Assertiveness", readonly [], false]>>;
