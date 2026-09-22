import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface CircularProgressIndicator extends WidgetDescription {
    readonly type: "flax.material/material#type:CircularProgressIndicator";
}
export declare function CircularProgressIndicator(options?: {
    key?: upstream0.Key | null | undefined;
    value?: Bindable<number | null> | undefined;
    backgroundColor?: Bindable<upstream1.Color | null> | undefined;
    color?: Bindable<upstream1.Color | null> | undefined;
    strokeWidth?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
}): CircularProgressIndicator;
