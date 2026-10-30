import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ThemeData';
import '@flax/material-ui/_bindings/material_ThemeData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Theme extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/theme.dart::Theme": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:Theme";
}
export declare function _ThemeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>;
    child: Bindable<Widget>;
}): Theme;
export declare namespace _ThemeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ThemeFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _ThemeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _ThemeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _ThemeFactory {
    function of(context: upstream2.BuildContext): upstream1.ThemeData;
}
export declare namespace _ThemeFactory {
    function brightnessOf(context: upstream2.BuildContext): upstream3.Brightness;
}
export declare namespace _ThemeFactory {
    function maybeBrightnessOf(context: upstream2.BuildContext): upstream3.Brightness | null;
}
export declare const Theme: typeof _ThemeFactory & _FlaxInstanceType<Theme> & _FlaxDartType<Theme, readonly ["class", "flax.material/material#type:Theme", readonly [], false]>;
