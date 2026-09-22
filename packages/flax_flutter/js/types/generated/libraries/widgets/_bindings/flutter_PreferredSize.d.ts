import { type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
export type PreferredSize = WidgetDescription & {
    readonly type: "flax.core/flutter#type:PreferredSize";
} & upstream0.PreferredSizeWidget;
export declare function PreferredSize(options: {
    key?: upstream1.Key | null | undefined;
    preferredSize: upstream2.Size;
    child: Widget;
}): PreferredSize;
