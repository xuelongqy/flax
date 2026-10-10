import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
export interface Padding extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Padding";
}
declare function _PaddingFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    padding: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>>;
    child?: Bindable<Widget | null> | undefined;
}): Padding;
export declare const Padding: typeof _PaddingFactory & _FlaxInstanceType<Padding>;
export {};
