import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Overlay';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
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
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverlayState extends Omit<upstream0.State<upstream1.Overlay>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay>>, Omit<upstream3.TickerProviderStateMixin<upstream1.Overlay>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Overlay>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Overlay];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.Overlay];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __OverlayState: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayState;
    readonly widget: upstream1.Overlay;
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
    activate(): void;
    dispose(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.Overlay): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    build(context: upstream5.BuildContext): Widget;
    didChangeDependencies(): void;
    insert(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, options?: {
        above?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        below?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    }): void;
    insertAll(entries: DartIterableInput<upstream12.OverlayEntry, Readonly<{
        "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>, options?: {
        above?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        below?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    }): void;
    rearrange(newEntries: DartIterableInput<upstream12.OverlayEntry, Readonly<{
        "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>, options?: {
        above?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        below?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    }): void;
    debugIsVisible(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare function _OverlayStateFactory(): OverlayState;
export declare const OverlayState: typeof _OverlayStateFactory & _FlaxInstanceType<OverlayState> & _FlaxDartType<OverlayState, readonly ["class", "flax.core/sdk_widgets#type:OverlayState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "insert" | "insertAll" | "rearrange" | "debugIsVisible" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
export {};
