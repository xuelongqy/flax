import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerDeviceKind extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointerDeviceKind">, Readonly<{
    "__flaxBound:dart:ui::PointerDeviceKind": readonly [];
}> {
    readonly __PointerDeviceKind: unique symbol;
    readonly [_flaxDartTypeValue]: PointerDeviceKind;
    readonly name: string;
    readonly index: number;
}
export declare const PointerDeviceKind: Readonly<{
    touch: PointerDeviceKind;
    mouse: PointerDeviceKind;
    stylus: PointerDeviceKind;
    invertedStylus: PointerDeviceKind;
    trackpad: PointerDeviceKind;
    unknown: PointerDeviceKind;
    values: readonly PointerDeviceKind[];
} & _FlaxInstanceType<PointerDeviceKind> & _FlaxDartType<PointerDeviceKind, readonly ["class", "flax.core/sdk_dart_ui#type:PointerDeviceKind", readonly [], false]>>;
