import { type DartListInput, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_InputDecoration';
import '@flax/flutter/material/_bindings/material_InputDecoration';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_TextInputAction';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
export interface TextField extends WidgetDescription {
    readonly type: "flax.material/material#type:TextField";
}
export declare function TextField(options?: {
    key?: upstream0.Key | null | undefined;
    controller?: Bindable<upstream1.TextEditingController | null> | undefined;
    focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
    decoration?: Bindable<upstream3.InputDecoration | null> | undefined;
    textInputAction?: Bindable<upstream4.TextInputAction | null> | undefined;
    style?: Bindable<upstream5.TextStyle | null> | undefined;
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
    inputFormatters?: Bindable<DartListInput<upstream6.TextInputFormatter, upstream6.TextInputFormatter> | null> | undefined;
    enabled?: Bindable<boolean | null> | undefined;
}): TextField;
