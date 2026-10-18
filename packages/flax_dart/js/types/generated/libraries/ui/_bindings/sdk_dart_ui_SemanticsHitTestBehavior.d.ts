import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsHitTestBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::SemanticsHitTestBehavior">, Readonly<{
    "__flaxBound:dart:ui::SemanticsHitTestBehavior": readonly [];
}> {
    readonly __SemanticsHitTestBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsHitTestBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const SemanticsHitTestBehavior: Readonly<{
    defer: SemanticsHitTestBehavior;
    opaque: SemanticsHitTestBehavior;
    transparent: SemanticsHitTestBehavior;
    values: readonly SemanticsHitTestBehavior[];
} & _FlaxInstanceType<SemanticsHitTestBehavior> & _FlaxDartType<SemanticsHitTestBehavior, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior", readonly [], false]>>;
