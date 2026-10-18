import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InspectorButtonVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorButtonVariant">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorButtonVariant": readonly [];
}> {
    readonly __InspectorButtonVariant: unique symbol;
    readonly [_flaxDartTypeValue]: InspectorButtonVariant;
    readonly name: string;
    readonly index: number;
}
export declare const InspectorButtonVariant: Readonly<{
    filled: InspectorButtonVariant;
    toggle: InspectorButtonVariant;
    iconOnly: InspectorButtonVariant;
    values: readonly InspectorButtonVariant[];
} & _FlaxInstanceType<InspectorButtonVariant> & _FlaxDartType<InspectorButtonVariant, readonly ["class", "flax.core/sdk_widgets#type:InspectorButtonVariant", readonly [], false]>>;
