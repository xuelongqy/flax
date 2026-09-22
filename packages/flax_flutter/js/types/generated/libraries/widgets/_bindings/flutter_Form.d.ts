import { type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
export interface Form extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Form";
}
export declare function Form(options: {
    key?: upstream0.Key | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean | null> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined;
    onChanged?: Bindable<(() => void) | null> | undefined;
    autovalidateMode?: Bindable<upstream1.AutovalidateMode | null> | undefined;
}): Form;
