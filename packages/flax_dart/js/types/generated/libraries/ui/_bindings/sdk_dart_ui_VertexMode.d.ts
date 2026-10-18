import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VertexMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::VertexMode">, Readonly<{
    "__flaxBound:dart:ui::VertexMode": readonly [];
}> {
    readonly __VertexMode: unique symbol;
    readonly [_flaxDartTypeValue]: VertexMode;
    readonly name: string;
    readonly index: number;
}
export declare const VertexMode: Readonly<{
    triangles: VertexMode;
    triangleStrip: VertexMode;
    triangleFan: VertexMode;
    values: readonly VertexMode[];
} & _FlaxInstanceType<VertexMode> & _FlaxDartType<VertexMode, readonly ["class", "flax.core/sdk_dart_ui#type:VertexMode", readonly [], false]>>;
