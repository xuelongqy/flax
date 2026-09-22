import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream5 from '@flax/flutter/material/_bindings/material_ButtonStyle';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
export interface IconButton extends WidgetDescription {
    readonly type: "flax.material/material#type:IconButton";
}
export declare function IconButton(options: {
    key?: upstream0.Key | null | undefined;
    iconSize?: Bindable<number | null> | undefined;
    padding?: Bindable<upstream1.EdgeInsetsGeometry | null> | undefined;
    alignment?: Bindable<upstream2.AlignmentGeometry | null> | undefined;
    color?: Bindable<upstream3.Color | null> | undefined;
    disabledColor?: Bindable<upstream3.Color | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
    focusNode?: Bindable<upstream4.FocusNode | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    tooltip?: Bindable<string | null> | undefined;
    style?: Bindable<upstream5.ButtonStyle | null> | undefined;
    isSelected?: Bindable<boolean | null> | undefined;
    selectedIcon?: Bindable<Widget | null> | undefined;
    icon: Bindable<Widget>;
}): IconButton;
export declare namespace IconButton {
    function filled(options: {
        key?: upstream0.Key | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<upstream1.EdgeInsetsGeometry | null> | undefined;
        alignment?: Bindable<upstream2.AlignmentGeometry | null> | undefined;
        color?: Bindable<upstream3.Color | null> | undefined;
        disabledColor?: Bindable<upstream3.Color | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream4.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<upstream5.ButtonStyle | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
export declare namespace IconButton {
    function filledTonal(options: {
        key?: upstream0.Key | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<upstream1.EdgeInsetsGeometry | null> | undefined;
        alignment?: Bindable<upstream2.AlignmentGeometry | null> | undefined;
        color?: Bindable<upstream3.Color | null> | undefined;
        disabledColor?: Bindable<upstream3.Color | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream4.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<upstream5.ButtonStyle | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
export declare namespace IconButton {
    function outlined(options: {
        key?: upstream0.Key | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<upstream1.EdgeInsetsGeometry | null> | undefined;
        alignment?: Bindable<upstream2.AlignmentGeometry | null> | undefined;
        color?: Bindable<upstream3.Color | null> | undefined;
        disabledColor?: Bindable<upstream3.Color | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream4.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<upstream5.ButtonStyle | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
