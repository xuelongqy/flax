import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerChange extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointerChange">, Readonly<{
    "__flaxBound:dart:ui::PointerChange": readonly [];
}> {
    readonly __PointerChange: unique symbol;
    readonly [_flaxDartTypeValue]: PointerChange;
    readonly name: string;
    readonly index: number;
}
export declare const PointerChange: Readonly<{
    cancel: PointerChange;
    add: PointerChange;
    remove: PointerChange;
    hover: PointerChange;
    down: PointerChange;
    move: PointerChange;
    up: PointerChange;
    panZoomStart: PointerChange;
    panZoomUpdate: PointerChange;
    panZoomEnd: PointerChange;
    values: readonly PointerChange[];
} & _FlaxInstanceType<PointerChange> & _FlaxDartType<PointerChange, readonly ["class", "flax.core/sdk_dart_ui#type:PointerChange", readonly [], false]>>;
