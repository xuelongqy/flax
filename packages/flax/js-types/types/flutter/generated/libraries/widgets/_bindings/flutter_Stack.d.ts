import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_StackFit';
import '@flax/flutter/rendering/_bindings/flutter_StackFit';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Stack extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::Stack": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Stack";
}
export declare function _StackFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    textDirection?: Bindable<upstream2.TextDirection | null> | undefined;
    fit?: Bindable<upstream3.StackFit> | undefined;
    clipBehavior?: Bindable<upstream4.Clip> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): Stack;
export declare namespace _StackFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _StackFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _StackFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare const Stack: typeof _StackFactory & _FlaxInstanceType<Stack> & _FlaxDartType<Stack, readonly ["class", "flax.core/flutter#type:Stack", readonly [], false]>;
