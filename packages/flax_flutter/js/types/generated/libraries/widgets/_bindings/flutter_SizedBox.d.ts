import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/dart/ui/_bindings/flutter_Size';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SizedBox extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::SizedBox": readonly [];
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
    readonly type: "flax.core/flutter#type:SizedBox";
}
export declare function _SizedBoxFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): SizedBox;
export declare namespace _SizedBoxFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _SizedBoxFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _SizedBoxFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _SizedBoxFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _SizedBoxFactory {
    function expand(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
    }): SizedBox;
    namespace expand {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof expand>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof expand>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof expand>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _SizedBoxFactory {
    function shrink(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
    }): SizedBox;
    namespace shrink {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof shrink>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof shrink>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof shrink>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _SizedBoxFactory {
    function fromSize(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        size?: Bindable<(Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null> | undefined;
    }): SizedBox;
    namespace fromSize {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof fromSize>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof fromSize>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof fromSize>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _SizedBoxFactory {
    function square(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        dimension?: Bindable<number | null> | undefined;
    }): SizedBox;
    namespace square {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof square>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof square>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof square>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare const SizedBox: typeof _SizedBoxFactory & _FlaxInstanceType<SizedBox> & _FlaxDartType<SizedBox, readonly ["class", "flax.core/flutter#type:SizedBox", readonly [], false]>;
