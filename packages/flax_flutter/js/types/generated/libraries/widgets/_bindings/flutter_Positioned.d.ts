import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Positioned extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Positioned";
}
export declare function Positioned(options: {
    key?: upstream0.Key | null | undefined;
    left?: Bindable<number | null> | undefined;
    top?: Bindable<number | null> | undefined;
    right?: Bindable<number | null> | undefined;
    bottom?: Bindable<number | null> | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child: Bindable<Widget>;
}): Positioned;
