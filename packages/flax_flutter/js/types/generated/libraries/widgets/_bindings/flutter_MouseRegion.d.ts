import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
export interface MouseRegion extends WidgetDescription {
    readonly type: "flax.core/flutter#type:MouseRegion";
}
export declare function MouseRegion(options?: {
    key?: upstream0.Key | null | undefined;
    onEnter?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onExit?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    onHover?: Bindable<((event: upstream1.PointerEvent) => void) | null> | undefined;
    opaque?: Bindable<boolean> | undefined;
    hitTestBehavior?: Bindable<upstream2.HitTestBehavior | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): MouseRegion;
