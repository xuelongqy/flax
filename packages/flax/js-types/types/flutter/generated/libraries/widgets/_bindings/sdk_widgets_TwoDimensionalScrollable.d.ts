import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementDetails';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_DiagonalDragBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DiagonalDragBehavior';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalScrollableState';
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
export interface TwoDimensionalScrollable extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable.dart::TwoDimensionalScrollable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TwoDimensionalScrollable: unique symbol;
    readonly [_flaxDartTypeValue]: TwoDimensionalScrollable;
    readonly diagonalDragBehavior: upstream6.DiagonalDragBehavior;
    readonly horizontalDetails: upstream2.ScrollableDetails;
    readonly verticalDetails: upstream2.ScrollableDetails;
    readonly viewportBuilder: ((context: upstream3.BuildContext, verticalPosition: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, horizontalPosition: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) => Widget);
    readonly incrementCalculator: ((details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [];
    }>) => number) | null;
    readonly restorationId: string | null;
    readonly excludeFromSemantics: boolean;
    readonly hitTestBehavior: upstream8.HitTestBehavior;
    readonly dragStartBehavior: upstream7.DragStartBehavior;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<TwoDimensionalScrollable>;
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
export declare function _TwoDimensionalScrollableFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    horizontalDetails: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>;
    verticalDetails: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
    }>;
    viewportBuilder: ((context: upstream3.BuildContext, verticalPosition: upstream4.ViewportOffset, horizontalPosition: upstream4.ViewportOffset) => Widget);
    incrementCalculator?: ((details: upstream5.ScrollIncrementDetails) => number) | null | undefined;
    restorationId?: string | null | undefined;
    excludeFromSemantics?: boolean | undefined;
    diagonalDragBehavior?: upstream6.DiagonalDragBehavior | undefined;
    dragStartBehavior?: upstream7.DragStartBehavior | undefined;
    hitTestBehavior?: upstream8.HitTestBehavior | undefined;
}): TwoDimensionalScrollable;
export declare namespace _TwoDimensionalScrollableFactory {
    function maybeOf(context: upstream3.BuildContext): upstream9.TwoDimensionalScrollableState | null;
}
export declare namespace _TwoDimensionalScrollableFactory {
    function of(context: upstream3.BuildContext): upstream9.TwoDimensionalScrollableState;
}
export declare const TwoDimensionalScrollable: typeof _TwoDimensionalScrollableFactory & _FlaxInstanceType<TwoDimensionalScrollable> & _FlaxDartType<TwoDimensionalScrollable, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalScrollable", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "diagonalDragBehavior" | "horizontalDetails" | "verticalDetails" | "viewportBuilder" | "incrementCalculator" | "restorationId" | "excludeFromSemantics" | "hitTestBehavior" | "dragStartBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scrollable.dart::TwoDimensionalScrollable" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
