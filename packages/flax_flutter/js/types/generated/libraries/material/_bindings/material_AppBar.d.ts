import { type DartListInput, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export type AppBar = WidgetDescription & {
    readonly type: "flax.material/material#type:AppBar";
} & upstream0.PreferredSizeWidget;
export declare function AppBar(options?: {
    key?: upstream1.Key | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    title?: Widget | null | undefined;
    actions?: DartListInput<Widget, Widget> | null | undefined;
    bottom?: upstream0.PreferredSizeWidget | null | undefined;
    elevation?: number | null | undefined;
    backgroundColor?: upstream2.Color | null | undefined;
    foregroundColor?: upstream2.Color | null | undefined;
    primary?: boolean | undefined;
    centerTitle?: boolean | null | undefined;
    toolbarHeight?: number | null | undefined;
}): AppBar;
