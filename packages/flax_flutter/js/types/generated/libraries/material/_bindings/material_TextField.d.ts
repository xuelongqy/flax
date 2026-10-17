import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartListInput, type DartMap, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/material/_bindings/material_InputDecoration';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_TextInputAction';
import '@flax/flutter/material/_bindings/material_TextInputAction';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextAlign';
import '@flax/flutter/services/_bindings/flutter_TextAlign';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import type * as upstream9 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream12 from '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import type * as upstream14 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextField extends WidgetDescription {
    readonly type: "flax.material/material#type:TextField";
}
export declare function _TextFieldFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    groupId?: Bindable<{}> | undefined;
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
    textAlign?: Bindable<upstream6.TextAlign> | undefined;
    textDirection?: Bindable<upstream7.TextDirection | null> | undefined;
    readOnly?: Bindable<boolean> | undefined;
    showCursor?: Bindable<boolean | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    obscuringCharacter?: Bindable<string> | undefined;
    obscureText?: Bindable<boolean> | undefined;
    autocorrect?: Bindable<boolean | null> | undefined;
    enableSuggestions?: Bindable<boolean> | undefined;
    maxLines?: Bindable<number | null> | undefined;
    minLines?: Bindable<number | null> | undefined;
    expands?: Bindable<boolean> | undefined;
    maxLength?: Bindable<number | null> | undefined;
    maxLengthEnforcement?: Bindable<upstream8.MaxLengthEnforcement | null> | undefined;
    onChanged?: Bindable<((value: string) => void) | null> | undefined;
    onEditingComplete?: Bindable<(() => void) | null> | undefined;
    onSubmitted?: Bindable<((value: string) => void) | null> | undefined;
    onAppPrivateCommand?: Bindable<((action: string, data: DartMap<string, unknown | null>) => void) | null> | undefined;
    inputFormatters?: Bindable<DartListInput<upstream9.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null> | undefined;
    enabled?: Bindable<boolean | null> | undefined;
    ignorePointers?: Bindable<boolean | null> | undefined;
    cursorWidth?: Bindable<number> | undefined;
    cursorHeight?: Bindable<number | null> | undefined;
    cursorRadius?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null> | undefined;
    cursorOpacityAnimates?: Bindable<boolean | null> | undefined;
    cursorColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    cursorErrorColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    keyboardAppearance?: Bindable<upstream12.Brightness | null> | undefined;
    scrollPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }>> | undefined;
    dragStartBehavior?: Bindable<upstream14.DragStartBehavior> | undefined;
    enableInteractiveSelection?: Bindable<boolean | null> | undefined;
    selectAllOnFocus?: Bindable<boolean | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onTapAlwaysCalled?: Bindable<boolean> | undefined;
    mouseCursor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> | null> | undefined;
    buildCounter?: Bindable<((context: upstream16.BuildContext, options: {
        currentLength: number;
        isFocused: boolean;
        maxLength: number | null;
    }) => Widget | null) | null> | undefined;
    scrollController?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> | null> | undefined;
    scrollPhysics?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null> | undefined;
    autofillHints?: Bindable<DartIterableInput<string, string> | null> | undefined;
    clipBehavior?: Bindable<upstream19.Clip> | undefined;
    restorationId?: Bindable<string | null> | undefined;
    scribbleEnabled?: Bindable<boolean> | undefined;
    stylusHandwritingEnabled?: Bindable<boolean> | undefined;
    enableIMEPersonalizedLearning?: Bindable<boolean> | undefined;
    enableInlinePrediction?: Bindable<boolean | null> | undefined;
    canRequestFocus?: Bindable<boolean> | undefined;
}): TextField;
export declare namespace _TextFieldFactory {
    const noMaxLength: number;
}
export declare namespace _TextFieldFactory {
    const materialMisspelledTextStyle: upstream5.TextStyle;
}
export declare const TextField: typeof _TextFieldFactory & _FlaxInstanceType<TextField> & _FlaxDartType<TextField, readonly ["class", "flax.material/material#type:TextField", readonly [], false]>;
