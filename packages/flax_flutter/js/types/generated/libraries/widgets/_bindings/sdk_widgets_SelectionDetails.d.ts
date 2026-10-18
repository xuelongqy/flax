import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionDetails": readonly [];
}> {
    readonly __SelectionDetails: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionDetails;
    readonly range: upstream0.SelectedContentRange | null;
    readonly status: upstream1.SelectionStatus;
}
export declare const SelectionDetails: object & _FlaxInstanceType<SelectionDetails> & _FlaxDartType<SelectionDetails, readonly ["class", "flax.core/sdk_widgets#type:SelectionDetails", readonly [], false]>;
