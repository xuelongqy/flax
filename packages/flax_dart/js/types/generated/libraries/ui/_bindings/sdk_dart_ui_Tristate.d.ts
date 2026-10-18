import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Tristate extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "value" | "hasConflict" | "merge" | "toBoolOrNull" | "__flaxBound:dart:ui::Tristate">, Readonly<{
    "__flaxBound:dart:ui::Tristate": readonly [];
}> {
    readonly __Tristate: unique symbol;
    readonly [_flaxDartTypeValue]: Tristate;
    readonly name: string;
    readonly index: number;
    readonly value: number;
    hasConflict(other: Tristate): boolean;
    merge(other: Tristate): Tristate;
    toBoolOrNull(): boolean | null;
}
export declare const Tristate: Readonly<{
    none: Tristate;
    isTrue: Tristate;
    isFalse: Tristate;
    values: readonly Tristate[];
} & _FlaxInstanceType<Tristate> & _FlaxDartType<Tristate, readonly ["class", "flax.core/sdk_dart_ui#type:Tristate", readonly [], false]>>;
