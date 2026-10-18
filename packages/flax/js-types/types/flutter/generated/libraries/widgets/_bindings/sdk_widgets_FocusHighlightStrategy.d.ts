import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusHighlightStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightStrategy">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightStrategy": readonly [];
}> {
    readonly __FocusHighlightStrategy: unique symbol;
    readonly [_flaxDartTypeValue]: FocusHighlightStrategy;
    readonly name: string;
    readonly index: number;
}
export declare const FocusHighlightStrategy: Readonly<{
    automatic: FocusHighlightStrategy;
    alwaysTouch: FocusHighlightStrategy;
    alwaysTraditional: FocusHighlightStrategy;
    values: readonly FocusHighlightStrategy[];
} & _FlaxInstanceType<FocusHighlightStrategy> & _FlaxDartType<FocusHighlightStrategy, readonly ["class", "flax.core/sdk_widgets#type:FocusHighlightStrategy", readonly [], false]>>;
