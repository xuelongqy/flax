import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
export interface GestureDetector extends WidgetDescription {
    readonly type: "flax.core/flutter#type:GestureDetector";
}
export declare function GestureDetector(options?: {
    key?: upstream0.Key | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onTapCancel?: Bindable<(() => void) | null> | undefined;
    onSecondaryTap?: Bindable<(() => void) | null> | undefined;
    onSecondaryTapCancel?: Bindable<(() => void) | null> | undefined;
    onDoubleTap?: Bindable<(() => void) | null> | undefined;
    onDoubleTapCancel?: Bindable<(() => void) | null> | undefined;
    onLongPressCancel?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    behavior?: Bindable<upstream1.HitTestBehavior | null> | undefined;
    excludeFromSemantics?: Bindable<boolean> | undefined;
    dragStartBehavior?: Bindable<upstream2.DragStartBehavior> | undefined;
}): GestureDetector;
