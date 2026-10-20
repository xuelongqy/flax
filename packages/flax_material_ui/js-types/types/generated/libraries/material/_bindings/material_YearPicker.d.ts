import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream4 from '@flax/material-ui/_bindings/material_CalendarDelegate';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface YearPicker extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/calendar_date_picker.dart::YearPicker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __YearPicker: unique symbol;
    readonly [_flaxDartTypeValue]: YearPicker;
    readonly currentDate: upstream2.DateTime;
    readonly firstDate: upstream2.DateTime;
    readonly lastDate: upstream2.DateTime;
    readonly selectedDate: upstream2.DateTime | null;
    readonly onChanged: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void);
    readonly dragStartBehavior: upstream3.DragStartBehavior;
    readonly calendarDelegate: upstream4.CalendarDelegate<upstream2.DateTime>;
    readonly key: upstream1.Key | null;
    createState(): upstream5.State<YearPicker>;
    createElement(): upstream6.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
export declare function _YearPickerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    initialDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    selectedDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null;
    onChanged: ((value: upstream2.DateTime) => void);
    dragStartBehavior?: upstream3.DragStartBehavior | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream2.DateTime];
    }> | undefined;
}): YearPicker;
export declare const YearPicker: typeof _YearPickerFactory & _FlaxInstanceType<YearPicker> & _FlaxDartType<YearPicker, readonly ["class", "flax.material/material#type:YearPicker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "currentDate" | "firstDate" | "lastDate" | "selectedDate" | "onChanged" | "dragStartBehavior" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/calendar_date_picker.dart::YearPicker" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
