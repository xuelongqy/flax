import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface ColoredBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ColoredBox";
}
export declare function ColoredBox(options: {
    color: Bindable<upstream0.Color>;
    isAntiAlias?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
    key?: upstream1.Key | null | undefined;
}): ColoredBox;
