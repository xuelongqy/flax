import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ListTileStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface ListTile extends WidgetDescription {
    readonly type: "flax.material/material#type:ListTile";
}
export declare function ListTile(options?: {
    key?: upstream0.Key | null | undefined;
    leading?: Bindable<Widget | null> | undefined;
    title?: Bindable<Widget | null> | undefined;
    subtitle?: Bindable<Widget | null> | undefined;
    trailing?: Bindable<Widget | null> | undefined;
    isThreeLine?: Bindable<boolean | null> | undefined;
    dense?: Bindable<boolean | null> | undefined;
    style?: Bindable<upstream1.ListTileStyle | null> | undefined;
    selectedColor?: Bindable<upstream2.Color | null> | undefined;
    iconColor?: Bindable<upstream2.Color | null> | undefined;
    textColor?: Bindable<upstream2.Color | null> | undefined;
    titleTextStyle?: Bindable<upstream3.TextStyle | null> | undefined;
    contentPadding?: Bindable<upstream4.EdgeInsetsGeometry | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    selected?: Bindable<boolean> | undefined;
    focusNode?: Bindable<upstream5.FocusNode | null> | undefined;
    tileColor?: Bindable<upstream2.Color | null> | undefined;
    selectedTileColor?: Bindable<upstream2.Color | null> | undefined;
}): ListTile;
