import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
export interface InkWell extends WidgetDescription {
    readonly type: "flax.material/material#type:InkWell";
}
export declare function InkWell(options?: {
    key?: upstream0.Key | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onHighlightChanged?: Bindable<((value: boolean) => void) | null> | undefined;
    onHover?: Bindable<((value: boolean) => void) | null> | undefined;
    mouseCursor?: Bindable<upstream1.MouseCursor | null> | undefined;
    hoverColor?: Bindable<upstream2.Color | null> | undefined;
    highlightColor?: Bindable<upstream2.Color | null> | undefined;
    splashColor?: Bindable<upstream2.Color | null> | undefined;
    borderRadius?: Bindable<upstream3.BorderRadius | null> | undefined;
    customBorder?: Bindable<upstream4.ShapeBorder | null> | undefined;
    enableFeedback?: Bindable<boolean> | undefined;
}): InkWell;
