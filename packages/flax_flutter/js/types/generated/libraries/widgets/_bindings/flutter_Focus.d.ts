import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface Focus extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Focus";
}
export declare function Focus(options: {
    key?: upstream0.Key | null | undefined;
    child: Bindable<Widget>;
    focusNode?: Bindable<upstream1.FocusNode | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    canRequestFocus?: Bindable<boolean | null> | undefined;
    skipTraversal?: Bindable<boolean | null> | undefined;
    descendantsAreFocusable?: Bindable<boolean | null> | undefined;
    descendantsAreTraversable?: Bindable<boolean | null> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    debugLabel?: Bindable<string | null> | undefined;
}): Focus;
