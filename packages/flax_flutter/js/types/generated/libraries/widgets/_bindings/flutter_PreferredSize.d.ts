import { type FlaxInstanceType as _FlaxInstanceType, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Size';
export type PreferredSize = WidgetDescription & {
    readonly type: "flax.core/flutter#type:PreferredSize";
} & upstream0.PreferredSizeWidget;
declare function _PreferredSizeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    preferredSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>;
    child: Widget;
}): PreferredSize;
export declare const PreferredSize: typeof _PreferredSizeFactory & _FlaxInstanceType<PreferredSize>;
export {};
