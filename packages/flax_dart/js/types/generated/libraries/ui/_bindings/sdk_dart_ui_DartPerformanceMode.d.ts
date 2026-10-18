import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DartPerformanceMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::DartPerformanceMode">, Readonly<{
    "__flaxBound:dart:ui::DartPerformanceMode": readonly [];
}> {
    readonly __DartPerformanceMode: unique symbol;
    readonly [_flaxDartTypeValue]: DartPerformanceMode;
    readonly name: string;
    readonly index: number;
}
export declare const DartPerformanceMode: Readonly<{
    balanced: DartPerformanceMode;
    latency: DartPerformanceMode;
    throughput: DartPerformanceMode;
    memory: DartPerformanceMode;
    values: readonly DartPerformanceMode[];
} & _FlaxInstanceType<DartPerformanceMode> & _FlaxDartType<DartPerformanceMode, readonly ["class", "flax.core/sdk_dart_ui#type:DartPerformanceMode", readonly [], false]>>;
