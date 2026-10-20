import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream6 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Radio<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/radio.dart::Radio": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Radio: unique symbol;
    readonly [_flaxDartTypeValue]: Radio<T>;
    readonly value: T;
    readonly groupValue: T | null;
    readonly onChanged: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly mouseCursor: upstream2.MouseCursor | null;
    readonly toggleable: boolean;
    readonly activeColor: upstream3.Color | null;
    readonly fillColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly materialTapTargetSize: upstream5.MaterialTapTargetSize | null;
    readonly visualDensity: upstream6.VisualDensity | null;
    readonly focusColor: upstream3.Color | null;
    readonly hoverColor: upstream3.Color | null;
    readonly overlayColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly splashRadius: number | null;
    readonly focusNode: upstream7.FocusNode | null;
    readonly autofocus: boolean;
    readonly useCupertinoCheckmarkStyle: boolean;
    readonly groupRegistry: upstream8.RadioGroupRegistry<T> | null;
    readonly enabled: boolean | null;
    readonly backgroundColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly side: upstream9.BorderSide | null;
    readonly innerRadius: upstream4.WidgetStateProperty<number | null> | null;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<Radio<T>>;
    createElement(): upstream11.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _RadioFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: (T | _FlaxDartOutput<T>);
    groupValue?: (T | _FlaxDartOutput<T>) | null | undefined;
    onChanged?: ((value: _FlaxDartOutput<T> | null) => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    toggleable?: boolean | undefined;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
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
    enabled?: boolean | null | undefined;
    groupRegistry?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [_FlaxDartOutput<T>];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    innerRadius?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
}): Radio<T>;
export declare function _RadioFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: unknown | null;
    groupValue?: unknown | null | undefined;
    onChanged?: ((value: unknown | null) => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    toggleable?: boolean | undefined;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
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
    enabled?: boolean | null | undefined;
    groupRegistry?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [unknown | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    innerRadius?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
}): Radio<unknown | null>;
export declare namespace _RadioFactory {
    function adaptive<T extends unknown | null = unknown | null>(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: (T | _FlaxDartOutput<T>);
        groupValue?: (T | _FlaxDartOutput<T>) | null | undefined;
        onChanged?: ((value: _FlaxDartOutput<T> | null) => void) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        toggleable?: boolean | undefined;
        activeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
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
        useCupertinoCheckmarkStyle?: boolean | undefined;
        enabled?: boolean | null | undefined;
        groupRegistry?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [_FlaxDartOutput<T>];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        innerRadius?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
    }): Radio<T>;
    function adaptive(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: unknown | null;
        groupValue?: unknown | null | undefined;
        onChanged?: ((value: unknown | null) => void) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        toggleable?: boolean | undefined;
        activeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
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
        useCupertinoCheckmarkStyle?: boolean | undefined;
        enabled?: boolean | null | undefined;
        groupRegistry?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [unknown | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        innerRadius?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
    }): Radio<unknown | null>;
}
export declare const Radio: typeof _RadioFactory & _FlaxInstanceType<Radio<unknown | null>> & _FlaxDartType<Radio<unknown | null>, readonly ["class", "flax.material/material#type:Radio", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "groupValue" | "onChanged" | "mouseCursor" | "toggleable" | "activeColor" | "fillColor" | "materialTapTargetSize" | "visualDensity" | "focusColor" | "hoverColor" | "overlayColor" | "splashRadius" | "focusNode" | "autofocus" | "useCupertinoCheckmarkStyle" | "groupRegistry" | "enabled" | "backgroundColor" | "side" | "innerRadius" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/radio.dart::Radio" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            groupValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onChanged?: ((value: _Selected0 | null) => void) | null | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            toggleable?: boolean | undefined;
            activeColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            focusColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            hoverColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            overlayColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            splashRadius?: number | null | undefined;
            materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
            visualDensity?: (Readonly<{
                "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
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
            enabled?: boolean | null | undefined;
            groupRegistry?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [_Selected0];
            }> | null | undefined;
            backgroundColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            innerRadius?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
            }> | null | undefined;
        }): Radio<_Selected0>;
        adaptive: (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            groupValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onChanged?: ((value: _Selected0 | null) => void) | null | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            toggleable?: boolean | undefined;
            activeColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            focusColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            hoverColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            overlayColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            splashRadius?: number | null | undefined;
            materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
            visualDensity?: (Readonly<{
                "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
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
            useCupertinoCheckmarkStyle?: boolean | undefined;
            enabled?: boolean | null | undefined;
            groupRegistry?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [_Selected0];
            }> | null | undefined;
            backgroundColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            innerRadius?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
            }> | null | undefined;
        }) => Radio<_Selected0>;
        readonly prototype: Radio<_Selected0>;
    } & _FlaxInstanceType<Radio<_Selected0>> & _FlaxDartType<Radio<_Selected0>> : never : never;
}
export {};
