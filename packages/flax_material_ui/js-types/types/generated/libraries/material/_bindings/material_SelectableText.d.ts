import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ToolbarOptions';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ToolbarOptions';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream17 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream18 from '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import type * as upstream19 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream20 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream21 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream23 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import type * as upstream24 from '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import type * as upstream25 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream27 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream28 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream29 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream30 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream32 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectableText extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/selectable_text.dart::SelectableText": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectableText: unique symbol;
    readonly [_flaxDartTypeValue]: SelectableText;
    readonly data: string | null;
    readonly textSpan: upstream24.TextSpan | null;
    readonly focusNode: upstream2.FocusNode | null;
    readonly style: upstream3.TextStyle | null;
    readonly strutStyle: upstream4.StrutStyle | null;
    readonly textAlign: upstream5.TextAlign | null;
    readonly textDirection: upstream6.TextDirection | null;
    readonly textScaleFactor: number | null;
    readonly textScaler: upstream7.TextScaler | null;
    readonly autofocus: boolean;
    readonly minLines: number | null;
    readonly maxLines: number | null;
    readonly showCursor: boolean;
    readonly cursorWidth: number;
    readonly cursorHeight: number | null;
    readonly cursorRadius: upstream9.Radius | null;
    readonly cursorColor: upstream10.Color | null;
    readonly selectionColor: upstream10.Color | null;
    readonly selectionHeightStyle: upstream11.BoxHeightStyle | null;
    readonly selectionWidthStyle: upstream12.BoxWidthStyle | null;
    readonly enableInteractiveSelection: boolean;
    readonly selectionControls: upstream14.TextSelectionControls | null;
    readonly dragStartBehavior: upstream13.DragStartBehavior;
    readonly toolbarOptions: upstream8.ToolbarOptions | null;
    readonly selectionEnabled: boolean;
    readonly onTap: (() => void) | null;
    readonly scrollPhysics: upstream15.ScrollPhysics | null;
    readonly scrollBehavior: upstream16.ScrollBehavior | null;
    readonly semanticsLabel: string | null;
    readonly textHeightBehavior: upstream17.TextHeightBehavior | null;
    readonly textWidthBasis: upstream18.TextWidthBasis | null;
    readonly onSelectionChanged: ((selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, cause: upstream20.SelectionChangedCause | null) => void) | null;
    readonly contextMenuBuilder: ((context: upstream21.BuildContext, editableTextState: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream32.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream32.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream32.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>) => Widget) | null;
    readonly magnifierConfiguration: upstream23.TextMagnifierConfiguration | null;
    readonly key: upstream1.Key | null;
    createState(): upstream25.State<SelectableText>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream27.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream28.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream28.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream30.DiagnosticsTreeStyle | null | undefined;
    }): upstream29.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream29.DiagnosticsNode>;
}
export declare function _SelectableTextFactory(data: string, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    focusNode?: (Readonly<{
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
    }>) | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    strutStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream5.TextAlign | null | undefined;
    textDirection?: upstream6.TextDirection | null | undefined;
    textScaleFactor?: number | null | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null | undefined;
    showCursor?: boolean | undefined;
    autofocus?: boolean | undefined;
    toolbarOptions?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
    }> | null | undefined;
    minLines?: number | null | undefined;
    maxLines?: number | null | undefined;
    cursorWidth?: number | undefined;
    cursorHeight?: number | null | undefined;
    cursorRadius?: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null | undefined;
    cursorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHeightStyle?: upstream11.BoxHeightStyle | null | undefined;
    selectionWidthStyle?: upstream12.BoxWidthStyle | null | undefined;
    dragStartBehavior?: upstream13.DragStartBehavior | undefined;
    enableInteractiveSelection?: boolean | undefined;
    selectionControls?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
    }> | null | undefined;
    onTap?: (() => void) | null | undefined;
    scrollPhysics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    scrollBehavior?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }> | null | undefined;
    semanticsLabel?: string | null | undefined;
    textHeightBehavior?: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null | undefined;
    textWidthBasis?: upstream18.TextWidthBasis | null | undefined;
    onSelectionChanged?: ((selection: upstream19.TextSelection, cause: upstream20.SelectionChangedCause | null) => void) | null | undefined;
    contextMenuBuilder?: ((context: upstream21.BuildContext, editableTextState: upstream22.EditableTextState) => Widget) | null | undefined;
    magnifierConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
    }> | null | undefined;
}): SelectableText;
export declare namespace _SelectableTextFactory {
    function rich(textSpan: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_span.dart::TextSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [];
    }>, options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        focusNode?: (Readonly<{
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
        }>) | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream5.TextAlign | null | undefined;
        textDirection?: upstream6.TextDirection | null | undefined;
        textScaleFactor?: number | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        showCursor?: boolean | undefined;
        autofocus?: boolean | undefined;
        toolbarOptions?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
        }> | null | undefined;
        minLines?: number | null | undefined;
        maxLines?: number | null | undefined;
        cursorWidth?: number | undefined;
        cursorHeight?: number | null | undefined;
        cursorRadius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHeightStyle?: upstream11.BoxHeightStyle | null | undefined;
        selectionWidthStyle?: upstream12.BoxWidthStyle | null | undefined;
        dragStartBehavior?: upstream13.DragStartBehavior | undefined;
        enableInteractiveSelection?: boolean | undefined;
        selectionControls?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
        }> | null | undefined;
        onTap?: (() => void) | null | undefined;
        scrollPhysics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        scrollBehavior?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null | undefined;
        semanticsLabel?: string | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        textWidthBasis?: upstream18.TextWidthBasis | null | undefined;
        onSelectionChanged?: ((selection: upstream19.TextSelection, cause: upstream20.SelectionChangedCause | null) => void) | null | undefined;
        contextMenuBuilder?: ((context: upstream21.BuildContext, editableTextState: upstream22.EditableTextState) => Widget) | null | undefined;
        magnifierConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
        }> | null | undefined;
    }): SelectableText;
}
export declare const SelectableText: typeof _SelectableTextFactory & _FlaxInstanceType<SelectableText> & _FlaxDartType<SelectableText, readonly ["class", "flax.material/material#type:SelectableText", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "textSpan" | "focusNode" | "style" | "strutStyle" | "textAlign" | "textDirection" | "textScaleFactor" | "textScaler" | "autofocus" | "minLines" | "maxLines" | "showCursor" | "cursorWidth" | "cursorHeight" | "cursorRadius" | "cursorColor" | "selectionColor" | "selectionHeightStyle" | "selectionWidthStyle" | "enableInteractiveSelection" | "selectionControls" | "dragStartBehavior" | "toolbarOptions" | "selectionEnabled" | "onTap" | "scrollPhysics" | "scrollBehavior" | "semanticsLabel" | "textHeightBehavior" | "textWidthBasis" | "onSelectionChanged" | "contextMenuBuilder" | "magnifierConfiguration" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/selectable_text.dart::SelectableText" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
