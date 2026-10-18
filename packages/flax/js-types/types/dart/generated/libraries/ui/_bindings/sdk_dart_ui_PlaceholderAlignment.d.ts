import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlaceholderAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PlaceholderAlignment">, Readonly<{
    "__flaxBound:dart:ui::PlaceholderAlignment": readonly [];
}> {
    readonly __PlaceholderAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: PlaceholderAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const PlaceholderAlignment: Readonly<{
    baseline: PlaceholderAlignment;
    aboveBaseline: PlaceholderAlignment;
    belowBaseline: PlaceholderAlignment;
    top: PlaceholderAlignment;
    bottom: PlaceholderAlignment;
    middle: PlaceholderAlignment;
    values: readonly PlaceholderAlignment[];
} & _FlaxInstanceType<PlaceholderAlignment> & _FlaxDartType<PlaceholderAlignment, readonly ["class", "flax.core/sdk_dart_ui#type:PlaceholderAlignment", readonly [], false]>>;
