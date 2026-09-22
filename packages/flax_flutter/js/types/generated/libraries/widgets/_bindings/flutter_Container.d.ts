import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Container extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Container";
}
export declare function Container(options?: {
    key?: upstream0.Key | null | undefined;
    alignment?: Bindable<upstream1.AlignmentGeometry | null> | undefined;
    padding?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
    color?: Bindable<upstream3.Color | null> | undefined;
    isAntiAlias?: Bindable<boolean> | undefined;
    decoration?: Bindable<upstream4.Decoration | null> | undefined;
    foregroundDecoration?: Bindable<upstream4.Decoration | null> | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    constraints?: Bindable<upstream5.BoxConstraints | null> | undefined;
    margin?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
}): Container;
