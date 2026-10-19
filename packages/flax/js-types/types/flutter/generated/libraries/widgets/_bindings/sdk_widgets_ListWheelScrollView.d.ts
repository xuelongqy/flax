import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
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
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListWheelScrollView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ListWheelScrollView: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelScrollView;
    readonly controller: upstream2.ScrollController | null;
    readonly physics: upstream3.ScrollPhysics | null;
    readonly diameterRatio: number;
    readonly perspective: number;
    readonly offAxisFraction: number;
    readonly useMagnifier: boolean;
    readonly magnification: number;
    readonly overAndUnderCenterOpacity: number;
    readonly itemExtent: number;
    readonly squeeze: number;
    readonly onSelectedItemChanged: ((value: number) => void) | null;
    readonly renderChildrenOutsideViewport: boolean;
    readonly childDelegate: upstream9.ListWheelChildDelegate;
    readonly clipBehavior: upstream4.Clip;
    readonly hitTestBehavior: upstream5.HitTestBehavior;
    readonly restorationId: string | null;
    readonly scrollBehavior: upstream6.ScrollBehavior | null;
    readonly dragStartBehavior: upstream7.DragStartBehavior;
    readonly changeReportingBehavior: upstream8.ChangeReportingBehavior;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<ListWheelScrollView>;
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
export declare function _ListWheelScrollViewFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    physics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    diameterRatio?: number | undefined;
    perspective?: number | undefined;
    offAxisFraction?: number | undefined;
    useMagnifier?: boolean | undefined;
    magnification?: number | undefined;
    overAndUnderCenterOpacity?: number | undefined;
    itemExtent: number;
    squeeze?: number | undefined;
    onSelectedItemChanged?: ((value: number) => void) | null | undefined;
    renderChildrenOutsideViewport?: boolean | undefined;
    clipBehavior?: upstream4.Clip | undefined;
    hitTestBehavior?: upstream5.HitTestBehavior | undefined;
    restorationId?: string | null | undefined;
    scrollBehavior?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }> | null | undefined;
    dragStartBehavior?: upstream7.DragStartBehavior | undefined;
    changeReportingBehavior?: upstream8.ChangeReportingBehavior | undefined;
    children: DartListInput<Widget, Widget>;
}): ListWheelScrollView;
export declare namespace _ListWheelScrollViewFactory {
    function useDelegate(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        diameterRatio?: number | undefined;
        perspective?: number | undefined;
        offAxisFraction?: number | undefined;
        useMagnifier?: boolean | undefined;
        magnification?: number | undefined;
        overAndUnderCenterOpacity?: number | undefined;
        itemExtent: number;
        squeeze?: number | undefined;
        onSelectedItemChanged?: ((value: number) => void) | null | undefined;
        renderChildrenOutsideViewport?: boolean | undefined;
        clipBehavior?: upstream4.Clip | undefined;
        hitTestBehavior?: upstream5.HitTestBehavior | undefined;
        restorationId?: string | null | undefined;
        scrollBehavior?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null | undefined;
        dragStartBehavior?: upstream7.DragStartBehavior | undefined;
        changeReportingBehavior?: upstream8.ChangeReportingBehavior | undefined;
        childDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
        }>;
    }): ListWheelScrollView;
}
export declare const ListWheelScrollView: typeof _ListWheelScrollViewFactory & _FlaxInstanceType<ListWheelScrollView> & _FlaxDartType<ListWheelScrollView, readonly ["class", "flax.core/sdk_widgets#type:ListWheelScrollView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "physics" | "diameterRatio" | "perspective" | "offAxisFraction" | "useMagnifier" | "magnification" | "overAndUnderCenterOpacity" | "itemExtent" | "squeeze" | "onSelectedItemChanged" | "renderChildrenOutsideViewport" | "childDelegate" | "clipBehavior" | "hitTestBehavior" | "restorationId" | "scrollBehavior" | "dragStartBehavior" | "changeReportingBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
