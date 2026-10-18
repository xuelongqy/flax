import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PathMetricIterator extends Omit<upstream0.Iterator<upstream1.PathMetric>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::PathMetricIterator": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [upstream1.PathMetric];
}> {
    readonly __PathMetricIterator: unique symbol;
    readonly [_flaxDartTypeValue]: PathMetricIterator;
    readonly current: upstream1.PathMetric;
    moveNext(): boolean;
}
export declare const PathMetricIterator: object & _FlaxInstanceType<PathMetricIterator> & _FlaxDartType<PathMetricIterator, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetricIterator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "moveNext" | "__flaxBound:dart:ui::PathMetricIterator" | "__flaxBound:dart:core::Iterator";
export {};
