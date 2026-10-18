import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoutePopDisposition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/navigator.dart::RoutePopDisposition">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RoutePopDisposition": readonly [];
}> {
    readonly __RoutePopDisposition: unique symbol;
    readonly [_flaxDartTypeValue]: RoutePopDisposition;
    readonly name: string;
    readonly index: number;
}
export declare const RoutePopDisposition: Readonly<{
    pop: RoutePopDisposition;
    doNotPop: RoutePopDisposition;
    bubble: RoutePopDisposition;
    values: readonly RoutePopDisposition[];
} & _FlaxInstanceType<RoutePopDisposition> & _FlaxDartType<RoutePopDisposition, readonly ["class", "flax.core/sdk_widgets#type:RoutePopDisposition", readonly [], false]>>;
