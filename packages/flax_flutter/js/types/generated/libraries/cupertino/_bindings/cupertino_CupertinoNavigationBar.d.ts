import { type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Border';
import '@flax/flutter/widgets/_bindings/flutter_Border';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export type CupertinoNavigationBar = WidgetDescription & {
    readonly type: "flax.cupertino/cupertino#type:CupertinoNavigationBar";
} & upstream0.ObstructingPreferredSizeWidget;
export declare function CupertinoNavigationBar(options?: {
    key?: upstream1.Key | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    middle?: Widget | null | undefined;
    trailing?: Widget | null | undefined;
    border?: upstream2.Border | null | undefined;
    backgroundColor?: upstream3.Color | null | undefined;
    transitionBetweenRoutes?: boolean | undefined;
}): CupertinoNavigationBar;
