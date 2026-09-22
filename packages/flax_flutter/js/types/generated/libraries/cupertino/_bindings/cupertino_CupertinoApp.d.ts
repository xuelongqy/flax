import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/cupertino_CupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/cupertino_CupertinoThemeData';
export interface CupertinoApp extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoApp";
}
export declare function CupertinoApp(options?: {
    key?: upstream0.Key | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    theme?: Bindable<upstream1.CupertinoThemeData | null> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
}): CupertinoApp;
