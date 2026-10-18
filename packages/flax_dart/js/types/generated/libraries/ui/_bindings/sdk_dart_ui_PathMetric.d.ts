import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Tangent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Tangent';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PathMetric extends Readonly<{
    "__flaxBound:dart:ui::PathMetric": readonly [];
}> {
    readonly __PathMetric: unique symbol;
    readonly [_flaxDartTypeValue]: PathMetric;
    readonly length: number;
    readonly isClosed: boolean;
    readonly contourIndex: number;
    getTangentForOffset(distance: number): upstream0.Tangent | null;
    extractPath(start: number, end: number, options?: {
        startWithMoveTo?: boolean | undefined;
    }): upstream1.Path;
    toString(): string;
}
export declare const PathMetric: object & _FlaxInstanceType<PathMetric> & _FlaxDartType<PathMetric, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetric", readonly [], false]>;
