import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ThemeData';
import '@flax/flutter/material/_bindings/material_ThemeData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface Theme extends WidgetDescription {
    readonly type: "flax.material/material#type:Theme";
}
export declare function Theme(options: {
    key?: upstream0.Key | null | undefined;
    data: Bindable<upstream1.ThemeData>;
    child: Bindable<Widget>;
}): Theme;
export declare namespace Theme {
    function of(context: upstream2.BuildContext): upstream1.ThemeData;
}
