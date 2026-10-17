import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureDetector extends WidgetDescription {
    readonly type: "flax.core/flutter#type:GestureDetector";
}
export declare function _GestureDetectorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onTapCancel?: Bindable<(() => void) | null> | undefined;
    onSecondaryTap?: Bindable<(() => void) | null> | undefined;
    onSecondaryTapCancel?: Bindable<(() => void) | null> | undefined;
    onTertiaryTapCancel?: Bindable<(() => void) | null> | undefined;
    onDoubleTap?: Bindable<(() => void) | null> | undefined;
    onDoubleTapCancel?: Bindable<(() => void) | null> | undefined;
    onLongPressCancel?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onLongPressUp?: Bindable<(() => void) | null> | undefined;
    onSecondaryLongPressCancel?: Bindable<(() => void) | null> | undefined;
    onSecondaryLongPress?: Bindable<(() => void) | null> | undefined;
    onSecondaryLongPressUp?: Bindable<(() => void) | null> | undefined;
    onTertiaryLongPressCancel?: Bindable<(() => void) | null> | undefined;
    onTertiaryLongPress?: Bindable<(() => void) | null> | undefined;
    onTertiaryLongPressUp?: Bindable<(() => void) | null> | undefined;
    onVerticalDragCancel?: Bindable<(() => void) | null> | undefined;
    onHorizontalDragCancel?: Bindable<(() => void) | null> | undefined;
    onPanCancel?: Bindable<(() => void) | null> | undefined;
    behavior?: Bindable<upstream1.HitTestBehavior | null> | undefined;
    excludeFromSemantics?: Bindable<boolean> | undefined;
    dragStartBehavior?: Bindable<upstream2.DragStartBehavior> | undefined;
    trackpadScrollCausesScale?: Bindable<boolean> | undefined;
    trackpadScrollToScaleFactor?: Bindable<upstream3.Offset> | undefined;
}): GestureDetector;
export declare const GestureDetector: typeof _GestureDetectorFactory & _FlaxInstanceType<GestureDetector> & _FlaxDartType<GestureDetector, readonly ["class", "flax.core/flutter#type:GestureDetector", readonly [], false]>;
