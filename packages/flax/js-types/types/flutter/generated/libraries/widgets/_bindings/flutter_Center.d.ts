import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Center extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Center";
}
export declare function _CenterFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    widthFactor?: Bindable<number | null> | undefined;
    heightFactor?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Center;
export declare const Center: typeof _CenterFactory & _FlaxInstanceType<Center> & _FlaxDartType<Center, readonly ["class", "flax.core/flutter#type:Center", readonly [], false]>;
