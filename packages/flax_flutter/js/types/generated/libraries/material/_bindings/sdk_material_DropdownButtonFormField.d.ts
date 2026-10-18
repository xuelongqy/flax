import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormField';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuItem';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_InputDecoration';
import '@flax/flutter/material/_bindings/sdk_material_InputDecoration';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream13 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownButtonFormField<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.FormField<T>, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.FormField<T>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.FormField<T> | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown.dart::DropdownButtonFormField": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormField": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DropdownButtonFormField: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownButtonFormField<T>;
    readonly onChanged: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly decoration: upstream8.InputDecoration;
    readonly barrierDismissible: boolean;
    readonly mouseCursor: upstream13.MouseCursor | null;
    readonly dropdownMenuItemMouseCursor: upstream13.MouseCursor | null;
    readonly builder: ((field: Readonly<{
        "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState": readonly [T];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream0.FormField<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream0.FormField<T>];
    }>) => Widget);
    readonly onSaved: ((newValue: (T | DartInput<T>) | null) => void) | null;
    readonly onReset: (() => void) | null;
    readonly forceErrorText: string | null;
    readonly validator: ((value: (T | DartInput<T>) | null) => string | null) | null;
    readonly errorBuilder: ((context: upstream4.BuildContext, errorText: string) => Widget) | null;
    readonly initialValue: T | null;
    readonly enabled: boolean;
    readonly autovalidateMode: upstream9.AutovalidateMode;
    readonly restorationId: string | null;
    readonly key: upstream2.Key | null;
    createState(): upstream14.FormFieldState<T>;
    createElement(): upstream15.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream17.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream17.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream19.DiagnosticsTreeStyle | null | undefined;
    }): upstream18.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream18.DiagnosticsNode>;
}
export declare function _DropdownButtonFormFieldFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    items: DartListInput<upstream3.DropdownMenuItem<_FlaxDartOutput<T>>, upstream3.DropdownMenuItem<_FlaxDartOutput<T>>> | null;
    selectedItemBuilder?: ((context: upstream4.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
    value?: (T | _FlaxDartOutput<T>) | null | undefined;
    initialValue?: (T | _FlaxDartOutput<T>) | null | undefined;
    hint?: Widget | null | undefined;
    disabledHint?: Widget | null | undefined;
    onChanged: ((value: _FlaxDartOutput<T> | null) => void) | null;
    onTap?: (() => void) | null | undefined;
    elevation?: number | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    icon?: Widget | null | undefined;
    iconDisabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconEnabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconSize?: number | undefined;
    isDense?: boolean | undefined;
    isExpanded?: boolean | undefined;
    itemHeight?: number | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
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
    autofocus?: boolean | undefined;
    dropdownColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    decoration?: Readonly<{
        "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
    }> | null | undefined;
    onSaved?: ((newValue: _FlaxDartOutput<T> | null) => void) | null | undefined;
    validator?: ((value: _FlaxDartOutput<T> | null) => string | null) | null | undefined;
    errorBuilder?: ((context: upstream4.BuildContext, errorText: string) => Widget) | null | undefined;
    forceErrorText?: string | null | undefined;
    autovalidateMode?: upstream9.AutovalidateMode | null | undefined;
    menuMaxHeight?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dropdownMenuItemMouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownButtonFormField<T>;
export declare function _DropdownButtonFormFieldFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    items: DartListInput<upstream3.DropdownMenuItem<unknown | null>, upstream3.DropdownMenuItem<unknown | null>> | null;
    selectedItemBuilder?: ((context: upstream4.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
    value?: unknown | null | undefined;
    initialValue?: unknown | null | undefined;
    hint?: Widget | null | undefined;
    disabledHint?: Widget | null | undefined;
    onChanged: ((value: unknown | null) => void) | null;
    onTap?: (() => void) | null | undefined;
    elevation?: number | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    icon?: Widget | null | undefined;
    iconDisabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconEnabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconSize?: number | undefined;
    isDense?: boolean | undefined;
    isExpanded?: boolean | undefined;
    itemHeight?: number | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
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
    autofocus?: boolean | undefined;
    dropdownColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    decoration?: Readonly<{
        "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
    }> | null | undefined;
    onSaved?: ((newValue: unknown | null) => void) | null | undefined;
    validator?: ((value: unknown | null) => string | null) | null | undefined;
    errorBuilder?: ((context: upstream4.BuildContext, errorText: string) => Widget) | null | undefined;
    forceErrorText?: string | null | undefined;
    autovalidateMode?: upstream9.AutovalidateMode | null | undefined;
    menuMaxHeight?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dropdownMenuItemMouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownButtonFormField<unknown | null>;
export declare const DropdownButtonFormField: typeof _DropdownButtonFormFieldFactory & _FlaxInstanceType<DropdownButtonFormField<unknown | null>> & _FlaxDartType<DropdownButtonFormField<unknown | null>, readonly ["class", "flax.core/sdk_material#type:DropdownButtonFormField", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onChanged" | "decoration" | "barrierDismissible" | "mouseCursor" | "dropdownMenuItemMouseCursor" | "builder" | "onSaved" | "onReset" | "forceErrorText" | "validator" | "errorBuilder" | "initialValue" | "enabled" | "autovalidateMode" | "restorationId" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/dropdown.dart::DropdownButtonFormField" | "__flaxBound:package:flutter/src/widgets/form.dart::FormField" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            items: DartListInput<upstream3.DropdownMenuItem<_Selected0>, upstream3.DropdownMenuItem<_Selected0>> | null;
            selectedItemBuilder?: ((context: upstream4.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
            value?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            initialValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            hint?: Widget | null | undefined;
            disabledHint?: Widget | null | undefined;
            onChanged: ((value: _Selected0 | null) => void) | null;
            onTap?: (() => void) | null | undefined;
            elevation?: number | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            icon?: Widget | null | undefined;
            iconDisabledColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            iconEnabledColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            iconSize?: number | undefined;
            isDense?: boolean | undefined;
            isExpanded?: boolean | undefined;
            itemHeight?: number | null | undefined;
            focusColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
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
            autofocus?: boolean | undefined;
            dropdownColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            decoration?: Readonly<{
                "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
            }> | null | undefined;
            onSaved?: ((newValue: _Selected0 | null) => void) | null | undefined;
            validator?: ((value: _Selected0 | null) => string | null) | null | undefined;
            errorBuilder?: ((context: upstream4.BuildContext, errorText: string) => Widget) | null | undefined;
            forceErrorText?: string | null | undefined;
            autovalidateMode?: upstream9.AutovalidateMode | null | undefined;
            menuMaxHeight?: number | null | undefined;
            enableFeedback?: boolean | null | undefined;
            alignment?: Readonly<{
                "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
            }> | undefined;
            borderRadius?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
            }>) | null | undefined;
            padding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            barrierDismissible?: boolean | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            dropdownMenuItemMouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }): DropdownButtonFormField<_Selected0>;
        readonly prototype: DropdownButtonFormField<_Selected0>;
    } & _FlaxInstanceType<DropdownButtonFormField<_Selected0>> & _FlaxDartType<DropdownButtonFormField<_Selected0>> : never : never;
}
export {};
