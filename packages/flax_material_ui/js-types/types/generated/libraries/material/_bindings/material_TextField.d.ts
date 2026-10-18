import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartListInput, type DartMap, type DartSet, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryController';
import '@flax/material-ui/_bindings/material_InputDecoration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/flutter/painting/_bindings/sdk_painting_TextAlignVertical';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ToolbarOptions';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream15 from '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import type * as upstream16 from '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import type * as upstream17 from '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import type * as upstream18 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream21 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream22 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream23 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream25 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream27 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream28 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream30 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContentInsertionConfiguration';
import type * as upstream34 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream35 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream36 from '@flax/flutter/widgets/_bindings/sdk_widgets_SpellCheckConfiguration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SpellCheckConfiguration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import type * as upstream38 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream39 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream40 from '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import type * as upstream41 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextField extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/text_field.dart::TextField": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:TextField";
}
export declare function _TextFieldFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    groupId?: Bindable<{}> | undefined;
    controller?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream39.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream39.TextEditingValue];
    }>) | null> | undefined;
    focusNode?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null> | undefined;
    undoController?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream40.UndoHistoryValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream40.UndoHistoryValue];
    }>) | null> | undefined;
    decoration?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [];
    }> | null> | undefined;
    keyboardType?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null> | undefined;
    textInputAction?: Bindable<upstream6.TextInputAction | null> | undefined;
    textCapitalization?: Bindable<upstream7.TextCapitalization> | undefined;
    style?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    strutStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    textAlign?: Bindable<upstream10.TextAlign> | undefined;
    textAlignVertical?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [];
    }> | null> | undefined;
    textDirection?: Bindable<upstream12.TextDirection | null> | undefined;
    readOnly?: Bindable<boolean> | undefined;
    toolbarOptions?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
    }> | null> | undefined;
    showCursor?: Bindable<boolean | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    statesController?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream41.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream41.WidgetState>];
    }>) | null> | undefined;
    obscuringCharacter?: Bindable<string> | undefined;
    obscureText?: Bindable<boolean> | undefined;
    autocorrect?: Bindable<boolean | null> | undefined;
    smartDashesType?: Bindable<upstream15.SmartDashesType | null> | undefined;
    smartQuotesType?: Bindable<upstream16.SmartQuotesType | null> | undefined;
    enableSuggestions?: Bindable<boolean> | undefined;
    maxLines?: Bindable<number | null> | undefined;
    minLines?: Bindable<number | null> | undefined;
    expands?: Bindable<boolean> | undefined;
    maxLength?: Bindable<number | null> | undefined;
    maxLengthEnforcement?: Bindable<upstream17.MaxLengthEnforcement | null> | undefined;
    onChanged?: Bindable<((value: string) => void) | null> | undefined;
    onEditingComplete?: Bindable<(() => void) | null> | undefined;
    onSubmitted?: Bindable<((value: string) => void) | null> | undefined;
    onAppPrivateCommand?: Bindable<((action: string, data: DartMap<string, unknown | null>) => void) | null> | undefined;
    inputFormatters?: Bindable<DartListInput<upstream18.TextInputFormatter, Readonly<{
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
    selectionHeightStyle?: Bindable<upstream21.BoxHeightStyle | null> | undefined;
    selectionWidthStyle?: Bindable<upstream22.BoxWidthStyle | null> | undefined;
    keyboardAppearance?: Bindable<upstream23.Brightness | null> | undefined;
    scrollPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>> | undefined;
    dragStartBehavior?: Bindable<upstream25.DragStartBehavior> | undefined;
    enableInteractiveSelection?: Bindable<boolean | null> | undefined;
    selectAllOnFocus?: Bindable<boolean | null> | undefined;
    selectionControls?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
    }> | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onTapAlwaysCalled?: Bindable<boolean> | undefined;
    onTapOutside?: Bindable<((event: upstream27.PointerDownEvent) => void) | null> | undefined;
    onTapUpOutside?: Bindable<((event: upstream28.PointerUpEvent) => void) | null> | undefined;
    mouseCursor?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    buildCounter?: Bindable<((context: upstream30.BuildContext, options: {
        currentLength: number;
        isFocused: boolean;
        maxLength: number | null;
    }) => Widget | null) | null> | undefined;
    scrollController?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null> | undefined;
    scrollPhysics?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null> | undefined;
    autofillHints?: Bindable<DartIterableInput<string, string> | null> | undefined;
    contentInsertionConfiguration?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::ContentInsertionConfiguration": readonly [];
    }> | null> | undefined;
    clipBehavior?: Bindable<upstream34.Clip> | undefined;
    restorationId?: Bindable<string | null> | undefined;
    scribbleEnabled?: Bindable<boolean> | undefined;
    stylusHandwritingEnabled?: Bindable<boolean> | undefined;
    enableIMEPersonalizedLearning?: Bindable<boolean> | undefined;
    enableInlinePrediction?: Bindable<boolean | null> | undefined;
    contextMenuBuilder?: Bindable<((context: upstream30.BuildContext, editableTextState: upstream35.EditableTextState) => Widget) | null> | undefined;
    canRequestFocus?: Bindable<boolean> | undefined;
    spellCheckConfiguration?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/spell_check.dart::SpellCheckConfiguration": readonly [];
    }> | null> | undefined;
    magnifierConfiguration?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
    }> | null> | undefined;
    hintLocales?: Bindable<DartListInput<upstream38.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null> | undefined;
}): TextField;
export declare namespace _TextFieldFactory {
    const noMaxLength: number;
}
export declare namespace _TextFieldFactory {
    const materialMisspelledTextStyle: upstream8.TextStyle;
}
export declare namespace _TextFieldFactory {
    function inferAndroidSpellCheckConfiguration(configuration: Readonly<{
        "__flaxBound:package:flutter/src/widgets/spell_check.dart::SpellCheckConfiguration": readonly [];
    }> | null): upstream36.SpellCheckConfiguration;
}
export declare const TextField: typeof _TextFieldFactory & _FlaxInstanceType<TextField> & _FlaxDartType<TextField, readonly ["class", "flax.material/material#type:TextField", readonly [], false]>;
