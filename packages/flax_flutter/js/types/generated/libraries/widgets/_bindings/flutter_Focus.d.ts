import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface Focus extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Focus";
}
declare function _FocusFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    canRequestFocus?: Bindable<boolean | null> | undefined;
    skipTraversal?: Bindable<boolean | null> | undefined;
    descendantsAreFocusable?: Bindable<boolean | null> | undefined;
    descendantsAreTraversable?: Bindable<boolean | null> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    debugLabel?: Bindable<string | null> | undefined;
}): Focus;
export declare const Focus: typeof _FocusFactory & _FlaxInstanceType<Focus>;
export {};
