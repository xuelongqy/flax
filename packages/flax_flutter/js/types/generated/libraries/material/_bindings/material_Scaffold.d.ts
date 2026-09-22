import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface Scaffold extends WidgetDescription {
    readonly type: "flax.material/material#type:Scaffold";
}
export declare function Scaffold(options?: {
    key?: upstream0.Key | null | undefined;
    appBar?: Bindable<upstream1.PreferredSizeWidget | null> | undefined;
    body?: Bindable<Widget | null> | undefined;
    floatingActionButton?: Bindable<Widget | null> | undefined;
    drawer?: Bindable<Widget | null> | undefined;
    endDrawer?: Bindable<Widget | null> | undefined;
    bottomNavigationBar?: Bindable<Widget | null> | undefined;
    backgroundColor?: Bindable<upstream2.Color | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean | null> | undefined;
    primary?: Bindable<boolean> | undefined;
    extendBody?: Bindable<boolean> | undefined;
    extendBodyBehindAppBar?: Bindable<boolean> | undefined;
}): Scaffold;
