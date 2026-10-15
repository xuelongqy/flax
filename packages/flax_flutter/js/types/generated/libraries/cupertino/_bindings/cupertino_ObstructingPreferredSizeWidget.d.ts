import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ObstructingPreferredSizeWidget extends _FlaxDartWidget, upstream0.PreferredSizeWidget {
    readonly __ObstructingPreferredSizeWidget: unique symbol;
    readonly preferredSize: upstream2.Size;
    shouldFullyObstruct(context: upstream3.BuildContext): boolean;
}
export interface _ObstructingPreferredSizeWidgetImplementation extends ObstructingPreferredSizeWidget {
    readonly [_flaxDartTypeValue]: _ObstructingPreferredSizeWidgetImplementation;
}
export declare abstract class _ObstructingPreferredSizeWidgetImplementation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObstructingPreferredSizeWidget>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ObstructingPreferredSizeWidget;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", readonly [], false];
    constructor(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    });
    abstract shouldFullyObstruct(context: upstream3.BuildContext): boolean;
    abstract build(context: upstream3.BuildContext): Widget;
    abstract get preferredSize(): upstream2.Size;
}
export declare const ObstructingPreferredSizeWidget: typeof _ObstructingPreferredSizeWidgetImplementation & _FlaxInstanceType<ObstructingPreferredSizeWidget> & _FlaxDartType<ObstructingPreferredSizeWidget, readonly ["class", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", readonly [], false]>;
