import { type FlaxInstanceType as _FlaxInstanceType, type Widget, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BuildContext extends ComponentContext {
    readonly __BuildContext: unique symbol;
    readonly [_flaxDartTypeValue]: BuildContext;
    readonly widget: Widget;
    readonly owner: upstream0.BuildOwner | null;
    readonly mounted: boolean;
    readonly debugDoingBuild: boolean;
    readonly size: upstream1.Size | null;
}
export declare const BuildContext: object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]>;
