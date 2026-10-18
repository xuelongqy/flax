import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_FixedExtentScrollController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FixedExtentScrollController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoPicker extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/picker.dart::CupertinoPicker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoPicker: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoPicker;
    readonly diameterRatio: number;
    readonly backgroundColor: upstream2.Color | null;
    readonly offAxisFraction: number;
    readonly useMagnifier: boolean;
    readonly magnification: number;
    readonly scrollController: upstream3.FixedExtentScrollController | null;
    readonly itemExtent: number;
    readonly squeeze: number;
    readonly changeReportingBehavior: upstream4.ChangeReportingBehavior;
    readonly onSelectedItemChanged: ((value: number) => void) | null;
    readonly childDelegate: upstream6.ListWheelChildDelegate;
    readonly selectionOverlay: Widget | null;
    readonly key: upstream1.Key | null;
    createState(): upstream7.State<upstream0.StatefulWidget>;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _CupertinoPickerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    diameterRatio?: number | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    offAxisFraction?: number | undefined;
    useMagnifier?: boolean | undefined;
    magnification?: number | undefined;
    scrollController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    squeeze?: number | undefined;
    changeReportingBehavior?: upstream4.ChangeReportingBehavior | undefined;
    itemExtent: number;
    onSelectedItemChanged: ((value: number) => void) | null;
    children: DartListInput<Widget, Widget>;
    selectionOverlay?: Widget | null | undefined;
    looping?: boolean | undefined;
}): CupertinoPicker;
export declare namespace _CupertinoPickerFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        diameterRatio?: number | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        offAxisFraction?: number | undefined;
        useMagnifier?: boolean | undefined;
        magnification?: number | undefined;
        scrollController?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        squeeze?: number | undefined;
        changeReportingBehavior?: upstream4.ChangeReportingBehavior | undefined;
        itemExtent: number;
        onSelectedItemChanged: ((value: number) => void) | null;
        itemBuilder: ((context: upstream5.BuildContext, index: number) => Widget | null);
        childCount?: number | null | undefined;
        selectionOverlay?: Widget | null | undefined;
    }): CupertinoPicker;
}
export declare const CupertinoPicker: typeof _CupertinoPickerFactory & _FlaxInstanceType<CupertinoPicker> & _FlaxDartType<CupertinoPicker, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoPicker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "diameterRatio" | "backgroundColor" | "offAxisFraction" | "useMagnifier" | "magnification" | "scrollController" | "itemExtent" | "squeeze" | "changeReportingBehavior" | "onSelectedItemChanged" | "childDelegate" | "selectionOverlay" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/picker.dart::CupertinoPicker" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
