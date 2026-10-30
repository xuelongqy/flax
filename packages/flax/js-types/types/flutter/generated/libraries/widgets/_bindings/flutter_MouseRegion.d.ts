import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerHoverEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerHoverEvent';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MouseRegion extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::MouseRegion": readonly [];
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
    readonly type: "flax.core/flutter#type:MouseRegion";
}
export declare function _MouseRegionFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onEnter?: Bindable<((event: upstream1.PointerEnterEvent) => void) | null> | undefined;
    onExit?: Bindable<((event: upstream2.PointerExitEvent) => void) | null> | undefined;
    onHover?: Bindable<((event: upstream3.PointerHoverEvent) => void) | null> | undefined;
    cursor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | undefined;
    opaque?: Bindable<boolean> | undefined;
    hitTestBehavior?: Bindable<upstream5.HitTestBehavior | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): MouseRegion;
export declare namespace _MouseRegionFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _MouseRegionFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _MouseRegionFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _MouseRegionFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const MouseRegion: typeof _MouseRegionFactory & _FlaxInstanceType<MouseRegion> & _FlaxDartType<MouseRegion, readonly ["class", "flax.core/flutter#type:MouseRegion", readonly [], false]>;
