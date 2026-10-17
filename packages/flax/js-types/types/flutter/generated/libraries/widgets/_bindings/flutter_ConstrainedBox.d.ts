import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ConstrainedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ConstrainedBox";
}
export declare function _ConstrainedBoxFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    constraints: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }>>;
    child?: Bindable<Widget | null> | undefined;
}): ConstrainedBox;
export declare const ConstrainedBox: typeof _ConstrainedBoxFactory & _FlaxInstanceType<ConstrainedBox> & _FlaxDartType<ConstrainedBox, readonly ["class", "flax.core/flutter#type:ConstrainedBox", readonly [], false]>;
