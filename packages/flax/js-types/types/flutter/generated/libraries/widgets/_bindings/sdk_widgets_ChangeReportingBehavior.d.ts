import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChangeReportingBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ChangeReportingBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ChangeReportingBehavior": readonly [];
}> {
    readonly __ChangeReportingBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: ChangeReportingBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const ChangeReportingBehavior: Readonly<{
    onScrollEnd: ChangeReportingBehavior;
    onScrollUpdate: ChangeReportingBehavior;
    values: readonly ChangeReportingBehavior[];
} & _FlaxInstanceType<ChangeReportingBehavior> & _FlaxDartType<ChangeReportingBehavior, readonly ["class", "flax.core/sdk_widgets#type:ChangeReportingBehavior", readonly [], false]>>;
