import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingHeaderSnapMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/sliver_floating_header.dart::FloatingHeaderSnapMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_floating_header.dart::FloatingHeaderSnapMode": readonly [];
}> {
    readonly __FloatingHeaderSnapMode: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingHeaderSnapMode;
    readonly name: string;
    readonly index: number;
}
export declare const FloatingHeaderSnapMode: Readonly<{
    overlay: FloatingHeaderSnapMode;
    scroll: FloatingHeaderSnapMode;
    values: readonly FloatingHeaderSnapMode[];
} & _FlaxInstanceType<FloatingHeaderSnapMode> & _FlaxDartType<FloatingHeaderSnapMode, readonly ["class", "flax.core/sdk_widgets#type:FloatingHeaderSnapMode", readonly [], false]>>;
