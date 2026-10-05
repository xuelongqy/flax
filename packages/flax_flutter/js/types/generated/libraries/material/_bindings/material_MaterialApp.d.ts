import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/material/_bindings/material_ThemeData';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_ThemeMode';
export interface MaterialApp extends WidgetDescription {
    readonly type: "flax.material/material#type:MaterialApp";
}
export declare function MaterialApp(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream1.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    title?: Bindable<string | null> | undefined;
    theme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    darkTheme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    themeMode?: Bindable<upstream3.ThemeMode | null> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
}): MaterialApp;
