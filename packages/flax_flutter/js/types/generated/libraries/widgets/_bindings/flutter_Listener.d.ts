import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
export interface Listener extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Listener";
}
export declare function Listener(options?: {
    key?: upstream0.Key | null | undefined;
    onPointerDown?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onPointerMove?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onPointerUp?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onPointerHover?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onPointerCancel?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onPointerSignal?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    behavior?: Bindable<upstream2.HitTestBehavior> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Listener;
