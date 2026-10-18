import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusHighlightMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightMode": readonly [];
}> {
    readonly __FocusHighlightMode: unique symbol;
    readonly [_flaxDartTypeValue]: FocusHighlightMode;
    readonly name: string;
    readonly index: number;
}
export declare const FocusHighlightMode: Readonly<{
    touch: FocusHighlightMode;
    traditional: FocusHighlightMode;
    values: readonly FocusHighlightMode[];
} & _FlaxInstanceType<FocusHighlightMode> & _FlaxDartType<FocusHighlightMode, readonly ["class", "flax.core/sdk_widgets#type:FocusHighlightMode", readonly [], false]>>;
