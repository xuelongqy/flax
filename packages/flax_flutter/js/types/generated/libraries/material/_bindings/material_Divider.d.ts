import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Divider extends WidgetDescription {
    readonly type: "flax.material/material#type:Divider";
}
export declare function _DividerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    height?: Bindable<number | null> | undefined;
    thickness?: Bindable<number | null> | undefined;
    indent?: Bindable<number | null> | undefined;
    endIndent?: Bindable<number | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    radius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null> | undefined;
}): Divider;
export declare namespace _DividerFactory {
    function createBorderSide(context: upstream4.BuildContext | null, options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        width?: number | null | undefined;
    }): upstream3.BorderSide;
}
export declare const Divider: typeof _DividerFactory & _FlaxInstanceType<Divider> & _FlaxDartType<Divider, readonly ["class", "flax.material/material#type:Divider", readonly [], false]>;
