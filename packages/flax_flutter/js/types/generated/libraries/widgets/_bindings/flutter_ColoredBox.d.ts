import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ColoredBox extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::ColoredBox": readonly [];
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
    readonly type: "flax.core/flutter#type:ColoredBox";
}
export declare function _ColoredBoxFactory(options: {
    color: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>;
    isAntiAlias?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
}): ColoredBox;
export declare namespace _ColoredBoxFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ColoredBoxFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _ColoredBoxFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ColoredBoxFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const ColoredBox: typeof _ColoredBoxFactory & _FlaxInstanceType<ColoredBox> & _FlaxDartType<ColoredBox, readonly ["class", "flax.core/flutter#type:ColoredBox", readonly [], false]>;
