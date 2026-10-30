import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LayoutBuilder extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::LayoutBuilder": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder": readonly [upstream0.BoxConstraints];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder": readonly [upstream0.BoxConstraints];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:LayoutBuilder";
}
export declare function _LayoutBuilderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: Bindable<((context: upstream2.BuildContext, constraints: upstream0.BoxConstraints) => Widget)>;
}): LayoutBuilder;
export declare namespace _LayoutBuilderFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _LayoutBuilderFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const LayoutBuilder: typeof _LayoutBuilderFactory & _FlaxInstanceType<LayoutBuilder> & _FlaxDartType<LayoutBuilder, readonly ["class", "flax.core/flutter#type:LayoutBuilder", readonly [], false]>;
