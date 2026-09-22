import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Opacity extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Opacity";
}
export declare function Opacity(options: {
    key?: upstream0.Key | null | undefined;
    opacity: Bindable<number>;
    alwaysIncludeSemantics?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Opacity;
