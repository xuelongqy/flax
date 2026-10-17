import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PreferredSize extends _FlaxDartWidget, Omit<upstream0.PreferredSizeWidget, 'kind'> {
    readonly __PreferredSize: unique symbol;
    readonly preferredSize: upstream2.Size;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    build(context: upstream3.BuildContext): Widget;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
}
export declare function _PreferredSizeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    preferredSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>;
    child: Widget;
}): PreferredSize;
export declare const PreferredSize: typeof _PreferredSizeFactory & _FlaxInstanceType<PreferredSize> & _FlaxDartType<PreferredSize, readonly ["class", "flax.core/flutter#type:PreferredSize", readonly [], false]>;
