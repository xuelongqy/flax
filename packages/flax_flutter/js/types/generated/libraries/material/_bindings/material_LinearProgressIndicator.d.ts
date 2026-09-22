import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
export interface LinearProgressIndicator extends WidgetDescription {
    readonly type: "flax.material/material#type:LinearProgressIndicator";
}
export declare function LinearProgressIndicator(options?: {
    key?: upstream0.Key | null | undefined;
    value?: Bindable<number | null> | undefined;
    backgroundColor?: Bindable<upstream1.Color | null> | undefined;
    color?: Bindable<upstream1.Color | null> | undefined;
    minHeight?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsValue?: Bindable<string | null> | undefined;
    borderRadius?: Bindable<upstream2.BorderRadiusGeometry | null> | undefined;
}): LinearProgressIndicator;
