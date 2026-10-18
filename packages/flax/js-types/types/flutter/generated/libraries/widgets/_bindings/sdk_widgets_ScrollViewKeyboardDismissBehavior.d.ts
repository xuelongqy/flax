import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollViewKeyboardDismissBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollViewKeyboardDismissBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollViewKeyboardDismissBehavior": readonly [];
}> {
    readonly __ScrollViewKeyboardDismissBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollViewKeyboardDismissBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollViewKeyboardDismissBehavior: Readonly<{
    manual: ScrollViewKeyboardDismissBehavior;
    onDrag: ScrollViewKeyboardDismissBehavior;
    values: readonly ScrollViewKeyboardDismissBehavior[];
} & _FlaxInstanceType<ScrollViewKeyboardDismissBehavior> & _FlaxDartType<ScrollViewKeyboardDismissBehavior, readonly ["class", "flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", readonly [], false]>>;
