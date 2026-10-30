import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Visibility extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::Visibility": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Visibility";
}
export declare function _VisibilityFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    replacement?: Bindable<Widget> | undefined;
    visible?: Bindable<boolean> | undefined;
    maintainState?: Bindable<boolean> | undefined;
    maintainAnimation?: Bindable<boolean> | undefined;
    maintainSize?: Bindable<boolean> | undefined;
    maintainSemantics?: Bindable<boolean> | undefined;
    maintainInteractivity?: Bindable<boolean> | undefined;
    maintainFocusability?: Bindable<boolean> | undefined;
}): Visibility;
export declare namespace _VisibilityFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _VisibilityFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _VisibilityFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _VisibilityFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _VisibilityFactory {
    function maintain(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        visible?: Bindable<boolean> | undefined;
    }): Visibility;
    namespace maintain {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof maintain>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof maintain>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof maintain>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _VisibilityFactory {
    function of(context: upstream1.BuildContext): boolean;
}
export declare const Visibility: typeof _VisibilityFactory & _FlaxInstanceType<Visibility> & _FlaxDartType<Visibility, readonly ["class", "flax.core/flutter#type:Visibility", readonly [], false]>;
