import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ButtonStyle';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
export interface FilledButton extends WidgetDescription {
    readonly type: "flax.material/material#type:FilledButton";
}
export declare function FilledButton(options: {
    key?: upstream0.Key | null | undefined;
    onPressed: Bindable<(() => void) | null>;
    style?: Bindable<upstream1.ButtonStyle | null> | undefined;
    child: Bindable<Widget | null>;
}): FilledButton;
export declare namespace FilledButton {
    function tonal(options: {
        key?: upstream0.Key | null | undefined;
        onPressed: Bindable<(() => void) | null>;
        style?: Bindable<upstream1.ButtonStyle | null> | undefined;
        child: Bindable<Widget | null>;
    }): FilledButton;
}
