import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollbarOrientation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scrollbar.dart::ScrollbarOrientation">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollbar.dart::ScrollbarOrientation": readonly [];
}> {
    readonly __ScrollbarOrientation: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollbarOrientation;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollbarOrientation: Readonly<{
    left: ScrollbarOrientation;
    right: ScrollbarOrientation;
    top: ScrollbarOrientation;
    bottom: ScrollbarOrientation;
    values: readonly ScrollbarOrientation[];
} & _FlaxInstanceType<ScrollbarOrientation> & _FlaxDartType<ScrollbarOrientation, readonly ["class", "flax.core/sdk_widgets#type:ScrollbarOrientation", readonly [], false]>>;
