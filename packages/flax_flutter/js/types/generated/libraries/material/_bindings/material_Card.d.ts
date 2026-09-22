import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Card extends WidgetDescription {
    readonly type: "flax.material/material#type:Card";
}
export declare function Card(options?: {
    key?: upstream0.Key | null | undefined;
    color?: Bindable<upstream1.Color | null> | undefined;
    shadowColor?: Bindable<upstream1.Color | null> | undefined;
    surfaceTintColor?: Bindable<upstream1.Color | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    margin?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
    clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    semanticContainer?: Bindable<boolean> | undefined;
}): Card;
export declare namespace Card {
    function filled(options?: {
        key?: upstream0.Key | null | undefined;
        color?: Bindable<upstream1.Color | null> | undefined;
        shadowColor?: Bindable<upstream1.Color | null> | undefined;
        surfaceTintColor?: Bindable<upstream1.Color | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        margin?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
export declare namespace Card {
    function outlined(options?: {
        key?: upstream0.Key | null | undefined;
        color?: Bindable<upstream1.Color | null> | undefined;
        shadowColor?: Bindable<upstream1.Color | null> | undefined;
        surfaceTintColor?: Bindable<upstream1.Color | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        margin?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
