import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream2 from '@flax/flutter/material/_bindings/material_ThemeData';
import '@flax/flutter/material/_bindings/material_ThemeData';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_ThemeMode';
export interface MaterialApp extends WidgetDescription {
    readonly type: "flax.material/material#type:MaterialApp";
}
export declare function MaterialApp(options?: {
    key?: upstream0.Key | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream1.NavigatorObserver, upstream1.NavigatorObserver>> | undefined;
    title?: Bindable<string | null> | undefined;
    theme?: Bindable<upstream2.ThemeData | null> | undefined;
    darkTheme?: Bindable<upstream2.ThemeData | null> | undefined;
    themeMode?: Bindable<upstream3.ThemeMode | null> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
}): MaterialApp;
