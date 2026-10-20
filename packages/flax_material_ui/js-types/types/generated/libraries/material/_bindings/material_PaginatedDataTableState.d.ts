import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/material-ui/_bindings/material_PaginatedDataTable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PaginatedDataTableState extends Omit<upstream0.State<upstream1.PaginatedDataTable>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.PaginatedDataTable>>, Readonly<{
    "__flaxBound:package:material_ui/src/paginated_data_table.dart::PaginatedDataTableState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.PaginatedDataTable];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PaginatedDataTableState: unique symbol;
    readonly [_flaxDartTypeValue]: PaginatedDataTableState;
    readonly widget: upstream1.PaginatedDataTable;
    readonly context: upstream3.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.PaginatedDataTable): void;
    reassemble(): void;
    dispose(): void;
    pageTo(rowIndex: number): void;
    build(context: upstream3.BuildContext): Widget;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    didChangeDependencies(): void;
}
export declare function _PaginatedDataTableStateFactory(): PaginatedDataTableState;
export declare const PaginatedDataTableState: typeof _PaginatedDataTableStateFactory & _FlaxInstanceType<PaginatedDataTableState> & _FlaxDartType<PaginatedDataTableState, readonly ["class", "flax.material/material#type:PaginatedDataTableState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didUpdateWidget" | "reassemble" | "dispose" | "pageTo" | "build" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:material_ui/src/paginated_data_table.dart::PaginatedDataTableState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
