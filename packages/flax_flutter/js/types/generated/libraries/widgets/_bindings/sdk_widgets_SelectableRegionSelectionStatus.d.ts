import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectableRegionSelectionStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionSelectionStatus">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionSelectionStatus": readonly [];
}> {
    readonly __SelectableRegionSelectionStatus: unique symbol;
    readonly [_flaxDartTypeValue]: SelectableRegionSelectionStatus;
    readonly name: string;
    readonly index: number;
}
export declare const SelectableRegionSelectionStatus: Readonly<{
    changing: SelectableRegionSelectionStatus;
    finalized: SelectableRegionSelectionStatus;
    values: readonly SelectableRegionSelectionStatus[];
} & _FlaxInstanceType<SelectableRegionSelectionStatus> & _FlaxDartType<SelectableRegionSelectionStatus, readonly ["class", "flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", readonly [], false]>>;
