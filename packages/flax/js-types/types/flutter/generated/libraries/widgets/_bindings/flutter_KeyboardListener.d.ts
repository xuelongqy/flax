import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
export interface KeyboardListener extends WidgetDescription {
    readonly type: "flax.core/flutter#type:KeyboardListener";
}
export declare function KeyboardListener(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    focusNode: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }>>;
    autofocus?: Bindable<boolean> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    onKeyEvent?: Bindable<((value: upstream2.KeyEvent) => void) | null> | undefined;
    child: Bindable<Widget>;
}): KeyboardListener;
