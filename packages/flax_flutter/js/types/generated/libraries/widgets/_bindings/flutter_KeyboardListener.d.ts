import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
export interface KeyboardListener extends WidgetDescription {
    readonly type: "flax.core/flutter#type:KeyboardListener";
}
export declare function KeyboardListener(options: {
    key?: upstream0.Key | null | undefined;
    focusNode: Bindable<upstream1.FocusNode>;
    autofocus?: Bindable<boolean> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    onKeyEvent?: Bindable<((value: upstream2.KeyEvent) => void) | null> | undefined;
    child: Bindable<Widget>;
}): KeyboardListener;
