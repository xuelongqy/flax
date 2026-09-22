import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Visibility extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Visibility";
}
export declare function Visibility(options: {
    key?: upstream0.Key | null | undefined;
    child: Bindable<Widget>;
    visible?: Bindable<boolean> | undefined;
    maintainState?: Bindable<boolean> | undefined;
    maintainAnimation?: Bindable<boolean> | undefined;
    maintainSize?: Bindable<boolean> | undefined;
    maintainSemantics?: Bindable<boolean> | undefined;
    maintainInteractivity?: Bindable<boolean> | undefined;
    maintainFocusability?: Bindable<boolean> | undefined;
}): Visibility;
export declare namespace Visibility {
    function maintain(options: {
        key?: upstream0.Key | null | undefined;
        child: Bindable<Widget>;
        visible?: Bindable<boolean> | undefined;
    }): Visibility;
}
