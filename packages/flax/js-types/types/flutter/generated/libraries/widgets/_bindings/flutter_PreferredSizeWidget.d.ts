import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PreferredSizeWidget extends _FlaxDartWidget {
    readonly __PreferredSizeWidget: unique symbol;
    readonly preferredSize: upstream1.Size;
}
export interface _PreferredSizeWidgetImplementation extends PreferredSizeWidget {
    readonly [_flaxDartTypeValue]: _PreferredSizeWidgetImplementation;
}
export declare abstract class _PreferredSizeWidgetImplementation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PreferredSizeWidget>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PreferredSizeWidget;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:PreferredSizeWidget", readonly [], false];
    constructor(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    });
    abstract build(context: upstream2.BuildContext): Widget;
    abstract get preferredSize(): upstream1.Size;
}
export declare const PreferredSizeWidget: typeof _PreferredSizeWidgetImplementation & _FlaxInstanceType<PreferredSizeWidget> & _FlaxDartType<PreferredSizeWidget, readonly ["class", "flax.core/flutter#type:PreferredSizeWidget", readonly [], false]>;
