import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerSignalKind extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointerSignalKind">, Readonly<{
    "__flaxBound:dart:ui::PointerSignalKind": readonly [];
}> {
    readonly __PointerSignalKind: unique symbol;
    readonly [_flaxDartTypeValue]: PointerSignalKind;
    readonly name: string;
    readonly index: number;
}
export declare const PointerSignalKind: Readonly<{
    none: PointerSignalKind;
    scroll: PointerSignalKind;
    scrollInertiaCancel: PointerSignalKind;
    scale: PointerSignalKind;
    unknown: PointerSignalKind;
    values: readonly PointerSignalKind[];
} & _FlaxInstanceType<PointerSignalKind> & _FlaxDartType<PointerSignalKind, readonly ["class", "flax.core/sdk_dart_ui#type:PointerSignalKind", readonly [], false]>>;
