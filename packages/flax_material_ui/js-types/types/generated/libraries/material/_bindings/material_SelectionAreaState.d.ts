import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/material-ui/_bindings/material_SelectionArea';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
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
export interface SelectionAreaState extends Omit<upstream0.State<upstream1.SelectionArea>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SelectionArea>>, Readonly<{
    "__flaxBound:package:material_ui/src/selection_area.dart::SelectionAreaState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.SelectionArea];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectionAreaState: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionAreaState;
    readonly selectableRegion: upstream3.SelectableRegionState;
    readonly widget: upstream1.SelectionArea;
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
    build(context: upstream4.BuildContext): Widget;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.SelectionArea): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    didChangeDependencies(): void;
}
export declare function _SelectionAreaStateFactory(): SelectionAreaState;
export declare const SelectionAreaState: typeof _SelectionAreaStateFactory & _FlaxInstanceType<SelectionAreaState> & _FlaxDartType<SelectionAreaState, readonly ["class", "flax.material/material#type:SelectionAreaState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "selectableRegion" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "build" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:material_ui/src/selection_area.dart::SelectionAreaState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
