import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ConstrainedBox extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::ConstrainedBox": readonly [];
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
    readonly type: "flax.core/flutter#type:ConstrainedBox";
}
export declare function _ConstrainedBoxFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    constraints: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>>;
    child?: Bindable<Widget | null> | undefined;
}): ConstrainedBox;
export declare namespace _ConstrainedBoxFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ConstrainedBoxFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _ConstrainedBoxFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ConstrainedBoxFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const ConstrainedBox: typeof _ConstrainedBoxFactory & _FlaxInstanceType<ConstrainedBox> & _FlaxDartType<ConstrainedBox, readonly ["class", "flax.core/flutter#type:ConstrainedBox", readonly [], false]>;
