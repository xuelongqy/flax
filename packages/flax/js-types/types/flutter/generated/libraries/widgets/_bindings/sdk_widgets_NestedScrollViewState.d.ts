import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_NestedScrollView';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NestedScrollViewState extends Omit<upstream0.State<upstream1.NestedScrollView>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.NestedScrollView>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::NestedScrollViewState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.NestedScrollView];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __NestedScrollViewState: unique symbol;
    readonly [_flaxDartTypeValue]: NestedScrollViewState;
    readonly innerController: upstream3.ScrollController;
    readonly outerController: upstream3.ScrollController;
    readonly widget: upstream1.NestedScrollView;
    readonly context: upstream4.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    initState(): void;
    didChangeDependencies(): void;
    didUpdateWidget(oldWidget: upstream1.NestedScrollView): void;
    dispose(): void;
    build(context: upstream4.BuildContext): Widget;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
}
export declare function _NestedScrollViewStateFactory(): NestedScrollViewState;
export declare const NestedScrollViewState: typeof _NestedScrollViewStateFactory & _FlaxInstanceType<NestedScrollViewState> & _FlaxDartType<NestedScrollViewState, readonly ["class", "flax.core/sdk_widgets#type:NestedScrollViewState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "innerController" | "outerController" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didChangeDependencies" | "didUpdateWidget" | "dispose" | "build" | "reassemble" | "setState" | "deactivate" | "activate" | "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::NestedScrollViewState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
