import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/core/navigation/_bindings/flutter_FlaxCanvasContent';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxCanvasView extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxCanvasView": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:FlaxCanvasView";
}
export declare function _FlaxCanvasViewFactory(canvas: Bindable<Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>>, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
}): FlaxCanvasView;
export declare namespace _FlaxCanvasViewFactory {
    const __flaxJsx: {
        readonly props: ({
            "canvas": globalThis.Parameters<typeof _FlaxCanvasViewFactory>[0];
        } & globalThis.NonNullable<globalThis.Parameters<typeof _FlaxCanvasViewFactory>[1]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const FlaxCanvasView: typeof _FlaxCanvasViewFactory & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.core/flutter#type:FlaxCanvasView", readonly [], false]>;
