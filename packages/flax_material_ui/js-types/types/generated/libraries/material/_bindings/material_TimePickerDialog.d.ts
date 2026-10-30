import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/material-ui/_bindings/material_TimeOfDay';
import '@flax/material-ui/_bindings/material_TimeOfDay';
import type * as upstream3 from '@flax/material-ui/_bindings/material_TimePickerEntryMode';
import '@flax/material-ui/_bindings/material_TimePickerEntryMode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimePickerDialog extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/time_picker.dart::TimePickerDialog": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TimePickerDialog: unique symbol;
    readonly [_flaxDartTypeValue]: TimePickerDialog;
    readonly initialTime: upstream2.TimeOfDay;
    readonly cancelText: string | null;
    readonly confirmText: string | null;
    readonly helpText: string | null;
    readonly errorInvalidText: string | null;
    readonly hourLabelText: string | null;
    readonly minuteLabelText: string | null;
    readonly restorationId: string | null;
    readonly initialEntryMode: upstream3.TimePickerEntryMode;
    readonly orientation: upstream4.Orientation | null;
    readonly onEntryModeChanged: ((mode: upstream3.TimePickerEntryMode) => void) | null;
    readonly switchToInputEntryModeIcon: upstream5.Icon | null;
    readonly switchToTimerEntryModeIcon: upstream5.Icon | null;
    readonly emptyInitialInput: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream6.State<TimePickerDialog>;
    createElement(): upstream7.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _TimePickerDialogFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialTime: Readonly<{
        "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.TimeOfDay];
    }>;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    helpText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    hourLabelText?: string | null | undefined;
    minuteLabelText?: string | null | undefined;
    restorationId?: string | null | undefined;
    initialEntryMode?: upstream3.TimePickerEntryMode | undefined;
    orientation?: upstream4.Orientation | null | undefined;
    onEntryModeChanged?: ((mode: upstream3.TimePickerEntryMode) => void) | null | undefined;
    switchToInputEntryModeIcon?: upstream5.Icon | null | undefined;
    switchToTimerEntryModeIcon?: upstream5.Icon | null | undefined;
    emptyInitialInput?: boolean | undefined;
}): TimePickerDialog;
export declare namespace _TimePickerDialogFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _TimePickerDialogFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const TimePickerDialog: typeof _TimePickerDialogFactory & _FlaxInstanceType<TimePickerDialog> & _FlaxDartType<TimePickerDialog, readonly ["class", "flax.material/material#type:TimePickerDialog", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialTime" | "cancelText" | "confirmText" | "helpText" | "errorInvalidText" | "hourLabelText" | "minuteLabelText" | "restorationId" | "initialEntryMode" | "orientation" | "onEntryModeChanged" | "switchToInputEntryModeIcon" | "switchToTimerEntryModeIcon" | "emptyInitialInput" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/time_picker.dart::TimePickerDialog" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
