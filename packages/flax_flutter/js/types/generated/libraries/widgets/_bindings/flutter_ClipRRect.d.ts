import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipRRect extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::ClipRRect": readonly [];
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
    readonly type: "flax.core/flutter#type:ClipRRect";
}
export declare function _ClipRRectFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    borderRadius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>> | undefined;
    clipper?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream3.RRect];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null> | undefined;
    clipBehavior?: Bindable<upstream4.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): ClipRRect;
export declare namespace _ClipRRectFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ClipRRectFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _ClipRRectFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ClipRRectFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const ClipRRect: typeof _ClipRRectFactory & _FlaxInstanceType<ClipRRect> & _FlaxDartType<ClipRRect, readonly ["class", "flax.core/flutter#type:ClipRRect", readonly [], false]>;
