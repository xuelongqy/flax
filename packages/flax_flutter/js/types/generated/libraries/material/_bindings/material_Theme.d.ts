import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ThemeData';
import '@flax/flutter/material/_bindings/material_ThemeData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface Theme extends WidgetDescription {
    readonly type: "flax.material/material#type:Theme";
}
declare function _ThemeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }>>;
    child: Bindable<Widget>;
}): Theme;
declare namespace _ThemeFactory {
    function of(context: upstream2.BuildContext): upstream1.ThemeData;
}
export declare const Theme: typeof _ThemeFactory & _FlaxInstanceType<Theme>;
export {};
