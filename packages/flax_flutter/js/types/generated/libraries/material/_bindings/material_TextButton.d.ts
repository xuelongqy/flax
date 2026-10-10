import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
export interface TextButton extends WidgetDescription {
    readonly type: "flax.material/material#type:TextButton";
}
declare function _TextButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPressed: Bindable<(() => void) | null>;
    style?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null> | undefined;
    child: Bindable<Widget>;
}): TextButton;
export declare const TextButton: typeof _TextButtonFactory & _FlaxInstanceType<TextButton>;
export {};
