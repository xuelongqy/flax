import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_StackParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_StackParentData';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Positioned extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::Positioned": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [upstream0.StackParentData];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Positioned";
}
export declare function _PositionedFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    left?: Bindable<number | null> | undefined;
    top?: Bindable<number | null> | undefined;
    right?: Bindable<number | null> | undefined;
    bottom?: Bindable<number | null> | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child: Bindable<Widget>;
}): Positioned;
export declare namespace _PositionedFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _PositionedFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _PositionedFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _PositionedFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _PositionedFactory {
    function fromRect(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        rect: Bindable<Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>>;
        child: Bindable<Widget>;
    }): Positioned;
    namespace fromRect {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _PositionedFactory {
    function fromRelativeRect(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        rect: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>>;
        child: Bindable<Widget>;
    }): Positioned;
    namespace fromRelativeRect {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof fromRelativeRect>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof fromRelativeRect>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof fromRelativeRect>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _PositionedFactory {
    function fill(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        left?: Bindable<number | null> | undefined;
        top?: Bindable<number | null> | undefined;
        right?: Bindable<number | null> | undefined;
        bottom?: Bindable<number | null> | undefined;
        child: Bindable<Widget>;
    }): Positioned;
    namespace fill {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof fill>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof fill>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof fill>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _PositionedFactory {
    function directional(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        textDirection: Bindable<upstream4.TextDirection>;
        start?: Bindable<number | null> | undefined;
        top?: Bindable<number | null> | undefined;
        end?: Bindable<number | null> | undefined;
        bottom?: Bindable<number | null> | undefined;
        width?: Bindable<number | null> | undefined;
        height?: Bindable<number | null> | undefined;
        child: Bindable<Widget>;
    }): Positioned;
    namespace directional {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof directional>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof directional>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof directional>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare const Positioned: typeof _PositionedFactory & _FlaxInstanceType<Positioned> & _FlaxDartType<Positioned, readonly ["class", "flax.core/flutter#type:Positioned", readonly [], false]>;
