import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/material-ui/_bindings/material_DrawerController';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DrawerControllerState extends Omit<upstream0.State<upstream1.DrawerController>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController>>, Omit<upstream3.SingleTickerProviderStateMixin<upstream1.DrawerController>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController> | keyof upstream2.Diagnosticable | keyof upstream3.SingleTickerProviderStateMixin<upstream1.DrawerController>>, Readonly<{
    "__flaxBound:package:material_ui/src/drawer.dart::DrawerControllerState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.DrawerController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin": readonly [upstream1.DrawerController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __DrawerControllerState: unique symbol;
    readonly [_flaxDartTypeValue]: DrawerControllerState;
    readonly widget: upstream1.DrawerController;
    readonly context: upstream5.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createTicker(onTick: ((elapsed: upstream11.Duration) => void)): upstream10.Ticker;
    dispose(): void;
    activate(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.DrawerController): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    build(context: upstream5.BuildContext): Widget;
    didChangeDependencies(): void;
    open(): void;
    close(): void;
}
export declare function _DrawerControllerStateFactory(): DrawerControllerState;
export declare const DrawerControllerState: typeof _DrawerControllerStateFactory & _FlaxInstanceType<DrawerControllerState> & _FlaxDartType<DrawerControllerState, readonly ["class", "flax.material/material#type:DrawerControllerState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "dispose" | "activate" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "open" | "close" | "__flaxBound:package:material_ui/src/drawer.dart::DrawerControllerState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
export {};
