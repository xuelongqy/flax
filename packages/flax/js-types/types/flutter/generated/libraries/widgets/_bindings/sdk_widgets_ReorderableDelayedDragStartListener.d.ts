import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableDragStartListener';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableDragStartListener';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ReorderableDelayedDragStartListener extends _FlaxDartWidget, Omit<upstream0.ReorderableDragStartListener, _flaxOwnMembers0>, Omit<upstream1.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.ReorderableDragStartListener>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ReorderableDragStartListener | keyof upstream1.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDelayedDragStartListener": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDragStartListener": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ReorderableDelayedDragStartListener: unique symbol;
    readonly [_flaxDartTypeValue]: ReorderableDelayedDragStartListener;
    readonly child: Widget;
    readonly index: number;
    readonly enabled: boolean;
    readonly key: upstream2.Key | null;
    createRecognizer(): upstream3.MultiDragGestureRecognizer;
    build(context: upstream4.BuildContext): Widget;
    createElement(): upstream5.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
export declare function _ReorderableDelayedDragStartListenerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    index: number;
    enabled?: boolean | undefined;
}): ReorderableDelayedDragStartListener;
export declare const ReorderableDelayedDragStartListener: typeof _ReorderableDelayedDragStartListenerFactory & _FlaxInstanceType<ReorderableDelayedDragStartListener> & _FlaxDartType<ReorderableDelayedDragStartListener, readonly ["class", "flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "index" | "enabled" | "key" | "createRecognizer" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDelayedDragStartListener" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDragStartListener" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
