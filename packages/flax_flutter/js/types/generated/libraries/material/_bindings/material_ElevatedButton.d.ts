import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ButtonStyle';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
export interface ElevatedButton extends WidgetDescription {
    readonly type: "flax.material/material#type:ElevatedButton";
}
export declare function ElevatedButton(options: {
    key?: upstream0.Key | null | undefined;
    onPressed: Bindable<(() => void) | null>;
    style?: Bindable<upstream1.ButtonStyle | null> | undefined;
    child: Bindable<Widget | null>;
}): ElevatedButton;
