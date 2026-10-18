import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerMoveEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerMoveEvent';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerHoverEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerHoverEvent';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerCancelEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerCancelEvent';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomUpdateEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomUpdateEvent';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomEndEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomEndEvent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Listener extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::Listener": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Listener";
}
export declare function _ListenerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPointerDown?: Bindable<((event: upstream1.PointerDownEvent) => void) | null> | undefined;
    onPointerMove?: Bindable<((event: upstream2.PointerMoveEvent) => void) | null> | undefined;
    onPointerUp?: Bindable<((event: upstream3.PointerUpEvent) => void) | null> | undefined;
    onPointerHover?: Bindable<((event: upstream4.PointerHoverEvent) => void) | null> | undefined;
    onPointerCancel?: Bindable<((event: upstream5.PointerCancelEvent) => void) | null> | undefined;
    onPointerPanZoomStart?: Bindable<((event: upstream6.PointerPanZoomStartEvent) => void) | null> | undefined;
    onPointerPanZoomUpdate?: Bindable<((event: upstream7.PointerPanZoomUpdateEvent) => void) | null> | undefined;
    onPointerPanZoomEnd?: Bindable<((event: upstream8.PointerPanZoomEndEvent) => void) | null> | undefined;
    onPointerSignal?: Bindable<((event: upstream9.PointerSignalEvent) => void) | null> | undefined;
    behavior?: Bindable<upstream10.HitTestBehavior> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Listener;
export declare const Listener: typeof _ListenerFactory & _FlaxInstanceType<Listener> & _FlaxDartType<Listener, readonly ["class", "flax.core/flutter#type:Listener", readonly [], false]>;
