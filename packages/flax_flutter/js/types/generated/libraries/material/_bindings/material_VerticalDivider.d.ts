import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VerticalDivider extends WidgetDescription {
    readonly type: "flax.material/material#type:VerticalDivider";
}
export declare function _VerticalDividerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    thickness?: Bindable<number | null> | undefined;
    indent?: Bindable<number | null> | undefined;
    endIndent?: Bindable<number | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    radius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null> | undefined;
}): VerticalDivider;
export declare const VerticalDivider: typeof _VerticalDividerFactory & _FlaxInstanceType<VerticalDivider> & _FlaxDartType<VerticalDivider, readonly ["class", "flax.material/material#type:VerticalDivider", readonly [], false]>;
