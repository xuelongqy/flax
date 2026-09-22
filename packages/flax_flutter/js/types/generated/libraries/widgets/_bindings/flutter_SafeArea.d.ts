import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
export interface SafeArea extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SafeArea";
}
export declare function SafeArea(options: {
    key?: upstream0.Key | null | undefined;
    left?: Bindable<boolean> | undefined;
    top?: Bindable<boolean> | undefined;
    right?: Bindable<boolean> | undefined;
    bottom?: Bindable<boolean> | undefined;
    minimum?: Bindable<upstream1.EdgeInsets> | undefined;
    maintainBottomViewPadding?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): SafeArea;
