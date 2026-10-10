import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/material/_bindings/material_InputDecoration';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_TextInputAction';
import '@flax/flutter/material/_bindings/material_TextInputAction';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
export interface TextField extends WidgetDescription {
    readonly type: "flax.material/material#type:TextField";
}
declare function _TextFieldFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    controller?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> | null> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    decoration?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [];
    }> | null> | undefined;
    textInputAction?: Bindable<upstream4.TextInputAction | null> | undefined;
    style?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    readOnly?: Bindable<boolean> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    obscureText?: Bindable<boolean> | undefined;
    autocorrect?: Bindable<boolean | null> | undefined;
    enableSuggestions?: Bindable<boolean> | undefined;
    maxLines?: Bindable<number | null> | undefined;
    minLines?: Bindable<number | null> | undefined;
    onChanged?: Bindable<((value: string) => void) | null> | undefined;
    onEditingComplete?: Bindable<(() => void) | null> | undefined;
    onSubmitted?: Bindable<((value: string) => void) | null> | undefined;
    inputFormatters?: Bindable<DartListInput<upstream6.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null> | undefined;
    enabled?: Bindable<boolean | null> | undefined;
}): TextField;
export declare const TextField: typeof _TextFieldFactory & _FlaxInstanceType<TextField>;
export {};
